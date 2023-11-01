import prisma from "@/shared/db.config"

export default async function getUserByEmail(email: string, other?: any) {
    try {
        const query = await prisma.user.findFirstOrThrow({
            where: {
                email
            },
            select: {
                id: true,
                email: true,
            }
        })

        return query;

    } catch (error: unknown) {

        return { error }
    }
}

export async function getUserById() {

}