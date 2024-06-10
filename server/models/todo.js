import { DataTypes } from "sequelize";
import { sequelize } from "@/server/libs/sequelize";

export const Todo = sequelize.define("Todo", {
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
