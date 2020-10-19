import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import '../public/style.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import { BrowserRouter as Router, Route } from 'react-router-dom';

//global variables
// window.$email="customersupport@greeneryguard.com";
// window.$phone="+61 440 000 000";
// window.$address="Hawthorne, Melbourne"
// window.$openhours="Mon - Sat: 8AM to 5PM"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
