import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    // When I have to fetch data from the API
    try {
        // first I get it
        const books = await postClient.getBooks();
        // then I upload it to the state to be able to render it
        this.setState({
            books: books
        })
    } catch(error){
        console.log(error)
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
        <Link to="/logout"/>
      </div>
    );
  }
}
}

export default MyComponent;
