/* eslint-disable jsx-a11y/alt-text */
import "./index.css";
import { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "./api";

// ini merupakan system untuk logout dari beranda.
const Logout = () => {
  localStorage.removeItem("signUp");
  window.location.reload();
};

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  // Mengambil 20 list Film terpopuler "update realtime", yang di sediakan API
  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="movie-wrapper" key={i}>
          <img
            className="movie-image"
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
          />
        </div>
      );
    });
  };

  // Navigation Bar
  const Navigation = () => {
    return (
      <nav className="flex items-center grid grid-cols-5 grid-rows-1 gap-5 w-full h-24 px-10 mb-10 bg-white bg-opacity-20">
        <h1 className="font-bold text-4xl flex justify-start text-sky-400">
          <span className="text-white">Movie</span> Web
        </h1>

        <ul className="text-white flex justify-center col-start-2 col-end-4 space-x-7">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>PRODUCT</li>
          <li>COPYRIGHT</li>
        </ul>

        <div className="tab-search">
          <input
            placeholder="Search . . ."
            className="movie-search"
            onChange={({ target }) => search(target.value)}
          />
        </div>

        <ul className="text-white flex flex-wrap justify-end col-start-5 col-end-6 space-x-3">
          <li>
            <button
              onClick={Logout}
              className="bg-pink-700 py-2 px-5 font-semibold rounded-lg"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    );
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
  };

  console.log({ popularMovies: popularMovies });

  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <div className="movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
};

export default App;
