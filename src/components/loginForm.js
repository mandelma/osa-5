import React from 'react'

const Login = (props) => {
  return(
    <div>
      <form onSubmit = {props.handleLogin}>
        <h2>Log in to application:</h2>
        <label>Username:<br/>
          <input type = {props.usernameType}
            value = {props.usernameValue}
            onChange = {props.usernameHandler}>
          </input><br/>
        </label>
        <label>Password:<br/>
          <input type = {props.pwType}
            value = {props.pwValue}
            onChange = {props.passwordHandler}>
          </input><br/>
        </label><br></br>

        <button type = "submit">Kirjaudu</button>
      </form><br/>
    </div>
  )
}

export default Login
