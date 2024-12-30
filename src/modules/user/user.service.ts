import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { randomUUID } from 'crypto';

@Injectable()
export class UserService {
  public users: User[];
  constructor() {
    this.users = [];
  }

  private convertToUser(createUser: CreateUserDto): User {
    const user = new User();

    user.username = createUser.username;
    user.password = createUser.password;
    user.firstName = createUser.firstName;
    user.lastName = createUser.lastName;
    user.email = createUser.email;
    user.active = true;

    return user;
  }

  create(createUserDto: CreateUserDto) {
    const user = this.convertToUser(createUserDto);
    user.id = randomUUID();
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException();
    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id);
    if (updateUserDto.firstName) user.firstName = updateUserDto.firstName;
    if (updateUserDto.lastName) user.lastName = updateUserDto.lastName;
    return user;
  }

  remove(id: string) {
    const index = this.users.findIndex((prop) => prop.id === id);
    console.log(`index: ${index}`);
    if (index < 0) throw new NotFoundException();
    const user = this.users[index];
    console.log(`user: ${JSON.stringify(user)}`);
    this.users.splice(index, 1);
    return user;
  }
}
