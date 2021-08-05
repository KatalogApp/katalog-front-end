import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class NoteCard extends Component { 
// const PostCard = ({title, date, description, keywords, theme, creator  }) => {
render (props){
    
  return (
    <li>
      <div className="card">
        <div className="card-container">
          <h3 id="start-h3">{this.props.note.title}</h3>
          <p>Content: {this.props.note.content}</p>
          <p>Date: {this.props.note.date.substr(0, 10)}</p>
          <div className="card-button-div">
            <Link className="card-btn btn__cta" to={`/notes/edit/${this.props.note._id}`}>Edit Note</Link>
            <Link className="card-btn" to={`/notes/${this.props.note._id}`}>Delete Note</Link>
          </div>
        </div>
      </div>
    </li>
  );
}
};

export default NoteCard;