import React from "react";
import image from "../assets/img/illustration-stay-productive.png";
import iconArrow from "../assets/img/icon-arrow.svg";

const Usage = () => {
   return (
      <div>
         <div className="flex flex-col lg:flex-row lg:gap-[150px] justify-center items-center mx-auto my-[150px]">
            <div className="w-[90%] max-w-[600px] ">
               <img src={image} alt="" className="mx-auto" />
            </div>
            <div className="flex flex-col justify-center w-[95%] max-w-[500px]">
               <div className="my-10">
                  <h1 className="text-xl lg:text-5xl font-bold text-center lg:text-left">
                     Stay productive, wherever you are
                  </h1>
               </div>
               <div className="mb-5">
                  <p>
                     Never let location be an issue when accessing your files.
                     Fylo has you covered for all of your file storage needs.
                  </p>
               </div>
               <div className="mb-5">
                  <p>
                     Securely share files and folder with friends, family and
                     colleague for live collaboration. No email attachments
                     required.
                  </p>
               </div>
               <div className="flex w-[185px] gap-3 border-b-2 hover:scale-105 ease-in-out duration-500">
                  <a href="a">See how Fylo works</a>
                  <img src={iconArrow} alt="" className="w-[24px]" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Usage;
