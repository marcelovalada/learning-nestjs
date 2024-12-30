import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  findAll(): string {
    return 'Lista de users provider';
  }
}
