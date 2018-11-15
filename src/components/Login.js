import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleEmailChange(event){
    var courriel = event.target.value;
    this.setState({email: courriel});
  }
  
  handlePasswordChange(event){
    var passwrd = event.target.value;
    this.setState({password: passwrd});
  }

  handleLogin(event){
    event.preventDefault();
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify({email: this.state.email, password: this.state.password}),
    }).then(x => {
      return x.text();
    }).then(res => {
      var parsed = JSON.parse(res);
      debugger
      if(parsed.status){
        debugger
        this.props.dispatch({type: "setLoggedIn", payload: parsed.status});
      }
    })
    this.setState({email: ""});
    this.setState({password: ""});
  }

  render(){
    return(<div>
      <div className="form">
        <form onSubmit={this.handleLogin}>
          <input type="text" onChange={this.handleEmailChange} 
            value={this.state.email} placeholder="email"
          />
          <input type="password" onChange={this.handlePasswordChange} 
            value={this.state.password} placeholder="password"
          />
          <input id="_button" type="submit" value="login" />
        </form>
      </div>
    </div>);
  }
}

export default connect()(Login);