/** @type {import('next').NextConfig} */
import withPWAInit from '@ducanh2912/next-pwa'

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
}

export default withPWA(nextConfig)
