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
    console.log(this.state)
  };

  handleFileUpload = e => {
    console.log('The file to be uploaded is: ', e.target.files[0]);
 
    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append('imageUrl', e.target.files[0]);
 
    service
      .handleUpload(uploadData)
      .then(response => {
        // console.log('response is: ', response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        this.setState({ imageUrl: response.secure_url });
      })
      .catch(err => {
        console.log('Error while uploading the file: ', err);
      });
  };
 
  // this method submits the form
  // handleSubmit = e => {
  //   e.preventDefault();
 
  //   service
  //     .saveNewImage(this.state.imageUrl)
  //     .then(res => {
  //       console.log('added: ', res);
  //       // here you would redirect to some other page
  //     })
  //     .catch(err => {
  //       console.log('Error while adding the file: ', err);
  //     });
  // };

  handleKeywordsChange = () => {
    const keywords = this.state.keywordsString.split(',');
    return keywords;
  }

  handleSubmit = async (event) => {
    console.log('On submit', this.state)
    event.preventDefault();
    // service
    //  .saveNewImage(this.state)

    // I'm not sure where to add the saveNewImage function
    const keywords = await this.handleKeywordsChange();
    const { title, description, theme , imageUrl } = this.state;
    try {
     
      await postClient.createPost({ title, description, keywords, theme, imageUrl });
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
                <input type="file" onChange={e => this.handleFileUpload(e)} />
            <button type="submit">Create post</button>
        </form>
      </div>
    );
  }
}

export default CreatePost;


