import { useEffect } from "react";

function MobileMenuIco({ toggleSidebar, closeClass, isSidebarOpen }) {
  useEffect(() => {
    closeClass();
  }, [isSidebarOpen, closeClass]);

  return (
    <button
      id="open-sidebar"
      className="genn-Header-1-MenuAndText"
      onClick={toggleSidebar}
    >
      <div id="menu-icon" className="genn-Header-1-Menu">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bartext">меню</div>
      </div>
    </button>
  );
}
export default MobileMenuIco;
