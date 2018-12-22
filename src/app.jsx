import React from 'react';
import Navigation from './components/Navigation';
import Academy from './components/Academy';
//import Carrousel from './components/Carrousel';
import Musicians from './components/Musicians';
import Products from './components/Products';
import FooterMateria from './components/Footer';
import {Button, Icon} from 'react-materialize'
import 'normalize.css';
import {Jumbotron} from 'react-bootstrap';

import "styles/base/_main.sass"  // Global styles
//import "styles/base/_common.sass"  // Global styles
//import styles from "./app.css"  // Css-module styles
//import "app.css"
class App extends React.Component {
  render(){
    return (
     <div class="container">
    <Navigation/>
    <Academy />
    
    
     <Button waves='light'>
    <Icon>thumb_up</Icon>
  </Button>
  <FooterMateria/>

  <Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button bsStyle="primary">Learn more</Button>
  </p>
</Jumbotron>

  </div>


      );
  }
}



export default App;
