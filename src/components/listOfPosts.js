import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import postClient from '../lib/postClient';
//import PostCard from './postCard';

class listOfPosts extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      description: "",
      keywords: [],
      creator: "",
      theme: "",
      date: "",

    };
  }

  async componentDidMount(){
    // When I have to fetch data from the API
    try {
        // first I get it
        const posts = await postClient.getPosts();
        // then I upload it to the state to be able to render it
        this.setState({
            posts: posts
        })
    } catch(error){
        console.log(error)
    }

    render() {
        const { post } = this.state;
        return (        
            <div className="card">
                <div>
                    title : 
                    <b>{post.title}</b>
                </div>
                <div>
                    date : 
                    <b>{post.date}</b>
                </div>
                <div>
                    description : 
                    <b>{post.description}</b>
                </div>
                <ul>
                keywords :
                <li>
                  {post.keyword}
                </li>
                </ul>
                <div>
                    theme : 
                    <p>{post.theme}</p>
                </div>
                <div>
                  creator: 
                  <p>{post.creator}</p>
                </div>
            </div>
        )
    }
}



  // render(){
  //   // And then I paint it regularly or with a map
  //   return (
  //   <ul>
  //     {posts.map(item => (
  //       <li key={item.id}>
  //         <PostCard title={item.title} description={item.description} />
  //       </li>
  //     ))}
  //   </ul>



export default listOfPosts;
