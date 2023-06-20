import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../src/pages/Home";
import Singin from "../src/components/login/Signin";
import Catalog from "../src/pages/Catalog";
import Detail from "../src/pages/detail/Detail";
import Admin from "../src/pages/Admin";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/signin" element={<Singin />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/:category/search/:keyword" element={<Catalog />} />
      <Route path="/:category/:id" element={<Detail />} />
      <Route path="/:category" element={<Catalog />} />
    </Routes>
  );
}

export default App;
