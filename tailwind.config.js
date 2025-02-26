/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], 
    extend: {},
    
=======
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",  // Ensures Tailwind applies to all components
    ],
    theme: {
      extend: {},
    },
>>>>>>> 022f6c0 (fourth)
    plugins: [],
  };
  