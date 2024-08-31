"use client";
import { MdLogout, MdOutlineDashboardCustomize, MdOutlineNotifications, MdOutlinePayments, MdOutlineSettings, MdSchedule } from "react-icons/md";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { AiOutlineStock } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { LuMessageSquare } from "react-icons/lu";




import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  
  const links = [
    { name: "Dashboard", path: "/", icon: <MdOutlineDashboardCustomize /> },
    { name: "Academics", path: "/academics" ,icon:<HiOutlineAcademicCap />},
    { name: "Grades", path: "/grades",icon:<AiOutlineStock /> },
    { name: "Profile", path: "/profile" , icon: <SlCalender /> },
    { name: "Schedules", path: "/schedules",icon : <MdSchedule />
    },
    { name: "Fees and Payments", path: "/fees-and-payments",icon:<MdOutlinePayments />
    },
    { name: "Messages", path: "/messages",icon:<LuMessageSquare />, notification: 2
    },
    { name: "Notifications", path: "/notification",icon:<MdOutlineNotifications />,notification: 2
    },
    { name: "Settings", path: "/settings",icon:<MdOutlineSettings />
    },
    { name: "Logout", path: "/logout",icon:<MdLogout/>

    },
  ];

  return (
    <div className="w-full bg-white  pt-2 pl-6 pr-3">
        <h1 className="text-2xl py-6 pb-2 text-start">LOGO</h1>
      <nav className="space-y-2">
        {links.map((link) => (
          <Link key={link.name} href={link.path}>
            <button
              className={`block text-left text-lg  w-full py-2  rounded-md text-black hover:text-blue-500 hover:bg-blue-100 ${
                pathname === link.path ? "text-blue-500 bg-blue-100" : ""
              }`}
            > 
              
              <div className="flex gap-4 items-center">
                <span>{link?.icon}</span> 
              <span className="">{link?.name}
                {
                link?.notification ? <button className="rounded-full  bg-red-600 text-white text-right">{link.notification}</button> : ""
              } </span>
              </div>
             
            </button>
          </Link>
        ))}
      </nav>

    </div>
  );
};

export default Sidebar;
