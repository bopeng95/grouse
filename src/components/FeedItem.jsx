import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  border: 1px solid lightgrey;
  margin: auto;
  padding: 2em;
  width: 60%;
  align-items: center;
  justify-content: center;
  display: flex;
`;

class FeedItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <StyledDiv className='feeditem'>FeedItem</StyledDiv>
        <br />
      </React.Fragment>
    );
  }
}

export default FeedItem;
