import { Todo } from "./todo";
import { User } from "./user";

User.hasMany(Todo, {
    onDelete: "CASCADE",
    foreignKey: { allowNull: false, name: "userId" },
    as: "todos",
});

Todo.belongsTo(User);

export { User, Todo };
