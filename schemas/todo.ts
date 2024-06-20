import { z } from "zod";

export const todoCreateInput = z.object({
    title: z.string().trim(),
    userId: z.number().int(),
});

export const todoSchema = z
    .object({
        /** @deprecated Ne plus utiliser */
        id: z.number().int(),
        title: z.string(),
        completed: z.boolean(),
        date: z.date(),
    })
    .strict();

export const todoOutput = todoSchema;

export const todoResponse = z.array(todoSchema);

export const todoUpdate = z
    .object({
        title: z.string(),
        userId: z.number().int(),
        completed: z.boolean(),
    })
    .strict();
