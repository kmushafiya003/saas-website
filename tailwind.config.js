

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      '56px': '56px',
      '0.8rem': '0.8rem',
    },
    fontFamily: {
      
      poppins: ["Poppins", "sans-serif"],
      "nunito-sans": ["Nunito Sans", "sans-serif"]
     
    },
    colors: {
      white: "#fff",
      black: "#000",
      transparent: "#ffffff00",
     

     primary: {
       "fuel-yellow": "#FCA61F",
        "crocus-purple": "#8976FD",

      },
      secondary: {
        "sky-blue": "#FCA61F",
         "easter-purple": "#C06EF3",
         "soft-blue": "#7188FF",
         "selective-yellow": "#FDBA09",
         "light-turquoise": "#6DEDC3",
 
       },
     
      text: {
        "bright-grey": "#332C5C",
         "purple-haze": "#494369",
         "mid-grey": "#5E587A",
      
      },
      "state":{
      
        "info": "#2F80ED",
        "success": "#27AE60",
        "warning": "#E2893B",
        "error": "#EB5757",
        

      }
      

    },
    screens : {

      'dxs' : '300px',
      // => @media (min-width: 300px) { ... }

      'xxs' : '400px',
      // => @media (min-width: 400px) { ... }

      'xsm' : '458px',
      // => @media (min-width: 400px) { ... }

      'xs' : '500px',
      // => @media (min-width: 500px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'just': '641px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }
      
      'smd' : '800px',
         // => @media (min-width: 860px) { ... }

      'mmd': '860px',
        // => @media (min-width: 860px) { ... }

      'xmd' : '930px',
        // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }


       'xlg' : '1110px',
           // => @media (min-width: 1110px) { ... }


      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      'xxl': '1390px',
      // => @media (min-width: 1280px) { ... }

      
    },
    
    extend: {
    }
  },
  plugins: [],
};