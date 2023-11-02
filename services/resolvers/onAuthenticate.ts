import IResponse from "@/lib/interfaces/IResponse";
import createUser from "../queries/User/CreateUserAsync";

export function onAuthenticate(params: SignIn) {

}

export function unAuthenticate() {

}

export async function onRegisterUser(user: AuthSession, other?: any): Promise<IResponse> {
    try {
        const query = await createUser({ fullName: user.name as string, email: user.email as string }, other);
        return {
            success: true,
            message: "Successfully Saved",
            data: query,
        }

    } catch (error: unknown) {
        return {
            success: false,
            message: "Error occored",
            error: error
        }
    }

}