import { IsBoolean, IsNotEmpty, Length } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateOptionDto {

  @ApiProperty({ description: 'The text of the option', example: 'Paris' })
  @IsNotEmpty()
  @Length(2, 255)
  text: string

  @ApiProperty({ description: 'The ID of the question to which this option belongs', example: 1 })
  @IsNotEmpty()
  questionId: number

  @ApiProperty({ description: 'Indicates whether the option is the correct answer', example: true })
  @IsNotEmpty()
  isCorrect: boolean

}