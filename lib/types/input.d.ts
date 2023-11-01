type ArticleBody = {
    body: string
}

type AppendBlob = { name: string; value: number | undefined; args?: any }

type SignIn = {
    email: string;
    password: string | number
}

type Register = {
    fullName: string,
    email: string,
    password?: string,
    image?: string,
}

type AuthSession = {
    name: unknown,
    email: unknown | string,
    password?: unknown | string,
    image?: unknown | string
}