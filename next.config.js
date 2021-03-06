// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')

const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  // https://nextjs.org/docs/basic-features/image-optimization#domains
  images: {
    domains: [
      'media.graphcms.com',
      'blog-geek-midia.s3.amazonaws.com',
      'media.sketchfab.com'
    ]
  }
})
