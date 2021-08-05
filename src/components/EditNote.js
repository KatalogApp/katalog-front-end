
import React, { Component } from 'react';
import noteClient from '../lib/noteClient';


class EditNote extends Component { 
  constructor(props){
    super(props);
    this.state = {
      title: "",
      content : "",
    };
  }

  componentDidMount = async() => { 
    const { noteId } = this.props.match.params;
   
    try {
     
      const note = await noteClient.getSingleNote( noteId );
      this.setState({
       title: note.title,
       content: note.content,
  
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
    console.log('On submit', this.state)
    event.preventDefault();
    const { noteId } = this.props.match.params;
    const { title, content } = this.state;
    try {
      await noteClient.editNote({ title, content }, noteId);
    } catch(error){
        console.log(error)
    } finally {
        this.props.history.push('/notes')
    }
  }

render (props){
  const { title, content} = this.state;
  return (
     <div className="main">
        <h1>EDIT NOTE</h1>
        <div className="main__form-div">
          <form onSubmit={this.handleSubmit}>
            <ul className="main__form-ul">
              <li className="main__form-row">
                <label>Title</label>
                <input type="text" name="title" value={title} onChange={this.handleChange}/>
              </li>
              <li className="main__form-row">
                <label>Content</label>
                <input type="text" name="description" value={content} onChange={this.handleChange}/>
              </li>
              <li className="main__form-btn">
                  <button className="btn" type="submit" >Edit note</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
  );
}
};
 
export default EditNote;