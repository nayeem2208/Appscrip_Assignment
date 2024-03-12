"use client";
import "../styles/Header.css";
import { GoHeart } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import {
  HiOutlineShoppingBag,
  HiOutlineUser,
  HiOutlineBars3,
} from "react-icons/hi2";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";

export default function Header() {
  let [dropDownVisible, setDropDownVisible] = useState(false);

  return (
    <header className="Header">
      <div className="black_header ">
        <div className="black_header_iconDiv ">
          <img
            src="/fourBoxLogo.png"
            alt="four box logo of black header"
            className="w-4 h-4 hidden md:block"
          />
          <p className="hidden md:block">Lorem ipsum dolor</p>
        </div>
        <div className="black_header_iconDiv">
          <img
            src="/fourBoxLogo.png"
            alt="four box logo of black header"
            className="w-4 h-4"
          />
          <p>Lorem ipsum dolor</p>
        </div>
        <div className="black_header_iconDiv">
          <img
            src="/fourBoxLogo.png"
            alt="four box logo of black header"
            className="w-4 h-4 hidden md:block"
          />
          <p className="hidden md:block">Lorem ipsum dolor</p>
        </div>
      </div>
      <nav className="main_header flex mt-4 md:mt-0 justify-between py-6 px-2 md:px-16 ">
        <div className="flex  w-1/3 ">
          <HiOutlineBars3
            className="w-8 h-8 md:hidden mx-2"
            onClick={() => setDropDownVisible(!dropDownVisible)}
          />
          <img
            src="/appLogo.png"
            alt="applogo"
            className="app_logo w-6 h-6 mt-1"
          />
        </div>
        <div className=" w-16 md:w-1/12 h-4 md:h-6 mt-1 md:mt-0 flex justify-center ">
          <img
            src="/textLogo.png"
            alt="Text logo of the app"
            className=" h-full w-full "
          />
        </div>

        <div className="flex w-1/3 justify-end text-slate-800">
          <CiSearch className=" w-6 h-6 mx-2 mt-1" />
          <GoHeart className="w-5 h-5 mx-2 mt-1" />
          <HiOutlineShoppingBag className="w-5 h-5 mx-2 mt-1" />
          <HiOutlineUser className="w-5 h-5 mx-2 hidden md:block mt-1" />
          <p className="hidden md:block mt-1">ENG</p>
          <RiArrowDropDownLine className="w-6 h-6 mt-1 hidden md:block " />
        </div>
      </nav>
      <nav className="   mt-8 hidden md:flex justify-center">
        <ul className="flex w-3/5 justify-evenly text-md font-semibold">
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </nav>
      {dropDownVisible && (
        <nav className="md:hidden   mt-8 justify-center">
          <ul className="dropdown w-3/5 justify-evenly text-md font-semibold mx-4">
            <li>SHOP</li>
            <li>SKILLS</li>
            <li>STORIES</li>
            <li>ABOUT</li>
            <li>CONTACT US</li>
            <li>User</li>
            <li>Language</li>
          </ul>
        </nav>
      )}
    </header>
  );
}
