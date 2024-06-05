/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
};

module.exports = {
    theme: {
      extend: {
        colors: {
          burgundy: '#800020', // Define your custom color here
        },
      },
    },
    // Other configurations...
  };
  