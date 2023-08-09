import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Length, Matches } from "class-validator";
import { PASSWORD_REGEX, PASSWORD_REGEX_ERR } from "src/app.utils";
import { ApiProperty } from "@nestjs/swagger/dist";
import { UserRoles } from "../auth/enum/user.enum";

export class UserRegistrationDto {
  @ApiProperty({
    description: "The name of the User",
    example: "Chandrakant Joshi"
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: "The email address of the User",
    example: "test@gmail.com"
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: "The password of the User",
    example: "Test@1234"
  })
  @IsNotEmpty()
  @Length(8, 24)
  @Matches(PASSWORD_REGEX, { message: PASSWORD_REGEX_ERR })
  password: string;

  @ApiProperty({
    description: "The confirm password of the User",
    example: "Test@1234"
  })
  @IsNotEmpty()
  @Length(8, 24)
  @Matches(PASSWORD_REGEX, { message: PASSWORD_REGEX_ERR })
  confirmPassword: string;

  @IsOptional()
  @IsEnum(UserRoles)
  role: UserRoles;
}