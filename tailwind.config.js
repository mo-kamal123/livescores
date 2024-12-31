const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",    flowbite.content()],
  theme: {
    extend: {
      keyframes: {
        fly: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        fly: 'fly 3s ease-in-out ',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};