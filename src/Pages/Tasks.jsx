import {useState} from 'react'
import {Layout, Image} from 'antd'
import { BsArrowLeftShort, BsChevronDown, BsSearch } from "react-icons/bs";
import { AiOutlineSlack } from "react-icons/ai";
import sail from "../Assets/sailinn.jpg"
import { RiDashboardFill } from "react-icons/ri";
import { Switch, Route, Link } from 'react-router-dom'; 


const {Header,Footer, Sider, Content} = Layout;
function Dashboard() {
  <Layout/>
}

function Tasks() {
    const [open, setOpen] = useState(true);
    const [submenuOpen, setsubmenuOpen] = useState(false);

    const Menus = [
        { title: "Dashboard", path: '/landing' },
        { title: "Course" },
        { title: "Student", path:'/student', spacing: true },
        {
          title: "Tasks" ,path:'/tasks' ,
          submenu: true,
          submenuItems: [
            { title: "Task 1" },
            { title: "Task 2" },
            { title: "Task 3" },
          ],
        },
        { title: "Classes" },
        { title: "Inbox" },
        { title: "Profile", spacing: true },
        { title: "Setting" },
      ];
  return (
    <div className=" h-screen  overflow-hidden flex bg-slate-50">
        <Sider className={`bg-transparent mt-5 border-1 shadow-lg side-bar h-[80rem] p-5 pt-[rem] ${
          open ? "w-72" : "w-24"
        } duration-300   `}>
            <BsArrowLeftShort
          className={` bg-white text-slate-200 text-3xl rounded-full absolute -right-4 top-9 border border-blue-100 cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div >
        <Image src={sail} alt='...' width={50}/>
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
                <Link to={menu.path} className="text-2xl block float-left">
                  {menu.icon ? menu.icon : <RiDashboardFill />}
                </Link>
                <Link to={menu.path}
                  className={`text-base font-medium flex-1 duration-200 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                </Link>
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
        </Sider>
        <Header className=' bg-white'>

        </Header>
    </div>
  )
}

export default Tasks