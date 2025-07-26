import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
  userId: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ name: 'id_number' })
  idNumber: number;

  @Column()
  name: string;

  @Column()
  last: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column()
  salary: number;

  @Column({ name: 'role_id' })
  roleId: number;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;

}
