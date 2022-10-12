import React from "react";
import Card from "./ReviewCard";
import review1 from "../assets/img/profile-1.jpg";
import review2 from "../assets/img/profile-2.jpg";
import review3 from "../assets/img/profile-3.jpg";

const Reviews = () => {
   return (
      <div className="my-[250px]">
         <div className="flex flex-col lg:flex-row gap-5 w-full justify-evenly items-center">
            <Card profileImg={review1} name="Satish Patel" />

            <Card profileImg={review2} name="Bruce McKenzie" />

            <Card profileImg={review3} name="Iva Boyd" />
         </div>
      </div>
   );
};

export default Reviews;
