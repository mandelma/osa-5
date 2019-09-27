import React, { useState, useEffect } from 'react'
import blogService from './services/blogs'
import loginService from './services/login'
import './index.css'
import Login from './components/loginForm'
import Blogi from './components/blogiForm'
import Blog from './components/Blog'
import Notification from './components/Notification'
import Togglable from './components/Togglable'

import { useField } from './hooks'

const App = () => {

  const username = useField('text')
  const salasana = useField('password')

  const title = useField('text')
  const author = useField('text')
  const url = useField('text')
  const likes = useField('text')

  const [message, setMessage] = useState(null)
  const [errMessage, setErrMessage] = useState(null)
  const [user, setUser] = useState(null)
  const [blogs, setBlogs] = useState([])

  const blogFormRef = React.createRef()

  useEffect(() => {
    blogService.getAll()
      .then(response => setBlogs(response))
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if(loggedUserJSON){
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const readBlogs = () => blogs.map(blog =>
    <Blog
      key = {blog.title}
      blog = {blog}
      userName = {user.username}
      blogiUserName = {blog.user.username}
      addLike = {() => addLike(blog)}

      removeBlog = {() => removeHandler(blog)}
    />
  )

  const removeHandler = async (item) => {
    try{
      if(window.confirm(`remove blog ${item.title} by ${item.author}`)){
        await blogService.remove(item.id)
        setBlogs(blogs.filter(blog => blog.id !== item.id))
      }
    }catch(exception){
      console.log('Error:', exception)
    }
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    try{
      const user = await loginService.login({
        username: username.value,
        password: salasana.value
      })

      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )
      blogService.setToken(user.token)
      setUser(user)
      username.cleanField()
      salasana.cleanField()
    }catch(exception){
      username.cleanField()
      salasana.cleanField()
      setErrMessage('Wrong username or password!')
      setTimeout(() => {
        setErrMessage(null)
      }, 5000)
    }
  }

  const addBlog = (event) => {
    event.preventDefault()
    blogFormRef.current.toggleVisibility()
    const blogObject = {
      title: title.value,
      author: author.value,
      url: url.value,
      likes: likes.value
    }

    blogService
      .create(blogObject)
      .then(response => {
        setBlogs(blogs.concat(response))
        title.cleanField()
        author.cleanField()
        url.cleanField()
        likes.cleanField()

        setMessage(`A new blog ${response.title} by ${response.author} added!`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
  }

  const logOut = () => {
    window.localStorage.removeItem('loggedBlogappUser')
    blogService.removeToken()
    setUser(null)
  }

  const addLike = async (like) => {
    const newLike = like.likes + 1
    const blog = blogs.find(b => b.id === like.id)
    const updatedLike = {
      ...blog, likes: newLike
    }

    const blogi = blogs.find(blog => blog.id === like.id)

    try{
      const updated = await blogService.update(blog.id, updatedLike)
      blogi.likes = updated.likes
      setBlogs(blogs.map(blog => blog.id === blogi.id ? blogi : blog))
    }catch(exception){
      console.log(exception)
    }
  }

  return (
    <div>
      <Notification
        msg = {message !== null ? message : errMessage}
        msgType = {message !== null ? 'message' : 'error'}
      />
      {
        user === null
          ?
          <Login
            handleLogin = {handleLogin}
            username = {username}
            password = {salasana}
          />
          :
          <div>
            <h1>Blogs</h1>
            <p>
              {user.name} logged in&nbsp;&nbsp;
              <button onClick = {logOut}>Log out</button>
            </p>
            <Togglable buttonLabel = 'New blog' ref = {blogFormRef}>
              <Blogi
                handleBlogi = {addBlog}
                title = {title}
                author = {author}
                url = {url}
                likes = {likes}
              />
            </Togglable>
            {readBlogs()}
          </div>
      }
    </div>
  )
}

export default App
