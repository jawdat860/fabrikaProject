import { Link } from "react-router";
import { LocalText } from "../../LocalText/LocalText";

function MobileMenu({
  isSidebarOpen,
  menu1_1,
  menu11_1,
  menu6_1,
  menu5_1,
  menu8_1,
  overflowStyle,
}) {
  // Menu items configuration
  const menuItems = [
    { img: menu1_1, text: LocalText.Header.MenuIco.mi1, link: "./kitchen" },
    { img: menu11_1, text: LocalText.Header.MenuIco.mi2 },
    { img: menu6_1, text: LocalText.Header.MenuIco.mi3 },
    { img: menu5_1, text: LocalText.Header.MenuIco.mi4 },
    { img: menu8_1, text: LocalText.Header.MenuIco.mi5 },
  ];

  return (
    <div>
      <div
        style={overflowStyle}
        id="sidebar"
        className={`sidebar absolute bg-gray-800 text-white w-56 min-h-screen transition-transform transform genn-Header-mob-block ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300 right-0`}
      >
        <div className="genn-fl-col">
          {menuItems.map((item, index) => (
            <div key={index} className="genn-Header-mob-block-menu">
              <img src={item.img} alt={item.text} />
              <div className="genn-Header-mob-block-menu-text">
                {item.link ? (
                  <Link to={item.link}>{item.text}</Link>
                ) : (
                  item.text
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
