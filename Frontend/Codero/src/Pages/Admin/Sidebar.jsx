import { NavLink } from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaCalendarDays } from "react-icons/fa6";
// import { MdSupervisorAccount } from 'react-icons/md';
import { TbReportSearch } from "react-icons/tb";
import { TbBrandCodesandbox } from "react-icons/tb";
// import { MdOutlineSettings } from 'react-icons/md';
// import { IoHelp } from 'react-icons/io5';
import { BsCameraReelsFill } from "react-icons/bs";

function Sidebar() {
  const sideItems = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: <MdOutlineDashboardCustomize />,
    },
    {
      name: "Production Templates",
      path: "/admin/ProductionTemplates",
      icon: <BsCameraReelsFill />,
    },
    {
      name: "Calendar",
      path: "/admin/Calendar",
      icon: <FaCalendarDays />,
    },
    {
      name: "Reports",
      path: "/admin/Reports",
      icon: <TbReportSearch />,
    },
    {
      name: "Accesscodes",
      path: "/admin/AccessCodes",
      icon: <TbBrandCodesandbox />,
    },
  ];

  return (
    <aside className="bg-gray-900">
      <div class="flex items-center space-x-3 mt-8 mb-6">
        <NavLink to="/">
          <img
            src="/assets/images/logo.png"
            alt="App logo"
            class="rounded-full ml-2 cursor-pointer w-10"
          />
        </NavLink>
        <NavLink to="/">
          <h1 class="text-3xl cursor-pointer">Codero</h1>
        </NavLink>
      </div>

      {/* Navigation */}
      <nav>
        {sideItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "/admin"}
            className={({ isActive }) =>
              `mt-2 flex items-center space-x-2 px-4 py-0 rounded-lg transition ${isActive ? "bg-gray-700 text-white" : " hover:bg-white hover:text-kalas"}`
            }
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );

  // <div>
  //   <aside className="bg-gray-900">
  //     <div class="flex items-center space-x-3 mt-8">
  //       <Link to="/">
  //         <img src="/assets/images/logo.png" alt="App logo" class="rounded-full ml-2 cursor-pointer w-10" />
  //       </Link>
  //       <h1 class="text-3xl">Codero</h1>
  //     </div>

  //     <div class="mt-8 flex items-center space-x-3  ml-3 hover:text-kalas cursor-pointer">
  //       <MdOutlineDashboardCustomize class="text-2xl" />
  //       <p>Dashboard</p>
  //     </div>
  //     <div class="mt-4 flex items-center space-x-3 ml-3 hover:text-kalas cursor-pointer">
  //       <BsCameraReelsFill class="text-2xl" />
  //       <p>Productions</p>
  //     </div>
  //     <div class="mt-4 flex items-center space-x-3 ml-3 hover:text-kalas cursor-pointer">
  //       <FaCalendarDays class="text-2xl" />
  //       <p>Calendar</p>
  //     </div>
  //     <div class="mt-4 flex items-center space-x-3 ml-3 hover:text-kalas cursor-pointer">
  //       <MdSupervisorAccount class="text-2xl" />
  //       <p>Supervisors</p>
  //     </div>
  //     <div class="mt-4 flex items-center space-x-3 ml-3 hover:text-kalas cursor-pointer">
  //       <TbReportSearch class="text-2xl" />
  //       <p>Reports</p>
  //     </div>
  //     <div class="mt-4 flex items-center space-x-3 ml-3 hover:text-kalas cursor-pointer">
  //       <TbBrandCodesandbox class="text-2xl" />
  //       <p>Access Codes</p>
  //     </div>
  //     <p class="mt-8 ml-3">Management</p>
  //     <div class="mt-4 flex items-center space-x-3 ml-3 hover:text-kalas cursor-pointer">
  //       <MdOutlineSettings class="text-2xl" />
  //       <p>Settings</p>
  //     </div>
  //     <div class="mt-4 flex items-center space-x-3 ml-3 hover:text-kalas cursor-pointer">
  //       <IoHelp class="text-2xl" />
  //       <p>Help</p>
  //     </div>
  //     <p class="mt-8 ml-3 hover:text-kalas cursor-pointer">Log out</p>
  //   </aside>
  // </div>
}

export default Sidebar;
