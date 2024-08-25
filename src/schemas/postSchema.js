import { z } from "zod";

export const postSchema = z.object({
    title: z
        .string()
        .nonempty({ message: 'O título não pode estar vazio' })
        .refine(value => !/^\s/.test(value), { message: 'o Título não pode conter apenas espaços' }),

    banner: z
        .string()
        .nonempty({ message: 'O banner não pode estar vazio' })
        .refine(value => !/^\s/.test(value), { message: 'o Título não pode conter apenas espaços' }),

    text: z
        .string()
        .nonempty({ message: 'O texto não pode estar vazio' })
        .refine(value => !/^\s/.test(value), { message: 'o Título não pode conter apenas espaços' }),
});