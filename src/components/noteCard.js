import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class NoteCard extends Component { 
// const PostCard = ({title, date, description, keywords, theme, creator  }) => {
render (props){
  return (
    <div>
      <h2>{this.props.note.title}</h2>
      <p>Content: {this.props.note.content}</p>
      <ul>
        <li>{this.props.note.post.title}</li>
      </ul>
      <Link to={`/user-profile/notes/${this.props.note._id}`}>See Note</Link>
      <Link to={`/user-profile/notes/edit/${this.props.note._id}`}>Edit Note</Link>

    </div>
  );
}
};

export default NoteCard;