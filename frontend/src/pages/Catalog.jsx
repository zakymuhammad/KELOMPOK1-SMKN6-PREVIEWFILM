import React from "react";

import { useParams } from "react-router";

import PageHeader from "../components/page-header/PageHeader";

import { category as cate } from "../api/tmbdApi";
import MovieGrid from "../components/movie-grid/MovieGrid";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Catalog = () => {
  const { category } = useParams();

  console.log(category);

  return (
    <>
      <Header />
      <PageHeader>
        {category === cate.movie ? "Movies" : "TV Series"}
      </PageHeader>
      <div className="contaier">
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Catalog;
