import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Col, Row } from 'react-bootstrap';

class Principal extends Component{
  constructor(props){
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(){
    this.props.dispatch({type: "setLoggedIn", payload: false});
  }

  render(){
    const dummySentences = [
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      'Donec hendrerit tempor tellus.',
      'Donec pretium posuere tellus.',
      'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      'Nulla posuere.',
      'Donec vitae dolor.',
      'Nullam tristique diam non turpis.',
      'Cras placerat accumsan nulla.',
      'Nullam rutrum.',
      'Nam vestibulum accumsan nisl.'
    ];
    
    const gridInstance = (
      <Grid>
        <Row className="show-grid">
          <Col sm={6} md={3}>
            <code>
              &lt;
              {'Col sm={6} md={3}'} /">">">">">">">&gt;
            </code>
            <br />
            {dummySentences.slice(0, 6).join(' ')}
          </Col>
          <Col sm={6} md={3}>
            <code>
              &lt;
              {'Col sm={6} md={3}'} /">">">">">">">&gt;
            </code>
            <br />
            {dummySentences.slice(0, 4).join(' ')}
          </Col>
          <Col sm={6} md={3}>
            <code>
              &lt;
              {'Col sm={6} md={3}'} /">">">">">">">&gt;
            </code>
            <br />
            {dummySentences.slice(0, 6).join(' ')}
          </Col>
          <Col sm={6} md={3}>
            <code>
              &lt;
              {'Col sm={6} md={3}'} /">">">">">">">&gt;
            </code>
            <br />
            {dummySentences.slice(0, 2).join(' ')}
          </Col>
        </Row>
      </Grid>
    );
    return (<div>
      <header>
        <div id="banniere_image"></div>
          <nav> 
            <p><span>Welcome: username</span></p>
            <button className="logout" onClick={this.handleLogout}>Deconnexion</button>
          </nav>
      </header>
      {gridInstance}
    </div>);
  }
}

export default connect()(Principal);

/*
<header>
            <div id="banniere_image"></div>
            <nav> 
              <button className="logout" onClick={this.handleLogout}>Logout</button>
            </nav>
        </header>
*/