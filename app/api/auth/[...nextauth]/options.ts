import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProfile from "next-auth/providers/google"

export const options: NextAuthOptions = {
    providers: [
        GoogleProfile({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email:",
                    type: "text",
                    placeholder: "mail@example.com"
                },
                password: {
                    label: "Password:",
                    type: "password",
                }
            },
            async authorize(credentials) {
                const user = { id: "42", name: "Test User", email: "test@gmail.com", password: "test123" }

                if (credentials?.email === user.email && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
}