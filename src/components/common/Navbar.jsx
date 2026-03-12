import React, { useState } from "react";
import { FiSearch, FiBell } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import { remediationData } from "../../utils/Helper";

const Navbar = ({ setSearch }) => {

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSearch(value);

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    const filtered = remediationData
      .filter((item) =>
        item.action.toLowerCase().includes(value.toLowerCase())
      )
      .slice(0, 5);

    setSuggestions(filtered);
  };

  const handleSuggestion = (text) => {
    setQuery(text);
    setSearch(text);
    setSuggestions([]);
  };

  return (
    <div className="flex items-center max-w-316.5 w-full h-14 justify-between px-6 py-3 bg-[#F3F6FC]">

      <div className="relative w-75">

        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search"
          className="w-full py-3.25 px-4 rounded-lg bg-[#FFFFFF] shadow-[-1px_14px_44px_0px_#0000000A] outline-none text-sm"/>

        <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600" />

        {suggestions.length > 0 && (
          <div className="absolute top-12 left-0 w-full bg-white rounded-lg shadow-lg z-50">
            {suggestions.map((item, index) => (
              <div
                key={index}
                onClick={() => handleSuggestion(item.action)}
                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                {item.action}
              </div>
            ))}
          </div>
        )}

      </div>

      <div className="flex items-center gap-5">

        <div className="relative cursor-pointer">
          <FaRegEnvelope className="text-gray-700 text-lg" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
        </div>

        <div className="relative cursor-pointer">
          <FiBell className="text-gray-700 text-lg" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
        </div>

        <img
          src="/assets/NavbarImg.jpg"
          alt="profile"
          className="w-9 h-9 rounded-full object-cover cursor-pointer"
        />

      </div>
    </div>
  );
};

export default Navbar;
