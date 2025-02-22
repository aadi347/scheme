import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'preline/preline'; // Import Preline
import App from './App.jsx';

const Root = () => {
  useEffect(() => {
    import('preline/preline').then((module) => module.default());
  }, []);

  return <App />;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
