
import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './containers/App/index';
import "antd/dist/antd.min.css";
import AppContextProvider from "./containers/App/context";

const root = createRoot(document.getElementById('container'));

root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);