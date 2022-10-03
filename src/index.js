import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import App from './App';

import reportWebVitals from './reportWebVitals';

// import { state } from './store';
// import { ReactReduxContext } from 'react-redux';
// import {Provider} from 'react-redux';

// import cards from './components/cards'




// function mapStateToProps(state){
//   return {
//     store:state
//   }
// }

// const ContainerApp = ReactReduxContext.connect(mapStateToProps)(App);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={state}> */}
        <App />
    {/* </Provider> */}
  </React.StrictMode>
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
