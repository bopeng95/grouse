import React, { Component } from 'react';
import InputBox from '../components/InputBox.jsx';
import FeedContainer from '../containers/FeedContainer.jsx';
import styled from 'styled-components';
import axios from 'axios';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from '../actions/actions';

const StyledDiv = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: 'React',
      messages: [],
      newMessage: '',
      shouldFeedUpdate: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get('/api/messages', {}).then(data => {
      const resultArr = [];

      for (let i = data.data.length - 1; i > 0; i--) {
        resultArr.push(data.data[i].text);
      }
      this.setState({
        messages: resultArr,
        shouldFeedUpdate: true
      });
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    axios
      .post('/api/messages', {
        name: null,
        text: this.state.newMessage,
        tags: { name: this.state.tag }
      })
      .then(data => console.log('**** data posting', data));

    this.setState({
      messages: [this.state.newMessage, ...this.state.messages.slice()],
      newMessage: '',
      shouldFeedUpdate: true
    });
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  render() {
    return (
      <React.Fragment>
        <StyledDiv>
          <InputBox
            tag={this.state.tag}
            newMessage={this.state.newMessage}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
          <br />
        </StyledDiv>
        <StyledDiv>
          <FeedContainer
            messages={this.state.messages}
            shouldFeedUpdate={this.state.shouldFeedUpdate}
          />
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
