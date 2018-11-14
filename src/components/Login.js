import React, { Component } from 'react';

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleUsernameChange(event){
    var pwd = event.target.value;
    this.setState({password: pwd});
  }
  
  handlePasswordChange(event){
    var usrname = event.target.value;
    this.setState({username: usrname});
  }

  handleLogin(event){
    event.preventDefault();
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify({username: this.state.username, password: this.state.password})
    }).then(x => {
      return x.text();
    }).then(res => {
      var parsed = JSON.parse(res);
    })

  }

  render(){
    return(<div>
      <div className="form">
        <form onSubmit={this.handleLogin}>
          <input type="text" placeholder="username"/>
          <input type="password" placeholder="password"/>
          <input id="_button" type="submit" value="login" />
        </form>
      </div>
    </div>);
  }
}

export default Login;