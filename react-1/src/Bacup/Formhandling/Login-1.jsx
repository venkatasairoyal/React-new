import React, { Component } from 'react'

export class Login extends Component {
  state ={
    emailId: "",
    password:""
  }
  emailHandler=(event)=>{
    this.setState({emilId:event.target.value})
  }
  passwordHandler =(event)=>{
    this.setState({password:event.target.value})
    submitHandler=(event)=>{
      console.log(this.state)
      event.preventDefault()
    }
  }
  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.submitHandler}>
          <label>Email Id</label>
          <input type="text" onChange={this.emailHandler} /><br />
          <label>password</label>
          <input type="text" onChange={this.passwordHandler} /><br />
          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}

export default Login