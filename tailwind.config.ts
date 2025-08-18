import type { Config } from "tailwindcss";
import ServicesOverview from "./slices/ServicesOverview";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    fontFamily: {
      headline: "var(--font-body)",
      body: "var(--font-body)",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      backgroundGrey: "#FAFBFD",
      backgroundGreyDarker: "#F5F6F7",
      backgroundBlue: "#111827",
      backgroundLightBlue: "#FAFBFD",
      headlineColor: "#2B2B2B",
      bodyGrey: "#5D5D5D",
      bodyGreyOnDark: "#BFBFBF",
      greyInput: "#bababa",
      greyLight: "#f0f0f0",
      greyDarker: "#1F1F1F",
      greyMedium: "#595959",
      white: "#Fdfdfd",
      pureWhite: "#ffffff",
      softWhite: "#FFFBF9",
      black: "#000B13",
      pureBlack: "#000000",
      buttonBlue: "#176DFF",
      cyanideBlue: "#2DCAE1",

      buttonBlueHover: "#2E5CA9",
      softBlue: "#ECFCFE",
      lightBLue: "#F4FDFE",

      filterOrange:
        "invert-[.83] sepia-[.44] saturate-[31.73] hue-rotate-[326deg] brightness-[.92] contrast-[.87]",
    },
    letterSpacing: {
      tighter: "-0.03em",
      tight: "-0.02em",
      wide: "0.01em",
      xwide: "0.02em",
    },
    /*
     * Using clamp generator: https://www.marcbacon.com/tools/clamp-calculator/ - where:
     * Base size is 10px (since we put the base font-size to 62.5%)
     * Minimum viewport is 380px
     * Maximum viewport is 1728px
     * Minimun and maximum font sizes are in REM
     */
    fontSize: {
      sm: [
        "clamp(1.4rem, 1.341rem + 0.15vw, 1.6rem)",
        { lineHeight: "1.38", letterSpacing: "0em" },
      ],
      md: [
        "clamp(1.6rem, 1.482rem + 0.3vw, 2rem)",
        { lineHeight: "1.38", letterSpacing: "0em" },
      ],
      navLinks: [
        "clamp(1.6rem, 1.541rem + 0.15vw, 1.8rem)",
        { lineHeight: "1.38", letterSpacing: "0em" },
      ],
      navLinksMobile: [
        "clamp(1.8rem, 1.623rem + 0.449vw, 2.4rem)",
        { lineHeight: "1.38", letterSpacing: "0em" },
      ],
      paragraph: [
        "clamp(2rem, 1.882rem + 0.3vw, 2.4rem)",
        { lineHeight: "1.38", letterSpacing: "0em" },
      ],
      lg: [
        "clamp(1.6rem, 1.364rem + 0.599vw, 2.4rem)",
        { lineHeight: "1.38", letterSpacing: "0em" },
      ],
      h1: [
        "clamp(4.8rem, 2.092rem + 6.891vw, 12rem)",
        { lineHeight: "1.08", letterSpacing: "0.00em" },
      ],
      h2: [
        "clamp(3rem, 2.117rem + 2.247vw, 6rem)",
        { lineHeight: "1.08", letterSpacing: "-0.02em" },
      ],
      h3: [
        "clamp(2rem, 1.706rem + 0.749vw, 3rem)",
        { lineHeight: "1.08", letterSpacing: "-0.02em" },
      ],
      h4: [
        "clamp(2.6rem, 2.129rem + 1.199vw, 4.2rem)",
        { lineHeight: "1.08", letterSpacing: "-0.02em" },
      ],
      h5: [
        "clamp(2rem, 1.882rem + 0.3vw, 2.4rem)",
        { lineHeight: "1.08", letterSpacing: "-0.02em" },
      ],
      h6: [
        "clamp(2.4rem, 2.164rem + 0.599vw, 3.2rem)",
        { lineHeight: "1.08", letterSpacing: "-0.02em" },
      ],
    },
    fontWeight: {
      semiLight: "300",
      regular: "400",
      medium: "500",
      semiBold: "600",
      bold: "700",
    },
    screens: {
      xxs: "480px", //* => @media (min-width: 480px) { ... }
      xs: "640px", //* => @media (min-width: 640px) { ... }
      sm: "768px", //* => @media (min-width: 768px) { ... }
      smmd: "918px", //* => @media (min-width: 768px) { ... }
      md: "1059px", //* => @media (min-width: 1024px) { ... }
      lg: "1280px", //* => @media (min-width: 1280px) { ... }
      lg2: "1424px", //* => @media (min-width: 1366px) { ... }
      xl: "1664px", //* => @media (min-width: 1664px) { ... }
      xxl: "1920px", //* => @media (min-width: 1920px) { ... }
      xxxl: "2000px", //* => @media (min-width: 2080px) { ... }
    },
    container: {
      center: true,
    },
    scale: {
      102: "1.02",
      105: "1.05",
    },
    spacing: {
      fill: "100%",
      0: "0px",
      2: "2px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      12: "12px",
      16: "16px",
      18: "18px",
      20: "20px",
      22: "22px",
      24: "24px",
      26: "26px",
      32: "32px",
      40: "40px",
      48: "48px",
      56: "56px",
      64: "64px",
      72: "72px",
      80: "80px",
      88: "88px",
      96: "96px",
      104: "104px",
      112: "112px",
      120: "120px",
      128: "128px",
      240: "240px",
      "fluid-8": "clamp(8px, 0.46vw, 10px)",
      "fluid-12": "clamp(10px, 0.76vw, 12px)",
      "fluid-16": "clamp(12px, 0.9vw, 16px)",
      "fluid-18": "clamp(16px, 0.9vw, 18px)",
      "fluid-24": "clamp(18px, 1.4vw, 24px)",
      "fluid-32": "clamp(24px, 1.85vw, 32px)",
      "fluid-40": "clamp(32px, 2.31vw, 40px)",
      "fluid-48": "clamp(32px, 2.8vw, 48px)",
      "fluid-56": "clamp(48px, 3.2vw, 56px)",
      "fluid-64": "clamp(56px, 3.7vw, 64px)",
      "fluid-72": "clamp(56px, 4.17vw, 72px)",
      "fluid-80": "clamp(64px, 4.6vw, 80px)",
      "fluid-96": "clamp(80px, 5.5vw, 96px)",
      "fluid-122": "clamp(96px, 6.5vw, 122px)",
      "fluid-144": "clamp(6.4rem, 4.045rem + 5.993vw, 14.4rem)",
      "fluid-192": "clamp(128px, 11.11vw, 192px)",
      "fluid-324": "clamp(256px, 18.75vw, 324px)",
      "fluid-384": "clamp(266px, 22.22vw, 384px)",
      "fluid-608": "clamp(444px, 35.18vw, 608px)",
      "container-56": "clamp(1.6rem, 0.264rem + 3.096vw, 5.6rem)",
      "container-88": "clamp(3.2rem, 0.97rem + 4.195vw, 8.8rem)",
      containerMorePadding: "clamp(1.6rem, -3.817rem + 13.783vw, 20rem)",
    },
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        imageFade: {
          "0%": { opacity: "0.6" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        imageFade: "imageFade 1s ease-in-out",
      },

      borderRadius: {
        0: "0px",
        2: "2px",
        4: "4px",
        6: "6px",
        8: "8px",
        12: "12px",
        16: "16px",
        24: "24px",
        32: "32px",
        full: "100%",
      },
      boxShadow: {
        button: " 0px 4px 4px 0px rgba(0, 0, 0, 0.20)",
        nav: "0px 4px 4px 0px rgba(0, 0, 0, 0.10)",
        header: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        news: " 4px 12px 12px 4px rgba(0, 0, 0, 0.05)",
        heroSlide: " 4px 6px 6px 4px rgba(0, 0, 0, 0.02)",
        heroSlideHover: " 2px 4px 4px 2px rgba(0, 0, 0, 0.04)",
        servicesOverview: " 4px 4px 24px 8px rgba(0, 0, 0, 0.03)",
      },
    },
  },
  plugins: [],
};
export default config;
