import React, { Component } from 'react';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit(event) {
    // search query logic here
    event.preventDefault();
    // query the database for keyword, return messages containing the keywords that the user searched for

    this.setState({ searchQuery: '' });
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          onChange={this.handleChange}
          type='text'
          placeholder='Search for...'
          name='searchQuery'
          value={this.state.searchQuery}
        />
        <input
          className='btn btn-outline-primary'
          type='submit'
          value='Submit'
        />
      </form>
    );
  }
}

export default SearchBox;
