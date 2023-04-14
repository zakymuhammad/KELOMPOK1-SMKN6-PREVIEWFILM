import React, { useState, useEffect } from "react";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import tmdbApi, { category, movieType } from "../../api/tmbdApi";
import apiConfig from "../../api/apiConfig";

import "../../index.css";

import "./hero-slide.scss";
import { useHistory } from "react-router-dom";

const HeroSlide = () => {
  SwiperCore.use([Autoplay]);

  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setMovieItems(response.results.slice(0, 3));
        console.log(response);
      } catch (error) {
        console.error(error);
        return error;
      }
    };
    getMovies();
  }, []);

  return (
    <div className="hero-slide">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        // autoplay={{ delay: 3000 }}
      >
        {movieItems.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              // <img
              //   src={apiConfig.originalImage(item.backdrop_path)}
              //   alt="img"
              //   className="w-full h-full"
              // />
              <HeroSlideItem
                item={item}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const HeroSlideItem = (props) => {
  let history = useHistory();

  const item = props.item;

  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  return (
    <div
      className={`hero-slide_item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide_item_content container">
        <div className="hero-slide_item_content__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
        </div>
        <div className="hero-slide_item_content__poster"></div>
      </div>
    </div>
  );
};

export default HeroSlide;
