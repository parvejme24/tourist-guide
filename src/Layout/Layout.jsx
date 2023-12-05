import React from "react";
import NavMenu from "../Shared/NavMenu/NavMenu";
import Footer from "../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <NavMenu></NavMenu>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
