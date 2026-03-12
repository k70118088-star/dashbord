import React, { useState } from "react";
import Sidebar from "../common/Sidebar";
import Hero from "../Hero";
import Navbar from "../common/Navbar";

const Remediation = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="flex h-screen overflow-hidden  p-6 bg-[#F3F6FC] ">
      <Sidebar />
      <div className="flex flex-col">
       <Navbar  setSearch={setSearch} />
      <Hero search={search} />
      </div>
    </div>
  );
};

export default Remediation;
