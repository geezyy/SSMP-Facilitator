import { useState } from "react";
import { BsArrowLeftShort, BsChevronDown } from "react-icons/bs";
import { AiOutlineSlack } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";

import "../App.css";

const Layout = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setsubmenuOpen] = useState(false);
  
  
  const Menus = [
    {title: "Dashboard"},
    {title: "Pages"},
    {title: "Media", spacing: true},
    {
      title: "Projects",
      submenu: true,
      submenuItems:[
        { title:"Submenu 1" },
        { title:"Submenu 2" },
        { title:"Submenu 3" },
      ],
    },
    { title: "Analytics" },
    { title: "Inbox" },
    { title: "Profile", spacing: true},
    { title: "Setting" },
    { title: "Logout" },
  ];



  return (
    <div className=" flex">
      <div
        className={` bg-inherit border-4 h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 w-72 relative`}
      >
        <BsArrowLeftShort
          className={` bg-white text-black text-3xl rounded-full absolute -right-3 top-9 border border-green-100  cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />

        <div className=" inline-flex">
          <AiOutlineSlack
            className={` bg-green-500 text-white text-4xl rounded cursor-pointer block float-left duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-green-500 origin-left font-bold text-2xl ml-2 duration-300 ${
              !open && "scale-0"
            }`}
          >
            Facilitator
          </h1>
        </div>

        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
              <li
                key={index}
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-black rounded-md ${
                  menu.spacing ? "mt-9" : "mt-2"
                } mt-2 `}
              >
                <span className="text-2xl block float-left">
                  {menu.icon ? menu.icon : <RiDashboardFill />}
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-200 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
                {menu.submenu && (
                  <BsChevronDown className={`${submenuOpen && "rotate-180"}`} onClick={() => setsubmenuOpen(!submenuOpen)} />
                )}
              </li>

              {menu.submenu && submenuOpen && open &&(
                <ul>
                  {menu.submenuItems.map((submenuItem, index) => (
                    <li
                      key={index}
                      className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-8 hover:bg-black rounded-md"
                    >
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
      <div className=" bg-green-300 w-screen p-7">
        <h1 className="text-2xl font-semibold">Home Page</h1>
      </div>
    </div>
  );
};

export default Layout;
