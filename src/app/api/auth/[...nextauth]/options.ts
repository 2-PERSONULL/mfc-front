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
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth-service/auth/signin`,
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
    async jwt({ token, user, trigger, session }) {
      if (trigger === 'update') {
        // Role 변경시 jwt 업데이트
        const { newToken } = session

        if (!newToken) return token
        return { ...newToken, expiresAt: Date.now() + 60 * 60 * 6 * 1000 }
      }
      // 유효시간 6시간으로 설정
      if (user) {
        // 첫 로그인시에만 user가 존재
        return { ...token, ...user, expiresAt: Date.now() + 60 * 60 * 6 * 1000 }
      }
      if (Date.now() < (token.expiresAt as number)) {
        // 첫 로그인 이후 token access
        // console.log(Date.now(), token.expiresAt as number)
        return token
      }
      // 유효시간 만료시 refresh token으로 재발급하는 로직 추가
      console.log('error: 유효시간 만료')

      return token
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
