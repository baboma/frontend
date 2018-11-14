import React, { Component } from 'react';
import Article from './Article';
import Aside from './Aside';

class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      flag: "",
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleLogin(){
    this.setState({flag: "login"});
  }

  handleSignup(){
    this.setState({flag: "signup"});
  }

  render(){
    return(<div>
      <header>
        <div id="banniere_image"></div>
        <nav> 
          <button className="login" onClick={this.handleLogin}>Connexion</button>
          <button className="signup" onClick={this.handleSignup}>Inscription</button>
        </nav>
      </header>
      <Article />
      <Aside status={this.state.flag} />
    </div>);
  }
}

export default Header;