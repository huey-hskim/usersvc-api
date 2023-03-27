import { Module } from '@nestjs/common';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_tbl')
export class User {
  @PrimaryGeneratedColumn()
  no: number;

  @Column({ length: 200 })
  id: string;

  @Column('int')
  status: number;
}
