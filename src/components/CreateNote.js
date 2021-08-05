import React, { Component } from 'react';
import noteClient from '../lib/noteClient';


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
        this.props.history.push('/notes')
    }
  }

  render() {
   
    return (
      <div className="main">
        <h1>CREATE A NOTE BELOW</h1>
        <div className="main__form-div">
          <form onSubmit={this.handleSubmit}>
            <ul className="main__form-ul">
              <li className="main__form-row">
                <label>Title</label>
                <input type="text" name="title" onChange={this.handleChange}/>
              </li>
              <li className="main__form-row">
                <label>Description</label>
                <textarea className="main__form-textarea-large" type="text" name="content" onChange={this.handleChange}/>
              </li>
              <li className="main__form-btn">
                <button className="btn" type="submit">Create note</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateNote;


