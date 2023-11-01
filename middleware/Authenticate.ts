import isUserAuthorized from "@/lib/handlers/event/checkUser";

export async function authenticate(param: unknown | any): Promise<any> {
    const result = isUserAuthorized(param)
    return result
}