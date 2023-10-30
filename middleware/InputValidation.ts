import { z } from "zod";

export function submitValidation(params: FormData) {
    const Task = z.object({
        title: z.string().nonempty(),
        tags: z.string().nonempty(),
        body: z.string().nonempty(),
    });

    try {

        const { success, data } = Task.safeParse({
            title: params.get("article-title"),
            tags: params.get("article-tags"),
            body: params.get("article-body"),
        });
        return { success, data }

    } catch (error) {

    }
}

export function translateValidation(params: FormData) {
    const Task = z.object({
        title: z.string().nonempty(),
        tags: z.string().nonempty(),
        body: z.string().nonempty(),
        language: z.string().nonempty()
    });

    try {

        const { success, data } = Task.safeParse({
            title: params.get("article-title"),
            tags: params.get("article-tags"),
            body: params.get("article-body"),
            language: params.get("article-language")
        });
        return { success, data }

    } catch (error) {

    }
}