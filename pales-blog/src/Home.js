import Banner from "./Banner";
import BlogList from "./BlogList";
import Loading from "./Loading";
import ProjectList from "./ProjectList";
import useGet from "./useGet";

const Home = () => {
  const { isPending } = useGet(`http://localhost:8000`);
  const { data: blogs } = useGet(`http://localhost:8000/blogs`);
  const { data: projects } = useGet(`http://localhost:8000/projects`);

  return (
    <div className="home">
      {/* { error && <div>{ error }</div> } */}
      { isPending && <Loading /> }
      <Banner />
      { blogs && <BlogList blogs={blogs} /> }
      { projects && <ProjectList projects={projects} /> }
    </div>
  );
}
 
export default Home;