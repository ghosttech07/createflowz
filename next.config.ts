import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
};

export default nextConfig;

// Lets `next dev` use Cloudflare bindings locally.
initOpenNextCloudflareForDev();
