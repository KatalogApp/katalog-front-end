// componentDidMount fetches the data from the postClient (the id is in the params) !

// and puts the existing data in the state (like the single post so far)   !
// we render the data of the state 

// handleChange changes the data of the state

// handlesubmit sends changes to the backend through the postClient
// and redirects to whichever view you want to send the user

// you have all of these things in other components, you have to mix them

// make sure you add the route to this component in App.js

// CLUE: the link to this component doesn't go in the navbar, it goes in single component, along the delete button but instead is a <Link>


import React, { Component } from 'react';
import postClient from '../lib/postClient';


class EditPost extends Component { 
  constructor(props){
    super(props);
    this.state = {
      title: "",
      description : "",
      theme: ""
    };
  }

  componentDidMount = async() => { 
    const { postId } = this.props.match.params;
    // const {title, description, theme, keywords} = ; //
    try {
      // getPost(id)
      const post = await postClient.getSinglePost( postId );
      this.setState({
       title: post.title,
       description: post.description,
       theme: post.theme
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

  handleKeywordsChange = () => {
    const keywords = this.state.keywordsString.split(',');
    return keywords;
  }

  handleSubmit = async (event) => {
    console.log('On submit', this.state)
    event.preventDefault();
    const { postId } = this.props.match.params;
    const keywords = await this.handleKeywordsChange();
    const { title, description, theme } = this.state;
    try {
      await postClient.editPost({ title, description, keywords, theme }, postId);
    } catch(error){
        console.log(error)
    } finally {
        this.props.history.push('/user-profile')
    }
  }

render (props){
  const { title, description, theme, keywords} = this.state;
  return (
     <div>
        <h2>EDIT POST</h2>
        <form onSubmit={this.handleSubmit}>
            <label>Title</label>
            <input type="text" name="title" value={title} onChange={this.handleChange}/>
            <label>Description</label>
            <input type="text" name="description" value={description} onChange={this.handleChange}/>
            <label>Theme</label>
            <input type="text" name="theme" value={theme} onChange={this.handleChange}/>
            <label>Keywords</label>
            <p>Add keywords separated by commas</p>
            <input type="text" name="keywordsString" value={keywords} onChange={this.handleChange}/>
            <button type="submit" >Edit post</button>
        </form>
      </div>
  );
}
};
 
export default EditPost;