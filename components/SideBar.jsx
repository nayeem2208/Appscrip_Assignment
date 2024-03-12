"use client";
import { useState } from "react";
import "../styles/ProductsPage.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
function SideBar() {
  const subheadings = [
    { title: "IDEAL FOR", items: [ "Men", "Women", "Baby"] },
    { title: "OCCASION", items: [ "Party", "Casual"] },
    { title: "WORK", items: [ "work", "work"] },
    { title: "FABRIC", items: [ "Fabric", "NonFabric"] },
    { title: "SEGMENT", items: [ "Men", "Women", "Baby"] },
    { title: "SUITABLE FOR", items: [ "Men", "Women", "Baby"] },
    { title: "RAW MATERIALS", items: [ "Cotton", "Silk"] },
    { title: "PATTERN", items: [ "Check", "Plain"] },
  ];

  const [expanded, setExpanded] = useState(null);

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };
  return (
    <nav>
      <div className="flex sub_heading">
        <input type="checkbox" />
        <h2 className="ml-2">CUSTOMIZABLE</h2>
      </div>
      {subheadings.map((subheading, index) => (
        <div key={index} className="sub_heading">
          <div
            className="flex  justify-between"
            onClick={() => handleToggle(index)}
          >
            <h2 className="">{subheading.title}</h2>
            {expanded === index ? (
              <IoIosArrowUp className="mr-2 cursor-pointer mt-1" />
            ) : (
              <IoIosArrowDown className="mr-2 cursor-pointer mt-1" />
            )}
          </div>
          <p className="text-sm my-1">All</p>
          {expanded === index && (
            <div className="">
                <p className="text-sm underline underline-offset-4 text-gray-400">Unselect all</p>
              {subheading.items.map((item, i) => (
                <div key={i} className="sub_heading_subheads"> 
                    <label>
                      <input type="checkbox" />
                      {item.replace("checkbox", "")}
                    </label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}

export default SideBar;
