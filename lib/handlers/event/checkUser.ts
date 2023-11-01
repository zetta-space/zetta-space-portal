import getUserByEmail from "@/services/queries/User/GetUserAsync";

export default async function isUserAuthorized(email: string) {
    const response = await getUserByEmail(email);
    return response
}