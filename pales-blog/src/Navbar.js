import { Link } from "react-router-dom";
import home from "./img/home.svg"

const Navbar = () => {
  return (
    <header>
    <nav>
      <div className="nav-container">
        <section className="brand">
            <Link className="link" to="/"><img src={home} alt=""/>Home</Link>
        </section>
        <section className="links">          
            <Link className="link" to="/about">About Me</Link>
            <Link className="link" to="/blogs">Blog</Link>
            <Link className="link" to="/projects">Projects</Link>
            <Link className="link" to="/contact">Contact</Link>
        </section>
      </div>
    </nav>
  </header>
  );
}
 
export default Navbar;