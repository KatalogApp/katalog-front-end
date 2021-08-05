import React, { Component } from 'react';
import postClient from '../lib/postClient';
import service from '../api/service';

class CreatePost extends Component {
  constructor(props){
    super(props);
      this.state = {
      title: "",
      description: "",
      keywordsString: "",
      theme: "",
      imageUrl: ""
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    // console.log(this.state)
  };

  handleFileUpload = async(e) => {
    console.log('The file to be uploaded is: ', e.target.files[0]);
    const uploadData = new FormData();
    uploadData.append('imageUrl', e.target.files[0]);
    await service
      .handleUpload(uploadData)
      .then(response => {
        this.setState({ imageUrl: response.secure_url });
      })
      .then((data) => {
        console.log(this.state)
      })
      .catch(err => {
        console.log('Error while uploading the file: ', err);
      });
  };

  handleSubmit = async (event) => {
    console.log('On submit', this.state)
    event.preventDefault();
    const { title, description, theme , imageUrl, keywordsString } = this.state;
    try {
      const createdPost = await postClient.createPost({ title, description, keywords: keywordsString.split(','), theme, imageUrl });
      console.log(createdPost);
    } catch(error){
        console.log(error)
    } finally {
        this.props.history.push('/user-profile')
    }
  }

  render() {
    return (
      <div className="main">
      <h1>CREATE A POST BELOW</h1>
        <div className="main__form-div">
          <form onSubmit={this.handleSubmit}>
            <ul className="main__form-ul">
              <li className="main__form-row">
                <label>Image:</label>
                <input type="file" onChange={e => this.handleFileUpload(e)} />
              </li>
              <li className="main__form-row">
                <label>Title</label>
                <input type="text" name="title" onChange={this.handleChange}/>
              </li>
              <li className="main__form-row">
                <label>Description</label>
                <textarea type="text" name="description" onChange={this.handleChange}/>
              </li>
              <li className="main__form-row">
                <label>Theme</label>
                <input type="text" name="theme" onChange={this.handleChange}/>
              </li>
              <li className="main__form-row">
                <label>Keywords
                  <p><em>Add keywords separated by commas</em></p>
                </label>
                <textarea type="text" name="keywordsString" onChange={this.handleChange}/>
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



