import "./index.css";
import { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "./api";

const App = () => {
  useEffect(() => {
    getMovieList();
  }, []);

  const [count, setCount] = useState(0);
  const search = (q) => {
    console.log({ q });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="font-bold text-4xl flex justify-center mb-7">
          Movie Web
        </h1>
        <input
          placeholder="Cari film kesayangan . . ."
          className="movie-search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="movie-container">
          <div className="movie-wrapper">
            <div className="movie-title">Contoh 1</div>
            <img className="movie-image" src="" />
            <div className="movie-date">23-12-1233</div>
            <div className="movie-rate">7.6</div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
