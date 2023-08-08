import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';
import { UserRegistrationDto } from '../dto/user-register.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }

  async userRegistration(userRegister: UserRegistrationDto) {

    // const salt = await bcrypt.genSalt()
    // const password = await bcrypt.hash(userRegister.password, salt)
    // userRegister.password = password
    // const { confirmPassword, ...rest } = userRegister;
    // return await this.userRepository.save(rest)

    const user = new User()
    user.name = userRegister.name;
    user.email = userRegister.email;
    user.password = userRegister.password
    user.role=userRegister.role
    return await user.save()

  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const user = await this.userRepository.findOne({ where: { email: email } })
    return user
  }


  async getUserById(id: number): Promise<User | undefined> {
    const user = await this.userRepository.findOne({ where: { id: id } })
    return user
  }
}


