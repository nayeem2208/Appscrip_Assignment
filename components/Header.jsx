import '../styles/Header.css'
import { GoHeart } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag,HiOutlineUser } from "react-icons/hi2";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Header() {
  return (
    <div className='Header'>
      <div className='black_header '>
        <div className='black_header_iconDiv '>
        <img src='/fourBoxLogo.png' alt="four box logo of black header" className='w-4 h-4 hidden md:block' />
        <p className='hidden md:block'>Lorem ipsum dolor</p>
        </div>
        <div className='black_header_iconDiv'>
        <img src='/fourBoxLogo.png' alt="four box logo of black header" className='w-4 h-4' />
        <p>Lorem ipsum dolor</p>
        </div>
        <div className='black_header_iconDiv'>
        <img src='/fourBoxLogo.png' alt="four box logo of black header" className='w-4 h-4 hidden md:block' />
        <p className='hidden md:block'>Lorem ipsum dolor</p>
        </div>
      </div>
      <div className='main_header flex justify-between py-6 px-16 '>
        <div className=' w-1/3'>
            <img src="/appLogo.png" alt="applogo" className='app_logo' />
        </div>
        <div className=' w-1/3 flex justify-center' >
            <img src="/textLogo.png" alt="Text logo of the app" className='text_logo' />
        </div>
        <div className='flex w-1/3 justify-end text-slate-800'>
        <CiSearch className=' w-6 h-6 mx-2'/>
        <GoHeart className='w-5 h-5 mx-2'/>
        <HiOutlineShoppingBag className='w-5 h-5 mx-2'/>
        <HiOutlineUser className='w-5 h-5 mx-2'/>
        <p>ENG</p><RiArrowDropDownLine className='w-6 h-6 '/>
        </div>

      </div>
      <div className='flex justify-center  mt-8'>
        <ul className='flex w-3/5 justify-evenly text-md font-semibold'>
            <li>SHOP</li>
            <li>SKILLS</li>
            <li>STORIES</li>
            <li>ABOUT</li>
            <li>CONTACT US</li>
        </ul>
      </div>
    </div>
  );
}
