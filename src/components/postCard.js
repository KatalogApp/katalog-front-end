import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import listOfPosts from "./listOfPosts";

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
    </div>
  );
}
};
 
export default PostCard;