import React, { Component } from 'react';

import styled from 'styled-components';

const StyledDiv = styled.div`
  margin: auto;
  justify-content: center;
  display: flex;
  padding-top: 0.8em;
`;

class FeedItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <StyledDiv className='feeditem'>{this.props.message}</StyledDiv>
        <br />
      </React.Fragment>
    );
  }
}

export default FeedItem;
