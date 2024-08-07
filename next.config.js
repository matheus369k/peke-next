/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
            },
        ],
    },
    compiler: {
        styledComponents: true,
    },
}

module.exports = nextConfig;
