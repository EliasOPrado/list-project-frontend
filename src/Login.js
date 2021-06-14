import React, { Component } from "react";
import UserList from "./UserList";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    let url = "http://127.0.0.1:8000/api-token-auth/";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        this.setState({ token: data.token });
      });
    event.preventDefault();
  }

  logout() {
    localStorage.removeItem("token");
    this.setState({ token: null });
  }
  render() {
    let token = localStorage.getItem("token");
    if (!token) {
      return (
        <div class="row justify-content-center">
          <div class="col-lg-8 col-xl-7">
          <h2>Login</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-floating mb-3">
                <input
                className="form-control"
                  placeholder="Add your username"
                  type="text"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-floating mb-3">
                <input
                className="form-control"
                  placeholder="Add your password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handlePassword}
                />
              </div>

              <button
                className="btn btn-primary btn-xl"
                type="submit"
              >
                Log in
              </button>
            </form>
          </div>
        </div>
      );
    } else if (token === undefined) {
      alert("Your username or password is wrong.");
    } else {
      return (
        <div>
          <UserList />

          
          <button className="btn btn-primary btn-xl" onClick={() => this.logout()}>Logout</button>
        </div>
      );
    }
  }
}

export default Login;
