import {Module} from "@nestjs/common";
import {ApiModule} from "./api";
import {KnexModule} from "nestjs-knex";
import {ConfigModule} from "./config/ConfigModule";
import {ConfigFacade} from "./config/ConfigFacade";

@Module({
  imports: [
    ApiModule,
    ConfigModule,
    KnexModule.forRootAsync({
      inject: [ConfigFacade],
      imports: [ConfigModule],
      useFactory: ({ config }: ConfigFacade) => ({
        config: {
          client: "sqlite3",
          useNullAsDefault: true,
          connection: config.database.dbUri,
        },
      }),
    })
  ]
})
export class AppModule {}