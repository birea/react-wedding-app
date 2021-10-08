import React, { Component } from 'react';
import Header from '../components/Header';
import Main from './Main';
import mainStyle from '../../style/01-main.css';

class App extends Component {

	render() {
    	return (
      		<div className="app">
      			<Header />
            	<Main />
  	  		</div>
    	);
  	}
}

export default App;