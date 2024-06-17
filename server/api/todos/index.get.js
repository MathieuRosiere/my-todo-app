import { Todo } from "@/server/models/todo";
import { todoOutput } from "@/schemas/todo";
import { response } from "@/utils/response";

// eslint-disable-next-line no-undef
export default defineEventHandler(async () => {
    try {
        const todos = await Todo.findAll({
            where: {
                userId: 1,
            },
        });
        const todoArray = [];
        for (const item of todos) {
            const todo = {
                id: item.id,
                title: item.title,
                completed: item.completed,
            };

            const outputResult = todoOutput.safeParse(todo);
            if (outputResult.success === false) {
                return response.error(outputResult.error.issues);
            } else {
                todoArray.push(outputResult.data);
            }
        }
        return response.success(todoArray);
    } catch (error) {
        return response.error(error.message);
    }
});
