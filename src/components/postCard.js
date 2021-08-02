import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class PostCard extends Component { 
// const PostCard = ({title, date, description, keywords, theme, creator  }) => {
render (props){
  return (
    <div>
      <h2>{this.props.post.title}</h2>
      <p>Date: {this.props.post.date}</p>
      <p>Description: {this.props.post.description}</p>
      <ul>
        <li>{this.props.post.keywords}</li>
      </ul>
      <p>theme: {this.props.post.theme}</p>
      <p>creator: {this.props.post.creator}</p>
      <img src={this.props.post.imageUrl}/>
      <Link to={`/posts/${this.props.post._id}`}>See post</Link>
      <Link to={`/posts/edit/${this.props.post._id}`}>Edit post</Link>

    </div>
  );
}
};

export default PostCard;