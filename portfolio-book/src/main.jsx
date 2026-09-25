import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { IntlayerProvider } from 'react-intlayer' //rendert die Sprache
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IntlayerProvider>
      <App />
    </IntlayerProvider>
  </StrictMode>,
);
