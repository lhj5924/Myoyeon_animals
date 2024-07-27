import React from 'react';
import { createRoot } from 'react-dom/client'; // 올바른 import 경로
import App from './App';
import './assets/styles/index.scss';

const container = document.getElementById('root');
if (!container) {
  throw new Error(
    "Root container not found. Make sure the element with id 'root' exists in the HTML.",
  );
}

const root = createRoot(container);
root.render(<App />);
