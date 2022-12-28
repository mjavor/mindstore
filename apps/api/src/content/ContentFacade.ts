import { Injectable } from '@nestjs/common';
import {BirthdayRepository} from "./repository/BirthdayRepository";

export interface CreateBirthdayCommand {
  name: string;
  date: Date;
}

@Injectable()
export class ContentFacade {
  constructor(
    private readonly birthdayRepository: BirthdayRepository,
  ) {}

  get birthday() {
    return {
      create: this.birthdayRepository.create.bind(this.birthdayRepository),
      // findAll: this.birthdayRepository.findAll.bind(this.birthdayRepository),
    };
  }
}
