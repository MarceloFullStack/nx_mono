import {Module} from '@nestjs/common';
import {NestjsQueryGraphQLModule} from "@nestjs-query/query-graphql";
import {NestjsQueryTypeOrmModule} from "@nestjs-query/query-typeorm";
import {BookEntity} from "./dto/book.entity";
import {BookDTO} from "./dto/book.dto";

@Module({
  imports:
    [NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([BookEntity])],
      resolvers: [
        {
          DTOClass: BookDTO,
          EntityClass: BookEntity,
          // CreateDTOClass: CreateBookInput,
          // UpdateDTOClass: UpdateBookInput,
        }
      ],
    })],
  providers: [],
})
export class StudentsModule {
}
