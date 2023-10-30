import prisma from "@/shared/db.config";

export default async function listArticleAsync() {
    const query = await prisma.article.findMany({
        skip: 0,
        take: 10
    })
    return query;
}