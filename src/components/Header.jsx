import React from "react";
import hero from "../assets/img/illustration-intro.png";

const Header = () => {
   return (
      <div className="Container">
         <div className="flex flex-col items-center text-center my-10">
            <div className="w-[90%] max-w-[620px]">
               <img src={hero} alt="" />
            </div>
            <div className="w-[85%] max-w-[650px] mt-5">
               <h1 className="text-2xl sm:text-4xl font-bold">
                  All your files in one secure location, accesible anywhere.
               </h1>
            </div>
            <div className="w-[90%] max-w-[550px] my-5">
               <p className="text-base sm:text-lg">
                  Fylo stores all your most important files in one secure
                  location. Access them wherever you need, share and collaborate
                  with friends family, and co-workers.
               </p>
            </div>
            <button className="py-4 px-[100px] my-5 bg-gradient-to-r from-[#65e2d9] to-[#339ecc] rounded-full hover:bg-gradient-to-l hover:scale-105 ease-in-out duration-500">
               Get Started
            </button>
         </div>
      </div>
   );
};

export default Header;
