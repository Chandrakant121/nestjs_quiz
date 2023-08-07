import { IsNotEmpty, Length } from "class-validator"
import { ApiProperty } from '@nestjs/swagger';
// npm i class-validator => for Dto validations
// npm i class-transformer => for using pipes with validations
// DTO's describe the shape of the request.
export class CreateQuizDto {
  @ApiProperty({ description: "Quiz title", example: "General Knowledge Quiz" })
  @IsNotEmpty({ message: "Quiz should have a title" })
  @Length(3, 255)
  title: string

  @ApiProperty({ description: "Quiz description", example: "Test your knowledge on various topics." })
  @IsNotEmpty()
  @Length(3)
  description: string
}