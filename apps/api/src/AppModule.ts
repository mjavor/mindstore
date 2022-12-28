import { Module } from '@nestjs/common';
import { ApiModule } from './api';
import { KnexModule } from 'nestjs-knex';
import { config } from './config/config';
import {DatabaseModule} from "./common/database";

@Module({
  imports: [
    ApiModule,
    DatabaseModule,
  ],
})
export class AppModule {}
