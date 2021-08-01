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
      <div className="main">
      <h1>CREATE A POST BELOW</h1>
        <div className="main__form-div">
          <form onSubmit={this.handleSubmit}>
            <ul className="main__form-ul">
              <li className="main__form-row">
                <label>Title</label>
                <input type="text" name="title" onChange={this.handleChange}/>
              </li>
              <li className="main__form-row">
                <label>Description</label>
                <input type="text" name="description" onChange={this.handleChange}/>
              </li>
              <li className="main__form-row">
                <label>Theme</label>
                <input type="text" name="theme" onChange={this.handleChange}/>
              </li>
              <li className="main__form-row">
                <label>Keywords
                  <p><em>Add keywords separated by commas</em></p>
                </label>
                <input type="text" name="keywordsString" onChange={this.handleChange}/>
              </li>
              <li className="main__form-btn">
                <button className="btn" type="submit">Create post</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default CreatePost;
