
import React, { Component } from 'react';
import noteClient from '../lib/noteClient';


class EditNote extends Component { 
  constructor(props){
    super(props);
    this.state = {
      title: "",
      content : "",
      posts: "",
    };
  }

  componentDidMount = async() => { 
    const { noteId } = this.props.match.params;
   
    try {
     
      const note = await noteClient.getSingleNote( noteId );
      this.setState({
       title: note.title,
       content: note.content,
       posts: note.posts
      })
    } catch(error) {
      console.log(error)
    } finally {
      console.log(this.state)
    }
  };

handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state)
  };


  handleSubmit = async (event) => {
    console.log('On submit', this.state)
    event.preventDefault();
    const { noteId } = this.props.match.params;
    const { title, content, posts } = this.state;
    try {
      await noteClient.editNote({ title, content, posts }, noteId);
    } catch(error){
        console.log(error)
    } finally {
        this.props.history.push('/user-profile')
    }
  }

render (props){
  const { title, content, posts} = this.state;
  return (
     <div>
        <h2>EDIT NOTE</h2>
        <form onSubmit={this.handleSubmit}>
            <label>Title</label>
            <input type="text" name="title" value={title} onChange={this.handleChange}/>
            <label>Content</label>
            <input type="text" name="description" value={content} onChange={this.handleChange}/>
            <label>Posts</label>
            <input type="text" name="keywordsString" value={posts} onChange={this.handleChange}/>
            <button type="submit" >Edit note</button>
        </form>
      </div>
  );
}
};
 
export default EditNote;