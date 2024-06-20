import type { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { DataTypes } from "sequelize";
import { sequelize } from "~/server/libs/sequelize";

// See https://sequelize.org/docs/v6/other-topics/typescript/#usage-of-sequelizedefine
interface TodoModel extends Model<InferAttributes<TodoModel>, InferCreationAttributes<TodoModel>> {
    id: CreationOptional<number>;
    title: string;
    completed: boolean;
}

export const Todo = sequelize.define<TodoModel>("Todo", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});
