import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="container not-found">
      <h2>Awww, Sorry!</h2>
      <p>The page you requested was not found</p>
      <Link to="/">Back to the Home</Link>
    </div>
  );
}
 
export default NotFound;