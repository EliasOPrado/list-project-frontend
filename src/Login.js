import React, { Component } from 'react'

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
      }
    
      handleChange(event) {
        this.setState({username: event.target.value});
      }

      handlePassword(event) {
        this.setState({password: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.username + ' Password: ' + this.state.password );
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.username} onChange={this.handleChange} />
              <input type="password" value={this.state.password} onChange={this.handlePassword} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
}

export default Login
