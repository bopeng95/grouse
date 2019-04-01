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
  }

  render() {
    return (
      <form onSubmit={event => this.props.handleSubmit(event)}>
        <label>
          Tell us how you feel about the technologies you work with:
          <StyledTextarea
            name='newMessage'
            value={this.props.newMessage}
            onChange={this.props.handleChange}
          />
        </label>
        <br />
        <label>Tags:</label>
        <Fragment>
          <select
            className='form-control'
            name='tag'
            onChange={this.props.handleChange}
            value={this.props.tag}
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
