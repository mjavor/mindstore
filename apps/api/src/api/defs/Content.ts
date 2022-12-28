import { IsDateString, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBirthdayRequest {
  @IsString()
  @MinLength(3)
  name: string;

  @IsDateString()
  @IsNotEmpty()
  date: Date;
}

export class BirthdayResponseItem {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  date: string;

  private constructor() {}

  public static hydrate(): BirthdayResponseItem {
    return new BirthdayResponseItem();
  }
}
