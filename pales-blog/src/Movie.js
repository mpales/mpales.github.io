import useGet from "./useGet";
import Loading from "./Loading";
import PopularList from "./PopularList";
import UpcomingList from "./UpcomingList";
import TopratedList from "./TopratedList";
import './css/Movie.css';
import NowplayingList from "./NowplayingList";

const Movie = () => {
    const api = {
        base: "https://api.themoviedb.org/3/",
        key: "?api_key=2b3bde309bb8bf699140384c83dc4d08",
        lang: "&language=en-US&page=1"
    }
    const { isPending } = useGet(`${api.base}`);
    const { data: playings } = useGet(`${api.base}movie/now_playing${api.key}${api.lang}`);
    const { data: populars } = useGet(`${api.base}movie/popular${api.key}${api.lang}`);
    const { data: upcomings } = useGet(`${api.base}movie/upcoming${api.key}${api.lang}`);
    const { data: tops } = useGet(`${api.base}movie/top_rated${api.key}${api.lang}`);
    console.log(playings)
    return (
        <div className="movie">
            {/* { error && <div>{ error }</div> } */}
            { isPending && <Loading /> }
            { playings && <NowplayingList playings={playings}/> }
            { populars && <PopularList populars={populars} /> }
            { upcomings && <UpcomingList upcomings={upcomings} /> }
            { tops && <TopratedList tops={tops} /> }
        </div>
    );
}
 
export default Movie;