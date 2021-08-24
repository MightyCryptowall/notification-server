import { Todo, TodoSchema } from './schemas/todo.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';

@Module({
  providers: [TodoService],
  controllers: [TodoController],
  imports: [
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema}])
  ]
})
export class TodoModule {}
