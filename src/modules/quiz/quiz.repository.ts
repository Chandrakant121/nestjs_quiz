import { Repository, EntityRepository } from "typeorm"
import { Quiz } from "../entity/quiz.entity";

@EntityRepository(Quiz)
export class QuizRepository extends Repository<Quiz> {

  // async createNewQuiz(quiz) {
  //   const [title, description] = quiz
  //   const quizes = this.create({ title, description })
  //   return await this.save(quizes)
  // }
}