import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"], // Kích hoạt dark mode dựa trên class cho shadcn
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Giữ lại màu custom của bạn
        primary: {
          DEFAULT: "#4382DF",
          foreground: "hsl(var(--primary-foreground))", // Hỗ trợ biến của shadcn nếu cần
        },
        grayDarkest:"#131316",
        grayDarker:"#212126",
        grayDark:"#9394A1",

        // Bổ sung các cấu hình màu bắt buộc của shadcn v3
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      // Giữ lại cấu hình font custom của bạn
      fontFamily: {
        primary: ["var(--font-manrope)"],
        secondary: ["var(--font-roboto)"],
      },
      // Bổ sung bo góc tương thích với biến --radius của shadcn
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Thêm plugin hỗ trợ hiệu ứng của shadcn
};

export default config;

// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors:{
//         primary:"#4382DF"
//       },
//       fontFamily:{
//         primary:["var(--font-manrope)"],
//         secondary:["var(--font-roboto)"]
//       }
//     },
//   },
//   plugins: [],
// };
// export default config;
