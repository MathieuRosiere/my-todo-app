import { z } from "zod";

export const userInput = z.object({
    username: z.string(),
    password: z.string(),
    email: z.string().email(),
});

export const userOutput = z.object({
    id: z.number().int(),
    username: z.string(),
    email: z.string().email(),
});
