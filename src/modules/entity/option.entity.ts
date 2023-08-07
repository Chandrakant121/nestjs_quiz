import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./question.entity";
import { ApiProperty } from '@nestjs/swagger';

@Entity('options')
export class Option extends BaseEntity {

  @ApiProperty({ description: 'The option unique identifier', example: 1 })
  @PrimaryGeneratedColumn()
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty({ description: 'The text of the option', example: 'Paris' })
  @Column({ type: 'varchar', })
  text: string

  @ApiProperty({ description: 'Indicates whether the option is the correct answer', example: true })
  @Column({ type: 'boolean' })
  isCorrect: boolean

  @ApiProperty({ description: 'The question to which this option belongs' })
  @ManyToOne(() => Question, (question) => question.options)
  question: Question
}