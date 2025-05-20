// customAmplifyTheme.ts
import { Theme } from '@aws-amplify/ui-react';

export const customAmplifyTheme: Theme = {
  name: 'my-overridden-theme',
  tokens: {
    colors: {
      brand: {
        primary: {
          10: '#002b4b',
          20: '#002b4b',
          40: '#002b4b', // This is your desired main shade
          80: '#002b4b',
          90: '#002b4b',
        },
      },
    },
  },
};
