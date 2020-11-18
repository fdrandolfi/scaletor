import React, { useState, useEffect } from "react";
import classnames from "classnames";

import "./index.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const View = ({ id, title, className, children }) => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    document.title = `Felipe Randolfi ~ ${title}`;
    window.scrollTo(0, 0);

    return setLoader(false);
  });

  return (
    <div
      id={id}
      className={
        classnames(
          'view',
          { 'view-fadein': !loader },
          className,
        )
      }>
      <Header type={id} />
      {children}
      <Footer />
    </div>
  );
};

export default View;
