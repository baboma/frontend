import React, { Component } from 'react';
import Article from './Article';
import Aside from './Aside';
import { connect } from 'react-redux';
import Principal from './Principal';

class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      flag: "",
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    //this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(){
    this.setState({flag: "login"});
  }

  handleSignup(){
    this.setState({flag: "signup"});
  }

  /*handleLogout(){
    //this.props.dispatch({type: "setLoggedOut", payload: true});
    this.setState({flag: "logout"});
  }*/

  render(){
    if(this.props.LoggedIn){
      return(<div>
        <Principal />
      </div>);
    } 
    if(!this.props.LoggedIn){
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
}

function mapStateToProps(state){
  return {
    LoggedIn: state.loggedIn,
    //LoggedOut: state.loggedOut,
  }
}

export default connect(mapStateToProps)(Header);

/*
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
*/

/*
if(this.props.LoggedOut){
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
*/