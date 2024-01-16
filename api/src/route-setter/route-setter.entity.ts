import { Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'route-setter' })
export class RouteSetter {
  @PrimaryColumn({ nullable: false }) person!: string;

  @PrimaryColumn({ nullable: false }) gym!: string;
}
