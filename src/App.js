import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import TopBodyBar from './components/TopBodyBar';
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
import CreateNote from './components/CreateNote';
import SingleNote from './components/SingleNote';


class App extends Component {
	render() {
		const { isLoading } = this.props;
		if (isLoading) {
			return <div>loading ... </div>;
		}
		return (
			<div className="container">
				<TopBodyBar />
				<Navbar />
				<Switch>
					<AnonRoute path="/signup" component={Signup} />
					<AnonRoute path="/login" component={Login} />
					<PrivateRoute path="/private" component={Private} />
					<PrivateRoute path="/posts/new" component={CreatePost}/>

					<PrivateRoute path ="/posts/edit/:postId" component={EditPost}/>
					<PrivateRoute path ="/posts/:postId" component={SinglePost}/>
					<PrivateRoute path ="/user-profile" component={ListOfPosts}/>
					<PrivateRoute path ="/notes/edit/:noteId" component={EditNote}/>
					<PrivateRoute path ="/notes/:noteId" component={SingleNote}/>
					<PrivateRoute path ="/note/create" component={CreateNote}/>
					<PrivateRoute path ="/notes" component={ListOfNotes}/>
				</Switch>
			</div>
		);
	}
}

export default withAuth(App);
