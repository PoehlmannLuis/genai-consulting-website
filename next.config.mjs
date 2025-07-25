/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  // If your repository name is 'my-repo', set basePath to '/my-repo'
  basePath: '/genai-consulting-website', // Replace 'your-repo-name' with your actual GitHub repository name if it's not a top-level user/org page
  assetPrefix: '/genai-consulting-website/', // Also needed for assets if using basePath

  // Optional: Disable image optimization if not compatible with static export or your hosting,
  // or configure a custom loader if needed. For GitHub Pages, the default loader might work if no basePath is set,
  // but with basePath, you might need a custom loader or ensure paths are correctly handled.
  images: {
    unoptimized: true, // Simplest for static HTML export, especially with basePath
  },

  // Ensure environment variables are available at build time if needed for static export
  env: {
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  },
};

export default nextConfig;
