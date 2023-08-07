import { IsNotEmpty, Length } from "class-validator"
import { ApiProperty } from '@nestjs/swagger';
// npm i class-validator => for Dto validations
// npm i class-transformer => for using pipes with validations
export class CreateQuestionDto {
  @ApiProperty({ description: 'The question text', example: 'What is the capital of France?' })
  @IsNotEmpty({ message: 'Question should not be empty' })
  @IsNotEmpty()
  @Length(3, 255)
  question: string

  @ApiProperty({ description: 'The ID of the quiz to which this question belongs', example: 1 })
  @IsNotEmpty({ message: 'Quiz ID should not be empty' })
  @IsNotEmpty()
  quizId: number

}