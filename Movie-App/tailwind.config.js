// /** @type {import('tailwindcss').Config} */
// export defaimport Banner from './src/components/Banner';
// ult {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'banner' : "url('/banner.png')",
//       }
//     },
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner' : "url('/banner.png')",
      }
    },
  },
  plugins: [],
}
