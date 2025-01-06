import { Link } from "react-router";
import { LocalText } from "../../LocalText/LocalText";

function TopMenu() {
  return (
    <ul className="genn-fl-row genn-Header-menu">
      <li className="genn-Header-1-menu">
        <Link to="./kitchen">{LocalText.Header.MenuLinks.ml1}</Link>
      </li>
      <li className="genn-Header-1-menu">{LocalText.Header.MenuLinks.ml2}</li>
      <li className="genn-Header-1-menu">
        <Link to="./dashboard">{LocalText.Header.MenuLinks.ml3}</Link>
      </li>
      <li className="genn-Header-1-menu">{LocalText.Header.MenuLinks.ml4}</li>
      <li className="genn-Header-1-menu">
        <Link to="/kontakty">{LocalText.Header.MenuLinks.ml5}</Link>
      </li>
    </ul>
  );
}
export default TopMenu;
