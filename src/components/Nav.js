import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import { Drawer } from "antd";

const navRoute = [
  {
    path: "/",
    title: "Trang chủ",
    icon: "	https://vaythechap.vpbank.com.vn/assets/icons/icon_menu_home.svg",
  },
  {
    path: "/vaymuanha",
    title: "Vay mua nhà đất",
    icon: "	https://vaythechap.vpbank.com.vn/assets/icons/icon_menu_car.svg",
  },
  {
    path: "/vaykinhdoanhthechap",
    title: " Vay kinh doanh thế chấp",
    icon: "https://vaythechap.vpbank.com.vn/assets/icons/icon_menu_home.svg",
  },
  {
    path: "/vaymuaoto",
    title: " Vay mua ô tô",
    icon: "https://vaythechap.vpbank.com.vn/assets/icons/icon_menu_apart.svg",
  },
  {
    path: "/vaymuanhaduan",
    title: "Vay mua nhà dự án",
    icon: "https://vaythechap.vpbank.com.vn/assets/icons/icon_menu_apart.svg",
  },
  {
    path: "/vaytieudungthechap",
    title: "Vay tiêu dùng thế chấp",
    icon: "	https://vaythechap.vpbank.com.vn/assets/icons/icon_menu_bag.svg",
  },
  {
    path: "/combouudai",
    title: "Combo ưu đãi sản phẩm vay",
    icon: "https://vaythechap.vpbank.com.vn/assets/icons/icon_menu_combined-shape.svg",
  },
];

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const handleOpenMenu = () => {
    setShowMenu(showMenu ? false : true);
  };
  const handleSwitchRoute = (e, path) => {
    e.preventDefault();
    setShowMenu(false);
    navigate(path);
  };
  return (
    <div className="px-4 960px:px-0 flex flex-row  960px:flex-col justify-between 960px:justify-center items-center pt-[0.4rem] pb-[0.8rem] ">
      <img src={Logo} className="w-[12.6rem]" alt="xxx" />
      <div className="menu-icon md:hidden" onClick={handleOpenMenu}>
        <div className={`line line1 ${showMenu && "change"}`}></div>
        <div className={`line line2 ${showMenu && "change"}`}></div>
        <div className={`line line3 ${showMenu && "change"}`}></div>
      </div>
      <div className="960px:block w-full text-[1.6rem] text-[#888] font-semibold py-[0.4rem] hidden">
        <div className="mx-auto max-w-max">
          <ul className="flex justify-between items-center">
            {navRoute.map((route, index) => {
              return (
                <NavLink
                  key={index}
                  to={route.path}
                  className={({ isActive }) => {
                    return `py-[1.6rem] nav-hover ${isActive ? "active" : ""}`;
                  }}
                >
                  <li
                    className={`${
                      index < navRoute.length - 1 &&
                      "border-r border-solid border-[#aaa]"
                    } px-3 lg:px-5 text-center`}
                  >
                    {route.title}
                  </li>
                </NavLink>
              );
            })}
          </ul>
        </div>
      </div>
      <Drawer
        placement="left"
        closeIcon={null}
        onClose={() => setShowMenu(false)}
        open={showMenu}
        className="custom-drawer"
      >
        <div className="max-w-max space-y-5">
          {navRoute?.map((route, index) => (
            <NavLink
              onClick={(e) => handleSwitchRoute(e, route.path)}
              key={index}
              to={route.path}
              className={({ isActive }) => {
                return `py-3 px-8 flex justify-start items-center gap-x-6 text-[#888] w-full ${
                  isActive &&
                  "text-[#069e4e] font-bold bg-[#e6f5ed] rounded-r-[80px]"
                }`;
              }}
            >
              <img src={route.icon} alt="logo" className="min-w-[28px]" />
              <p className="text-[1.8rem]">{route.title}</p>
            </NavLink>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default Nav;
