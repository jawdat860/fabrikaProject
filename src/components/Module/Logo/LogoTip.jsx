import { Link } from "react-router";

function LogoTip({ logo, classNameTextTitle }) {
  
  return (
    <div className="genn-Header-logo">
      <Link to="/">
        <img src={logo} className={classNameTextTitle} />
      </Link>
    </div>
  );
}
export default LogoTip;
