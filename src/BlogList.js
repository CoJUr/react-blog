import { useState } from 'react';

const BlogList = ({blogs, title}) => {
    // const blogs= props.blogs;
    // const title = props.title;  destructure instead


    return (
        <div className="blog-list">
            <h2> { title } </h2>
            {blogs.map((blog) => (
                //jsx template here
                <div className="blog-preview" key={ blog.id }>
                    <h2> { blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
    )
}

export default BlogList;