import React, { Component } from 'react';
//import { connect } from 'react-redux';

class Signup extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      username: "",
      name: "",
      age: "",
      password: "",
      _password: "",
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this); 
  }

  handleEmailChange(event){
    var courriel = event.target.value;
    this.setState({email: courriel});
  }

  handleUsernameChange(event){
    var usrname = event.target.value;
    this.setState({username: usrname});
  }

  handleNameChange(event){
    var _name = event.target.value;
    this.setState({name: _name});
  }

  handleAgeChange(event){
    var _age = event.target.value;
    this.setState({age: _age});
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
    fetch('/signup', {
      method: 'POST',
      body: JSON.stringify(
        { email: this.state.email,
          username: this.state.username,
          name: this.state.name,
          age: this.state.age,
          password: this.state.password,
      })
    }).then(x => {
      return x.text();
    }).then(res => {
      var parsed = JSON.parse(res);
    })
    this.setState({
      email: "",
      username: "",
      name: "",
      age: "",
      password: "",
      _password: "",
    })
  }

  render(){
    return(<div>
      <div id="signup_res">{}</div>
      <div className="form">
        <form onSubmit={this.handleSignup}>
          <input type="text" onChange={this.handleEmailChange} value={this.state.email} placeholder="email"/>
          <input type="text" onChange={this.handleUsernameChange} 
            value={this.state.username} placeholder="username"
          />
          <input type="text" onChange={this.handleNameChange} value={this.state.name} placeholder="nom"/>
          <input type="text" onChange={this.handleAgeChange} value={this.state.age} placeholder="age"/>
          <input type="password" onChange={this.handlePasswordChange} 
            value={this.state.password} placeholder="password"
          />
          <input type="password" onChange={this.handleConfirmPasswordChange} 
            value={this.state._password} placeholder="confirm password"
          />
          <input id="_button" type="submit" value="signup" />
        </form>
      </div>
    </div>);
  }
}

export default Signup;