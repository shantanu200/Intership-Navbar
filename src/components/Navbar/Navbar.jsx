import React, { StrictMode, useState } from "react";
import {AiOutlineClose,AiOutlineMenu} from "react-icons/ai";


const Navbar = () => {
    const [mobileMenu,setMobileMenu] = useState(false);

    function handleMenu(){
        setMobileMenu(!mobileMenu);
    }

    return(
        <div className="flex justify-between items-center h-24 max-w-screen mx-auto px-4 bg-black text-white">
        {/**LOGO */}
        <h1 className="text-3xl font-bold uppercase hover:scale-105 duration-200">Intership</h1>
        <ul className="hidden md:flex">
            <li className="p-4 hover:bg-zinc-700 uppercase hover:scale-105 duration-200">Home</li>
            <li className="p-4 hover:bg-zinc-700 uppercase hover:scale-105 duration-200">Contact</li>
            <li className="p-4 hover:bg-zinc-700 uppercase hover:scale-105 duration-200">About</li>
            <li className="p-4 hover:bg-zinc-700 uppercase hover:scale-105 duration-200 ">SignUP</li>
        </ul>
        <div onClick={handleMenu} className="block md:hidden">
          {mobileMenu ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}       
        </div>
        <ul className={mobileMenu ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500" : "ease-in-out duration-500 fixed left-[-100%]"}>
            <h1 className="w-full text-3xl font-bold uppercase m-4">Intership</h1>
            <li className="p-4 border-b border-gray-600 hover:scale-105 hover:bg-zinc-700 uppercase">Home</li>
            <li className="p-4 border-b border-gray-600 hover:scale-105 hover:bg-zinc-700 uppercase">Contact</li>
            <li className="p-4 border-b border-gray-600 hover:scale-105 hover:bg-zinc-700 uppercase">About</li>
            <li className="p-4 border-b border-gray-600 hover:scale-105 hover:bg-zinc-700 uppercase">SignUP</li>
        </ul>
        </div>
    )
}

export default Navbar;