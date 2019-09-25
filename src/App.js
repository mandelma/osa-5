import React, { useState, useEffect } from 'react'
import blogService from './services/blogs'
import loginService from './services/login'
import './index.css'
import Login from './components/loginForm'
import Blogi from './components/blogiForm'
import Blog from './components/Blog'
import Notification from './components/Notification'
import Togglable from './components/Togglable'

const App = () => {

  const [message, setMessage] = useState(null)
  const [errMessage, setErrMessage] = useState(null)
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [salasana, setSalasana] = useState('')
  //const [blogVisible, setBlogVisible] = useState(false)
  const [blogs, setBlogs] = useState([])
  const [title, setTitle] = useState('')
  const [author, setauthor] = useState('')
  const [url, setUrl] = useState('')
  const [likes, setLikes] = useState('')

  const blogFormRef = React.createRef()

  useEffect(() => {
    getBlogs()
  }, [getBlogs])

  const getBlogs = (async () => {
    const allBlogs = await blogService.getAll()
    setBlogs(sortBlogs(allBlogs))
  })

  const sortBlogs = (notSorted) => {
    return notSorted.sort((start, end) => {
      return start.likes - end.likes
    })
  }

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
        username: username,
        password: salasana
      })

      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setSalasana('')
    }catch(exception){
      setUsername('')
      setSalasana('')
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
      title: title,
      author: author,
      url: url,
      likes: likes
    }

    blogService
      .create(blogObject)
      .then(response => {
        setBlogs(blogs.concat(response))
        setTitle('')
        setauthor('')
        setUrl('')
        setLikes('')

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

  const usernameHandler = (event) => {
    setUsername(event.target.value)
  }
  const passwordHandler = (event) => {
    setSalasana(event.target.value)
  }

  const titleHandler = (event) => {
    setTitle(event.target.value)
  }

  const authorHandler = (event) => {
    setauthor(event.target.value)
  }

  const urlHandler = (event) => {
    setUrl(event.target.value)
  }

  const likesHandler = (event) => {
    setLikes(event.target.value)
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
            usernameHandler = {usernameHandler}
            salasana = {salasana}
            passwordHandler = {passwordHandler}
            userName = {username}
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
                titleHandler = {titleHandler}
                authorHandler = {authorHandler}
                urlHandler = {urlHandler}
                likesHandler = {likesHandler}
              />
            </Togglable>
            {readBlogs()}
          </div>
      }
    </div>
  )
}

export default App
