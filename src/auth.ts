import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import kakao from 'next-auth/providers/kakao'

interface User {
  name: string
  password: string
  email: string
  role: string
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: '/signin',
  },
  providers: [
    kakao,
    Credentials({
      credentials: {
        email: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials): Promise<User | null> {
        // 테스트용 임시 회원 정보
        const users = [
          {
            name: 'user1',
            password: 'test1',
            role: 'partner',
            email: 'test1@test1.com',
          },
          {
            name: 'user2',
            password: 'test2',
            role: 'user',
            email: 'test2@test2.com',
          },
        ]
        const user = users.find(
          (u) =>
            u.email === credentials.email &&
            u.password === credentials.password,
        )
        return user
          ? {
              name: user.name,
              email: user.email,
              password: user.password,
              role: user.role,
            }
          : null
      },
    }),
  ],
  callbacks: {
    redirect: async ({ url, baseUrl }) => {
      if (url.endsWith('signin')) return `${baseUrl}/user`
      if (url) {
        const { search, origin } = new URL(url)
        const callbackUrl = new URLSearchParams(search).get('callbackUrl')
        if (callbackUrl) {
          return callbackUrl.startsWith('/')
            ? `${baseUrl}${callbackUrl}`
            : callbackUrl
        }
        if (origin === baseUrl) return url
      }
      return baseUrl
    },
    session: async ({ session, token }) => {
      const updatedSession = { ...session, user: token }
      return updatedSession
    },
    jwt: async ({ token, user }) => {
      return { ...token, ...user }
    },
  },
})
