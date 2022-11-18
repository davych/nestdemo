import { Injectable } from '@nestjs/common';
import { CreateNameDto } from './dto/create-name.dto';
import { UpdateNameDto } from './dto/update-name.dto';
import * as Mock from 'mockjs';

const Random = Mock.Random;

@Injectable()
export class NameService {
  create(createNameDto: CreateNameDto) {
    return 'This action adds a new name';
  }

  findAll() {
    const names = [];
    for (let i = 0; i < 30; i++) {
      names.push(Random.cname());
    }
    return names;
  }

  findOne(id: number) {
    return `This action returns a #${id} name`;
  }

  update(id: number, updateNameDto: UpdateNameDto) {
    return `This action updates a #${id} name`;
  }

  remove(id: number) {
    return `This action removes a #${id} name`;
  }
}
