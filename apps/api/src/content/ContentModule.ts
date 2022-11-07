import { Module } from '@nestjs/common';
import {BirthdayRepository} from "./repository/BirthdayRepository";
import {ContentFacade} from "./ContentFacade";

@Module({
  providers: [
    BirthdayRepository,
  ],
  exports: [ContentFacade],
})
export class ContentModule {}
