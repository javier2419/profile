import React from 'react';
import {Link} from 'react-router-dom';
import {Carrousel} from 'react-bootstrap';
import dog from '../images/dog.png';

class CarrouselObba extends React.Component {
	render(){
		return (
				<div>
					<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
					    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
					    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
					    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
           </ol>
           <div class="carousel-inner">
           		<div class="carousel-item active">
           			<img className="small-img" src={dog} />
           		</div>
           </div>
          </div>
				</div>
			);
	}
}

export default CarrouselObba;
