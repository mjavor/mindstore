
import {Type} from "class-transformer";
import {IsString, ValidateNested} from "class-validator";

export class DatabaseConfig {
  @IsString()
  dbUri!: string
}

class Config {
  @ValidateNested()
  @Type(() => DatabaseConfig)
  public readonly database!: DatabaseConfig;
}

const provideConfig = (): Config =>