import React from "react";
import Logo from "../assets/img/logo.png";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-[0.4rem] pb-[0.8rem]">
      <img src={Logo} className="w-[12rem]" alt="xxx" />
      <div className="w-full text-[1.6rem] text-[#888] font-semibold py-[0.4rem]">
        <div className="mx-auto max-w-max">
          <ul className="flex justify-between items-center">
            <NavLink to="/" className="py-[1.6rem] nav-hover">
              <li className="border-r border-solid border-[#aaa] px-5">
                Trang chủ
              </li>
            </NavLink>
            <NavLink to="/vaymuanha" className="py-[1.6rem] nav-hover nav-active" >
              <li className="border-r border-solid border-[#aaa] px-5">
                Vay mua nhà đất
              </li>
            </NavLink>
            <NavLink to="/vaykinhdoanhthechap" className="py-[1.6rem] nav-hover">
              <li className="border-r border-solid border-[#aaa] px-5">
                Vay kinh doanh thế chấp
              </li>
            </NavLink>
            <NavLink to="/vaymuaoto" className="py-[1.6rem] nav-hover">
              <li className="border-r border-solid border-[#aaa] px-5">
                Vay mua ô tô
              </li>
            </NavLink>
            <NavLink to="/vaymuanhaduan" className="py-[1.6rem] nav-hover">
              <li className="border-r border-solid border-[#aaa] px-5">
                Vay mua nhà dự án
              </li>
            </NavLink>
            <NavLink to="/vaytieudungthechap" className="py-[1.6rem] nav-hover">
              <li className="border-r border-solid border-[#aaa] px-5">
                Vay tiêu dùng thế chấp
              </li>
            </NavLink>
            <NavLink to="/combouudai" className="py-[1.6rem] nav-hover">
              <li className=" px-5">Combo ưu đãi sản phẩm vay</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
