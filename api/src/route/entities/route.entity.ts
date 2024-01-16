import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'route' })
export class Route {
  @PrimaryGeneratedColumn() id!: string;

  @Column({ nullable: false }) name: string;

  @Column({ nullable: false }) author: string;

  @Column({ nullable: false }) grade: string;

  @Column({ nullable: false }) gym: string;
}
