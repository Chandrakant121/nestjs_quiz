import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OptionController } from "./option.controller";
import { QuestionService } from "../question/question.service";
import { OptionService } from "./option.service";
import { Option } from "../entity/option.entity";
import { Question } from "../entity/question.entity";


@Module({
    imports: [TypeOrmModule.forFeature([Option,Question])],
    controllers: [OptionController,],
    providers: [OptionService, QuestionService],
})
export class OptionModule { }
