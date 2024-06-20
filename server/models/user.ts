import type { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { DataTypes } from "sequelize";
import { sequelize } from "~/server/libs/sequelize";

// See https://sequelize.org/docs/v6/other-topics/typescript/#usage-of-sequelizedefine
interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
    id: CreationOptional<number>;
    username: string;
    password: boolean;
    email: number;
}

export const User = sequelize.define<UserModel>("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
});
