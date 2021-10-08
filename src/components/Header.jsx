import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap';
import headerStyle from '../../style/02-header.css';
import NavBar from './NavBar';

const Header = () => (
	<div>
		<div className="headerTitle">
			<h1>La Boda de Ivy Calderon & Joe Stowers</h1>
			<h3>Albuquerque, New Mexico</h3>
		</div>
		<NavBar />
	</div>
)

export default Header;
