import React, { Component } from 'react';
import noteClient from '../lib/noteClient';
// import postClient from '../lib/postClient';

class CreateNote extends Component {
  constructor(props){
    super(props);
      this.state = {
      title: "",
      content: "",
      posts: "",
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state)
  };

  handleSubmit = async (event) => {
    console.log('On submit', this.state)
    event.preventDefault();
    const { title, content, posts } = this.state;
    try {
      await noteClient.createNote({ title, content, posts });
    } catch(error){
        console.log(error)
    } finally {
        this.props.history.push('/user-profile')
    }
  }

  render() {
    // const {posts} = postClient.getPosts();
    // I render an empty form
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>Title</label>
            <input type="text" name="title" onChange={this.handleChange}/>
            <label>Description</label>
            <input type="text" name="content" onChange={this.handleChange}/>
            <label>Choose posts:</label>
            {/* <select name="posts" id="posts" multiple>
            <option value="posts">{posts} onChange={this.handleChange}</option>
              </select> */}
            <button type="submit">Create note</button>
        </form>
      </div>
    );
  }
}

export default CreateNote;
