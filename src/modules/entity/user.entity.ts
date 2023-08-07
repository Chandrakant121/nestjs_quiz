import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import * as bcrypt from "bcrypt"
import { ApiProperty } from "@nestjs/swagger/dist";
@Entity({ name: 'users' })
export class User extends BaseEntity {
  @ApiProperty({ description: "Primary key as user ID", example: 1 })
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty({ description: "User name", example: "Chandrakant Joshi" })
  @Column()
  name: string

  @ApiProperty({ description: "User email", example: "test@gmail.com" })
  @Column({ unique: true })
  email: string

  @ApiProperty({ description: "Hashed user password", example: "Test@1234" })
  @Column()
  password: string

  @ApiProperty({ description: "When user was created" })
  @CreateDateColumn()
  createdAt: Date

  @ApiProperty({ description: "When user was updated" })
  @UpdateDateColumn()
  updatedAt: Date

  @BeforeInsert()
  async setPassword() {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
  }
}