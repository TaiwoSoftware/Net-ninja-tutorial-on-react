import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch(
    "http://localhost:3000/blogs"
  );
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      {/* <h2>All Blogs!</h2>
      <div className="blog-preview">
        <h2>My First Blog</h2>
        <p>Written by Taiwo</p>
      </div>
      <div className="blog-preview">
        <h2>Opening Party!</h2>
        <p>Written by TaiwoSoftware</p> */}
    </div>
    // 018870261
  );
};

export default Home;
