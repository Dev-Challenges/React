import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import '../containers/App.css';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
	return {
		searchfield: state.searchRobots.searchfield,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSearchChange: event => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots()),
	};
};

function App({ searchfield, onSearchChange, robots, onRequestRobots, isPending, error }) {
	useEffect(() => {
		onRequestRobots();
	}, [onRequestRobots]);

	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	});

	return (
		<div className='tc'>
			<h1 className='f1'>RoboFriends</h1>
			<SearchBox searchChange={onSearchChange} />
			{isPending ? (
				<h1>Loading...</h1>
			) : error ? (
				<h1>{error}</h1>
			) : (
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			)}
		</div>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
