import type { Awaitable, NextAuthOptions, RequestInternal, User } from 'next-auth'
import GoogleProfile from "next-auth/providers/google"
import Credentials from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
    providers: [
        GoogleProfile({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        Credentials({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            authorize: function (credentials, req) {
               
            }
        })
    ],
    pages: {}
}