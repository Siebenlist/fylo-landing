import React from "react";
import img1 from "../assets/img/icon-access-anywhere.svg";
import img2 from "../assets/img/icon-security.svg";
import img3 from "../assets/img/icon-collaboration.svg";
import img4 from "../assets/img/icon-any-file.svg";

const Info = () => {
   return (
      <div>
         <div className="flex flex-col md:flex-row flex-wrap justify-center items-center mx-auto w-[80%] max-w-[900px] text-center mt-[150px]">
            <div className="flex flex-col w-full max-w-[400px] justify-start items-center my-10">
               <div>
                  <img src={img1} alt="" />
               </div>
               <div className="my-5">
                  <h1 className="text-xl font-bold">
                     Access your files, anywhere
                  </h1>
               </div>
               <div className="w-[324px]">
                  <p>
                     The ability to use a smartphone, tablet, or computer to
                     access your account menas your files follow you everywhere.
                  </p>
               </div>
            </div>
            <div className="flex flex-col w-full max-w-[400px] justify-center items-center my-10">
               <div>
                  <img src={img2} alt="" />
               </div>
               <div className="my-5">
                  <h1 className="text-xl font-bold">Security you can trust</h1>
               </div>
               <div className="w-[324px]">
                  <p>
                     2-factor authentication and user-controlled encryption are
                     just a couple of the security features we allow to help
                     secure your files.
                  </p>
               </div>
            </div>
            <div className="flex flex-col w-full max-w-[400px] justify-start items-center my-10">
               <div>
                  <img src={img3} alt="" />
               </div>
               <div className="my-5">
                  <h1 className="text-xl font-bold">Real-time collaboration</h1>
               </div>
               <div className="w-[324px]">
                  <p>
                     Securely share files and folders with friends, family and
                     colleagues for live collaboration. No email attachments
                     required.
                  </p>
               </div>
            </div>
            <div className="flex flex-col w-full max-w-[400px] justify-center items-center my-10">
               <div>
                  <img src={img4} alt="" />
               </div>
               <div className="my-5">
                  <h1 className="text-xl font-bold">Store any type of file</h1>
               </div>
               <div className="w-[324px]">
                  <p>
                     Whether you're sharing holidays photos or work documents,
                     Fylo has you covered allowing for all file types to be
                     securely stores and shared.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Info;
