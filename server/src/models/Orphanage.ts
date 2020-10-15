import {
  Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm'
import Photo from './Photo'

@Entity('orphanages')
class Orphanage {

  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string

  @Column()
  latitude: number

  @Column()
  longitude: number

  @Column()
  about: string

  @Column()
  instructions: string

  @Column({ name: 'opening_hours' })
  openingHours: string

  @Column({ name: 'open_on_weekends' })
  openOnWeekends: boolean

  @JoinColumn({ name: 'orphanage_id' })
  @OneToMany(() => Photo, (photo) => photo.orphanage, {
    cascade: ['insert', 'update'],
  })
  photos: Photo[]
}

export default Orphanage
