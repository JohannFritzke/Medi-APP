import React from "react";
import { FaUser } from "react-icons/fa";
import Logo from "../Logo/Logo";
import "./TopBar.css";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="logo-center">
        <div>
          <span style={{ color: "#3a86ff" }}>i</span>Medic
        </div>
        <Logo />
      </div>
      <div className="user">
        <span>User</span>
        <FaUser />
      </div>
    </div>
  );
}
