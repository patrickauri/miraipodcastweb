import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Blog from './components/Blog';

function App() {
	return (
		<Router>
			<div className='container'>
				<Header />
				<Switch>
					<Route path='/blog/:id' component={Blog} />
					<Route path='/om'>
						<About />
					</Route>
					<Route path='/kontakt'>
						<Contact />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
