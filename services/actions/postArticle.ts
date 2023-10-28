import { z } from "zod";
import createArticleAsync from "../queries/CreateArticleAsync";

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
        const response = await createArticleAsync(data, append)
        // Return response if saved successfully
        return { success: "Saved Successfully", response: response };

    } catch (error: any) {
        return error
    }

}