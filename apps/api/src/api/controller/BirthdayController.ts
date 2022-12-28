import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContentFacade } from '../../content/ContentFacade';
import { BirthdayResponseItem, CreateBirthdayRequest } from '../defs/Content';

@Controller('birthday')
export class BirthdayController {
  constructor(private readonly contentFacade: ContentFacade) {}

  @Post()
  async create(@Body() payload: CreateBirthdayRequest): Promise<void> {
    //await this.contentFacade.birthday.create({});
  }

  @Get()
  async getAll(): Promise<void> {
    //const items = await this.contentFacade.birthday.create;

    //return items.map(BirthdayResponseItem.hydrate);
  }
}
