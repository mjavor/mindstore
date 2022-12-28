import { plainToClass, Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsPort,
  IsPositive,
  IsString,
  ValidateNested,
  validateSync,
} from 'class-validator';
import { config as dotenvConfig } from 'dotenv';
import * as path from 'path';

export class DatabaseConfig {
  @IsString()
  dbUri!: string;

  @IsString()
  @IsNotEmpty()
  dbName!: string;
}

class Config {
  @ValidateNested()
  @Type(() => DatabaseConfig)
  database!: DatabaseConfig;

  @IsNumber()
  @IsPositive()
  port: number;
}

const provideConfig = (): Config => {
  dotenvConfig({ path: path.resolve(__dirname, '../../', '.env') });

  const plainConfig: Config = {
    database: {
      dbUri: process.env.DB_URI,
      dbName: process.env.DB_NAME,
    },
    port: parseInt(process.env.PORT ?? '3000', 10),
  };

  const configObject = plainToClass(Config, plainConfig);
  const result = validateSync(configObject);

  if (result.length) {
    console.error(result);
    throw new Error('Config validation error.');
  }

  return configObject;
};

export const config = provideConfig();
