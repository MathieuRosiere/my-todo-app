import { Todo } from "@/server/models/todo";
import { response } from "@/utils/response";

// eslint-disable-next-line no-undef
export default defineEventHandler(async (event) => {
    // eslint-disable-next-line no-undef
    const todoId = getRouterParam(event, "id");

    try {
        const userId = 3;

        const deleteTodo = await Todo.destroy({ where: { id: todoId, UserId: userId } });
        console.log(deleteTodo);
        if (deleteTodo === 0) {
            throw new Error(`No todo found with id "${todoId}" and userId "${userId}"`);
        } else {
            return response.success();
        }
    } catch (error) {
        return response.error(error.message);
    }
});
