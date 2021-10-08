// January 28, 2018
// rev. February 10, 2018
// To Do

import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import toDoImages from '../../img/todo/indexTodos';
import toDoStyle from '../../style/07-todo.css';
import toDoArray from '../../data/todoData';

const ToDo = () => {

	const toDoItems = toDoArray.map((item, index) => {
		return (
			<Row key={ index } className="rowDetail">
				<Col xs={5} md={5} lg={5}>
					<div className="photoDetail">
						<a href={ item.url } target="_blank">
							<img src = { item.img }
							     alt = { item.name } />
				     	</a>
					</div>
				</Col>
				<Col xs={7} md={7} lg={7}>
					<div className="toDoDetail">
						<h2>
							<a href={ item.url } target="_blank" className="weblink">
								{ item.name }
							</a>
						</h2>
					
						<h3>{ item.location }</h3>
						<h3>{ item.address1 }</h3>
						<h3>{ item.address2 }</h3>
						<h3>{ item.phone }</h3>
						<br/>
						<h4>{ item.note }</h4>
						<h4>{ item.cost1 }</h4>
						<h4>{ item.cost2 }</h4>
					</div>
				</Col>
			</Row>
		);
	});

	return (
		<div className={ toDoStyle }>
			<div className = "toDoHeader">
				<h3>Albuquerque offers an abundance of fun experiences!<br/><br/>
					¡Hay una abundancia de diversiones y entretenimiento en Albuquerque!
				</h3>
			</div>
			<Grid className = "gridContainer">
				{ toDoItems }
			</Grid>
		</div>
	)
}

export default ToDo;