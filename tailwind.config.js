module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"], // Example: Poppins for clean, modern look
      },
      
      colors:{
        footer:"#444",
      },
      transitionProperty: {
        'scale-opacity': 'transform, opacity',
      },
    },
  },
  plugins: [],
}