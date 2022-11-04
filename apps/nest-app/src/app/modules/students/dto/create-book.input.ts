import {Field, ID, InputType} from '@nestjs/graphql';
import {IDField} from "@nestjs-query/query-graphql";

@InputType()
export class CreateBookInput {
  @IDField(() => ID, {description: 'Example field (placeholder)'})
  id: number;

  @Field(() => String, {description: 'Example field (placeholder)'})
  name: string;

}
