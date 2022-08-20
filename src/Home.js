import { useState } from 'react';
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Blog 1', body: "lorem ipsum", author: "John Doe", id: 1 },
        { title: 'Blog 2', body: "lorem ipsum", author: "Jack moe", id: 2 },
        { title: 'Blog 3', body: "lorem ipsum", author: "Mandy Noe", id: 3}
    ]);

    return (
        <div className="home">
        <BlogList blogs={blogs} title="All Blogs!" />
        </div>
    );
}

export default Home;