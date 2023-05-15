const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: 'true',
})

module.exports = withBundleAnalyzer({
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
});