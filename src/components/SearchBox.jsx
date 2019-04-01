import React, { Component } from 'react';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // search query logic here
    event.preventDefault();
    // query the database for keyword, return messages containing the keywords that the user searched for
  }
  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type='text' placeholder='Search for...' name='searchQuery' />
        <input
          className='btn btn-outline-success'
          type='submit'
          value='Submit'
        />
      </form>
    );
  }
}

export default SearchBox;
