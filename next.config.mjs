/** @type {import('next').NextConfig} */
import withPWAInit from '@ducanh2912/next-pwa'
import exp from 'constants'

const withPWA = withPWAInit({
  dest: 'public',
  disable: false, //pwa를 사용하지 않을 환경 설정하는건데 다 적용시킬거니까 false
  reloadOnOnline: true,
  swcMinify: true,
  workboxOptions: {
    disableDevLogs: true,
  }, //해당 옵션 설정해줘야 아래와 같은 workbox 콘솔이 안찍힌다!!!
})

const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.amazonaws.com',
      },
    ],
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    NEXT_PUBLIC_API_LOCAL_URL: process.env.NEXT_PUBLIC_API_LOCAL_URL,
    KAKAO_CLIENT_ID: process.env.KAKAO_CLIENT_ID,
    KAKAO_CLIENT_SECRET: process.env.KAKAO_CLIENT_SECRET,
  },
}

export default withPWA(nextConfig)
