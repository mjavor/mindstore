import { NestFactory } from '@nestjs/core';
import { AppModule } from './AppModule';
import { ValidationPipe } from '@nestjs/common';
import { config } from './config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(config.port);
}
bootstrap();
