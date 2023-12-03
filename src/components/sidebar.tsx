import { useState } from "react";
import LogoWhite from "./logo-white";
import sections from "../pages/home/sections";

export default function SideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const activeSection = 3;
  return (
    <div className="sidebar-wrapper">
      <div className={`${isSidebarOpen ? "sidebar" : "sidebar-closed"}`}>
        <div className="app-logo">
          <LogoWhite />
        </div>
        <div className="sidebar-contents">
          {sections.map((item) => (
            <div
              key={item.id}
              className={`sidebar-list-item ${
                item.id === activeSection ? "sidebar-list-item-active" : ""
              }`}
            >
              <div className="sidebar-list-logo">
                <img
                  src={item.icon}
                  alt={item.name}
                />
              </div>
              <span className="sidebar-list-text">{item.name}</span>
            </div>
          ))}
          <div className="sidebar-list-item sidebar-list-item-logout">
            <div className="sidebar-list-logo">
              <img src="/images/home/sidebar/logout.svg" alt="logout" />
            </div>
            <span className="sidebar-list-text">Logout</span>
          </div>
        </div>
      </div>
      <div
        className={`collapse-button ${
          isSidebarOpen ? "not-collapsed" : "collapsed"
        }`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <img src="/images/home/sidebar/collapse.svg" alt="collapse" />
      </div>
    </div>
  );
}