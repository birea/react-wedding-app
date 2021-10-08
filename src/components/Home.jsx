// January 27, 2018
// Homepage

import React, { Component } from 'react';
import homeStyle from '../../style/03-home.css';
import homeDemo from '../../img/home/index';
import {
	Grid,
	Col,
	Row
} from 'react-bootstrap';

const image = {
	name: homeDemo,
	img: '/images/homeDemo.jpg'
}

class Home extends Component {

	render() {
		
		return (
			<div className={ homeStyle }>
				<Grid>
					<Col xs={4} md={4} lg={4}>
						<div className="datetime">
							<h2>Saturday, April 28, 2018</h2>
							<h3>4:00 pm</h3>
						</div>
						<div className="ceremony">
							<h2>Ceremony</h2>
							<h3>Ranchito de Los Cuates</h3>
							<h3>813 Ranchitos Rd. NW</h3>
							<h3>Los Ranchos, NM 87114</h3>
						</div>
						<div className="reception">
							<h2>Reception</h2>
							<h3>El Pinto</h3>
							<h3>10500 4th St. NW</h3>
							<h3>Albuquerque, NM 87114</h3>
						</div>
					</Col>
					<Col xs={8} md={8} lg={8}>
						<div className="homePhoto">
							<img src={ image.img } 
							     alt={ image.name }/>
						</div>
					</Col>
				</Grid>
			</div>
		);
	}
}

export default Home;