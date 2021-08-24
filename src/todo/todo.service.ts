import { CreateTodoDto, UpdateTdoDto } from './dto/base-todo.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from './schemas/todo.schema';

@Injectable()
export class TodoService {
    constructor(@InjectModel(Todo.name) private readonly model: Model<TodoDocument>) {}

    async findAll(): Promise<Todo[]> {
        return await this.model.find().exec();
    }

    async findOne(id: string): Promise<Todo> {
        return await this.model.findById(id).exec();
    }

    async create(CreateTodoDto: CreateTodoDto): Promise<Todo> {
        return await new this.model({
            ...CreateTodoDto,
            createdAt: new Date(),
        }).save();
    }

    async update(id: string, updateTodoDto: UpdateTdoDto): Promise<Todo> {
        return await this.model.findByIdAndUpdate(id, updateTodoDto).exec();
    }

    async delete(id: string): Promise<Todo> {
        return await this.model.findByIdAndDelete(id).exec();
    }
}
