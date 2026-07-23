import { createMDX } from 'fumadocs-mdx/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withMDX = createMDX({
  outDir: './.source',
});

const fumadocsConfig = withMDX(nextConfig);

// Next 16.1's Turbopack does not support the metadata query rules generated
// by Fumadocs yet. MDX pages remain enabled; metadata is not used by this app.
if (fumadocsConfig.turbopack?.rules) {
  delete fumadocsConfig.turbopack.rules['*.json'];
  delete fumadocsConfig.turbopack.rules['*.yaml'];
}

export default fumadocsConfig;
