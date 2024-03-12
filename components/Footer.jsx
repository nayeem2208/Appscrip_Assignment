'use client'
import { useState } from "react";
import "../styles/footer.css";
import { BsDiamondFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
function Footer() {
    let [mettamuseVisible,setmettamuseVisible]=useState(false)
    let [quickLinksVisible,setQuickLinksVisible]=useState(false)
    let [followUsVisible,setFollowUsVisible]=useState(false)


  return (
    <div className="footer ">
      {/* fistrow of footer */}
      <div className="w-full flex justify-center">
        <div className="md:flex w-11/12  lg:w-5/6 justify-between border-b border-white pb-3">
          <div className="w-full mx-3 lg:mx-0 lg:w-3/6 border-b md:border-0 border-white pb-3 lg:pb-0">
            <p style={{ fontWeight: "700" }}>BE THE FIRST TO KNOW</p>
            <p className="text-xs my-4">Sign up for updates from metta muse.</p>
            <div className="flex subscribe_div">
              <input
                type="text"
                placeholder="Enter your e-mail..."
                className="text-sm px-3 w-4/5 lg:w-3/5 "
              />
              <button className="subscribe_btn">SUBSCRIBE</button>
            </div>
          </div>
          <div className="w-full lg:w-2/5 mx-3">
            <p style={{ fontWeight: "700" }} className="mt-3 lg:mt-0">
              CONTACT US
            </p>
            <p className="text-xs my-3 hidden lg:block">+44 221 133 5360</p>
            <p className="text-xs my-3 hidden lg:block">
              Customercare@mettamuse.com
            </p>
            <div className="flex text-xs lg:hidden my-4  pb-3 border-b border-white ">
              <p>+44 221 133 5360 </p>{" "}
              <BsDiamondFill className="w-2 h-2 mt-1 mx-1 text-white" />
              <p>Customercare@mettamuse.com </p>
            </div>
            <p style={{ fontWeight: "700" }}>CURRENCY</p>
            <div className="flex my-2 ">
              <div className="w-5 h-5 rounded-full  overflow-hidden ">
                <img src="/usFlag.png" alt="usFlag " />
              </div>
              <BsDiamondFill className="md:xs lg:text-md  w-2 h-2 mt-1 mx-1 text-white" />
              <p style={{ fontWeight: "600" }}>USD</p>
            </div>
            <p style={{ fontSize: "0.7vw" }} className="hidden lg:block">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
      </div>
      {/* second row of footer */}
      <div className="w-full  justify-center hidden md:flex">
        <div className="second_footer flex  w-5/6 justify-between mt-6">
          <div className=" w-1/5">
            <p style={{ fontWeight: "700" }}>metta muse</p>
            <ul>
              <li>About us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contace us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>
          <div className="w-1/5">
            <p style={{ fontWeight: "700" }}>QUICK LINKS</p>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="w-2/5">
            <p style={{ fontWeight: "700" }}>FOLLOW US</p>
            <div className="flex my-4">
              <img src="/insta.png" alt="insta icon" className="w-7 h-7 mr-3" />{" "}
              <img
                src="/linkedin.png"
                alt="linkedin icons"
                className="w-7 h-7"
              />
            </div>
            <p style={{ fontWeight: "700" }} className="mt-8">
              metta muse ACCEPTS
            </p>
            <img src="/payments.png" alt="payment icons" className="h-8 my-3" />
          </div>
        </div>
      </div>

      {/* Second row in mobile view */}
      <div className="w-full flex  justify-center  md:hidden">
        <div className="second_footer flex flex-col w-full mx-7 sm:w-11/12  justify-center   mt-6">
          <div className=" w-full border-b py-1">
            <div className="flex justify-between" onClick={()=>setmettamuseVisible(!mettamuseVisible)}><p style={{ fontWeight: "700" }}>metta muse</p><IoIosArrowDown className="mt-1"/></div>
            {mettamuseVisible&&<ul>
              <li>About us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contace us</li>
              <li>EU Compliances Docs</li>
            </ul>}
          </div>
          <div className="w-full border-b py-3">
          <div className="flex justify-between" onClick={()=>setQuickLinksVisible(!quickLinksVisible)}><p style={{ fontWeight: "700" }}>QUICK LINKS</p><IoIosArrowDown className="mt-1"/></div>
            {quickLinksVisible&&<ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>}
          </div>
          <div className="w-full border-b py-3">
          <div className="flex justify-between" onClick={()=>setFollowUsVisible(!followUsVisible)}><p style={{ fontWeight: "700" }}>FOLLOW US</p><IoIosArrowDown className="mt-1"/></div>
           {followUsVisible&& <div className="flex my-4">
              <img src="/insta.png" alt="insta icon" className="w-7 h-7 mr-3" />{" "}
              <img
                src="/linkedin.png"
                alt="linkedin icons"
                className="w-7 h-7"
              />
            </div>}
          </div>
          <p style={{ fontWeight: "700" }} className="mt-8">
            metta muse ACCEPTS
          </p>
          <img src="/payments.png" alt="payment icons" className="h-8 my-3 mx-3" />
          <p className="text-center text-xs">
            Copyright @ 2023 mettamuse.All rights reserved
          </p>
        </div>
      </div>
      <p className="text-center text-xs hidden md:flex justify-center">
            Copyright @ 2023 mettamuse.All rights reserved
          </p>
    </div>
  );
}

export default Footer;
