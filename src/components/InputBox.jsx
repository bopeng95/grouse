import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  width: 80%;
  height: 30%;
  margin: 1em;
`;

const TAGS = ['React', 'Redux', 'Node', 'JQuery'];

class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: 'React',
      messages: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    // submit new message to the database
    event.preventDefault();
    console.log(this.state);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <label>
          Tell us how you feel about the technologies you work with:
          <StyledTextarea />
        </label>
        <br />
        <label>Tags:</label>
        <Fragment>
          <select
            className='form-control'
            name='tags'
            onChange={this.handleChange}
            value={this.state.tag}
          >
            {TAGS.map((tag, i) => {
              return (
                <option key={`tag${i}`} value={tag}>
                  {tag}
                </option>
              );
            })}
          </select>
        </Fragment>
        <br />
        <input
          className='btn btn-outline-success'
          type='submit'
          value='Submit'
        />
      </form>
    );
  }
}

export default InputBox;
