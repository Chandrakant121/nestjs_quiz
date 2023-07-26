import { Injectable } from '@nestjs/common';
import { Option } from '../entity/option.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOptionDto } from '../dto/create-option.dto';
import { Question } from '../entity/question.entity';

@Injectable()
export class OptionService {
  constructor(@InjectRepository(Option) private readonly questionRepository: Repository<Option>) { }

  async createOption(option: CreateOptionDto, question: Question) {
    const newOption = await this.questionRepository.save({
      text: option.text,
      isCorrect: option.isCorrect
    })
    question.options = [...question.options, newOption]
    await question.save()
    return newOption
  }
}
