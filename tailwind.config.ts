import type { Config } from "tailwindcss";

const config: Config = { 
    darkMode: "selector", 
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'horizontal': '480px',
      'tablet': '768px', 
      'laptop': '979px',    
      'desktop': '1200px', 
    },
    extend: {
      keyframes: {
        moveInCircle: {
          '0%' : {
            transform: 'rotate(0deg)'
          },
          '50%' : {
            transform: 'rotate(40deg)'
          },
          '100%' : {
            transform: 'rotate(0deg)'
          }
        },
        moveVertical: {
          '0%' : {
            transform: 'translateY(0%)'
          },
          '50%' : {
            transform: 'translateY(-40%)'
          },
          '100%' : {
            transform: 'translateY(0%)'
          }
        },
        moveHorizontal: {
          '0%' : {
            transform: 'translateX(0%)'
          },
          '50%' : {
            transform: 'translateX(-40%)'
          },
          '100%' : {
            transform: 'translateX(0%)'
          }
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          }, 
          "100%": {
            width: "100%", 
          }    
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        },
        fadeIn: {
          "0%": {
            transform: 'translateY(-30px)',
            opacity:'0'
          },
          "100%": {
            transform: "translateY(0px)",
            opacity: '1'
          }  
        }
      },
      animation: {
        circle: 'moveInCircle 20s ease infinite', 
        vertical: 'moveVertical 20s ease infinite', 
        horizontal: 'moveHorizontal 20s ease infinite',
        typing: "typing 10s steps(15) 1, blink 1s infinite",
        fadeIn: "fadeIn 2s"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))", 
       }, 
      colors: {
        "background": "#FDF9FA",
        "dark-background": "#181818", 
        "dark-text": "#BEBECB",
        "dark-title": "#e7e7e7",
        "interactive": "rgb(var(--interactive) / <alpha-value>)",
        "primary" : "#e16388", 
        "accent" : "#7A6594"
      }, 
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
      fontFamily: {
        playfair: ['var(--font-inter)'],  
      },
      boxShadow: {
        header: "2px 2px 3px #cac2bc"
      }
    },
  },
  plugins: [ 
  ],
};
export default config; 

