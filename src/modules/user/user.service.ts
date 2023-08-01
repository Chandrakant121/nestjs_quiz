import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';
import { UserRegistrationDto } from '../dto/user-register.dto';
import * as bcrypt from "bcrypt"

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }

  async userRegistration(userRegister: UserRegistrationDto) {

    // const salt = await bcrypt.genSalt()
    // const password = await bcrypt.hash(userRegister.password, salt)
    // user.password=password 

    const user = new User()
    user.name = userRegister.name;
    user.email = userRegister.email;
    user.password = userRegister.password
    return await user.save()
  }
}
