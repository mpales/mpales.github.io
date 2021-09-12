import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  return (
    <section className="blog-list">
      <div className="container">
        <h1>Latest Article</h1>
        {blogs.map(blog => (
            <Link to={`/blogs/${blog.id}`}  key={blog.id}>
              <article className="topic">
                <img src={blog.imgThumb} alt=""/>
                <p className="title">{blog.title}</p>
                <p className="date">{blog.date}</p>
              </article>
            </Link>
        ))}
        </div>
    </section>
  );
}
 
export default BlogList;