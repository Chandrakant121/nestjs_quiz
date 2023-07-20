import { IsNotEmpty, Length } from "class-validator"

// npm i class-validator => for Dto valodations
// npm i class-transformer => for using pipes with validations
export class CreateQuestionDto {

  @IsNotEmpty()
  @Length(3, 255)
  question: string

  @IsNotEmpty()
  quizId: number

}