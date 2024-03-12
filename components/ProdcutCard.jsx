'use client'
import { useState } from "react";
import { GoHeart } from "react-icons/go";
import { HiMiniHeart } from "react-icons/hi2";
export default function ProductCard(props) {
  let [liked,setLiked]=useState(false)
  const HandleLike=()=>{
    setLiked(!liked)
  }
  return (
    <div className=" p-4 lg:m-2 my-2 w-40 h-72 md:w-60  lg:w-64 md:h-96   transition-transform transform hover:scale-105 overflow-hidden">
      <div className=" mb-4 h-2/3 overflow-hidden flex items-center">
        <img
          src={props.data.image}
          alt=""
          className="object-cover rounded-lg"
        />
      </div>
      <div className="">
        <p className="lg:text-lg font-semibold mb-2">
          {props.data.title.slice(0, 15)}
        </p>

        <div className="flex justify-center">
          <p className="text-xs text-gray-600 mb-2">
            <span className="underline">Sign in</span> or Create an account to
            see pricing
          </p>
          {liked?<HiMiniHeart onClick={HandleLike} className="text-red-500"/>:<GoHeart  onClick={HandleLike}/>}
        </div>
      </div>
    </div>
  );
}
