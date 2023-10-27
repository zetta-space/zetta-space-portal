import { z } from "zod";

export default async function onSubmit(params: FormData, append: AppendBlob) {
    "use server"
    // Pass into validation
    const Task = z.object({
        title: z.string().nonempty(),
        tags: z.string().nonempty(),
        body: z.string().nonempty()
    });

    try {
        const { success, data } = Task.safeParse({
            title: params.get("article-title"),
            tags: params.get("article-tags"),
            body: params.get("article-body")
        })
        // Run Query
        // Return response if saved successfully
        return data;
    } catch (error: any) {
        return error
    }

}