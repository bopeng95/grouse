import React, { Component } from 'react';
import InputBox from '../components/InputBox.jsx';
import FeedContainer from '../containers/FeedContainer.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import styled from 'styled-components';

const StyledDiv = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <StyledDiv>
          <InputBox />
          <br />
        </StyledDiv>
        <StyledDiv>
          <FeedContainer />
        </StyledDiv>
      </React.Fragment>
    );
  }
}

export default MainContainer;

// const mapStateToProps = ({ state: { msg } }) => ({ msg: state.msg });

// const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

// const MainContainer = props => {
//   return (
//     <div className='container'>
//       <InputBox addTextAndTags={props.addTextAndTags} />
//       <FeedContainer />
//     </div>
//   );
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(MainContainer);
