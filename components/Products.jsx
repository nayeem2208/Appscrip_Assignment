"use client";
import { useEffect, useState } from "react";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
} from "react-icons/io";
import axios from "axios";
import ProductCard from "./ProdcutCard";
import "../styles/ProductsPage.css";
import SideBar from "./SideBar";
import { IoCheckmark } from "react-icons/io5";

function Products() {
  const [products, setProducts] = useState([]);
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [sortVisible, setSortVisible] = useState(false);
  const [selectedSort, setSelectedSort] = useState("RECOMMENDED");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);
  const sortValues = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE: HIGH TO LOW",
    "PRICE: LOW TO HIGH",
  ];

  const handleToggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleSortToggle = () => {
    setSortVisible(!sortVisible);
  };

  const handleSortSelection = (data) => {
    setSelectedSort(data);
    setSortVisible(false);
  };

  return (
    <div
      className="productsPage text-slate-900"
      style={{ position: "relative" }}
    >
      <div className="filterHeader">
        {/* ......filter button.......... */}
        <div className="hidden  md:flex  md:w-3/6 ">
          <p className="font-bold">3425 ITEMS</p>
          <button className="flex mx-4" onClick={handleToggleSidebar}>
            {isSidebarVisible ? (
              <IoIosArrowBack className="mt-1" />
            ) : (
              <IoIosArrowForward className="mt-1" />
            )}
            <span>{isSidebarVisible ? " HIDE FILTER" : " SHOW FILTER"}</span>
          </button>
        </div>
        {/* ......mobile view filter button..... */}
        <div
          className=" md:hidden w-3/6 text-center border-r border-gray-400 "
          onClick={handleToggleSidebar}
        >
          <p className="text-sm font-bold">FILTER</p>
        </div>
        <div className="flex">
          <p
            onClick={handleSortToggle}
            className="text-sm md:text-base font-bold"
          >
            {selectedSort}
          </p>
          <IoIosArrowDown className="mt-1" onClick={handleSortToggle} />
        </div>
      </div>

      {/* ............sort drop down........... */}
      {sortVisible && (
        <div
          className="shadow rounded-sm bg-white h-52 w-44 lg:mr-12"
          style={{ position: "absolute", right: 10, top: "5vw", zIndex: 5 }}
        >
          {sortValues.map((data, index) => (
            <div
              className="flex m-2 my-4 text-sm justify-end items-end"
              onClick={() => handleSortSelection(data)}
            >
              {selectedSort === data && (
                <IoCheckmark className="w-4 h-4 font-bold" />
              )}
              <p
                className="ml-auto"
                style={{
                  fontWeight: selectedSort === data ? "bold" : "normal",
                }}
              >
                {data}
              </p>
            </div>
          ))}
        </div>
      )}
      <div className="md:flex w-full h-full">
        {/* ......side bar visible........ */}
        {isSidebarVisible && (
          <div className=" w-full  md:w-2/6 h-full">
            <SideBar />
          </div>
        )}
        <div
          className={` md:w-${
            isSidebarVisible ? "4/6" : "full"
          } flex flex-wrap justify-between `}
        >
            {/* .....product listing........ */}

          {products.length > 0 &&
            products.map((data, index) => (
              <ProductCard key={index} data={data} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
