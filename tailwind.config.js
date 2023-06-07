/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: '10px',
      center: true

    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '940px',
      // => @media (min-width: 960px) { ... }

      'lg': '1425px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily: {
        Rubik: 'Rubik',
      },
      colors: {
        primary_green: '#8BAC3E',
        accent_green: '#F0FEEB',
        netral_white: '#F9FFF6',
        light_gray1: '#757575',
        light_gray2: '#F2F2F2',
        primary_blue: '#40A2B1',
        accent_blue: '#E6F3F5',
        primary_purple: '#405EB6',
        accent_purple: '#EAEEFA',
        primary_red: '#B23F74',
        accent_red: '#F9EEF3',
        primary_green_2: '#A4B441',
        accent_green_2: '#F3F7D9'
      },
      fontSize: {
        Heading: '64px',
        SubHeading: '38px',
        Title: '26px',
        body: '18px',
        medium: '16px',
        lowest: '14px',
        MobileHeading : '48px',
        MobileSubHeading : '28px'

        
      }

    },
  },
  plugins: [require('@tailwindcss/forms'),],
}