import React, { Component } from 'react';
//import { connect } from 'react-redux';

class Article extends Component{


  render(){
    return(<div>
      <article>
        <p id="page_principale">Gardez une trace de vos dépenses...</p>
        <p id="image_accueil"><img src="images/depenses.png" alt="depenses"/></p>
        <p id="page_principale">Commencez maintenant</p>
      </article>
    </div>);
  }
}

export default Article;