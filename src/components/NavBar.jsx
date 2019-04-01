import React, { Component } from 'react';
import SearchBox from './SearchBox.jsx';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/data'>Data</Link>
          </li>
          <li>
            Search: <SearchBox />
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
