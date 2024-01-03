import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'people' })
export class Person {
  @PrimaryGeneratedColumn() id!: string;

  @Column({ default: false }) isAdmin!: boolean;

  @Column({ default: false }) isActive!: boolean;

  @Column({ unique: true }) username!: string;

  @Column() password!: string;

  @Column({ unique: true }) email!: string;

  @Column({ name: 'created_at', default: new Date(Date.now()) })
  createdAt?: Date;
}
