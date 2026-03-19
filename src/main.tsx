import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import posthog from 'posthog-js';
import App from './App.tsx';
import './index.css';

posthog.init('phc_k1mPaAiGBxGjnuSeOt620Tjki9wAfu4XTsolT0k78JT', {
  api_host: 'https://us.i.posthog.com',
  session_recording: { enabled: true },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
