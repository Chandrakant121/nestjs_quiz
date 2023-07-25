import { Injectable } from '@nestjs/common';
import { Option } from '../entity/option.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OptionService {
  constructor(@InjectRepository(Option) private readonly questionRepository: Repository<Option>) { }
}
