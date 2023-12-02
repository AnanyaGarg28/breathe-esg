import { useState } from "react";
import LogoWhite from "./logo-white";

export default function SideBar() {
  const sidebarListItems = [
    {
      name: "Dashboard",
      icon: "dashboard",
      isActive: false,
    },
    {
      name: "Entity Manager",
      icon: "entity-manager",
      isActive: false,
    },
    {
      name: "Data Manager",
      icon: "data-manager",
      isActive: true,
    },
    {
      name: "Entity Manager",
      icon: "entity-manager",
      isActive: false,
    },
    {
      name: "Reporting",
      icon: "reporting",
      isActive: false,
    },
    {
      name: "Materiality",
      icon: "materiality",
      isActive: false,
    },
    {
      name: "Suppliers",
      icon: "suppliers",
      isActive: false,
    },
    {
      name: "Analytics",
      icon: "analytics",
      isActive: false,
    },
    {
      name: "Targets",
      icon: "Targets",
      isActive: false,
    },
  ];
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className="sidebar-wrapper">
      <div className={`${isSidebarOpen ? "sidebar" : "sidebar-closed"}`}>
        <div className="app-logo">
          <LogoWhite />
        </div>
        <div className="sidebar-contents">
          {sidebarListItems.map((item) => (
            <div
              key={item.icon}
              className={`sidebar-list-item ${
                item.isActive ? "sidebar-list-item-active" : ""
              }`}
            >
              <div className="sidebar-list-logo">
                <img
                  src={`/images/home/sidebar/${item.icon}.svg`}
                  alt={item.icon}
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
