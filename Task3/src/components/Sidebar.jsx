import React from "react";
const Sidebar = () => {
    return (
      <aside className="w-65 bg-gray-800 h-full flex flex-col">
        <h2 className="text-xl font-bold text-white m-4">Admin Panel</h2>
        <ul >
          <li className="text-xl text-white hover:text-sky-700 m-5 cursor-pointer">Dashboard</li>
          <li className="text-xl text-white  hover:text-sky-700 m-5 cursor-pointer">Users</li>
          <li className="text-xl text-white hover:text-sky-700 m-5 cursor-pointer">Settings</li>
        </ul>
      </aside>
    );
  };
  
  export default Sidebar;
  