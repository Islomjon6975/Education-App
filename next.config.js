/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['media.graphassets.com'],
    dangerouslyAllowSVG: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(ts|tsx|js|jsx|md|mdx)$/] },
      use: [
        { loader: '@svgr/webpack' },
        {
          loader: 'file-loader',
          options: { name: 'static/[path][name].[ext]' },
        },
      ],
      type: 'javascript/auto',
    });

    return config;
  },
};

export default nextConfig;
