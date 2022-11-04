import {Field, ID, ObjectType} from '@nestjs/graphql';
import {PrimaryGeneratedColumn} from "typeorm";

@ObjectType()
export class Student {
  @Field(() => ID, {description: 'Example field (placeholder)'})
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, {description: 'Example field (placeholder)'})
  name: string;

}

