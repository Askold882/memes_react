import React, { Component } from 'react';
import {createSession} from '../resources/resources';
import { createUser } from '../resources/resources';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';

import '../css/sign_reg.scss';

class SigninRegister extends Component {
  constructor() {
    super()
    this.credentials = {
      username: ' ',
      password: ' ',
      password_confirmation: ' '
    }
  }

 logIn() {
    createSession({username: this.username, password: this.password})
    .then(res => { 
      if (( res.status = 200)) {
        localStorage.setItem('user_token', res.data.token)
        this.props.dispatch(push('/profile'))
      }
    })
    .catch(err => {
      if ((err.response.status = 401)) {
       alert('error')
      }
    })
  }

  signUp() {
    if (this.credentials.password !== this.credentials.password_confirmation){
      toastr.error("Password fields does not match!")
    } else {
      createUser({user: this.credentials, back_url: 'http://localhost:3000/'})
      .then(res => {
        toastr.success(res.data.message)
        this.props.dispatch(push('profile'))
      })
      .catch(err => {
        toastr.error(err.response.data.error)
      })
    }
  }

  render() {
    return (
    <form className='sign_reg'>

      <h2>Welcome to the club, buddy!</h2>

      <div className='container'>

      {/*////// SIGN_IN //////*/}
      <h3>Sign in</h3>
      <div className="container">
        <label htmlFor="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter username" name="username" required onChange={(e)=>{this.username=e.target.value}} />
      </div>
      <div className="container">
        <label htmlFor="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required onChange={(e)=>{this.password=e.target.value}}/>
      </div>
      <div className="container">
        <button type="button" className="signbtn" onClick={()=>{this.logIn()}}>Login</button>
      </div>
      </div>

      <div className='container'>
      {/*////// REGISTER //////*/}
      <h3>Register</h3>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <div className='container'>
            <label htmlFor="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter your username" name="username" required  onChange={(e) => {this.credentials.username = e.target.value}}/>
          </div>
          <div className='container'>
            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required onChange={(e) => {this.credentials.password = e.target.value}}/>
          </div>
          <div className='container'>
            <label htmlFor="psw"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required  onChange={(e) => {this.credentials.password_confirmation = e.target.value}} />
          </div>
          <div className='container'>
          <button type="button" className="registerbtn" onClick={() => {this.signUp()}} >Register</button>
          </div>
        </div>

    </form>
    )
  }
}

export default connect()(SigninRegister);