import { useState } from "react";
import { BsArrowLeftShort, BsChevronDown, BsSearch } from "react-icons/bs";
import { AiOutlineSlack } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import { FaVideoSlash } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsArrowRightShort } from "react-icons/bs";
import { TbCurrencyYen } from "react-icons/tb";
import { MdGraphicEq } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { MdOutlineLibraryBooks } from "react-icons/md";
import "../App.css";

const Layout = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setsubmenuOpen] = useState(false);

  const Menus = [
    { title: "Dashboard" },
    { title: "Course" },
    { title: "Student", spacing: true },
    {
      title: "Schedules",
      submenu: true,
      submenuItems: [
        { title: "Submenu 1" },
        { title: "Submenu 2" },
        { title: "Submenu 3" },
      ],
    },
    { title: "Classes" },
    { title: "Inbox" },
    { title: "Profile", spacing: true },
    { title: "Setting" },
  ];
    // Sidebar
    
  return (
    <div className=" h-screen  overflow-hidden flex bg-slate-50">
      <div
        className={`bg-transparent mt-5 border-1 shadow-lg side-bar h-[80rem] p-5 pt-[rem] ${
          open ? "w-72" : "w-24"
        } duration-300   `}
      >
        <BsArrowLeftShort
          className={` bg-white text-slate-400 text-3xl rounded-full absolute -right-4 top-9 border border-blue-100 cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />

        <div className=" ml-2 p-1 inline-flex ">
          <AiOutlineSlack
            className={` bg-blue-500 text-white text-4xl rounded cursor-pointer block float-left duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-blue-500  origin-left font-bold text-2xl ml-2 duration-300 ${
              !open && "scale-0"
            }`}
          >
            Administrator
          </h1>
        </div>

        <ul className="pt-20 ml-2">
          {Menus.map((menu, index) => (
            <>
              <li
                key={index}
                className={`text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-500 hover:text-white rounded-md duration-300 ${
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
                  <BsChevronDown
                    className={`${submenuOpen && "rotate-180"} text-white font-extrabold`}
                    onClick={() => setsubmenuOpen(!submenuOpen)}
                  />
                )}
              </li>

              {menu.submenu && submenuOpen && open && (
                <ul>
                  {menu.submenuItems.map((submenuItem, index) => (
                    <li
                      key={index}
                      className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-8 hover:bg-blue-500 rounded-md"
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

      {/* Homepage */}

      {
        <div className=" mt-10 relative flex flex-row w-screen p-7 gap-[80rem] ">
          <div className="ml-7">
            <h3 className="font-semibold text-base">Hi, Geezy</h3>
            <h1 className="text-3xl font-bold">Welcome to SAIL!</h1>
          </div>

          <div className=" mt-[15px] ml-[-40px]">
            <label className="relative">
              <input
                type="search"
                className=" h-10 w-72 item-center rounded-lg border-2 border-blue-300 bg-transparent border-opacity-50 outline-none focus:border-blue-500 transition duration-200 focus:text-black px-10"
              />
              <span className=" flex text-xl text-blue-500 text-opacity-80 absolute left-2 top-[1px] transition duration-200">
                <BsSearch className=" text-2xl bg-slate-200 rounded-md p-1" />
              </span>
            </label>
          </div>

          <div className="absolute top-36">
            <div>
              <div className="">
                <div className="">
                  <div className=" grid grid-cols-12 rounded-lg">
                    <div className=" flex-col items-center hover:scale-110 duration-200 content-center cursor-pointer w-[20rem] bg-white shadow-lg p-4 m-8 rounded-lg  mr-16  h-32">
                      <span className="">
                        <MdOutlineLibraryBooks className="w-10 h-10 mt-7 bg-slate-100  text-blue-500 rounded-full p-2" />
                      </span>
                      <h1 className="font-extrabold text-xl text-slate-400 flex items-center ml-14 mt-[-4rem] ">
                        Live Courses
                      </h1>
                      <p className=" text-black text-2xl font-extrabold  ml-14 ">
                        13
                      </p>
                    </div>
                    <div className=" hover:scale-110 duration-200 flex cursor-pointer w-80 bg-white shadow-lg p-4 m-8 rounded-lg ml-[19rem]">
                      <div className=" bg-slate-100 w-10 h-10 p-3 rounded-full text-3xl mt-7 ">
                        <FaVideoSlash className=" text-blue-500 text-2xl mt-[-4px] ml-[-4px] " />
                      </div>
                      <h1 className=" text-2xl text-slate-400 font-extrabold flex items-center gap-2 mt-[-4rem] ml-3">
                        Video
                      </h1>

                      <p className="  mt-9 text-2xl ml-[-4rem] font-extrabold">
                        230
                      </p>
                    </div>
                    <div className=" hover:scale-110 duration-200 cursor-pointer w-80 bg-white shadow-lg p-4 m-8 rounded-lg ml-[36rem]">
                      <div className="bg-slate-100 w-11 h-11 p-2 rounded-full text-3xl mt-7">
                        <FiUsers className="  p-1 text-blue-500 " />
                      </div>
                      <h1 className=" font-extrabold text-slate-400 ml-16 flex items-center gap-5 mt-[-65px] text-2xl">
                        Students
                      </h1>
                      <p className="ml-16 text-2xl font-extrabold">230</p>
                    </div>
                    <div className=" hover:scale-110 duration-200 cursor-pointer w-80 shadow-lg p-4 m-8 rounded-lg bg-blue-500 ml-[53rem]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex  gap-0">
                    <div className="bg-white shadow-lg rounded-lg  h-[22rem] w-[40%] m-16 ml-8 mr-16">
                      <h1 className="font-bold text-[--green] mt-5 ml-5 text-black text-2xl">
                        Top Courses
                      </h1>
                      <div className="flex mt-3 p-1">
                        <div>
                          <p className="font-bold text-black flex items-center gap-2 mt-5 ml-5">
                            {" "}
                            <FaVideoSlash className="text-2xl text-[--gold]" />{" "}
                            History of india{" "}
                          </p>
                          <p className=" text-black ml-5 text-20">#34561</p>
                        </div>
                        <div className="ml-96 mt-5 ">
                          <p className="text-[--green]"> $2567.89</p>
                          <p className="text-[--gray]"> 131 subscribers</p>
                        </div>
                      </div>

                      <div className="flex">
                        <div>
                          <p className="font-bold text-black flex items-center gap-2 mt-5 ml-5">
                            {" "}
                            <FaVideoSlash className="text-2xl text-[--gold]" />{" "}
                            History of india{" "}
                          </p>
                          <p className=" text-black ml-5 text-20">#34561</p>
                        </div>
                        <div className="ml-96 mt-5 ">
                          <p className="text-[--green]"> $2567.89</p>
                          <p className="text-[--gray]"> 131 subscribers</p>
                        </div>
                      </div>

                      <div className="flex">
                        <div>
                          <p className="font-bold text-black flex items-center gap-2 mt-5 ml-5">
                            {" "}
                            <FaVideoSlash className="text-2xl text-[--gold]" />{" "}
                            History of india{" "}
                          </p>
                          <p className=" text-black ml-5 text-20">#34561</p>
                        </div>
                        <div className="ml-96 mt-5 ">
                          <p className="text-[--green]"> $2567.89</p>
                          <p className="text-[--gray]"> 131 subscribers</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg  h-[22rem] w-[40%] m-16 p-1 ">
                      <h1 className="font-bold text-black mt-3 ml-3 text-3xl">
                        Upcoming Tasks
                      </h1>
                      <div className="border-l-4 border-blue-500 p-3 ml-3 mt-3">
                        <p>Enviroment Discuss</p>
                        <p>01:00-02:00</p>
                      </div>
                      <div className="border-l-4 border-blue-500 p-4 ml-3 mt-3">
                        <p>Enviroment Discuss</p>
                        <p>01:00-02:00</p>
                      </div>
                      <div className="border-l-4 border-blue-500 p-4 ml-3 mt-3">
                        <p>Enviroment Discuss</p>
                        <p>01:00-02:00</p>
                      </div>

                      <p className=" cursor-pointer ml-[80%] text-slate-400 flex items-center font-bold hover:text-blue-500">
                        View all tasks <BsArrowRightShort />
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div>
                  <div className="flex ">
                    <div className="bg-white shadow rounded-lg w-[65%] h-72 m-16 ml-8 mr-16">
                      <p className=" text-[--green] font-bold ml-3 mt-3">
                        Viewership New subscribers Earnings{" "}
                      </p>
                      <p className=" ml-[80%] text-[--green]">
                        <MdGraphicEq />
                      </p>
                      <p className="text-black font-bold ml-3 mt-3 text-xl">
                        1,130 hours
                      </p>
                    </div>
                    <div className="bg-white shadow rounded-lg w-[35%] h-72 m-16 ml-8 mr-16">
                      <h1 className="text-xl font-bold text-[--green] ml-3 mt-3 ">
                        Discusssion box
                      </h1>
                      <p className="text-black mt-3 ml-3 font">Recent</p>
                      <p className="w-9 h-9 shadow rounded-full flex items-center justify-center ml-3 mt-3"></p>
                      <p className="w-9 h-9 shadow rounded-full flex items-center justify-center ml-3 mt-3"></p>
                      <p className="w-9 h-9 shadow rounded-full flex items-center justify-center ml-3 mt-3"></p>
                      <p className="ml-[80%] text-[--green] flex items-center font-bold">
                        View all <BsArrowRightShort />
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Layout;
