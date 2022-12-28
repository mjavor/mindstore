import { Module } from '@nestjs/common';
import { ContentFacade } from './ContentFacade';
import {BirthdayRepository} from "./repository/BirthdayRepository";

@Module({
  providers: [ContentFacade, BirthdayRepository],
  exports: [ContentFacade],
})
export class ContentModule {}
