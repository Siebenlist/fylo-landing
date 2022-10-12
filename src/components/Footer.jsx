import React from "react";
import logo from "../assets/img/logo.svg";
import location from "../assets/img/icon-location.svg";
import phone from "../assets/img/icon-phone.svg";
import email from "../assets/img/icon-email.svg";

const Footer = () => {
   return (
      <div className="flex flex-col justify-center lg:justify-start py-5 w-full items-center bg-[#0b1523]">
         <div className="w-[80%] my-10">
            <img src={logo} alt="" />
         </div>
         <div className="flex flex-col lg:flex-row lg:gap-[250px]">
            <div className="flex gap-5 items-start mb-3 lg:mb-0">
               <div className="w-4">
                  <img src={location} alt="" />
               </div>
               <div className="w-full">
                  <p className="w-full max-w-[250px]">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua
                  </p>
               </div>
            </div>
            <div className="flex flex-col justify-start items-start lg:gap-5">
               <div className="flex items-center gap-5 mb-3 lg:mb-0">
                  <div className="w-5">
                     <img src={phone} alt="" />
                  </div>
                  <div>
                     <p>+1-543-123-4567</p>
                  </div>
               </div>
               <div className="flex items-start gap-5">
                  <div className="w-5">
                     <img src={email} alt="" />
                  </div>
                  <div>
                     <p>example@gmail.com</p>
                  </div>
               </div>
            </div>
            <div className="">
               <ul>
                  <li>About Us</li>
                  <li>Jobs</li>
                  <li>Press</li>
                  <li>Blog</li>
               </ul>
            </div>
            <div className="">
               <ul>
                  <li>Contact Us</li>
                  <li>Terms</li>
                  <li>Privacy</li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Footer;
