import { useParams } from "react-router-dom";
import useGet from "./useGet";
import Loading from "./Loading";
import './css/BlogDetails.css';

const MovieDetails = () => {
    const { id } = useParams();
    //const { data: playing, error, isPending } = useGet(`http://localhost:8000/blogs/${id}`);
    const api = {
        base: "https://api.themoviedb.org/3/",
        key: "?api_key=2b3bde309bb8bf699140384c83dc4d08",
        lang: "&language=en-US&page=1"
    }
    const { error, isPending } = useGet(`${api.base}`);
    const { data: playing } = useGet(`${api.base}movie/now_playing${api.key}${api.lang}${id}`);
    // const { data: popular } = useGet(`${api.base}movie/popular${api.key}${api.lang}`);
    // const { data: upcoming } = useGet(`${api.base}movie/upcoming${api.key}${api.lang}`);
    // const { data: top } = useGet(`${api.base}movie/top_rated${api.key}${api.lang}`);
    //console.log(playing.results.id);

  return (
    <div className="blog-details container">
      { isPending && <Loading /> }
      { error && <div>{ error }</div> }
      { playing && (
        <article>
          <h2>{playing.results.title}</h2>
          {/* <p>By <b>Pales</b> on {playing.date}</p>
          <img src={`.${playing.img}`} alt="Big-Poster"/>
          <div>{playing.body}</div> */}
        </article>
      )}
    </div>
  );
}
 
export default MovieDetails;