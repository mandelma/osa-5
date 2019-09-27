import React from 'react'

const Blogi = (props) => {
  return(
    <div>
      <form onSubmit = {props.handleBlogi}>
        <h2>Create new blog</h2>
        <label>Title:<br/>
          <input type = {props.titleType}
            value = {props.title}
            onChange = {props.titleHandler}>
          </input><br/>
        </label>
        <label>Author:<br/>
          <input type = {props.authorType}
            value = {props.author}
            onChange = {props.authorHandler}>
          </input>
        </label><br/>
        <label>Url:<br/>
          <input type = {props.urlType}
            value = {props.url}
            onChange = {props.urlHandler}>
          </input>
        </label><br/>
        <label>Likes:<br/>
          <input type = {props.likesType}
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