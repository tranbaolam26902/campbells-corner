/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        outputFileTracingIncludes: {
            '/content': ['./content/**/*'],
            '/images': ['./public/**/*']
        }
    }
};

export default nextConfig;
