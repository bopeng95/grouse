import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './store';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

if (module.hot) module.hot.accept();

// render(
//     <Provider store={store} >
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );

render(
  <Router>
    <App />
  </Router>,

  document.getElementById('root')
);
