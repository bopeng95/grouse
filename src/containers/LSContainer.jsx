import React, { Component } from 'react';

class LSContainer extends Component {
  render() {
    return (
      <div>
        <Login />
        <Signup />
      </div>
    );
  }
}

const Login = () => {
    return (
        <div>
            <div>
                <input type="text" name="login"/>
                <input type="password" name="pwd1"/>
            </div>
            <button>log in</button>
        </div>
    )
}

const Signup = () => {
    return (
        <div>
            <div>
                <input type="text" name="signup"/>
                <input type="password" name="pwd2"/>
            </div>
            <button>sign up</button>
        </div>
    )
}

export default LSContainer;