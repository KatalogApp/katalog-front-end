import React, { Component } from 'react';
import postClient from '../lib/postClient';


class EditPost extends Component { 
  constructor(props){
    super(props);
    this.state = {
      title: "",
      description : "",
      theme: "",
      keywords: "",
    };
  }

  componentDidMount = async() => { 
    const { postId } = this.props.match.params;
    try {
      const post = await postClient.getSinglePost( postId );
      this.setState({
       title: post.title,
       description: post.description,
       theme: post.theme,
       keywords: post.keywords.toString()
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
    event.preventDefault();
    const { postId } = this.props.match.params;
    // const keywords = await this.handleKeywordsChange();
    const { title, description, theme, keywords } = this.state;
    try {
      await postClient.editPost({ title, description, theme, keywords: keywords.split(',') }, postId);
    } catch(error){
        console.log(error)
    } finally {
        this.props.history.push('/user-profile')
    }
  }


  render (props){
    const { title, description, theme, keywords } = this.state;
    return (
      <div className="main">
          <h1>EDIT POST BELOW</h1>
          <div className="main__form-div">
            <form onSubmit={this.handleSubmit}>
              <ul className="main__form-ul">
                <li className="main__form-row">
                  <label>Title</label>
                  <input type="text" name="title" value={title} onChange={this.handleChange}/>
                </li>
                <li className="main__form-row">
                  <label>Description</label>
                  <input type="text" name="description" value={description} onChange={this.handleChange}/>
                </li>
                <li className="main__form-row">
                  <label>Theme</label>
                  <input type="text" name="theme" value={theme} onChange={this.handleChange}/>
                </li>
                <li className="main__form-row">
                  <label>Keywords</label>
                  <input type="text" name="keywords" value={keywords} onChange={this.handleChange}/>
                </li>
                <li className="main__form-btn">
                  <button className="btn" type="submit">Edit post</button>
                </li>
              </ul>
            </form>
          </div>
        </div>
    );
  }

};
 
export default EditPost;