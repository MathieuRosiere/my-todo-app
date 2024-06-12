import { z } from "zod";

export const todoCreateInput = z.object({
    title: z.string().trim(),
    userId: z.number().int(),
});

export const todoOutput = z
    .object({
        id: z.number().int(),
        title: z.string(),
        completed: z.boolean(),
    })
    .strict();

export const todoUpdate = z
    .object({
        title: z.string(),
        userId: z.number().int(),
        completed: z.boolean(),
    })
    .strict();
