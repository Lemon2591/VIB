import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import { NavLink } from "react-router-dom";

const navRoute = [
  {
    path: "/",
    title: "Trang chủ",
  },
  {
    path: "/vaymuanha",
    title: "Vay mua nhà đất",
  },
  {
    path: "/vaykinhdoanh",
    title: " Vay kinh doanh thế chấp",
  },
  {
    path: "/vaymuaoto",
    title: " Vay mua ô tô",
  },
  {
    path: "/vaymuanhaduan",
    title: "Vay mua nhà dự án",
  },
  {
    path: "/vaytieudung",
    title: "Vay tiêu dùng thế chấp",
  },
  {
    path: "uudai",
    title: "Combo ưu đãi sản phẩm vay",
  },
];

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleOpenMenu = () => {
    setShowMenu(showMenu ? false : true);
  };
  const location = useLocation();
  return (
    <div className="px-4 md:px-0 flex flex-row  md:flex-col justify-between md:justify-center items-center pt-[0.4rem] pb-[0.8rem] ">
      <img src={Logo} className="w-[17.6rem] h-[4rem]" alt="xxx" />
      <div class="menu-icon" onClick={handleOpenMenu}>
        <div className={`line line1 ${showMenu && "change"}`}></div>
        <div className={`line line2 ${showMenu && "change"}`}></div>
        <div className={`line line3 ${showMenu && "change"}`}></div>
      </div>
      <div className="md:block w-full text-[1.6rem] text-[#888] font-semibold py-[0.4rem] hidden">
        <div className="mx-auto max-w-max">
          <ul className="flex justify-between items-center">
            {navRoute.map((route, index) => (
              <Link
                key={index}
                to={route.path}
                className={`py-[1.6rem] nav-hover ${
                  location.pathname === route.path && "nav-active"
                }`}
              >
                <li
                  className={`${
                    index < navRoute.length - 1 &&
                    "border-r border-solid border-[#aaa]"
                  } px-3 lg:px-5 text-center`}
                >
                  {route.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
