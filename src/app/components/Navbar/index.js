import Logo from "../Logo";
import "./styles.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-side-items">
        <Logo size={50} />
      </div>
      <span className="navbar-title">Tweets</span>
      <div className="navbar-side-items"></div>
    </div>
  );
};

export default Navbar;
