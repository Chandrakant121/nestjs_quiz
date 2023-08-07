import { IsNotEmpty, Length, Matches } from "class-validator";
import { PASSWORD_REGEX, PASSWORD_REGEX_ERR } from "src/app.utils";
import { ApiProperty } from "@nestjs/swagger/dist";

export class UserLoginDto {
  @ApiProperty({
    description: "The name of the User",
    example: "Chandrakant Joshi"
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: "The password of the User",
    example: "Test@1234"
  })
  @IsNotEmpty()
  @Length(8, 24)
  @Matches(PASSWORD_REGEX, { message: PASSWORD_REGEX_ERR })
  password: string;
}