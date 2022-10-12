import React from "react";
import logo from "../assets/img/logo.svg";

const Navbar = () => {
   return (
      <div>
         <div className="flex justify-between items-center w-full max-w-[1000px] h-[80px] px-5 mx-auto">
            <div>
               <img
                  src={logo}
                  alt="Logo"
                  className="w-[100px] h-[30px] hover:scale-105 ease-in-out duration-500"
               />
            </div>
            <ul className="flex justify-center items-center gap-5 sm:gap-10 text-sm sm:text-base md:text-lg">
               <li className="hover:font-bold hover:scale-105 ease-in-out duration-500">
                  <a href="a">Features</a>
               </li>
               <li className="hover:font-bold hover:scale-105 ease-in-out duration-500">
                  <a href="a">Team</a>
               </li>
               <li className="hover:font-bold hover:scale-105 ease-in-out duration-500">
                  <a href="a">Sign In</a>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Navbar;
