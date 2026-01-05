import HttpStatus from 'http-status-codes';
import * as z from 'zod';

import { prismaClient as database } from '../../../../database/connection';
import { sendToStorage } from '../../../../utils';
import { type Controller } from '../../../http';

const orphanageSchemaValidation = z.object({
  name: z.string().min(1),
  about: z.string().min(1).max(500),
  latitude: z.number(),
  longitude: z.number(),
  instructions: z.string().min(1),
  opening_hours: z.string().min(1),
  open_on_weekends: z.boolean(),
});

export const createOrphanageController: Controller = async (request, response) => {
  const data = orphanageSchemaValidation.parse(request.body);
  const photos = Array.isArray(request.files) ? request.files : [];

  if (!Array.isArray(photos) || photos.length === 0) {
    response
      .status(HttpStatus.BAD_REQUEST)
      .send({ message: 'Orphanage should have at least one photo' });
    return;
  }

  await database.$transaction(async (database) => {
    const createdOrphanage = await database.orphanage.create({
      data: {
        ...data,
        openingHours: data.opening_hours,
        openOnWeekends: data.open_on_weekends,
      },
    });

    for (const photo of photos) {
      const destination = `${createdOrphanage.id}/${photo.filename}`;

      await sendToStorage(photo.path, destination);
      await database.orphanagePhoto.create({
        data: {
          path: destination,
          orphanageId: createdOrphanage.id,
        },
      });
    }
  });

  response.status(HttpStatus.CREATED).send();
};
