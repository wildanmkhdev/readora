/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false, // matikan strict mode kalau ada warning strict
	swcMinify: true, // gunakan SWC untuk minify, default Next.js terbaru
	eslint: {
		ignoreDuringBuilds: true, // supaya build gak gagal karena eslint error
	},
	typescript: {
		ignoreBuildErrors: true, // supaya build lanjut meski ada error TS (hati-hati)
	},
	experimental: {
		appDir: true, // pastikan pakai App Router
	},
};

module.exports = nextConfig;
