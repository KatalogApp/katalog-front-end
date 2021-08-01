import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../providers/AuthProvider";

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
    name: "",
    email: "",
    password: ""
  };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { name, email, password } = this.state;
    this.props.signup({ name, email, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div className="main">
        <h1>K·A·T·A·L·O·G</h1>
        <h3>Inspire yourself</h3>
        <div className="main__form-div">
          <form onSubmit={this.handleFormSubmit}>
            <ul className="main__form-ul">
              <li className="main__form-row">
                <label>Username:</label>
                <input
                  className="main__form-row-input"
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                />
              </li>
              <li className="main__form-row">
                <label>Email:</label>
                <input
                  className="main__form-row-input"
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </li>
              <li className="main__form-row">
                <label>Password:</label>
                <input
                  className="main__form-row-input"
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
              </li>
              <li className="main__form-btn">
                <input className="btn__cta btn" type="submit" value="Sign Up" />
              </li>
            </ul>
          </form>
          <p>
            Already have account?
            <span> <Link to={"/login"}>Login</Link></span>
          </p>
        </div>  
      </div>
    );
  }
}

export default withAuth(Signup);
