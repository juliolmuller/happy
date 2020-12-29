import { createConnection, getRepository } from 'typeorm'
import Orphanage from '../../models/Orphanage'

const generatePhotos = () => [
  { path: 'orphanage-image-1.jpg' },
  { path: 'orphanage-image-2.jpg' },
  { path: 'orphanage-image-3.jpg' },
  { path: 'orphanage-image-4.jpg' },
]

const seed = async () => {
  const orphanageRepository = getRepository(Orphanage)
  const orphanages = orphanageRepository.create([
    {
      name: 'Lar das Gurias',
      latitude: -25.4720065555,
      longitude: -49.2877390981,
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id neque id nulla molestie vestibulum. Nulla facilisi. Aliquam in purus facilisis, consectetur erat quis, aliquam eros. Duis scelerisque vel lectus in malesuada. Mauris tristique ornare est, nec fermentum lacus rhoncus ut.',
      instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna condimentum mattis pellentesque id. Tempor orci dapibus ultrices in iaculis.\r\n  Massa enim nec dui nunc. Blandit cursus risus at ultrices mi tempus. Scelerisque felis imperdiet proin fermentum leo. Ullamcorper dignissim cras tincidunt lobortis.\r\n  Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Eu consequat ac felis donec et odio pellentesque. Tortor condimentum lacinia quis vel eros donec ac.',
      openingHours: 'das 14 às 18h30',
      openOnWeekends: false,
      photos: generatePhotos(),
    },
    {
      name: 'Lar dos Piás',
      latitude: -25.4092252642,
      longitude: -49.2392018437,
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id neque id nulla molestie vestibulum. Nulla facilisi. Aliquam in purus facilisis, consectetur erat quis, aliquam eros. Duis scelerisque vel lectus in malesuada. Mauris tristique ornare est, nec fermentum lacus rhoncus ut.',
      instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna condimentum mattis pellentesque id. Tempor orci dapibus ultrices in iaculis.\r\n  Massa enim nec dui nunc. Blandit cursus risus at ultrices mi tempus. Scelerisque felis imperdiet proin fermentum leo. Ullamcorper dignissim cras tincidunt lobortis.\r\n  Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Eu consequat ac felis donec et odio pellentesque. Tortor condimentum lacinia quis vel eros donec ac.',
      openingHours: 'das 9 às 17h',
      openOnWeekends: true,
      photos: generatePhotos(),
    },
  ])

  const records = await orphanageRepository.save(orphanages)

  console.log(`    ${records.length} records inserted into table "orphanages".`)
}

createConnection().then(seed)
