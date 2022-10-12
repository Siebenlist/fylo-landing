import React from "react";

const Contact = () => {
   return (
      <div className="flex justify-center items-center mb-[100px] drop-shadow-2xl">
         <div className="flex flex-col justify-center items-center w-[90%] max-w-[1000px] text-center bg-[#202a3c] rounded-xl">
            <div className="w-[90%] max-w-[700px] my-10">
               <h1 className="text-2xl lg:text-4xl font-bold mb-5">
                  Get early access today
               </h1>
               <p className="text-base lg:text-lg">
                  It only takes a minute to sign up and our free starter tier is
                  extremely generous. If you have any questions, our support
                  team would be happy to help you.
               </p>
            </div>
            <form
               action=""
               className="flex flex-col lg:flex-row justify-center items-center lg:gap-10 mb-10 w-[80%] max-w-[800px]"
            >
               <input
                  type="email"
                  placeholder="email@example.com"
                  className="py-5 px-5 w-full max-w-[450px] rounded-full mb-5 lg:mb-0"
               />
               <input
                  type="submit"
                  value="Get Started For Free"
                  className="py-5 px-5 w-full md:max-w-[250px] rounded-full bg-gradient-to-r from-[#65e2d9] to-[#339ecc] hover:bg-gradient-to-l hover:scale-105 ease-in-out duration-500"
               />
            </form>
         </div>
      </div>
   );
};

export default Contact;
