import { defineConfig } from "@pandacss/dev"

export default defineConfig({
    // Whether to use css reset
    preflight: true,
    
    // Where to look for your css declarations
    include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
      extend: {
        keyframes: {
          accordionSlideDown: {
            '0%': {
              height: '0px',
              maxHeight: '0px',
            },
            '100%': {
              height: 'var(--radix-accordion-content-height)',
              //doesn't work
              // maxH: 'var(--radix-accordion-content-height)',
              //does work
              // maxHeight: 'var(--radix-accordion-content-height)'
            },
          },
        }
      }
    },

    // The output directory for your css system
    outdir: "styled-system",
    
    
})