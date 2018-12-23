import React from 'react';
import Networks from './Networks';
class Contact extends React.Component {
	render(){
		return (

			<div>
				<div class="box clearfix">
	        <h2>Contacto</h2>
	        <div class="col-xs-12 col-sm-2">
	          <div id="contact-cal"></div>
	        </div>
	        <div class="col-xs-12 col-sm-2">
	          <div id="contact-phone"></div>
	        </div>
	        <div class="col-xs-12 col-sm-2">
	          <div id="contact-gmail"></div>
	        </div>
	        <div class="col-xs-12 col-sm-2">
	          <div id="contact-maps"></div>
	        </div>
	        <div class="col-xs-12 col-sm-2">
	          <div id="contact-skype"></div>
	        </div>
	         	<div id="contact-info" class="col-xs-12 col-sm-12">     
	        </div>
	      </div> 
	      <Networks />
      </div>
			);
	}
}

export default Contact;