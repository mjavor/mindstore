import {AbstractRepository} from "../../common/repository/AbstractRepository";
import {Injectable} from "@nestjs/common";
import {CreateBirthdayCommand} from "../ContentFacade";
import * as nanoid from "nanoid";

const table = 'birthday';

interface BirthdayTable {
  id: string;
  name: string;
  date: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date|null;
}

@Injectable()
export class BirthdayRepository extends AbstractRepository {

  async create({ name, date }: CreateBirthdayCommand): Promise<void> {
    await this.knex.from<BirthdayTable>(table).insert({
      id: nanoid.nanoid(),
      name,
      date,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    })
  }
}
