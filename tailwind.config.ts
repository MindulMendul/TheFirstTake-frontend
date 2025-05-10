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
  theme: {
    extend: {
      colors: {
        ccbeige: '#F5EEDC',
        ccblue: '#27548A',
        ccnavy: '#183B4E',
        ccyellow: '#DDA853'
      },
    },
  },
  plugins: [],
}