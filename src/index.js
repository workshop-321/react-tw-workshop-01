import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Dash from './Dash';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Dash />
  </StrictMode>
);
