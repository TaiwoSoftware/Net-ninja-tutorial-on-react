import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum ...', author: 'John', id:1},
        {title: 'Love', body: 'lorem ipsum ...', author: 'Kelvin', id:2},
        {title: 'Gospel', body: 'lorem ipsum ...', author: 'John', id:3}
    ]);
    return (
        <div className="home">
            
        </div>
      );
}
 
export default Home;