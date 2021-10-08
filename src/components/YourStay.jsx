// January 28, 2018
// Your Stay Component

import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import yourstayStyle from '../../style/06-yourstay.css';
import hotelsImages from '../../img/hotels/indexPhotos';
import hotelsArray from '../../data/hotelsData';

const YourStay = () => {

	const hotelItems = hotelsArray.map((hotel,index) => {
		return (
			<Row key={ index } className="rowDetail">
				<Col xs={5} md={5} lg={5}>
					<div className="photoDetail">
						<a href={ hotel.url } target="_blank">
							<img
							     src = { hotel.img }
							     alt = { hotel.name } />
					    </a>
				    </div>
				</Col>
				<Col xs={7} md={7} lg={7}>
					<div className="hotelDetail">
						<h2>
							<a href= { hotel.url } target="_blank" className="weblink">
								{ hotel.name }
							</a>
						</h2>			
						<h3>{ hotel.address1 }</h3>
						<h3>{ hotel.address2 }</h3>
						<h3>{ hotel.phone }</h3>
						<br/>
						<h4>{ hotel.distance }</h4>
						<h4>{ hotel.note1 }</h4>
						<h4>{ hotel.note2 }</h4>
					</div>
				</Col>
			</Row>
		);
	});

	return (
		<div className={ yourstayStyle }>
			<Grid className = "gridContainer">
				{ hotelItems }
			</Grid>
		</div>
	);
}

export default YourStay;