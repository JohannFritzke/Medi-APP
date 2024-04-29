import React from "react";
import { useState } from "react";
import "./SideBar.css";

import { IoIosMenu } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { BsCalendar2DateFill } from "react-icons/bs";

import Logo from "../Logo/Logo";

/* eslint-disable */
export default function Sidebar() {
  const [isSidebarClosed, setSidebarClosed] = useState(true);
  const [activeLink, setActiveLink] = useState("Inicio");

  const toggleSidebar = () => {
    setSidebarClosed(!isSidebarClosed);
  };

  const sidebarClass = `sidenav ${isSidebarClosed ? "close" : ""}`;
  const links = [
    { name: "Inicio", icon: <FaHome /> },
    { name: "Cadastros", icon: <GiArchiveRegister /> },
    { name: "Agendamentos", icon: <BsCalendar2DateFill /> },
  ];
  return (
    <div className={sidebarClass}>
      <div className="sidebar-top">
        <a href="" className="logo">
          <div className="logo-name">
            <span style={{ color: "#3a86ff" }}>i</span>Medic
          </div>
          <Logo />
        </a>
        <i onClick={toggleSidebar}>
          <IoIosMenu />
        </i>
      </div>

      <div className="sidebar-mid">
        <ul>
          {links.map((link) => (
            <li
              key={link.name}
              className={activeLink === link.name ? "action" : ""}
              onClick={() => setActiveLink(link.name)}
            >
              <i>{link.icon}</i>
              <span>{link.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
