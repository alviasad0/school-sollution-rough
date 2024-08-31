import Image from "next/image";
import { FaBell,  FaSearch } from "react-icons/fa";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

const Navbar = () => {
    return (
        <div className="border-2 shadow-xl">
            
<nav className="b p-4 flex items-center justify-between">
      {/* Left Side - Search Bar */}
      <div className="flex items-center">
        <div className="relative text-black">
          <input
            type="text"
            className=" h-10 px-5  border-2 rounded-lg  pl-12 text-sm focus:outline-none focus:bg-gray-300"
            placeholder="Search..."
          />
          <button type="submit" className="absolute left-0 top-0 mt-2 ml-4">
          <FaSearch className="w-6 h-6 "/>

          </button>
        </div>
      </div>

      {/* Right Side - Icons and Profile */}
      <div className="flex items-center space-x-4">
        {/* Bell Icon */}
        <button className="text-gray-400 hover:text-white focus:outline-none">
        <FaBell className="h-6 w-6 text-blue-500"/>
        </button>

        {/* Profile Picture and Name */}
        <div className="flex gap-5 items-center">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="Profile"
            width="50"
            height={"50"}
            className=" rounded-full"
          />
          <div>
           <h1 className="text-lg font-bold text-black">Mony Roy</h1>
           <h1 className="text-sm"> Student</h1>

          </div>
        {/* Arrow Icon */}
        <button className="text-gray-400 hover:text-black focus:outline-none">
        <MdOutlineArrowDropDownCircle  className="text-2xl"/>
          
          
        </button>
        </div>

      </div>
    </nav>    
        </div>
    );
};

export default Navbar;