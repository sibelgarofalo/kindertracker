/** imports */
import React from 'react';
import ReactDOM from 'react-dom/client';

/** Routes */
import Routes from './components/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);