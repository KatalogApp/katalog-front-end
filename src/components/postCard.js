import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './postCard.css';

class PostCard extends Component { 
// const PostCard = ({title, date, description, keywords, theme, creator  }) => {
render (props){
  return (
    <li>
    <div className="card">
      <img className="card-img" src={this.props.post.imageUrl}/>
      <div className="card-container">
        <h4>{this.props.post.title}</h4>
        <p>Date: {this.props.post.date}</p>
        <p>Description: {this.props.post.description}</p>
        <ul>
          <li>{this.props.post.keywords}</li>
        </ul>
        <p>theme: {this.props.post.theme}</p>
        <p>creator: {this.props.post.creator}</p>
      <Link to={`/posts/${this.props.post._id}`}>See post</Link>
      <Link to={`/posts/edit/${this.props.post._id}`}>Edit post</Link>
      </div>
    </div>
    </li>
  );
}
};

export default PostCard;