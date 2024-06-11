import "../style.css";
import Logo from "../assets/Logo.png";

function Header() {
  return (
    <div className="header">
      <div className="header-element">
        <div className="logo">
          <img src={Logo}></img>
        </div>
        <div className="closed-apply">응모 마감</div>
      </div>
    </div>
  );
}

export default Header;
