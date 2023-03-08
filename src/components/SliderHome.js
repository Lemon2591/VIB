import React from "react";
import Logo from "../assets/img/logo.png";
// import mua_nha_dat from "../assets/img/vaymuadat.jpeg"
// import vay_kinh_doanh from "../assets/img/vaymuadat.jpeg"
import { AiFillFacebook } from "react-icons/ai"
import { SiZalo } from "react-icons/si"
import { NavLink } from "react-router-dom";


function SliderHome() {
  return (
    <div className="slider-home-container">
      <div className="slider-home-content">
        <h1>Vay thế chấp</h1>
        <h4>Lựa chọn mục đích vay</h4>
      </div>
      <div className="slider-card-content">
        <div className="slider-card-items">
          <NavLink to="/vaymuanha" className="slider-card-item">
            <div className="slider-card-item-img">
              <div></div>

              <img src="https://vaythechap.vpbank.com.vn/media/public/2021/10/09/c7e11046-160d-42b7-975e-391f16262de1.jpg" alt="anh" />
            </div>
            <p>Vay mua nhà đất</p>
          </NavLink>
          <div className="slider-card-item">
            <div className="slider-card-item-img">
              <div></div>
              <img src="https://vaythechap.vpbank.com.vn/media/public/2021/10/09/9a5a58bb-c1a3-490c-b4c3-da8a60a9f87e.jpg" alt="anh" />
            </div>
            <p>Vay kinh doanh thế chấp</p>
          </div>
          <div className="slider-card-item">
            <div className="slider-card-item-img">
              <div></div>
              <img src="https://vaythechap.vpbank.com.vn/media/public/2021/10/09/fab7cdcd-05c3-468a-8b45-3eb1b12a4653.jpg" alt="anh" />
            </div>
            <p>Vay mua ô tô</p>
          </div>
          <div className="slider-card-item">
            <div className="slider-card-item-img">
              <div></div>
              <img src="https://vaythechap.vpbank.com.vn/media/public/2021/10/09/2db331b6-d1bb-457f-ac11-1dd3de268feb.jpg" alt="anh" />
            </div>
            <p>Vay mua nhà dự án</p>
          </div>
          <div className="slider-card-item">
            <div className="slider-card-item-img">
              <div></div>
              <img src="https://vaythechap.vpbank.com.vn/media/public/2021/10/09/a57e5422-241c-44a8-9a3c-1fad501f1ec9.jpg" alt="anh" />
            </div>
            <p>Vay tiêu dùng thế chấp</p>
          </div>
          <div className="slider-card-item">
            <div className="slider-card-item-img">
              <div></div>
              <img src="https://vaythechap.vpbank.com.vn/media/public/2022/07/29/22f51199-c35f-4427-8bc9-bf13a70f66eb.jpg" alt="anh" />
            </div>
            <p>Combo ưu đãi sản phẩm cho vay</p>
          </div>
        </div>
      </div>
      <div className="after-footer">
        <div className="after-footer-content">
          <div className="after-footer-content-img">
            <div>
              <img src={Logo} alt="logo" />
            </div>
          </div>
          <div className="after-footer-content-text">
            <p className="text-home">Ngân Hàng Quốc Tế (VIB)</p>
            <p>
              Trụ sở: 111A Pasteur, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh</p>
          </div>
          <div className="after-footer-content-phone">
            <p>  Hotline: 1800 8195</p>
          </div>
          <div className="after-footer-content-contact">
            <a href=""><AiFillFacebook /></a>
            <a href=""><SiZalo /></a>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="after-footer-content">

          <div className="after-footer-content-text">
            <p>
              <a href="">@ 2021 VPBank - Bản quyền đã được bảo hộ</a>
            </p>
          </div>
          <div className="after-footer-content-text">
            <p>
              <a href="">Chính sách bảo mật</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderHome;
