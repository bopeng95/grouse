import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './store';
import App from './App.jsx';

if (module.hot) module.hot.accept();

// render(
//     <Provider store={store} >
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );

render(<App />, document.getElementById('root'));
