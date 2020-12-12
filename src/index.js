import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/tailwind.css';
import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Post from './components/Post';
import Project from './components/Project';
import NavBar from './components/NavBar';

const App = () => {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/about'>
					<About />
				</Route>
				<Route path='/post/:slug'>
					<SinglePost />
				</Route>
				<Route path='/post'>
					<Post />
				</Route>
				<Route path='/project'>
					<Project />
				</Route>
			</Switch>
		</Router>
	);
};

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
