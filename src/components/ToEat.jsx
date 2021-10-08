// January 28, 2018
// rev. February 18, 2018
// To Eat

import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import toEatStyle from '../../style/09-toeat.css';
import toEatArray from '../../data/restaurantsData';
import toEatImages from '../../img/toeat/indexToEat';

const ToEat = () => {

	const toEatItems = toEatArray.map((item, index) => {
		return (
			<Row key={ index } className="rowDetail">
				<Col xs={4} md={4} lg={4}>
					<div className="photoDetail">
						<a href={ item.url } target="_blank">
							<img src = { item.img }
							     alt = { item.name } />
				     	</a>
					</div>
				</Col>
				<Col xs={8} md={8} lg={8}>
					<div className="toEatDetail">
						<h2 className="weblink">
							<a href={ item.url } target="_blank" >
								{ item.name }
							</a>
						</h2>
						<h3>{ item.location }</h3>
						<h3>{ item.address1 }</h3>
						<h3>{ item.address2 }</h3>
						<h3>{ item.phone }</h3>
						<br/>
						<h4>{ item.note1 }</h4>
						<h4>{ item.note2 }</h4>
					</div>
				</Col>
			</Row>
		);
	});

	return (
		<div className={ toEatStyle }>
			<div className = "toEatHeader">
				<h3>A taste of New Mexico . . . ¡Buen Provecho!</h3>
			</div>
			<Grid className = "gridContainer">
				{ toEatItems }
			</Grid>
		</div>
	);
}

export default ToEat;