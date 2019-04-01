import React, { Component, Fragment } from 'react';
import InputBox from '../components/InputBox.jsx';
import FeedContainer from '../containers/FeedContainer.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';

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

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <InputBox />
        <FeedContainer />
      </Fragment>
    );
  }
}

export default MainContainer;
