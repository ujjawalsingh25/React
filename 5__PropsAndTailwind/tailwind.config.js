/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                    // -->> Search content within the index
    "./src/**/*.{js,ts,jsx,tsx}",    // -->> Search content within the source
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

