import React, { FC } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { StyledLayout } from "./style";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <StyledLayout>
        <Outlet />
      </StyledLayout>
      <Footer />
    </div>
  );
};

export default Layout;
