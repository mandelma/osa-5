import React from 'react'

const Login = (props) => {
  return(
    <div>
      <form onSubmit = {props.handleLogin}>
        <h2>Log in to application:</h2>
        <label>Username:<br/>
          <input type = "text"
            value = {props.userName}
            onChange = {props.usernameHandler}>
          </input><br/>
        </label>
        <label>Password:<br/>
          <input type = "password"
            value = {props.password}
            onChange = {props.passwordHandler}>
          </input><br/>
        </label><br></br>

        <button type = "submit">Kirjaudu</button>
      </form><br/>
    </div>
  )
}

export default Login
