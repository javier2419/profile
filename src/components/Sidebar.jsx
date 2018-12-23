import React from 'react';
import {Link} from 'react-router-dom';
import Contact from './Contact';
import Certificate from './Certificate';

class Sidebar extends React.Component {
   render(){
   	return (
   		<div>
        <div class="box clearfix">
          <a class="btn btn-warning mainbutton" href="#">
              <i class="fa fa-envelope" aria-hidden="true"></i> CONTACTAR
          </a>
          <a type="button" class="btn btn-success mainbutton" href="#">
              <i class="fa fa-print" aria-hidden="true"></i> IMPRIMIR
          </a>
          <a type="button" class="btn btn-danger mainbutton" href="#">
              <i class="fa fa-download" aria-hidden="true"></i> DESCARGAR EN PDF
          </a>
        </div>
        <Contact />
        <Certificate />

      </div>
   		);
   }

}

export default Sidebar;