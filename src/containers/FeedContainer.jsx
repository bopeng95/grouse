import React, { Component, Fragment } from 'react';
import FeedItem from '../components/FeedItem.jsx';
import styled from 'styled-components';

const StyledDiv = styled.div`
  border: 1px solid lightgrey;
  margin: auto;
  padding: 1em;
  width: 60%;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

class FeedContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const toRender = this.props.messages.map((message, i) => {
      return (
        <FeedItem message={message} key={`message${i}`}>
          <br />
        </FeedItem>
      );
    });

    return this.props.shouldFeedUpdate ? (
      <StyledDiv>{toRender}</StyledDiv>
    ) : null;

    // if (this.props.shouldFeedUpdate) {
    //   this.props.messages.map((message, i) => {
    //     return (
    //       <StyledDiv>
    //         <FeedItem message={message} key={`message${i}`} />
    //       </StyledDiv>
    //     );
    //   });
    // } else {
    //   return null;
    // }
  }
}

export default FeedContainer;
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(FeedContainer);

// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from '../actions/actions';
// import data from '../data/reactjsreddit';
// const d = data.data.children;

// const mapStateToProps = ({ text }) => ({
//   txt: text.msg
// });

// const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

// const FeedContainer = props => {
//   return (
//     <Fragment>
//       <FeedItem {...props} />
//     </Fragment>
//   );
// };
