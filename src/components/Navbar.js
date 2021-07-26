import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withAuth } from '../providers/AuthProvider';

class Navbar extends Component {
	render() {
		const { user, isLoggedIn, logout } = this.props;
		return (
			<div>
				{isLoggedIn && (
					<>
						<p>Welcome {user.name}</p>
						<button onClick={logout}>Logout</button>
					</>
				)}
					<div>
						<Link to="/login">Login</Link>
						<Link to="/signup">Signup</Link>
						<Link to="/posts/new">Create post</Link>
						<Link to="/user-profile/posts">Home</Link>
					</div>
			</div>
		);
	}
}

export default withAuth(Navbar);
