/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // nextjs 12.1 버전 이상부터 babel-plugin-styled-components 사라짐
    styledComponents: true,
  },
}

export default nextConfig
