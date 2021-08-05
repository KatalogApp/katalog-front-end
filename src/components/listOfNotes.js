import React, { Component } from 'react';
import noteClient from '../lib/noteClient';
import NoteCard from './noteCard';
import { Link } from 'react-router-dom';
import '../App.css';

class ListOfNotes extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: []
    };
  }

  async componentDidMount(){
    try {
        const notes = await noteClient.getNotes();
        this.setState({
            notes: notes.notes
        })
    } catch(error){
        console.log(error)
    }
  }
   
  render() {
  const { notes } = this.state;
    return (
      <div className="postlist-main">
        <h1>My Notes</h1>
        <ul className="card-ul">
        {notes.map(item => (
            <NoteCard key={item._id} note={item} />
        ))}
        </ul>
        <div className="center-btn">
          <Link className="btn" to={`/note/create`}>Create Note</Link>
        </div>
      </div> 
    )
  }
}

   export default ListOfNotes;