import prisma from "@/shared/db.config";

export default async function updateArticleAsync(id: string, values: any, other?: any) {
    // if (Object.is(other, undefined)) {
    //     return { name: "J" }
    // } else {
    //     return { "hello": other }
    // }

    const query = await prisma.article.update({
        where: {
            id: id
        },
        data: {
            title: values.title,
            wordCount: other.value,
            body: values.body,
            tagsId: values.tags.toString().split("#")
        }
    });

    return query

}