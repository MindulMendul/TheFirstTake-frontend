// import { toneMap } from "@nextcss/color-tools";

// function generateColors(color:string) {
//   return {
//     DEFAULT: color,
//     ...toneMap(color),
//   };
// }


import type { Config } from "tailwindcss";

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [],
}