import { IsNotEmpty, Length } from "class-validator"

// npm i class-validator => for Dto valodations
// npm i class-transformer => for using pipes with validations
// DTO's describe the shape of the request.
export class CreateQuizDto {
  @IsNotEmpty({ message: "Quiz should have a title" })
  @Length(3, 255)
  title: string

  @IsNotEmpty()
  @Length(3)
  description: string
}