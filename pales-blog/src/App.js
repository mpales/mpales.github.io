import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import CreateBlog from './CreateBlog';
import Projects from './Projects';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import About from './About';
import Blogs from './Blogs';
import Footer from './Footer';
import Movie from './Movie';
import MovieDetails from './MovieDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/blogs">
              <Blogs />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/movie">
              <Movie />
            </Route>
            <Route path="/createblog">
              <CreateBlog />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="/playings/:id">
              <MovieDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;