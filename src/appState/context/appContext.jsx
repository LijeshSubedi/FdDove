import { createContext } from "react";

export const appContent = {
  theme: {
    dark: {
      back: "#8e8f91",
      front: "#ffffff",
      special:"#ffffff"
    },

    light: {
      back: "#ffffff",
      front: "#282c34",
      special:"#1DA1F2"
    },
  },
  isLogIn: false,
};

export const AppContext = createContext(appContent);
