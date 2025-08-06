/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        mainLightBg: "#FFFFFF",
        mainDarkBlue: "#263C61",
        PinkBg: "#FF6B82",
        headerLightText: "#263C61",
        subTitleLightText: "#717185",
        subTitleLightHover: "#fffc",
        offWhite: "#F9F9F9",
        blackColor: "#131315"
      },
      fontSize: {
        hero: "75px",
        title: "18px",
        subtitle: "16px",
        headingSection: "48px",
        small: "14px",
        titleSection: "24px",
        subHeadingSection: "36px"
      },
      spacing: {
        mainPaddingSides: "100px",
        innerPadding: "40px",
        outerPaddingSmall: "20px",
        paddingSections: "120px"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        fustat: ['Fustat', 'sans-serif'],
      },
      fontWeight: {
        W400: '400',
        W500: '500',
        W600: '600',
        W700: '700',
      },
      backgroundImage: {
        'main-gradient-light': 'linear-gradient(157deg, #ffbd17, #ffd0be 5%, #c1c0f9 47%, #ffb7b7);',
        'main-gradient-light-two': 'linear-gradient(#fff, #d3edff 20%, #b5dfffb3)',
        'main-gradient-cloud': 'linear-gradient(#fff, #adddff 20%, #64bcff)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
