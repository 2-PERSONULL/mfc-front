import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import KakaoProvider from 'next-auth/providers/kakao'

// eslint-disable-next-line import/prefer-default-export
export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Username', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials.password) return null
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

          if (response.ok) {
            const user = await response.json()
            return user.result
          }
          return null
        } catch (error) {
          console.error(error)
          return null
        }
      },
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || '',
      clientSecret: process.env.KAKAO_CLIENT_SECERET || '',
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token }) {
      const updatedSession = {
        ...session,
        user: {
          uuid: token.uuid,
          accessToken: `Bearer ${token.accessToken}`,
          refreshToken: `${token.refreshToken}`,
        },
      }
      return updatedSession
    },
  },
  pages: {
    signIn: '/signin',
  },
}
