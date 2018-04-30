import React from 'react'

const Blog = (props) => {

const sidebar = (
    <ul>
        {props.posts.map((post)=>
        <li key={post.id}>
            {post.title}
        </li>
        )}
    </ul>
)

const content = props.posts.map((post)=>
    <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
    </div>
)


    return(
        <div>
            <h1>Blog - (Exercise - Keys)</h1>
            {sidebar}
            <hr/>
            {content}
        </div>
    )
}

export default Blog