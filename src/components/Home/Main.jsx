import React from "react";
import Navbar from "./Navbar";
import Footer from "../Contact/Footer";
import Bottom from "../Bottom/Bottom";
import Features from "./Features";
import Categories from "./Categories";

export default function Main() {
  return (
    <div>
      <Navbar />
      <Categories />
      <Features />
      <Footer />
      <Bottom />
    </div>
  );
}
