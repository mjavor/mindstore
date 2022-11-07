import {InjectKnex} from "nestjs-knex";
import {Knex} from "knex";

export class AbstractRepository {
  constructor(@InjectKnex() protected readonly knex: Knex) {}
}
