import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import AddIcon from '@material-ui/icons/Add'
import AddNoteIcon from '@material-ui/icons/NoteAdd';
import CloseIcon from '@material-ui/icons/Close'
import StartScreen from '../components/SplashScreen';
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
								<span className="material-icons nav__icon"><HomeIcon /></span>
								<span className="nav__text">Home</span>
							</Link>
							<Link className="nav__link" to="/user-profile/edit">
								<span className="material-icons nav__icon"><SettingsIcon /></span>
								<span className="nav__text">Edit profile</span>
							</Link>
							<Link className="nav__link" to="/posts/new">
								<span className="material-icons nav__icon"><AddIcon /></span>
								<span className="nav__text">Create post</span>
							</Link>
							<Link className="nav__link" to="/notes/new">
								<span className="material-icons nav__icon"><AddNoteIcon /></span>
								<span className="nav__text">Create note</span>
							</Link>
							<Link onClick={logout} className="nav__link">
								<span className="material-icons nav__icon"><CloseIcon /></span>
								<span className="nav__text">Logout</span>
							</Link>
						</nav>
					</>
				)}
				{isLoggedOut && (
					<StartScreen />
					)}
			</div>
		);
	}
}

export default withAuth(Navbar);
