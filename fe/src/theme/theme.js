import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  globalCss: {
    "*::placeholder": {
      // opacity: 1,
      color: "fg.subtle",
    },
    "*": {
      fontFamily: "Poppins, sans-serif",
      // color: "black",
    },
    "body": {
      backgroundColor: "#fff",
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
