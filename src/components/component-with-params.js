import React, { Component } from 'react';
import postClient from '../lib/posts';

class MyComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: "",
      description: "",
      books: []
    }
  }

  async componentDidMount(){
    // When I have to fetch data from the API BUT USING THE PARAMS I have to get it from this place
    // Note that props.match.params only works when the component is in a route in App.js
    const { postID } = this.props.match.params;
    try {
        // first I get it
        const post = await postClient.getSinglePost(postId);
        // then I upload it to the state to be able to render it
        this.setState({
            post: post
        })
    } catch(error){
        console.log(error)
    }
  }

  render() {
    // And then I paint it regularly or with a map
    return (
      <div>
        <ul>
        {this.state.title}
        {this.state.description}
        <ul>
        {this.state.books.map(item => {
            return <p>{item.name}</p>})}
        </ul>
        </ul>
      </div>
    );
  }
}
}

export default MyComponent;
