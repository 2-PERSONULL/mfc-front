import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import kakao from 'next-auth/providers/kakao'

interface User {
  id: string
  name: string
  email: string
}

interface LoginRes {
  success: boolean
  data: {
    user: {
      ID: string
      NAME: string
      EMAIL: string
    }
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    kakao,
    Credentials({
      credentials: {
        id: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (credentials.id && credentials.password) {
          const loginRes: LoginRes = {
            success: true,
            data: {
              user: {
                ID: 'user1',
                NAME: '홍길동',
                EMAIL: 'email@email.email',
              },
            },
          }

          const user = {
            id: loginRes.data.user.ID ?? '',
            name: loginRes.data.user.NAME ?? '',
            email: loginRes.data.user.EMAIL ?? '',
          } as User
          return user
        }
        return null
      },
    }),
  ],
})
