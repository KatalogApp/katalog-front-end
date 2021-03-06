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
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <input type="submit" value="Signup" />
        </form>
        <p>
          Already have account?
          <Link to={"/login"}> Login</Link>
        </p>
      </div>
    );
  }
}

export default withAuth(Signup);
