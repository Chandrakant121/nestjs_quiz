import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import { Question } from './question.entity';

@Entity('quizes')
export class Quiz extends BaseEntity {

  @PrimaryGeneratedColumn({
    comment: "The quiz unique identifier",
  })
  id: number

  @Column({ type: 'varchar', })
  title: string

  @Column({ type: 'text', })
  description: string

  @Column({ type: 'boolean', default: 1, })
  isActive: boolean

  @OneToMany(() => Question, (question) => question.quiz)
  questions: Question[];

}
