import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import { withAuth } from '../providers/AuthProvider';

class Navbar extends Component {
	render() {
		const { user, isLoggedIn, isLoggedOut, logout } = this.props;
		return (
			<div>
				{isLoggedIn && (
					<>
						<p>Welcome {user.name}</p>
						<nav className="nav">
							<Link className="nav__link" to="/user-profile">
								<span className="material-icons nav__icon">home</span>
								<span className="nav__text">Home</span>
							</Link>
							<Link className="nav__link" to="/userProfile/edit">
								<span className="material-icons nav__icon">edit</span>
								<span className="nav__text">Edit profile</span>
							</Link>
							<Link className="nav__link" to="/posts/new">
								<span className="material-icons nav__icon">add</span>
								<span className="nav__text">Create post</span>
							</Link>
							<Link onClick={logout} className="nav__link">
								<span className="material-icons nav__icon">logout</span>
								<span className="nav__text">Logout</span>
							</Link>
						</nav>
					</>
				)}
				{isLoggedOut && (
					<div>
						<Link className="btn" to="/login">Login</Link>
						<Link className="btn" to="/signup">Signup</Link>
					</div>
					)}
			</div>
		);
	}
}

export default withAuth(Navbar);
