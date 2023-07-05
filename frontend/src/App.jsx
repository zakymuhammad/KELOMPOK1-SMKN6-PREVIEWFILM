import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../src/pages/Home";
import Singin from "../src/components/login/Signin";
import Catalog from "../src/pages/Catalog";
import Detail from "../src/pages/detail/Detail";
import Admin from "./pages/admin/Admin";
import Contact from "./pages/Contact";
import Dashboard from "./pages/admin/Dashboard";
import AddMovie from "./pages/admin/AddMovie";

// import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/signin" element={<Singin />} />
      <Route path="/:category/search/:keyword" element={<Catalog />} />
      <Route path="/:category/:id" element={<Detail />} />
      <Route path="/:category" element={<Catalog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/add-movie" element={<AddMovie />} />
    </Routes>
  );
}

export default App;
