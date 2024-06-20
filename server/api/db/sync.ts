import { sequelize } from "~/server/libs/sequelize";
import * as models from "~/server/models";
 
export default defineEventHandler(async () => {
    try {
        console.log(models);
        await sequelize.sync({ force: true });

        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
});
