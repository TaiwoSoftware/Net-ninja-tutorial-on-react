import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum ...', author: 'John', id:1},
        {title: 'Love', body: 'lorem ipsum ...', author: 'Kelvin', id:2}
    ]);

    const [name, setName] = useState('mario')

    const handleDelete =(id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran')
        console.log(name);
    },[name])
    return (
        <div className="home">
            <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete} />
        </div>
      );
}
 
export default Home;