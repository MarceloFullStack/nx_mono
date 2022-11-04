import {Module} from '@nestjs/common';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import {join} from "path";
import {TypeOrmModule} from "@nestjs/typeorm";
import {StudentsModule} from "./modules/students/students.module";
import {BookEntity} from "./modules/students/dto/book.entity";

@Module({
  imports: [
    StudentsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), './schema.gql'),
      sortSchema: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5431,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      synchronize: true,
      logging: true,
      entities: [BookEntity],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
