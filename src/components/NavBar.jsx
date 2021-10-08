import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import navbarStyle from '../../style/03-navbar.css';

// styling for active NavLink
const activeStyle = {
	fontWeight: 'bold',
	color: 'rgb(194,24,7)',
	fontFamily: 'Open Sans'
}

class NavBar extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={ navbarStyle }>
				<Button>
					<NavLink
						to='/Home'
						activeStyle={ activeStyle }
					>Home Inicio</NavLink>
				</Button>
				<Button>
					<NavLink
						to='/OurStory'
						activeStyle={ activeStyle }
					>Our Story Historia</NavLink>
				</Button>
				<Button>
					<NavLink
						to='/RSVPForm'
						activeStyle={ activeStyle }
					>RSVP Confirmar</NavLink>
				</Button>
				<Button>
					<NavLink
						to='/YourStay'
						activeStyle={ activeStyle }
					>Your Stay Hoteles</NavLink>
				</Button>
				<Button>
					<NavLink
						to='/ToDo'
						activeStyle={ activeStyle }
					>To Do Diversión</NavLink>
				</Button>
				<Button>
					<NavLink
						to='/ToEat'
						activeStyle={ activeStyle }
					>To Eat Comida</NavLink>
				</Button>
				<Button>
					<NavLink
						to='/Registry'
						activeStyle={ activeStyle }
					>Registry Regalos</NavLink>
				</Button>
				<Button>
					<NavLink
						to='/Admin'
						activeStyle={ activeStyle }
					>Admin</NavLink>
				</Button>
			</div>
		);
	}
}

export default NavBar;