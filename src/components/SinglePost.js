import React, { Component } from 'react';
import postClient from '../lib/postClient';

class SinglePost extends Component {
  constructor(props){
    super(props);
    this.state = {
      post: {}
    }
  }

  componentDidMount = async() => {
    const { postId } = this.props.match.params;
    try {
      const post = await postClient.getSinglePost(postId);
      this.setState({
        post
      })
    } catch(error) {
      console.log(error)
    }
  };

  render() {
    const { post } = this.state;
    return (
      <>
        <div>
          <h1>{post.title}</h1>
          <p>Theme: {post.theme}</p>
          <p>Description: {post.description}</p>
        </div>
      </>
    );
  }
};

export default SinglePost;
