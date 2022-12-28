import {InjectDb} from "../database";
import {Db} from "mongodb";

export class AbstractRepository {
  constructor(@InjectDb() protected readonly database: Db) {}
}
