import React, { Component } from 'react';
import postClient from '../lib/postClient';

class CreatePost extends Component {
  constructor(props){
    super(props);
      this.state = {
      title: "",
      description: "",
      keywordsString: "",
      theme: "",
    }
  }

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
    const keywords = await this.handleKeywordsChange();
    const { title, description, theme } = this.state;
    try {
      await postClient.createPost({ title, description, keywords, theme });
    } catch(error){
        console.log(error)
    } finally {
        this.props.history.push('/user-profile')
    }
  }

  render() {
    // I render an empty form
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>Title</label>
                <input type="text" name="title" onChange={this.handleChange}/>
            <label>Description</label>
                <input type="text" name="description" onChange={this.handleChange}/>
            <label>Theme</label>
                <input type="text" name="theme" onChange={this.handleChange}/>
            <label>Keywords</label>
            <p>Add keywords separated by commas</p>
                <input type="text" name="keywordsString" onChange={this.handleChange}/>
            <label>Image:</label>
                <input type="file" name="imageUrl" id="imageUrl" />
            <button type="submit">Create post</button>
        </form>
      </div>
    );
  }
}

export default CreatePost;
