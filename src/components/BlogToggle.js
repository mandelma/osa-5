import React, { useState } from 'react'
import PropTypes from 'prop-types'

const BlogToggle = (props, ref) => {

  const [ visible, setVisible ] = useState (false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return(
    <div>
      <div onClick = {toggleVisibility}> {props.openBlog}
        <div style = {hideWhenVisible}></div>
      </div>
      <div style = {showWhenVisible}>
        {props.children}
      </div>
    </div>
  )
}

BlogToggle.propTypes = {
  openBlog: PropTypes.string.isRequired
}

export default BlogToggle