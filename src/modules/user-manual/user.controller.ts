import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll(): string {
    return this.userService.findAll();
  }

  @Get('helloUser')
  helloUser(): string {
    return 'Hello User';
  }

  @Post()
  save(@Body() user: UserDto): UserDto {
    return user;
  }
}
