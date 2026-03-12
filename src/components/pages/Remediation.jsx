import React, { useState } from "react";
import Sidebar from "../common/Sidebar";
import Hero from "../Hero";
import Navbar from "../common/Navbar";
import Deshbord from "../Deshbord";
import Settings from "../Settings";
import { Route, Routes } from "react-router-dom";
import Alerts from "../Alerts";
import Logout from "../Logout";
import Attack from "../Attack";
import Compliance from "../Compliance";

const Remediation = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="flex h-screen overflow-hidden  p-6 bg-[#F3F6FC] ">
      <Sidebar />
      <div className="flex flex-col">
       <Navbar  setSearch={setSearch} />
      <Routes>
          <Route path="/" element={<Hero search={search} />} />
          <Route path="/dashboard" element={<Deshbord />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/alert" element={<Alerts />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/attack-path-map" element={<Attack />} />
          <Route path="/compliance" element={<Compliance />} />
        </Routes>
      </div>
    </div>
  );
};

export default Remediation;
