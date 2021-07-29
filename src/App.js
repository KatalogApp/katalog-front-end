import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { withAuth } from './providers/AuthProvider';
import ListOfPosts from './components/listOfPosts';
import SinglePost from './components/SinglePost';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import ListOfNotes from './components/listOfNotes';
import EditNote from './components/EditNote';


class App extends Component {
	render() {
		const { isLoading } = this.props;
		if (isLoading) {
			return <div>loading ... </div>;
		}
		return (
			<div className="container">
				<h1>Basic React Authentication</h1>
				<Navbar />
				<Switch>
					<AnonRoute path="/signup" component={Signup} />
					<AnonRoute path="/login" component={Login} />
					<PrivateRoute path="/private" component={Private} />
					<PrivateRoute path="/posts/new" component={CreatePost}/>
					<PrivateRoute path ="/user-profile/posts/edit/:postId" component={EditPost}/>
					<PrivateRoute path ="/user-profile/posts/:postId" component={SinglePost}/>
					<PrivateRoute path ="/user-profile" component={ListOfPosts}/>
					<PrivateRoute path ="/user-profile/notes/edit/:postId" component={EditNote}/>
					<PrivateRoute path ="/user-profile/notes/:postId" component={SinglePost}/>
					<PrivateRoute path ="/user-profile/notes" component={ListOfNotes}/>
				</Switch>
			</div>
		);
	}
}

export default withAuth(App);
