import { Link, NavLink } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const Navbar = () => {
  return (
    <div className="navbar-bg bg-gray-200">
      <div className="navbar container mx-auto h-20 flex items-center justify-between">
        <div className="left">
          <Link to="/" className="logo text-4xl font-semibold">
            Avirex
          </Link>
        </div>
        <div className="mid flex gap-10">
          <NavLink to="/" className="link-item">
            Home
          </NavLink>
          <NavLink to="/products" className="link-item">
            Products
          </NavLink>
          <NavLink to="/orders" className="link-item">
            Orders
          </NavLink>
          <NavLink to="/about" className="link-item">
            About
          </NavLink>
          <NavLink to="/contact" className="link-item">
            Contact
          </NavLink>
        </div>
        <div className="right flex gap-10">
          <Link to="/wishlist" className="relative">
            <FavoriteBorderIcon />
            <span className="absolute h-6 w-6 bg-sky-500 text-sm font-semibold text-sky-50 rounded-full flex justify-center items-center -top-2 -right-3">
              10
            </span>
          </Link>
          <Link to="/cart" className="relative">
            <ShoppingBagOutlinedIcon />
            <span className="absolute h-6 w-6 bg-rose-500 text-sm font-semibold text-rose-50 rounded-full flex justify-center items-center -top-2 -right-3">
              10
            </span>
          </Link>
          <Link to="/sign-up">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
