import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import { OutlineButton } from "../components/button/Button";
import HeroSlide from "../components/hero-slide/HeroSlide";
import MovieList from "../components/movie-list/MovieList";

import { category, movieType, tvType } from "../api/tmbdApi";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSlide />
      <div className="container">
        <div className="section mb-10">
          <div className="section__header mb-8">
            <h2 className="text-3xl">Trending Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>

        <div className="section mb-10">
          <div className="section__header mb-8">
            <h2 className="text-3xl">Top Rated Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>

        <div className="section mb-10">
          <div className="section__header mb-8">
            <h2 className="text-3xl">Trending TV</h2>
            <Link to="/tv">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>

        <div className="section mb-10">
          <div className="section__header mb-8">
            <h2 className="text-3xl">Top Rated TV</h2>
            <Link to="/tv">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
