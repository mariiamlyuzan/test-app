/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgBlue: "#EFF0F5",
        mainGray: "#878D9D",
        accentColor: "#3A4562",
        opacityAccent: "#38415D",
        textBlue: "rgba(56, 65, 93, 0.82)",
        opacityBlue: "rgba(85, 105, 158, 0.3)",
        borderBlue: "rgba(0, 0, 0, 0.12)",
        borderYellow: "#FFCF00",
        opacityYellow: "rgba(255, 207, 0, 0.15)",
        opacityWhite: "rgba(231, 234, 240, 1)",
        opacityBlack: "rgba(0, 0, 0, 0.5)",
        textYellow: "#988B49",
        accentDarkest: "#394665",
        iconArrowColor: "#7D859C",
        iconBookmark: "#70778B",
        iconStar: "rgba(56,69,100)",
      },
      fontSize: {
        large: "28px",
        small: "13px",
      },

      spacing: {
        135: "135px",
        22: "22px",
        309: "309px",
        334: "334px",
        39: "39px",
        7: "7px",
        26: "26px",
        86: "86px",
        115: "115px",
        87: "87px",
        372: "372px",
        402: "402px",
        18: "18px",
        negative: "-60px",
        negative32: "-32px",
      },
    },
  },
  plugins: [],
};