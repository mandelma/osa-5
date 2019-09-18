import React, {useState, useEffect} from 'react';
import blogService from './services/blogs'
import loginService from './services/login'
import './index.css'
import Login from './components/loginForm'
import Blogi from './components/blogiForm'
import Notification from './components/Notification'

const App = () => {

  const [message, setMessage] = useState(null)
  const [errMessage, setErrMessage] = useState(null)

  const [user, setUser] = useState(null)
  const [username, setUsername] = useState("")
  const [salasana, setSalasana] = useState("")

  const [blogs, setBlogs] = useState([])
  const [title, setTitle] = useState('')
  const [author, setauthor] = useState('')
  const [url, setUrl] = useState('')
  const [likes, setLikes] = useState('')

  useEffect(() => {
    blogService
      .getAll()
        .then(initialNotes => {
          setBlogs(initialNotes)
        })
  }, [])


  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if(loggedUserJSON){
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const lueBlogi = () => blogs.map(blog => 
    <p>
      Title: {blog.title}<br/>
      Author: {blog.author}<br/>
      Url: {blog.url}<br/>
      Likes: {blog.likes}
    </p>
    )
  
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
          username = {username}
          salasana = {salasana}
        />
        :
        <div>
          <Blogi
            userName = {user.name}
            logOut = {logOut}
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
          {lueBlogi()}
        </div>
      }
    </div>
  )
}

export default App
