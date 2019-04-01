import React, { Component, Fragment } from 'react';
import FeedItem from '../components/FeedItem.jsx';
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

class FeedContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <FeedItem />
      </div>
    );
  }
}

export default FeedContainer;
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(FeedContainer);
