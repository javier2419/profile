import React from 'react';
import {Link} from 'react-router-dom';

class Training extends React.Component {
	render(){
		return (
        <div class="box">
          <h2>Formación Complementaria</h2>
          <ul id="education2" class="clearfix">
              <li>
                  <div class="year pull-left">2007</div>
                  <div class="description pull-right">
                      <h3>CURSO</h3>
                      <p><strong>VISUAL BASIC .NET</strong> – X horas</p>
                  </div>
              </li>
              <li>
                  <div class="year pull-left">2006</div>
                  <div class="description pull-right">
                      <h3>CURSO</h3>
                      <p>TÉCNICO DE SISTEMAS MICROINFORMÁTICOS <strong>ESPECIALIZADO EN REDES</strong></p>
                  </div>
              </li>
          </ul>
        </div>
			);
	}
}

export default Training;
