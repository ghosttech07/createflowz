// The site's public address, used for the sitemap, robots.txt and share previews.
// Set NEXT_PUBLIC_SITE_URL in Vercel once the real domain is connected (e.g. https://createflowz.com).
// Until then it falls back to the address Vercel gives the production deployment.
const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
const fromVercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = (fromEnv || (fromVercel ? `https://${fromVercel}` : "http://localhost:3000")).replace(/\/$/, "");
