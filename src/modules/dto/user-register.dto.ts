import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Length, Matches } from "class-validator";
import { PASSWORD_REGEX, PASSWORD_REGEX_ERR } from "src/app.utils";
import { UserRoles } from "../auth/guard/user.enum";

export class UserRegistrationDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(8, 24)
  @Matches(PASSWORD_REGEX, { message: PASSWORD_REGEX_ERR })
  password: string;

  @IsNotEmpty()
  @Length(8, 24)
  @Matches(PASSWORD_REGEX, { message: PASSWORD_REGEX_ERR })
  confirmPassword: string;

  @IsOptional()
  @IsEnum(UserRoles)
  role: UserRoles;
}