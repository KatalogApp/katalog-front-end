import React, { Component } from 'react';
import postClient from '../lib/postClient';
import PostCard from './postCard';

import { withAuth } from '../providers/AuthProvider';

class ListOfPosts extends Component {

  constructor(props){
    super(props);
    this.state = {
      posts: []
    };
  }

  async componentDidMount(){
    try {
        const posts = await postClient.getPosts();
        this.setState({
            posts: posts.posts
        })
    } catch(error){
        console.log(error)
    }
  }

  handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      const deletedPost = await postClient.deletePost(id);
      console.log(deletedPost)
      const postIndex = this.state.posts.indexOf(deletedPost);
      this.setState({
        posts: [...this.state.posts].splice(postIndex, 1)
      })
    } catch(error){
      console.log(error);
    } finally {
      this.props.history.push('/user-profile');
    }
  }
   
  render() {
  const { user } = this.props;
  const { posts } = this.state;
    return (
      <>
      <br></br>
      <h1>{user.name}&apos;s Posts</h1>
      {posts.length === 0 ? <p>Start creating posts and inspiring yourself</p> : (
      <ul className="card-ul">
      {posts.map(item => (
          <PostCard className="list-item" key={item._id} post={item} onDelete={(e, id) => this.handleDelete(e, id)}/>
      ))}
     </ul>

      )}
     </>
    )
  }
}


   export default withAuth(ListOfPosts);

