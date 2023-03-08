import React from "react";
import Logo from "../assets/img/logo.png";

const Nav = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-[0.4rem] pb-[0.8rem]">
      <img src={Logo} className="w-[17.6rem] h-[4rem]" alt="xxx" />
      <div className="w-full text-[1.6rem] text-[#888] font-semibold py-[0.4rem]">
        <div className="mx-auto max-w-max">
          <ul className="flex justify-between items-center">
            <a href="/" className="py-[1.6rem] nav-hover nav-active">
              <li className="border-r border-solid border-[#aaa] px-5">
                Trang chủ
              </li>
            </a>
            <a href="/" className="py-[1.6rem] nav-hover">
              <li className="border-r border-solid border-[#aaa] px-5">
                Vay mua nhà đất
              </li>
            </a>
            <a href="/" className="py-[1.6rem] nav-hover">
              <li className="border-r border-solid border-[#aaa] px-5">
                Vay kinh doanh thế chấp
              </li>
            </a>
            <a href="/" className="py-[1.6rem] nav-hover">
              <li className="border-r border-solid border-[#aaa] px-5">
                Vay mua ô tô
              </li>
            </a>
            <a href="/" className="py-[1.6rem] nav-hover">
              <li className="border-r border-solid border-[#aaa] px-5">
                Vay mua nhà dự án
              </li>
            </a>
            <a href="/" className="py-[1.6rem] nav-hover">
              <li className="border-r border-solid border-[#aaa] px-5">
                Vay tiêu dùng thế chấp
              </li>
            </a>
            <a href="/" className="py-[1.6rem] nav-hover">
              <li className=" px-5">Combo ưu đãi sản phẩm vay</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
