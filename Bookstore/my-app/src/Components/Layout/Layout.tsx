import React, { FC } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { PropsWithChildren } from "react";
import { StyledLayout } from "./style";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <StyledLayout>{children}</StyledLayout>
      <Footer />
    </div>
  );
};

export default Layout;
