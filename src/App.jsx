import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MainContainer from './containers/MainContainer.jsx';
import DataDisplay from './components/DataDisplay.jsx';
import NavBar from './components/NavBar.jsx';
import LSContainer from './containers/LSContainer.jsx';

function App() {
  return (
    <Router>
      <NavBar />
      <div>
        <Route exact path='/' component={MainContainer} />
        <Route path='/login' component={LSContainer} />
        <Route path='/data' component={DataDisplay} />
      </div>
    </Router>
  );
}

export default App;
