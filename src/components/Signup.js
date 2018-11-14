import React, { Component } from 'react';

class Signup extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      username: "",
      name: "",
      password: "",
      _password: "",
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this); 
  }

  handleEmailChange(event){
    var courriel = event.target.value;
    this.setState({email: courriel});
  }

  handleUserNameChange(event){
    var usrname = event.target.value;
    this.setState({username: usrname});
  }

  handleNameChange(event){
    var _name = event.target.value;
    this.setState({name: _name});
  }

  handlePasswordChange(event){
    var pwd = event.target.value;
    this.setState({password: pwd});
  }

  handleConfirmPasswordChange(event){
    var _pwd = event.target.value;
    this.setState({_password: _pwd});
  }

  handleSignup(event){
    event.preventDefault();

  }

  render(){
    return(<div>
      <div class="form">
        <form onSubmit={this.handleSignup}>
          <input type="text" placeholder="email"/>
          <input type="text" placeholder="username"/>
          <input type="text" placeholder="nom"/>
          <input type="password" placeholder="password"/>
          <input type="password" placeholder="confirm password"/>
          <input id="_button" type="submit" value="signup" />
        </form>
      </div>
    </div>);
  }
}

export default Signup;