import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './postCard.css';
import '../App.css';
// import postClient from '../lib/postClient';

class PostCard extends Component { 


render (props){
  // eslint-disable-next-line no-lone-blocks
  const { title, description, keywords, theme, date } = this.props.post;
  const formatedDate = date.split('T')[0];
  return (
    <li>
    <div className="card">
      <img className="card-img" src={this.props.post.imageUrl}/>
      <div className="card-container">
        <h4><b>{title}</b></h4>
        <p>{description}</p>
        <ul className="card-display">
          {keywords.map((item) => {
            return <li key={item}>{item}</li>
          })}
        </ul>
        <p><em>{theme}</em></p>
        <p>Created on {formatedDate}</p>
        {/* <p className="card-display">creator: {creator}</p> */}
        <div className="card-button-div">
        <Link className="card-btn btn__cta" to={`/posts/edit/${this.props.post._id}`}>Edit Post</Link>
        <button className="card-btn" onClick={(e) => this.props.onDelete(e, this.props.post._id)}>Delete Post</button>
        </div>
      </div>
    </div>
    </li>
  );
}
};

export default PostCard;