import { Link } from "react-router";
import { LocalText } from "../../LocalText/LocalText";
import MobileMenuIco from "../MobileMenu/MobileMenuIco";

function TopMenuButton({ toggleSidebar, closeClass, isSidebarOpen }) {
  return (
    <div className="genn-Header-1-ButtonAndMenu">
      <div className="genn-Header-1-Button">
        <button className="genn-Baner-button-v3">
          {LocalText.Header.MenuButton}
        </button>
      </div>
      <MobileMenuIco
        toggleSidebar={toggleSidebar}
        closeClass={closeClass}
        isSidebarOpen={isSidebarOpen}
      />
    </div>
  );
}
export default TopMenuButton;
