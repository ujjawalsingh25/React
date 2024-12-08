import React from 'react';                    // library imported (core Foundational lib helps to get referrences)
import ReactDOM from 'react-dom/client';    // library imported  (Help implementation web however both helps to manuplate web DOM)
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // root is the id in the div tag of the main index.html(in public)
root.render(
//  ask to render the app.js in the div having id-root    // StrictMode --> property in react
  <React.StrictMode>    
    <App />
  </React.StrictMode>
);

 