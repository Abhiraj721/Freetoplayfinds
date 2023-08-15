import React, { useState } from "react";
import Datafetcher from "./components/Datafetcher";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const Compiler = () => {
  const [search,Setsearch]=useState("");

  return (
    <div>
      <Navbar search={search} Setsearch={Setsearch}></Navbar>
<Datafetcher search={search}></Datafetcher>
<Footer search={search}></Footer>
    </div>
  );
};

export default Compiler;
