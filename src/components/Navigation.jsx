import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem  } from 'react-bootstrap';
import logo from '../images/LOGO.png';


class Navigation extends React.Component {
	render(){
		return (
       <div>
         <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <ul class="navbar-nav">
					    <li class="nav-item">
					      <a class="nav-link" href="#section1">Section 1</a>
					    </li>
					    <li class="nav-item">
					      <a class="nav-link" href="#section2">Section 2</a>
					    </li>
					    <li class="nav-item">
					      <a class="nav-link" href="#section3">Section 3</a>
					    </li>
					    <li class="nav-item dropdown">
					      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
					        Section 4
					      </a>
					      <div class="dropdown-menu">
					        <a class="dropdown-item" href="#section41">Link 1</a>
					        <a class="dropdown-item" href="#section42">Link 2</a>
					      </div>
					    </li>
          </ul>
         </nav>

       </div>
			);
	}
}


export default Navigation;
