import React, { useState } from "react";
import { selectList } from "../../utils/Helper";
import Icons from "./Icons";

const Header = ({ setFilters }) => {

  const [filterValues, setFilterValues] = useState({});  

  const handleChange = (key, value) => {
    const updatedFilters = { ...filterValues, [key]: value };

    setFilterValues(updatedFilters);
    setFilters(updatedFilters);
  };

  return (
    <div className="ml-6 mt-8 mb-8 max-w-310">
      <h2 className="font-bold text-[32px] leading-[100%] text-[#0B0C1A]">
        Remediation Tracker
      </h2>

      <div className="mt-8 flex items-center justify-between">
        {selectList.map((items, index) => (
          <div
            key={index}
            className="max-w-70.5 bg-white border font-normal text-[#687A9B] text-base border-[#E6EFFB] rounded-2xl w-full relative"
          >
            <select
              className="appearance-none w-full pl-6.5 py-3 outline-none"
              onChange={(e) => handleChange(items.key, e.target.value)}
            >
              <option value="">{items.select}</option>

              {items.option.map((op, idx) => (
                <option key={idx} value={op}>
                  {op}
                </option>
              ))}
            </select>

            <Icons
              icon={"arrow"}
              className={"absolute top-5.25 right-5.25"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
