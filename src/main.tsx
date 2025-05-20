// main.tsx
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
import { Authenticator, ThemeProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { customAmplifyTheme } from './customAmplifyTheme'; // Import your custom theme

Amplify.configure(outputs);

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={customAmplifyTheme}>
    <Authenticator>
      <App />
    </Authenticator>
  </ThemeProvider>
);
