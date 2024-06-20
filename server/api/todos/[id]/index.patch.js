import { Todo } from "~/server/models/todo";
import { todoUpdate, todoOutput } from "~/schemas/todo";
import { readValidatedBody } from "h3";
import { response } from "@/utils/response";

// eslint-disable-next-line no-undef
export default defineEventHandler(async (event) => {
    // eslint-disable-next-line no-undef
    const todoId = getRouterParam(event, "id");

    const result = await readValidatedBody(event, (body) => todoUpdate.safeParse(JSON.parse(body)));

    if (result.success === false) {
        return response.error(result.error.issues);
    }

    try {
        const { title, completed, userId } = result.data;

        const findTodo = await Todo.findOne({ where: { id: todoId, UserId: userId } });
        if (findTodo === null) {
            return response.error(`No todo with id:${todoId} and UserId:${userId} found`);
        }

        findTodo.title = title;
        findTodo.completed = completed;

        const modifiedTodo = await findTodo.save();

        const todo = {
            id: modifiedTodo.id,
            title: modifiedTodo.title,
            completed: modifiedTodo.completed,
        };
        const outputResult = todoOutput.safeParse(todo);
        if (outputResult.success === false) {
            return response.error(outputResult.error.issues);
        } else {
            return response.success(outputResult.data);
        }
    } catch (error) {
        return response.error(error.message);
    }
});
