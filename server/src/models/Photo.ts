import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,
} from 'typeorm'
import Orphanage from './Orphanage'

@Entity('photos')
class Photo {

  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  path: string

  @JoinColumn({ name: 'orphanage_id' })
  @ManyToOne(() => Orphanage, (orphanage) => orphanage.photos)
  orphanage: Orphanage
}

export default Photo
