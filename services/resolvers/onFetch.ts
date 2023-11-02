import listArticleAsync from "../queries/Article/ListArticleAsync"

export default async function listArticles() {
    try {
        const articleList = await listArticleAsync();
        return {
            success: "Fetched Successfully", response: articleList
        }

    } catch (error: any) {
        return error
    }
}

export async function getArticle(id: string) {

}
