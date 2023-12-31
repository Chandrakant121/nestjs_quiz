import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { OptionService } from './option.service';
import { QuestionService } from '../question/question.service';
import { CreateOptionDto } from '../dto/create-option.dto';

@Controller('question/option')
export class OptionController {
  constructor(private readonly optionService: OptionService,
    private readonly questionService: QuestionService) { }

  @Post('')
  @UsePipes(ValidationPipe)
  async saveOptionToQuestion(@Body() createOption: CreateOptionDto) {
    const question = await this.questionService.findQuestionById(createOption.questionId)
    const option = await this.optionService.createOption(createOption, question)
    return { createOption, question, option }
  }
}
