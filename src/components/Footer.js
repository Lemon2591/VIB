import React from "react";
import Logo from "../assets/img/logo.png";
import { AiFillFacebook } from "react-icons/ai";
import { SiZalo } from "react-icons/si";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="after-footer  px-4">
        <div className="after-footer-content flex-col md:flex-row text-center gap-x-3">
          <div className="after-footer-content-img">
            <div>
              <img src="https://www.mbbank.com.vn/images/logo.png" alt="logo" />
            </div>
          </div>
          <div className="after-footer-content-text">
            <p className="text-home">Ngân Quân Đội (MB)</p>
            <p>Trụ sở: 63 Lê Văn Lương, Trung Hoà, Cầu Giấy, Hà Nội</p>
          </div>
          <div className="after-footer-content-phone font-bold text-gradient text-[2rem]">
            {/* <p> Hotline: 1800 8195</p> */}
          </div>
          <div className="after-footer-content-contact">
            <a href="">
              <AiFillFacebook />
            </a>
            <a href="">
              <SiZalo />
            </a>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="after-footer-content">
          <div className="after-footer-content-text">
            <p>
              <a href="">@ 2021 MB Bank - Bản quyền đã được bảo hộ</a>
            </p>
          </div>
          <div className="after-footer-content-text">
            <p>
              <a href="">Chính sách bảo mật</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
