import prisma from "@/shared/db.config";

export default async function createArticleAsync(values: any, other: any) {
    const query = await prisma.article.create({
        data: {
            title: values.title,
            wordCount: other.value,
            body: values.body,
            tagsId: values.tags.toString().split("#")
        }
    });

    return query
}