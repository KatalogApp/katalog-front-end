import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './postCard.css';
import '../App.css';

class PostCard extends Component { 
// const PostCard = ({title, date, description, keywords, theme, creator  }) => {
render (props){
  return (
    <li>
    <div className="card">
      <img className="card-img" src={this.props.post.imageUrl}/>
      <div className="card-container">
        <h4><b>{this.props.post.title}</b></h4>
        <p>{this.props.post.description}</p>
        <ul className="card-display">
          <li>{this.props.post.keywords}</li>
        </ul>
        <p><em>{this.props.post.theme}</em></p>
        <p>{this.props.post.date}</p>
        <p className="card-display">creator: {this.props.post.creator}</p>
        <div className="card-button-div">
        <Link className="card-btn btn__cta" to={`/posts/edit/${this.props.post._id}`}>Edit Post</Link>
        <Link className="card-btn" to={`/posts/${this.props.post._id}`}>Delete Post</Link>
        </div>
      </div>
    </div>
    </li>
  );
}
};

export default PostCard;