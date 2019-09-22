import React from 'react'
import BlogToggle from './BlogToggle'

const Blog = ({blog, addLike}) => {
    const blogStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5

    }
    return(
        <div style = {blogStyle}>
            <BlogToggle openBlog = {blog.title}>
                <a href = {blog.url}>www.postimees.ee</a><br/>
                {blog.likes} likes&nbsp;&nbsp;
                <button onClick = {addLike}>Like</button><br/>
                added by {blog.author}<br/><br/>
                
            </BlogToggle>
        </div>
    )
}

export default Blog