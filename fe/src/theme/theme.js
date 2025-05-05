import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  globalCss: {
    "*::placeholder": {
      // opacity: 1,
      color: "fg.subtle",
    },
    "*": {
      fontFamily: "Poppins, sans-serif",
    },
    html: {
      backgroundColor: '#fff',
      height: "200%",
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
