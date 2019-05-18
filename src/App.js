import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Header />
					<div>
						<Switch>
							<Route exact path="/" component={Dashboard} />
							<Route path="/new-product-form" component={Form} />
							<Route path="/edit-product-form/:id" component={Form} />
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;