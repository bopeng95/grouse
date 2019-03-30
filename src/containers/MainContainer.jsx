import React, { Component, Fragment } from 'react';
import InputBox from '../components/InputBox.jsx';
import FeedItem from '../components/FeedItem.jsx';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <InputBox />
        <FeedItem />
      </Fragment>
    );
  }
}

export default MainContainer;
