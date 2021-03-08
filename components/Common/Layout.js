import React, { useEffect } from "react";
import Link from 'next/link'
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
const feather = require("feather-icons");

function Layout({ children }) {
  useEffect(() => feather.replace(), []);

  return (
    <div id="container">
      <Header />
      <main>{children}</main>
      {/* <Sidebar /> */}
      <Footer />
    </div>
  );
}

export default Layout
