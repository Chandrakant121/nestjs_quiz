import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { UserRoles } from './user.enum';
import { UserService } from 'src/modules/user/user.service';

@Injectable()
export class AdminRoleGuard implements CanActivate {
  constructor(private userService: UserService) { }

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    console.log(request.user)
    if (request?.user) {
      const { id } = request.user;
      const user = await this.userService.getUserById(id);
      return user.role === UserRoles.ADMIN;
    }

    return false;
  }
}