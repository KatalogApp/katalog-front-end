import React, { Component } from 'react';
import postClient from '../lib/posts';

class MyComponent extends Component {
  constructor(props){
    super(props)
    // I initialize all the states empty that I will need later
    this.state = {
      title: "",
      description: "",
    }
  }

  handleChange = event => {
    // This generic handleChange only works if the "name" of the inputs is exactly the same as 
    // to where they go in the state
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { title, description } = this.state;
    try {
        const createdPost = await postClient.createPost({ title, description });
    } catch(error){
        console.log(error)
    } finally {
        // Route I want to redirect to after creating
        // Note that these are frontend routes
        // This only works if this component is in a <Route/> component on App.js
        this.props.history.push('/home')
    }
  }

  render() {
    // I render an empty form
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>Title</label>
            <input type="text" name="title" onChange={this.handleChange}/>
        </form>
      </div>
    );
  }
}

export default MyComponent;
