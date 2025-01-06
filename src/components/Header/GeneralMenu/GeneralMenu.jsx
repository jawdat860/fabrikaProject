import { NavLink, useLocation } from "react-router"; // Use 'react-router-dom'
import { LocalText } from "../../LocalText/LocalText";
import { useState } from "react";
import ModelWindow from "../../Module/ModelWindow/ModelWindow";

function GeneralMenu({
  menu1,
  menu11,
  menu6,
  menu5,
  menu8,
  activeMenu1,
  activeMenu11,
  activeMenu6,
  activeMenu5,
  activeMenu8,
}) {
  const [openModel, setOpenModel] = useState(false);
  const location = useLocation(); // Hook to access the current route

  const setOpenModelHandler = () => {
    setOpenModel(true);
    document.body.style.overflow = "hidden";
  };

  const setCloseModelHandler = () => {
    setOpenModel(false);
    document.body.style.overflow = "";
  };

  // Function to check if a menu item is active
  const isActiveMenu = (path) => location.pathname === path;

  return (
    <>
      <div className="genn-fl-row genn-Header-2-block">
        {/* Kitchen Menu */}
        <NavLink
          to="./kitchen"
          className={({ isActive }) =>
            isActive
              ? "genn-Header-2-block-menu active"
              : "genn-Header-2-block-menu"
          }
        >
          <img
            src={isActiveMenu("/kitchen") ? activeMenu1 : menu1}
            alt={LocalText.Header.MenuIco.mi1}
          />
          <div className="genn-Header-2-block-menu-text">
            {LocalText.Header.MenuIco.mi1}
          </div>
        </NavLink>

        {/* Shkaf Menu */}
        <NavLink
          to="./shkaf"
          className={({ isActive }) =>
            isActive
              ? "genn-Header-2-block-menu active"
              : "genn-Header-2-block-menu"
          }
        >
          <img
            src={isActiveMenu("/shkaf") ? activeMenu11 : menu11}
            alt={LocalText.Header.MenuIco.mi2}
          />
          <div className="genn-Header-2-block-menu-text">
            {LocalText.Header.MenuIco.mi2}
          </div>
        </NavLink>

        {/* Prihozhie Menu */}
        <NavLink
          to="./prikhozhie"
          className={({ isActive }) =>
            isActive
              ? "genn-Header-2-block-menu active"
              : "genn-Header-2-block-menu"
          }
        >
          <img
            src={isActiveMenu("/prikhozhie") ? activeMenu6 : menu6}
            alt={LocalText.Header.MenuIco.mi3}
          />
          <div className="genn-Header-2-block-menu-text">
            {LocalText.Header.MenuIco.mi3}
          </div>
        </NavLink>

        {/* Garderobnye Menu */}
        <NavLink
          to="./garderobnye"
          className={({ isActive }) =>
            isActive
              ? "genn-Header-2-block-menu active"
              : "genn-Header-2-block-menu"
          }
        >
          <img
            src={isActiveMenu("/garderobnye") ? activeMenu5 : menu5}
            alt={LocalText.Header.MenuIco.mi4}
          />
          <div className="genn-Header-2-block-menu-text">
            {LocalText.Header.MenuIco.mi4}
          </div>
        </NavLink>

        {/* Model Window Trigger */}
        <div className="genn-Header-2-block-menu" onClick={setOpenModelHandler}>
          <img src={menu8} alt={LocalText.Header.MenuIco.mi5} />
          <div className="genn-Header-2-block-menu-text">
            {LocalText.Header.MenuIco.mi5}
          </div>
        </div>
      </div>

      {/* Model Window */}
      {openModel && (
        <ModelWindow
          setCloseModelHandler={setCloseModelHandler}
          menu8={menu8}
        />
      )}
    </>
  );
}

export default GeneralMenu;
