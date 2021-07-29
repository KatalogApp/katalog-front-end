import React, { Component } from 'react';
// import postClient from '../lib/postClient';
import noteClient from '../lib/noteClient';


class SingleNote extends Component {
  constructor(props){
    super(props);
    this.state = {
      note: {}
    }
  }

  componentDidMount = async() => {
    const { noteId } = this.props.match.params;
    try {
      const note = await noteClient.getSingleNote(noteId);
      this.setState({
        note
      })
    } catch(error) {
      console.log(error)
    }
  };

  handleDelete = async() => {
    const { noteId } = this.props.match.params;
    try {
      await noteClient.deleteNote(noteId);
    } catch(error) {
      console.log(error)
    } finally {
      this.props.history.push('/user-profile')
    }
  }

  render() {
    const { note } = this.state; 
    return (
      <>
        <div>
          <h1>{note.title}</h1>
          <p>Content: {note.content}</p>
      
          <button onClick={this.handleDelete}>Delete this note</button>
        </div>
        
      </>
    );
  }
};

export default SingleNote;
