import React from 'react';
import { Link } from 'react-router-dom';

class StartScreen extends React.Component {
    state = {
      showDiv: true,
    }


  render() {
    const HandleChange = e => {
      this.setState({showDiv:false})
    }
    return (
      this.state.showDiv?
        <div className="main">
          <h1>K·A·T·A·L·O·G</h1>
          <h3>Inspire yourself</h3>
          <div className="start-main">
          <Link className="btn btn__cta btn-start" to="/login" onClick={HandleChange}>Login</Link>
          <Link className="btn btn__cta btn-start" to="/signup" onClick={HandleChange}>Signup</Link>
          </div>
        </div>
      :null
    )
  }
}

export default StartScreen 