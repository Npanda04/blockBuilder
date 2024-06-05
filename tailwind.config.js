/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#949494",
          "200": "#878787",
          "300": "#7a7a7a",
          "400": "#0e1d30",
          "500": "#091d28",
          "600": "#061b26",
          "700": "#06131a",
          "800": "rgba(0, 0, 0, 0.25)",
        },
        white: "#fff",
        skyblue: "#04d9ff",
        darkslategray: {
          "100": "#425263",
          "200": "#2f2f2f",
          "300": "rgba(51, 51, 51, 0.25)",
        },
        deepskyblue: {
          "100": "#0fcdff",
          "200": "#00a6cc",
        },
        darkgray: "#b4b4b4",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        abeezee: "ABeeZee",
      },
      borderRadius: {
        "13xl": "32px",
        "8xl": "27px",
        "19xl": "38px",
        "31xl": "50px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      "45xl": "64px",
      "19xl": "38px",
      "32xl": "51px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      base: "16px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
