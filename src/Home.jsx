import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=78bcd9519ba51e4395c843281cef3d37"
    )
      .then((res) => {
        if(!res.ok) {
            throw Error('could not fetch the data for that resource')
        }
        return res.json();
      })

      .then((data) => {
        console.log(data);
        setBlogs(data);
        setIsPending(false);
      })
      .catch(err=> {
            console.log(err.message);
      })
  }, []);
  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
    // 018870261
  );
};

export default Home;
