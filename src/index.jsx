import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import '../assets/stylesheets/application.scss';

console.log("index reload")

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
