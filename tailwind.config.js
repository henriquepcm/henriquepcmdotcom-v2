/** @type {import('tailwindcss').Config} */
module.exports = {
     content: ["./src/**/*.{html,js,tsx}"],
     theme: {
          extend: {
               colors: {
                    henriquepcmdarkpurple: "var(--henriquepcm-dark-purple)",
                    henriquepcmbasepurple: "var(--henriquepcm-base-purple)",
                    henriquepcmlightpurple: "var(--henriquepcm-light-purple)",
                    henriquepcmpink: "var(--henriquepcm-pink)",
                    henriquepcmgreen: "var(--henriquepcm-green)",
                    henriquepcmorange: "var(--henriquepcm-orange)",
               },
               fontFamily: {
                    sans: "Inter, Helvetica, Arial, sans-serif",
               },
          },
     },
     plugins: [],
};
