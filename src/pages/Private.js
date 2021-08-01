import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class Private extends Component {
	render() {
		return (
			<>
			<Navbar />
			<div>
				<h1>Welcome username</h1>
			</div>
			</>
		);
	}
}

export default Private;
