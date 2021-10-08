// Registry Component
// March 5, 2018

import React, { Component } from 'react';
import registryStyle from '../../style/10-registry.css';
import bbblogo from '../../img/registry/index';

const Registry = () => {

	return (
		<div className={ registryStyle }>
			<div className = "registryHeader">
				<h3>
					Our Registry
				</h3>
			</div>
			<div className = "registryDetail">
				<h2>
					Your presence is our gift!
				</h2>
				<h3>
					If you would like to give a gift, we registered at 
					Bed Bath & Beyond.
				</h3>
				<h3 className='reglink'>
					<a href='http://bit.ly/2FXICqi' target='_blank' >
						Registry Id: 545659140
					</a>
				</h3>
				<h4 className='weblink'>
					<a href='http://bit.ly/2FXICqi' target='_blank' >
						<img src='/images/bbblogo.jpg'
						     alt='Bed Bath & Beyond' />
					</a>
				</h4>
			</div>
		</div>
	);
}

export default Registry;