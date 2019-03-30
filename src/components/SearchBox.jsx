import React, { Component } from 'react';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <input type='text' placeholder='Search for...' name='searchQuery' />;
  }
}

export default SearchBox;
