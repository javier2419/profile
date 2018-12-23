import React from 'react';
import Navigation from './components/Navigation';
import Academy from './components/Academy';
import Sidebar from './components/Sidebar';
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
      <div class="row">
          <Navigation/>
          <div class="col-xs-12 col-sm-7">
          <Academy />
         </div>
        <div class="col-xs-12 col-sm-5">
          <Sidebar />
        </div>
      </div>
     </div>


      );
  }
}



export default App;
