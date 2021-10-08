// January 27, 2018
// Our Story

import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import ourStoryStyle from '../../style/04-ourstory.css';
import {
	Thanksgiving2017,
	Phoenix2015,
	Easter2017,
	Proposal2017,
	Engagement2017,
	SanFran2017
} from '../../img/ourstory/indexOurStory';

const ivyStory = [
	{
		para1: 'Nuestra historia empezó en Houston una tarde de verano en Junio de 2014.  ' +
		 	   'Quién se iba a imaginar que encontraría al amor de mi vida en una clase de cocina!',
 	    para2: 'I was struck by Ivy\'s stunning beauty and grace the moment I saw her.  She looked amazing in ' + 
 	    	   'a form-fitting tangerine dress with matching scarf.',
 	    img:  '/images/001-Thanksgiving2017.jpg',
 	    name: 'Thanksgiving 2017'
	},
	{
		para1: 'Joe se acercó al final de la clase para pedir mi número. ' + 
		      'Empezamos a salir y el resto es historia . . .',
        para2: 'Well . . . our first date was the best date, EVER!  We started with a Southern-style brunch at '+
               'Ouisie\'s Table in Houston, followed by a stroll through the Menil Museum, a walk (and kiss!) in a park, '+
               'a light dinner, and a gelato gazing at the night lights.  And WOW! did Ivy look beautiful in her ' +
               'white summer dress.',
      	img:  '/images/002-Phoenix2015.jpg',
      	name: 'Phoenix 2015'
	},
	{
		para1: 'Joe me ha enseñado que el verdadero amor se fortalece y crece día a día. A base de detalles, ' +
              'respeto, comprensión y apoyo mutuo. Estos cuatro años han sido intensos, llenos de lecciones ' +
			  'de vida para ambos. Hemos aprendido a amarnos en las buenas y en las malas, en la cercanía y ' +
              'la distancia, en la salud y la enfermedad, en la cima de una montaña y en la quietud de nuestro hogar.',
      	para2: 'The rest is JUST a four-year journey of unimaginable growth together.  Through tough times or smooth sailing, Ivy is my refuge, a fountain ' +
      		   'overflowing with love, kind words, and stand-by-me confidence.',
      	img:  '/images/003-Easter2017.jpg',
      	name: 'Easter 2017'
	},
	{
		para1: 'Estamos infinitamente emocionados de formalizar nuestra unión y compartir con ustedes nuestra dicha.',
		para2: 'Ivy\'s helped me immensely with Spanish; I\'ve kinda taught her to ski; and we\'ve enjoyed a bunch of great ' +
		       'movies, concerts, salsa dancing, and hiking trails together.  Not to mention making some fantastic Saturday brunches together.  ' +
		       ' Now, we are excited to venture forward in life filled with abundant faith, hope, and love.',
		img:  '/images/004-Proposal2017.jpg',
		name: 'Glacier Proposal 2017'
	},
	{
		para1: 'Gracias familia y amigos por ser parte de nuestra vida.  ' +
			   'Los esperamos en Albuquerque para celebrar nuestro amor!!',
	    para2: 'Thank you for celebrating our love . . . as one family, juntos.',
		img:  '/images/005-Engagement2017.jpg',
		name: 'Holding Hands 2017'
	}
]

const ivyStoryDisplay = ivyStory.map((item, index) => {
	return (
		<Row key={ index } className="rowDetail">
			<Col xs={6} md={6} lg={6}>
				<h3>Ivy</h3>
				<h4>{ item.para1 }</h4>
				<h3>Joe</h3>
				<h4>{ item.para2 }</h4>
			</Col>
			<Col xs={6} md={6} lg={6}>
				<img src = { item.img }
				     alt = { item.name } />
			</Col>
		</Row>
	);
});


class OurStory extends Component {

	render() {
		return (
			<div className = { ourStoryStyle }>
				<Grid className = "gridContainer">
					{ ivyStoryDisplay }
				</Grid>
			</div>
		);
	}
}

export default OurStory;