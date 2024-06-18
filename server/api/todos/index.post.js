import { todoCreateInput, todoOutput } from "@/schemas/todo";
import { readValidatedBody } from "h3";
import { Todo } from "@/server/models/todo";
import { response } from "@/utils/response";
// eslint-disable-next-line no-undef
export default defineEventHandler(async (event) => {
<<<<<<< HEAD
    const result = await readValidatedBody(event, (body) => todoCreateInput.safeParse(JSON.parse(body)));
=======
    const result = await readValidatedBody(event, (body) => todoCreateInput.safeParse(body));

>>>>>>> 143a60f (feat(mutation): add-todo mutation)
    if (result.success === false) {
        return response.error(result.error.issues);
    }

    try {
        const { title, userId } = result.data;
        const newTodo = await Todo.create({
            title: title,
            UserId: userId,
        });

        const todo = {
            id: newTodo.id,
            title: newTodo.title,
            completed: newTodo.completed,
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
