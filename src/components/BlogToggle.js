import React, {useState, useImperativeHandle} from 'react'

const BlogToggle = React.forwardRef((props, ref) => {
    const [visible, setVisible] = useState(false)

    const hideWhenVisible = {display: visible ? 'none' : ''}
    const showWhenVisible = {display: visible ? '' : 'none'}

    const toggleVisibility = () => {
        setVisible(!visible)
    }

    useImperativeHandle(ref, () => {
        return(
            toggleVisibility
        )
    })

    return(
        <div onClick = {toggleVisibility}> {props.openBlog}
            <div style = {hideWhenVisible}></div>
            <div style = {showWhenVisible}>
                {props.children}
            </div>
        </div>
    )
})

export default BlogToggle