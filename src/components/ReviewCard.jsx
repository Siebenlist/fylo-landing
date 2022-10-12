export default function Card({ name, profileImg }) {
   return (
      <div className="flex flex-col justify-center items-center w-[90%] max-w-[500px] h-[250px] my-3 rounded-lg bg-[#202a3c]">
         <div className="w-[90%] max-w-[400px] my-10">
            <p className="text-base h-[100px]">
               'Fylo has improved our team productivity by an order of
               magnitude. Since making the switch our team has become a
               well-oiled collaboration machine.'
            </p>
         </div>
         <div className="flex gap-5 w-[80%]">
            <div className="">
               <img
                  src={profileImg}
                  alt={name}
                  className=" w-[50px] rounded-full mb-5"
               />
            </div>
            <div>
               <h2 className="font-bold">{name}</h2>
               <p className="text-sm">Founder & CEO, Huddle</p>
            </div>
         </div>
      </div>
   );
}
