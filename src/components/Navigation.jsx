import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem  } from 'react-bootstrap';
import logo from '../images/LOGO.png';


class Navigation extends React.Component {
	render(){
		return (
       <div>
       
        <div class="row">
          <div class="col-xs-12">
            <div id="photo-header" class="text-center">
              <div class="photo">
                <img src="https://i.gyazo.com/8d4230dc1c088ce345cfc31281bfc73e.png" alt="avatar" />
              </div>           
              <div id="text-header">
                <h1>JAVIER IGNACIO TORREALBA</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
			);
	}
}


export default Navigation;
