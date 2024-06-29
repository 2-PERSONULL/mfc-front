import { type DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      uuid: string | unknown
      accessToken: string | unknown
      refreshToken: string | unknown
    } & DefaultSession['user']
    error?: 'RefreshAccessTokenError'
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    uuid: string
    accessToken: string
    refreshToken: string
    error?: 'RefreshAccessTokenError'
  }
}
