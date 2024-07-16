import "./navbar.scss";
import { Menu, Close } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleNavBar = () => {
    if (window.innerWidth < 500) {
      setOpen(!open);
    }
  };

  const menuStyle = open ? "menu open" : "menu";

  return (
    <div className="navbar">
      <div className="brand">Pet Store</div>
      <div className="hamburger">
        <Menu onClick={toggleNavBar} />
      </div>
      <div className={menuStyle}>
        <ul>
          <Close className="close" onClick={toggleNavBar} />
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/products/add">Add Products</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
