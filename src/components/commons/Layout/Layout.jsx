import React from "react";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout__body">{children}</div>
    </div>
  );
};

export default Layout;
