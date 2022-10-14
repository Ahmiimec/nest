import { Injectable } from '@nestjs/common';
import { Cat } from './cat.interfaces';

@Injectable()
export class CatsService {
  private readonly cats:Cat[] = [];
  create(createCatDto: Cat) {
    console.log("ShowHere",createCatDto)
    this.cats.push(createCatDto);
  }

  findAll(): Cat[] {
    console.log("ShowHere",this.cats)
    return this.cats;
  }
}
