import React, { Component } from 'react';
import postClient from '../lib/postClient';
import PostCard from './postCard';

class listOfPosts extends Component {
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
   
  render() {
  const { posts } = this.state;
    return (
      <>
      <h1>List os posts</h1>
      <ul>
      {posts.map(item => (
          <PostCard key={item._id} post={item} />
      ))}
     </ul>
     </>
    )
  }
}

   export default listOfPosts;