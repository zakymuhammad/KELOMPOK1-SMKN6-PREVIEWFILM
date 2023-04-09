import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";
import "./index.css";

import { BrowserRouter, Route } from "react-router-dom";

// import Header from "./components/header/Header";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Routes from "./config/Routes";

export default function App() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <>
            <Header {...props} />
            <Routes />
            <Footer />
          </>
        )}
      />
    </BrowserRouter>
  );
}
