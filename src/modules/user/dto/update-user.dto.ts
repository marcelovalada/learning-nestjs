// import { PartialType } from '@nestjs/mapped-types';
// import { CreateUserDto } from './create-user.dto';

// export class UpdateUserDto extends PartialType(CreateUserDto) {}

import { UserUpdatableInterface } from '../interfaces/user-updatable.interface';

export class UpdateUserDto implements UserUpdatableInterface {
  firstName?: string;
  lastName?: string;
  active?: boolean;
}
