import NextAuth from "next-auth/next";
import GoogleProfile from "next-auth/providers/google"

export default NextAuth({
    providers: [
        GoogleProfile({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ]
})