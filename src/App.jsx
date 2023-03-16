import { useState } from "react";
import "./index.css";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="font-bold text-4xl flex justify-center mb-7">
          Movie Web
        </h1>
        <input
          placeholder="Cari film kesayangan ..."
          className="movie-search"
        />
        <div className="movie-container">
          <div className="movie-wrapper">
            <div className="movie-title">Contoh 1</div>
            <img className="movie-image" />
            <div className="movie-date">23-12-1233</div>
            <div className="movie-rate">7.6</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
