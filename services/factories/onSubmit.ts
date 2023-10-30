import IResponse from "@/lib/interfaces/IResponse";
import { formModification } from "../handlers/dataModification";
import createArticleAsync from "../queries/Article/CreateArticleAsync";

export async function postArticle(data: any, isTranslated?: boolean): Promise<IResponse> {
    try {
        const wordCount = formModification(data.body);

        const response = await createArticleAsync(data, wordCount)
        return {
            success: true,
            message: "Saved Successfully",
            data: response
        }

    } catch (error: any) {
        return error
    }

}

export async function updateArticle(params: FormData, append?: AppendBlob) {


}