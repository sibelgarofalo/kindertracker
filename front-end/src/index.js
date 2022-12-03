/** imports */
import React from 'react';
import ReactDOM from 'react-dom/client';

/** Routes */
import Routes from './components/routes';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);