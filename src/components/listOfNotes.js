import React, { Component } from 'react';
import noteClient from '../lib/noteClient';
import NoteCard from './noteCard';

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
      <>
      <h1>My Notes</h1>
      <ul>
      {notes.map(item => (
          <NoteCard key={item._id} note={item} />
      ))}
     </ul>
     </>
    )
  }
}

   export default ListOfNotes;