import prisma from "@/shared/db.config";

export default async function Article(values: any, other: any) {
    const query = await prisma.article.create({
        data: {
            title: values.title,
            wordCount: other.count,
            body: values.body,
            tagsId: values.tags.toString().split("#")
        }
    });

    return {
        message: "Successfully Saved!!!",
        response: query,
        statusCode: 400
    }
}