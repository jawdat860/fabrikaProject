import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assets/images/ico/logo2.svg";
import menu1 from "../../assets/images/ico/menu/kuhna-1-b.svg";
import menu1_1 from "../../assets/images/ico/menu/kuhna-1-w.svg";
import menu5 from "../../assets/images/ico/menu/ico-gard-2-b.svg.svg";
import menu5_1 from "../../assets/images/ico/menu/ico-gard-2-w.svg";
import menu6 from "../../assets/images/ico/menu/prihozaia-1-b.svg";
import menu6_1 from "../../assets/images/ico/menu/prihozaia-1-w.svg";
import menu8 from "../../assets/images/ico/menu/r-zona-1-b.svg";
import menu8_1 from "../../assets/images/ico/menu/r-zona-1-w.svg";
import menu11 from "../../assets/images/ico/menu/skaf-2-b.svg";
import menu11_1 from "../../assets/images/ico/menu/skaf-2-w.svg";

import otzyv_w from "../../assets/images/ico/cont/otzyv-w.svg";
import D_w from "../../assets/images/ico/cont/D-w.svg";
import mat_w from "../../assets/images/ico/cont/mat-w.svg";
import pfone_w from "../../assets/images/ico/cont/pfone-w.svg";
import process_w from "../../assets/images/ico/cont/process-w.svg";

import TopMenu from "./TopMenu/TopMenu";
import TopMenuButton from "./TopMenu/TopMenuButton";
import GeneralMenu from "./GeneralMenu/GeneralMenu";
import LogoTip from "../Module/Logo/LogoTip";
import { LocalText } from "../LocalText/LocalText";
import { Link } from "react-router";
import activeMenu1 from "../../assets/images/ico/menu/kuhna-2-b.svg";
import activeMenu11 from "../../assets/images/ico/menu/skaf-1-b.svg";
import activeMenu5 from "../../assets/images/ico/menu/prihozaia-2-b.svg";
import activeMenu6 from "../../assets/images/ico/menu/ico-gard-1-b.svg";
import activeMenu8 from "../../assets/images/ico/menu/r-zona-2-b.svg";
function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const closeClass = () => {
    const menuButton = document.querySelector("#menu-icon");
    if (isSidebarOpen) {
      menuButton.classList.add("close");
    } else {
      menuButton.classList.remove("close");
    }
  };

  // Toggle sidebar state
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
    document.body.style.overflow = !isSidebarOpen ? "hidden" : "auto";
  };

  // Close sidebar
  const closeSidebar = () => {
    setSidebarOpen(false);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  return (
    <>
      {/* Header Section */}
      <div className="genn-fl-row genn-Header-1">
        <LogoTip logo={logo} classNameTextTitle={""} />

        <div className="genn-Header-1-container genn-fl-row">
          <TopMenu />
          <TopMenuButton
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
            closeClass={closeClass}
          />
        </div>
      </div>

      {/* Icons Section */}
      <GeneralMenu
        menu1={menu1}
        menu11={menu11}
        menu5={menu5}
        menu6={menu6}
        menu8={menu8}
        activeMenu1={activeMenu1}
        activeMenu11={activeMenu11}
        activeMenu5={activeMenu5}
        activeMenu6={activeMenu6}
        activeMenu8={activeMenu8}
      />

      {/* Sidebar */}

      <div
        id="sidebar"
        className={`genn-Header-sidebar fixed top-0 right-0 h-full w-64 bg-gray-800 text-white shadow-lg z-50 transform transition-transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } duration-300`}
      >
        <div className="">
          <div className="genn-fl-col genn-Header-mob-block">
            <div className="genn-Header-mob-block-menu">
              <img src={menu1_1} alt={LocalText.Header.MenuIco.mi1} />
              <div className="genn-Header-mob-block-menu-text">
                <Link to="./kitchen"> Главная </Link>
              </div>
            </div>
            <div className="genn-Header-mob-block-menu">
              <img src={menu1_1} alt={LocalText.Header.MenuIco.mi1} />
              <div className="genn-Header-mob-block-menu-text">
                <Link to="./kitchen"> {LocalText.Header.MenuIco.mi1} </Link>
              </div>
            </div>
            <div className="genn-Header-mob-block-menu">
              <img src={menu11_1} alt={LocalText.Header.MenuIco.mi2} />
              <div className="genn-Header-mob-block-menu-text">
                {LocalText.Header.MenuIco.mi2}
              </div>
            </div>
            <div className="genn-Header-mob-block-menu">
              <img src={menu6_1} alt={LocalText.Header.MenuIco.mi3} />
              <div className="genn-Header-mob-block-menu-text">
                {LocalText.Header.MenuIco.mi3}
              </div>
            </div>
            <div className="genn-Header-mob-block-menu">
              <img src={menu5_1} alt={LocalText.Header.MenuIco.mi4} />
              <div className="genn-Header-mob-block-menu-text">
                {LocalText.Header.MenuIco.mi4}
              </div>
            </div>
            <div className="genn-Header-mob-block-menu">
              <img src={menu8_1} alt={LocalText.Header.MenuIco.mi5} />
              <div className="genn-Header-mob-block-menu-text">
                {LocalText.Header.MenuIco.mi5}
              </div>
            </div>
          </div>
          <div className="genn-fl-col genn-Header-mob-block">
            <div className="genn-Header-mob-block-menu">
              <img src={otzyv_w} alt={LocalText.Header.MenuIco.mi5} />
              <div className="genn-Header-mob-block-menu-text">Отзывы</div>
            </div>
            <div className="genn-Header-mob-block-menu">
              <img src={process_w} alt={LocalText.Header.MenuIco.mi5} />
              <div className="genn-Header-mob-block-menu-text">
                Процесс заказа
              </div>
            </div>
            <div className="genn-Header-mob-block-menu">
              <img src={mat_w} alt={LocalText.Header.MenuIco.mi5} />
              <div className="genn-Header-mob-block-menu-text">Материалы</div>
            </div>
            <div className="genn-Header-mob-block-menu">
              <img src={D_w} alt={LocalText.Header.MenuIco.mi5} />
              <div className="genn-Header-mob-block-menu-text">О фабрике</div>
            </div>
            <div className="genn-Header-mob-block-menu">
              <img src={pfone_w} alt={LocalText.Header.MenuIco.mi5} />
              <div className="genn-Header-mob-block-menu-text">Контакты</div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        ></div>
      )}
    </>
  );
}

export default Header;
