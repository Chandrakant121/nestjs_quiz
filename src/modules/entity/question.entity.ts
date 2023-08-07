import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { Quiz } from "./quiz.entity"
import { Option } from "./option.entity"
import { ApiProperty } from '@nestjs/swagger';
@Entity('questions')
export class Question extends BaseEntity {

  @ApiProperty({ description: 'The question unique identifier', example: 1 })
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty({ description: 'The question text', example: 'What is the capital of France?' })
  @Column({ type: 'varchar' })
  question: string

  @ApiProperty({ description: 'The quiz to which this question belongs' })
  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  quiz: Quiz
  // quiz: Quiz[]

  @ApiProperty({ description: 'Options available for this question' })
  @OneToMany(() => Option, (option) => option.question)
  options: Option[]

}