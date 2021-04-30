import { Menu } from "react-feather";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";

const NavbarSmall = () => {
  return (
    <nav id="navabar" className="flex py-2 px-4 justify-between items-center">
      <div className="w-12 cursor-pointer">
        <Link to="/">
          <img src={logo} alt="Logo devHead" />
        </Link>
      </div>
      <button type="button" className="cursor-pointer md:hidden">
        <Menu />
      </button>
    </nav>
  );
};

export default NavbarSmall;
