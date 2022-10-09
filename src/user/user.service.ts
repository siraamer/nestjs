import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  get(): Promise<User[]> {
    return this.userRepository.find();
  }
  create(createUser: CreateUserDto): Promise<User> {
    return this.userRepository.save(createUser);
  }
  update(updateuser: UpdateUserDto, id: number) {
    return this.userRepository.update(id, updateuser);
  }
  getUser(id: number): Promise<User | null> {
    return this.userRepository.findOne({ where: { id } });
  }
  getByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email } });
  }
  delete(id: number) {
    return this.userRepository.delete(id);
  }
}
