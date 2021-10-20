import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Fade from "react-reveal/Fade";

export default function Layout({ children }) {
  return (
    <Fade>
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    </Fade>
  );
}
