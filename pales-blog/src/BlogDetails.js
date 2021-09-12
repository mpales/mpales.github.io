import { useParams } from "react-router-dom";
import useGet from "./useGet";
import Loading from "./Loading";
import './css/BlogDetails.css';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useGet(`http://localhost:8000/blogs/${id}`);
  // const history = useHistory();

  // const handleClick = () => {
  //   fetch(`http://localhost:8000/blogs/${blog.id}`, {
  //     method: 'DELETE'
  //   }).then(() => {
  //     history.push('/');
  //   }) 
  // }

  return (
    <div className="blog-details container">
      { isPending && <Loading /> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>By <b>Pales</b> on {blog.date}</p>
          <img src={`.${blog.img}`} alt="Big-Poster"/>
          <div>{blog.body}</div>
          {/* <button onClick={handleClick}>delete</button> */}
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;