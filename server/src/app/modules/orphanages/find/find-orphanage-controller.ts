import HttpStatus from 'http-status-codes';

import { prismaClient as database } from '../../../../database/connection';
import { getStorageURL } from '../../../../utils';
import { type Controller } from '../../../http';

export const findOrphanageController: Controller = async (request, response) => {
  const orphanage = await database.orphanage.findUnique({
    where: {
      id: request.params.orphanageId,
    },
    include: {
      photos: true,
    },
  });

  if (!orphanage) {
    response.status(HttpStatus.NOT_FOUND).send({ message: 'Orphanage not found' });
    return;
  }

  const data = {
    id: orphanage.id,
    name: orphanage.name,
    about: orphanage.about,
    latitude: orphanage.latitude,
    longitude: orphanage.longitude,
    instructions: orphanage.instructions,
    opening_hours: orphanage.openingHours,
    open_on_weekends: orphanage.openOnWeekends,
    photos: orphanage.photos.map((photo) => getStorageURL(photo.path)),
  };

  response.status(HttpStatus.OK).send(data);
};
