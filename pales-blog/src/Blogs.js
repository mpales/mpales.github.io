import { Link } from 'react-router-dom';
import useGet from "./useGet";
import Loading from "./Loading";

const Blogs = () => {
    const { isPending } = useGet(`http://localhost:8000`);
    const { data: blogs } = useGet(`http://localhost:8000/blogs`);

    return (
        <div className="blogs container">
            { isPending && <Loading /> }
            <h1>Blog Archives</h1>
            {blogs && blogs.map(blog => (
                <Link to={`/blogs/${blog.id}`}  key={blog.id}>
                <article className="topic">
                    <img src={blog.imgThumb} alt=""/>
                    <p className="title">{blog.title}</p>
                    <p className="date">{blog.date}</p>
                </article>
                </Link>
            ))}
        </div>
    );
  }
   
  export default Blogs;