import React from 'react';
import {Link} from 'react-router-dom';
import Training from './Training';
import Work from './Work';

class Academy extends React.Component {
	render(){
		return (
        <div class="row">
          <div class="col-xs-12 col-sm-7">
          	<div class="box">
          		<h2>Formación Académica</h2>
          		<ul id="education" class="clearfix">
          		 <li>
                  <div class="year pull-left">2018</div>
                  <div class="description pull-right">
                     <h3>INGENIERO EN INFOMATICA</h3>
                     <p>Desarrollo de aplicaciones <strong>multiplataformas</strong></p>
                  </div>
          		 </li>
          		 <li>
          		 		<div class="year pull-left">2011</div>
                    <div class="description pull-right">
                      <h3>PRUEBA DE ACCESO A GRADO SUPERIOR</h3>
                      <p>Calificación: <strong>8,25</strong></p>
                    </div>
          		 </li>
          		</ul>
          	</div>
            <Training />
            <Work />
          </div>
        </div>
			);
	}
}

export default Academy;