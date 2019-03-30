import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MainContainer from './containers/MainContainer.jsx';
import DataDisplay from './components/DataDisplay.jsx';
import NavBar from './components/NavBar.jsx';

function App() {
  return (
    <Router>
      <h1>Hi</h1>
      <NavBar />
      <div>
        <Route exact path='/' component={MainContainer} />
        <Route path='/data' component={DataDisplay} />
      </div>
    </Router>
  );
}

export default App;
