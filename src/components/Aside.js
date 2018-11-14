import React, { Component } from 'react';
import Login from './Login';
import Signup from './Signup';

class Aside extends Component{
  /*constructor(props){
    super(props);
    
  }*/

  render(){
    if(this.props.status === "login"){
      return (<aside>
         <Login />
      </aside>);
     
    } else if(this.props.status === "signup"){
      return(<div>
        <aside>
          <Signup />
        </aside>
      </div>);
    } else {
      return(<div>
      
        </div>);
    }                            
  }
}

export default Aside;