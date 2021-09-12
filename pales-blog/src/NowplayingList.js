import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, {
  Autoplay,
  Navigation
} from "swiper/core";

SwiperCore.use([Autoplay, Navigation]);

const NowplayingList = ({ playings }) => {
  return (
    <section className="list container">
      <h1 className="now">Now Playing</h1>
      <Swiper 
        slidesPerView={1} spaceBetween={24} slidesPerGroup={1} loop={true} loopFillGroupWithBlank={true} navigation={true} autoplay={{"delay": 2500, "disableOnInteraction": false}} className="mySwiper now-swiper"
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {playings.results.map(playing => (
          <SwiperSlide>
            <Link to={`/playings/${playing.id}`}  key={playing.id}>
              <article className="single-list">
                <img src={`https://image.tmdb.org/t/p/w780/${playing.backdrop_path}`} alt=""/>
                <figcaption class="caption-now">
                  <p className="title-now">{playing.title}</p> 
                  <p><span>★</span> {playing.vote_average.toFixed(1)}</p>
                  <p className="small">📅 {playing.release_date}</p>
                </figcaption>
              </article>
            </Link>            
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    );
  }
   
  export default NowplayingList;