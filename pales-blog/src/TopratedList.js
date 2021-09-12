import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, {
  Autoplay,
  Navigation
} from "swiper/core";

SwiperCore.use([Autoplay, Navigation]);

const TopratedList = ({ tops }) => {
  return (
    <section className="list container">
      <h2>Top Rated</h2>
      <Swiper 
        slidesPerView={4} spaceBetween={24} slidesPerGroup={1} loop={true} loopFillGroupWithBlank={true} navigation={true} autoplay={{"delay": 2500, "disableOnInteraction": false}} className="mySwiper"
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {tops.results.map((top, index) => (
          <SwiperSlide>
            <Link to={`/populars/${top.id}`}  key={index}>
              <article className="multiple-list">
                <img src={`https://image.tmdb.org/t/p/w300/${top.poster_path}`} alt=""/>
              </article>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    );
  }
   
  export default TopratedList;