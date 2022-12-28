import {Global, Inject, Module} from "@nestjs/common";
import {MongoClient} from "mongodb";
import {config} from "../../config/config";

export const DB_INJECT_SYMBOL = 'MONGO_INJECT_TOKEN'

export const InjectDb = () => Inject(DB_INJECT_SYMBOL);

@Global()
@Module({
  providers: [
    {
      provide: DB_INJECT_SYMBOL,
      useFactory: async () => {
        const client = await MongoClient.connect(config.database.dbUri);

        return client.db(config.database.dbName);
      },
    },
  ],
  exports: [],
})
export class DatabaseModule {}
