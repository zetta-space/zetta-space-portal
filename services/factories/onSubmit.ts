import { formModification } from "../handlers/inputModification";

export async function postArticle(data: any, isTranslated?: boolean) {
    try {
        const wordCount = formModification(data.body);
        return { data, wordCount };

        // const response = await createArticleAsync(data, wordCount)
        // Return response if saved successfully
        // return { success: true, response: response, msg: success };

    } catch (error: any) {
        return error
    }

}

export async function updateArticle(params: FormData, append?: AppendBlob) {


}