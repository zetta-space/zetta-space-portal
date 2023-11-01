import prisma from "@/shared/db.config";

export default async function createUser(values: Register) {
    const query = await prisma.user.create({
        data: {
            fullName: values.fullName,
            email: values.email,
            imageUrl: values.image,
            password: values.password
        }
    })

    return query
}