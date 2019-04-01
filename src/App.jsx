import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MainContainer from './containers/MainContainer.jsx';
import DataDisplay from './components/DataDisplay.jsx';
import NavBar from './components/NavBar.jsx';
import LSContainer from './containers/LSContainer.jsx';
import FeedContainer from './containers/FeedContainer.jsx';

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path='/' component={MainContainer} />
      <Route path='/login' component={LSContainer} />
      <Route path='/data' component={DataDisplay} />
    </Router>
  );
}

export default App;
