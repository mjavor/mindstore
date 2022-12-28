import {AbstractRepository} from "../../common/repository/AbstractRepository";
import {Injectable} from "@nestjs/common";
import {CreateBirthdayCommand} from "../ContentFacade";
import * as nanoid from "nanoid";

const COLLECTION_NAME = 'birthday';

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
    await this.database.collection(COLLECTION_NAME).insertOne({
      name,
      date,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    })
  }
}
