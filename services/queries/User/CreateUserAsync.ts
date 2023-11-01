import prisma from "@/shared/db.config";

export default async function createUser(values: Register, other?: any) {
    const query = await prisma.user.create({
        data: {
            fullName: values.fullName,
            email: values.email,
            bio: values.bio,
            password: values.password
        }
    })

    return query
}