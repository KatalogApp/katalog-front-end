import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { withAuth } from './providers/AuthProvider';
import listOfPosts from './components/listOfPosts';
import SinglePost from './components/SinglePost';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';

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
					<PrivateRoute path ="/user-profile/posts/:postId" component={SinglePost}/>
					<PrivateRoute path ="/user-profile" component={listOfPosts}/>
					<PrivateRoute path ="/user-profile/posts/edit/:postId" component={EditPost}/>
				</Switch>
			</div>
		);
	}
}

export default withAuth(App);
