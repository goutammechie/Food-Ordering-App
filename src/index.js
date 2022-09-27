import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './stores/rootStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <Provider  store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>
);


reportWebVitals();










// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// Why provider is used in react redux?
// // Overview​ The <Provider> component makes the Redux store available to any nested components that need to access the Redux
//  store. Since any React component in a React Redux app can be connected to the store, most applications will render a 
//  <Provider> at the top level, with the entire app's component tree inside of it.