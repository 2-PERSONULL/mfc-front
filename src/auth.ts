import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import kakao from 'next-auth/providers/kakao'
import { UserType } from '@/types/userType'

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: '/signin',
  },
  providers: [
    kakao,
    Credentials({
      credentials: {
        email: { label: 'Username', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) return null

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/member-service/auth/signin`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          },
        )

        if (!response.ok) return null

        const user: UserType = await response.json()

        return user.result
      },
    }),
  ],
  callbacks: {
    redirect: async ({ url, baseUrl }) => {
      let redirectUrl = baseUrl
      if (url.endsWith('signin')) redirectUrl = `${baseUrl}/user`
      else if (url) {
        const { search, origin } = new URL(url)
        const callbackUrl = new URLSearchParams(search).get('callbackUrl')
        if (callbackUrl) {
          redirectUrl = callbackUrl.startsWith('/')
            ? `${baseUrl}${callbackUrl}`
            : callbackUrl
        } else if (origin === baseUrl) {
          redirectUrl = url
        }
      }
      return redirectUrl
    },
    session: async ({ session, token }) => {
      const updatedSession = {
        ...session,
        user: {
          uuid: token.uuid,
          accessToken: token.accessToken,
          refreshToken: token.refreshToken,
          role: token.role,
        },
      }
      return updatedSession
    },
    jwt: async ({ token, user }) => {
      return { ...token, ...user }
    },
  },
})
