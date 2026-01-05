import HttpStatus from 'http-status-codes';

import { prismaClient as database } from '../../../../database/connection';
import { getStorageURL } from '../../../../utils';
import { type Controller } from '../../../http';

export const listOrphanagesController: Controller = async (_request, response) => {
  const orphanages = await database.orphanage.findMany({
    include: {
      photos: true,
    },
  });

  const data = orphanages.map((orphanage) => ({
    id: orphanage.id,
    name: orphanage.name,
    about: orphanage.about,
    latitude: orphanage.latitude,
    longitude: orphanage.longitude,
    instructions: orphanage.instructions,
    opening_hours: orphanage.openingHours,
    open_on_weekends: orphanage.openOnWeekends,
    photos: orphanage.photos.map((photo) => getStorageURL(photo.path)),
  }));

  response.status(HttpStatus.OK).json(data);
};
