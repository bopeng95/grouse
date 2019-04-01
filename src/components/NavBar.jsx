import React, { Component } from 'react';
import SearchBox from './SearchBox.jsx';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledUl = styled.ul`
  padding: 1em;
  list-style-type: none;
  text-align: left;
`;

const StyledLi = styled.li`
  display: inline;
  margin .5em;
`;

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav id='navbar'>
        <StyledUl>
          <StyledLi>
            <Link to='/'>Home</Link>
          </StyledLi>
          <StyledLi>
            <Link to='/data'>Data</Link>
          </StyledLi>
          <StyledLi>
            Search: <SearchBox />
          </StyledLi>
        </StyledUl>
      </nav>
    );
  }
}

export default NavBar;
