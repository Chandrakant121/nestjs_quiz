import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import { Question } from './question.entity';
import { ApiProperty } from '@nestjs/swagger';
@Entity('quizes')
export class Quiz extends BaseEntity {

  @ApiProperty({ description: "The quiz unique identifier", example: 1 })
  @PrimaryGeneratedColumn({
    comment: "The quiz unique identifier",
  })
  id: number

  @ApiProperty({ description: "Quiz title", example: "General Knowledge Quiz" })
  @Column({ type: 'varchar', })
  title: string

  @ApiProperty({ description: "Quiz description", example: "Test your knowledge on various topics." })
  @Column({ type: 'text', })
  description: string

  @ApiProperty({ description: "Indicates whether the quiz is active or not", example: true })
  @Column({ type: 'boolean', default: 1, })
  isActive: boolean

  @OneToMany(() => Question, (question) => question.quiz)
  questions: Question[];

}
