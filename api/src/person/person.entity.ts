import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'people' })
export class Person {
  @PrimaryGeneratedColumn() id!: string;

  @Column() username!: string;

  @Column() password!: string;

  @Column({ name: 'created_at', default: new Date(Date.now()) })
  createdAt?: Date;
}
