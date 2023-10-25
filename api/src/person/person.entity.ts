import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "people" })
export class Person {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "fullname" })
  fullName!: string;

  @Column()
  gender!: string;

  @Column()
  phone!: string;

  @Column()
  age!: number;

  @Column({ name: "created_at", default: new Date(Date.now()) })
  createdAt?: Date;
}