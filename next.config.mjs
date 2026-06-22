// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     // Ép Next.js không tự ý compile lại mongoose và các thư viện liên quan
//     serverComponentsExternalPackages: ["mongoose", "mongodb", "bson"],
//   },
//   webpack: (config, { isServer }) => {
//     if (isServer) {
//       // Đảm bảo Webpack chạy các gói này trực tiếp từ môi trường Node.js gốc
//       config.externals.push("mongoose", "mongodb", "bson");
//     }
//     return config;
//   },
// };

// export default nextConfig;
import { createRequire } from 'module';

// Polyfill process.getBuiltinModule for older Node.js versions (< 20.16.0)
// This fixes the crash in bson/mongodb library: "TypeError: undefined is not a function"
if (typeof process !== 'undefined' && typeof process.getBuiltinModule !== 'function') {
  const require = createRequire(import.meta.url);
  process.getBuiltinModule = (id) => {
    return require(id);
  };
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Ép Next.js coi mongoose và mongodb là các thư viện bên ngoài (external), không tự ý xộc vào đóng gói làm hỏng file cjs
    serverComponentsExternalPackages: ["mongoose", "mongodb", "bson"],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Hỗ trợ phân giải module chính xác ở phía Server
      config.externals.push('mongoose', 'mongodb', 'bson');
    }
    return config;
  },
};

export default nextConfig;