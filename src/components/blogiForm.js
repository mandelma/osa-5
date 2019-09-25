import React from 'react'

const Blogi = (props) => {
  return(
    <div>
      <form onSubmit = {props.handleBlogi}>
        <h2>Create new blog</h2>
        <label>Title:<br/>
          <input type = "text"
            value = {props.title}
            onChange = {props.titleHandler}>
          </input><br/>
        </label>
        <label>Author:<br/>
          <input type = "text"
            value = {props.author}
            onChange = {props.authorHandler}>
          </input>
        </label><br/>
        <label>Url:<br/>
          <input type = "text"
            value = {props.url}
            onChange = {props.urlHandler}>
          </input>
        </label><br/>
        <label>Likes:<br/>
          <input type = "text"
            value = {props.likes}
            onChange = {props.likesHandler}>
          </input>
        </label><br/><br/>
        <button type = "submit">Create blog</button>
      </form>
    </div>
  )
}

export default Blogi