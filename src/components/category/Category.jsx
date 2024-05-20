import React from 'react'
import "./Style.css"
import Link from 'next/link'
import { FaBeer, FaCar, FaLaptopCode, FaMobile, FaWater  } from "react-icons/fa";
import { GiClothes, GiToyMallet} from "react-icons/gi"


function Category() {
  return (
    <div className="flex container ml-[6%] items-center justify-between bg-gray-200 h-150px w-full" id="cat">
    <Link href="#" className="flex items-center px-4 py-2 ">
      <FaLaptopCode className="mr-2" />
      Electronics  
    </Link>
    <Link href="#" className="flex items-center px-4 py-2 ">
      <FaWater className="mr-2" />
      Grocery
    </Link>
    <Link href="#" className="flex items-center px-4 py-2 ">
    <GiClothes  className="mr-2" />
      Fashion
    </Link>
    <Link href="#" className="flex items-center px-4 py-2 ">
    <FaMobile  className="mr-2" />
      Mobile
    </Link>
    <Link href="#" className="flex items-center px-4 py-2 ">
    <FaCar  className="mr-2" />
      Vehicle
    </Link>
    <Link href="#" className="flex items-center px-4 py-2 ">
    <GiToyMallet  className="mr-2" />
      Toys
    </Link>
  </div>
  )
} 

export default Category