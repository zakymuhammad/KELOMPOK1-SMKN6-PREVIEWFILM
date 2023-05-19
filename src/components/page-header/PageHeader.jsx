import React from "react";

import "./page-header.scss";

import bg from "../../assets/footer-bg.jpg";

const PageHeader = (props) => {
  return (
    <div className="page-header" style={{ backgroundImage: `url(${bg})` }}>
      <h2 className="text-3xl mt-14 -mb-5 font-bold z-40 relative">
        {props.children}
      </h2>
    </div>
  );
};

export default PageHeader;
