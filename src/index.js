import React from 'react';
import { hydrate, render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    , rootElement);
} else {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    , rootElement);
}