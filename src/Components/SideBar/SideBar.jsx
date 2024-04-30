import React, { useState, useEffect } from "react";
import "./SideBar.css";
import { Link, useLocation } from "react-router-dom";

import { IoIosMenu } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { BsCalendar2DateFill } from "react-icons/bs";

import Logo from "../Logo/Logo";

export default function Sidebar() {
  const [isSidebarClosed, setSidebarClosed] = useState(true);
  const [activeLink, setActiveLink] = useState("Inicio");
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarClosed(!isSidebarClosed);
  };

  const sidebarClass = `sidenav ${isSidebarClosed ? "close" : ""}`;
  const links = [
    { name: "Inicio", icon: <FaHome />, link: "/user/dashboard" },
    { name: "Cadastros", icon: <GiArchiveRegister />, link: "/user/cadastros" },
    {
      name: "Agendamentos",
      icon: <BsCalendar2DateFill />,
      link: "/user/agendamentos",
    },
  ];

  useEffect(() => {
    const pathname = location.pathname;
    const link = links.find((link) => link.link === pathname);
    if (link) {
      setActiveLink(link.name);
    }
  }, [location.pathname, links]);

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
            <Link
              to={link.link}
              className="link"
              key={link.name}
              onClick={() => setActiveLink(link.name)}
            >
              <li className={activeLink === link.name ? "action" : ""}>
                <i>{link.icon}</i>
                <span>{link.name}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
