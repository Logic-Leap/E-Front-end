import Ads from "@/components/Carasoul/Ads";
import Card from "@/components/Card/Card";
import Category from "@/components/category/Category";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Category />
      <Ads />

      {/* search Feature  */}
      <div className="flex items-center w-full justify-center mt-16">
        <div className="relative w-full container">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-800 w-[50%] rounded-md py-2 px-4 pr-12 focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            style={{ color: "white", marginLeft: "20px" }}
            className="absolute h-10  top-0 bg-gray-800 px-3 py-2 rounded-md  focus:outline-none focus:ring focus:bg-gray-400"
          >
            <FaSearch />
          </button>
        </div>
      </div>
      {/* search Feature  */}

{/*product listing  */}
<div className="mt-20 ml-16 container grid grid-cols-4 gap-5">  
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />

</div>
{/*product listing  */}

      
    </>
  );
}
