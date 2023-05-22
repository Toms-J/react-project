import React, { useState, useEffect} from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import App from './App';
import Project from './Project.js';
import './index.css'
import store from './app/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Project />
    {/* <App /> */}
  </Provider>, 
);