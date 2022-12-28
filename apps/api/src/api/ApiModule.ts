import { Module } from '@nestjs/common';
import { ContentModule } from '../content/ContentModule';

@Module({
  imports: [ContentModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
