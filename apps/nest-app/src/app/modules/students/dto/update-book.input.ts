import {Field, ID, InputType, PartialType} from '@nestjs/graphql';
import {CreateBookInput} from "./create-book.input";

@InputType()
export class UpdateBookInput extends PartialType(CreateBookInput) {
  @Field(() => ID, {description: 'Example field (placeholder)'})
  id?: number;
}
