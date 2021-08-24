export class BaseTodoDto {
    title: string;
    description?: string;
}

export class CreateTodoDto extends BaseTodoDto {

}

export class UpdateTdoDto extends BaseTodoDto {
    completedAt: Date
}