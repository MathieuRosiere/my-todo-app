import { z } from "zod";

export const todoInput = z.object({
    title: z.string().int(),
});

export const todoOutput = z.object({
    id: z.number().int(),
    title: z.string(),
    completed: z.boolean(),
});
