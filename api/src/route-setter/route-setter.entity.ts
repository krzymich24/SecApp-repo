import {
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Person } from '../person/person.entity';
import { Gym } from '../gym/entities/gym.entity';

@Entity({ name: 'route-setter' })
export class RouteSetter {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne((type) => Person)
  @JoinColumn({ name: 'person' })
  person: Person;

  @ManyToOne((type) => Gym)
  @JoinColumn({ name: 'gym' })
  gym: Gym;
}
