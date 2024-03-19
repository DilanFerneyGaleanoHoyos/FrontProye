import React from "react";
import { Menubar } from "primereact/menubar";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "../NavBar.css"; // Importa tu archivo CSS personalizado

const NavBar = () => {
  const items = [
    {
      id: "home",
      label: "Home",
      icon: "pi pi-home",
      url: "/",
    },
    {
      id: "events",
      label: "Events",
      icon: "pi pi-calendar",
      url: "/events",
    },
    {
      id: "discipline",
      label: "Discipline",
      icon: "pi pi-book",
      url: "/discipline",
    },
    {
      id: "affiliate",
      label: "Affiliate",
      icon: "pi pi-users",
      url: "/affiliate",
    },
    {
      id: "attendance",
      label: "Attendance",
      icon: "pi pi-check",
      url: "/attendance",
    },
  ];

  return (
    <div className="card">
      <div className="menu-bar">
        <span className="menu-title">Menú</span>
        <Menubar model={items} />
      </div>
    </div>
  );
};

export default NavBar;
