import React, { Component } from 'react';
class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form>
        <label>
          Tell us how you feel about the technologies you work with:
          <textarea />
        </label>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default InputBox;
