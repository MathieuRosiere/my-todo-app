import { Todo } from "~/server/models/todo";
import type { todoResponse } from "~/schemas/todo";
import { todoOutput } from "~/schemas/todo";
import { response } from "@/utils/response";
import type { ResponseError, ResponseSuccess } from "@/utils/response";
import type { z } from "zod";

type TodoOutput = z.infer<typeof todoResponse>;

type Response = ResponseError | ResponseSuccess<TodoOutput>;

 
export default defineEventHandler<Promise<Response>>(async () => {
    try {
        const todos = await Todo.findAll({
            where: {
                // FIXME: Find how to type a foreign key with Sequelize
                userId: 1,
            },
        });
        const todoArray: TodoOutput = [];
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
