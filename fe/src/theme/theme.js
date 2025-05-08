import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        textGreen: { value: '#188474' },
        textBlue: { value: '#0B163D' },
        textGray: '#BEBEBE',
      },
    },
  },
  globalCss: {
    '*::placeholder': {
      color: 'fg.subtle',
    },
    '*': {
      fontFamily: 'Poppins, sans-serif',
    },
    html: {
      backgroundColor: '#fff',
      height: '500%',
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
