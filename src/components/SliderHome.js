import React from "react";
import Logo from "../assets/img/logo.png";
// import mua_nha_dat from "../assets/img/vaymuadat.jpeg"
// import vay_kinh_doanh from "../assets/img/vaymuadat.jpeg"
import { AiFillFacebook } from "react-icons/ai";
import { SiZalo } from "react-icons/si";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

function SliderHome() {
  return (
    <div className="slider-home-container">
      <div className="slider-home-content">
        <h1>Vay thế chấp</h1>
        <h4>Lựa chọn mục đích vay</h4>
      </div>
      <div className="slider-card-content">
        <div className="slider-card-items">
          <NavLink to="/vaymuanha" className="slider-card-item group">
            <div className="card backface w-[24rem] h-[32rem] rounded-md overflow-hidden">
              <div className="back h-full">
                <img
                  src="https://vaythechap.vpbank.com.vn/media/public/2021/10/09/c7e11046-160d-42b7-975e-391f16262de1.jpg"
                  alt="anh"
                  className="card card-front card-back"
                />
              </div>
              <div class="front h-full relative">
                <div class="bg-transparent font-semibold text-[1.5rem] absolute top-5 left-5 right-5 text-gray-50">
                  Vững tin làm chủ cuộc sống với ngôi nhà mơ ước từ khoản vay
                  thế chấp với hạn mức cho vay lên đến 75%, kỳ hạn tối đa đến 25
                  năm. Phê duyệt nhanh chóng chỉ trong 01 ngày.
                </div>
                <img
                  src="https://vaythechap.vpbank.com.vn/media/public/2021/10/09/c7e11046-160d-42b7-975e-391f16262de1.jpg"
                  alt="image-product"
                ></img>
                <a
                  class="more"
                  href="/vaykinhdoanhthechap"
                  className="font-semibold text-[1.6rem] absolute bottom-10 left-1/2 -translate-x-1/2 px-5 py-2 rounded-3xl border-2 border-solid border-white text-white whitespace-nowrap"
                >
                  Tìm hiểu thêm
                </a>
              </div>
            </div>
            <p className="group-hover:text-[#1eb14f]">Vay mua nhà đất</p>
          </NavLink>
          <NavLink to="/vaykinhdoanhthechap" className="slider-card-item group">
            <div className="card backface w-[24rem] h-[32rem] rounded-md overflow-hidden">
              <div className="back h-full">
                <img
                  src="https://vaythechap.vpbank.com.vn/media/public/2021/10/09/9a5a58bb-c1a3-490c-b4c3-da8a60a9f87e.jpg"
                  alt="anh"
                  className="card card-front card-back"
                />
              </div>
              <div class="front h-full relative">
                <div class="bg-transparent font-semibold text-[1.5rem] absolute top-5 left-5 right-5 text-gray-50">
                  Tự tin kinh doanh, mở rộng quy mô sản xuất – tận hưởng ưu đãi
                  lãi suất từ khoản vay thế chấp với hạn mức cao và phê duyệt
                  nhanh chóng.
                </div>
                <img
                  src="https://vaythechap.vpbank.com.vn/media/public/2021/10/09/9a5a58bb-c1a3-490c-b4c3-da8a60a9f87e.jpg"
                  alt="image-product"
                ></img>
                <a
                  class="more"
                  href="/vaykinhdoanhthechap"
                  className="font-semibold text-[1.6rem] absolute bottom-10 left-1/2 -translate-x-1/2 px-5 py-2 rounded-3xl border-2 border-solid border-white text-white whitespace-nowrap"
                >
                  Tìm hiểu thêm
                </a>
              </div>
            </div>
            <p className="group-hover:text-[#1eb14f]">
              Vay kinh doanh thế chấp
            </p>
          </NavLink>
          <NavLink to="/vaymuaoto" className="slider-card-item group">
            <div className="card backface w-[24rem] h-[32rem] rounded-md overflow-hidden">
              <div className="back h-full">
                <img
                  src="https://vaythechap.vpbank.com.vn/media/public/2021/10/09/fab7cdcd-05c3-468a-8b45-3eb1b12a4653.jpg"
                  alt="anh"
                  className="card card-front card-back"
                />
              </div>
              <div class="front h-full relative">
                <div class="bg-transparent font-semibold text-[1.5rem] absolute top-5 left-5 right-5 text-gray-50">
                  Lên đời ôtô mới trong chớp mắt nhờ khoản vay thế chấp với hạn
                  mức cho vay lên đến 85%, kỳ hạn tối đa đến 8 năm. Thời gian
                  phê duyệt khoản vay nhanh nhất thị trường chỉ trong 05 phút.
                </div>
                <img
                  src="https://vaythechap.vpbank.com.vn/media/public/2021/10/09/fab7cdcd-05c3-468a-8b45-3eb1b12a4653.jpg"
                  alt="image-product"
                ></img>
                <a
                  class="more"
                  href="/vaykinhdoanhthechap"
                  className="font-semibold text-[1.6rem] absolute bottom-10 left-1/2 -translate-x-1/2 px-5 py-2 rounded-3xl border-2 border-solid border-white text-white whitespace-nowrap"
                >
                  Tìm hiểu thêm
                </a>
              </div>
            </div>
            <p className="group-hover:text-[#1eb14f]">Vay mua ô tô</p>
          </NavLink>
          <NavLink to="/vaymuanhaduan" className="slider-card-item group">
            <div className="card backface w-[24rem] h-[32rem] rounded-md overflow-hidden">
              <div className="back h-full">
                <img
                  src="https://vaythechap.vpbank.com.vn/media/public/2021/10/09/2db331b6-d1bb-457f-ac11-1dd3de268feb.jpg"
                  alt="anh"
                  className="card card-front card-back"
                />
              </div>
              <div class="front h-full relative">
                <div class="bg-transparent font-semibold text-[1.5rem] absolute top-5 left-5 right-5 text-gray-50">
                  Dễ dàng sở hữu ngôi nhà mơ ước của riêng mình với các chủ đầu
                  tư bất động sản lớn trên thị trường là đối tác chiến lược của
                  VPBank trong nhiều năm qua và được áp dụng nhiều chương trình
                  ưu đãi lãi suất đặc biệt.
                </div>
                <img
                  src="https://vaythechap.vpbank.com.vn/media/public/2021/10/09/2db331b6-d1bb-457f-ac11-1dd3de268feb.jpg"
                  alt="image-product"
                ></img>
                <a
                  class="more"
                  href="/vaykinhdoanhthechap"
                  className="font-semibold text-[1.6rem] absolute bottom-10 left-1/2 -translate-x-1/2 px-5 py-2 rounded-3xl border-2 border-solid border-white text-white whitespace-nowrap"
                >
                  Tìm hiểu thêm
                </a>
              </div>
            </div>
            <p className="group-hover:text-[#1eb14f]">Vay mua nhà dự án</p>
          </NavLink>
          <NavLink to="/vaytieudungthechap" className="slider-card-item group">
            <div className="card backface w-[24rem] h-[32rem] rounded-md overflow-hidden">
              <div className="back h-full">
                <img
                  src="https://vaythechap.vpbank.com.vn/media/public/2021/10/09/a57e5422-241c-44a8-9a3c-1fad501f1ec9.jpg"
                  alt="anh"
                  className="card card-front card-back"
                />
              </div>
              <div class="front h-full relative">
                <div class="bg-transparent font-semibold text-[1.5rem] absolute top-5 left-5 right-5 text-gray-50">
                  Tận hưởng cuộc sống tiện nghi – Thỏa thích chi tiêu, mua sắm
                  và xây sửa nhà mà không cần phải chờ đợi tiết kiệm đủ tiền.
                </div>
                <img
                  src="https://vaythechap.vpbank.com.vn/media/public/2021/10/09/a57e5422-241c-44a8-9a3c-1fad501f1ec9.jpg"
                  alt="image-product"
                ></img>
                <a
                  class="more"
                  href="/vaykinhdoanhthechap"
                  className="font-semibold text-[1.6rem] absolute bottom-10 left-1/2 -translate-x-1/2 px-5 py-2 rounded-3xl border-2 border-solid border-white text-white whitespace-nowrap"
                >
                  Tìm hiểu thêm
                </a>
              </div>
            </div>
            <p className="group-hover:text-[#1eb14f]">Vay tiêu dùng thế chấp</p>
          </NavLink>
          <NavLink to="/combouudai" className="slider-card-item group">
            <div className="card backface w-[24rem] h-[32rem] rounded-md overflow-hidden">
              <div className="back h-full">
                <img
                  src="https://vaythechap.vpbank.com.vn/media/public/2022/07/29/22f51199-c35f-4427-8bc9-bf13a70f66eb.jpg"
                  alt="anh"
                  className="card card-front card-back"
                />
              </div>
              <div class="front h-full relative">
                <div class="bg-transparent font-semibold text-[1.5rem] absolute top-5 left-5 right-5 text-gray-50">
                  Dùng càng nhiều sản phẩm, giảm càng sâu lãi suất khi tham gia
                  Combo Business
                </div>
                <img
                  src="https://vaythechap.vpbank.com.vn/media/public/2022/07/29/22f51199-c35f-4427-8bc9-bf13a70f66eb.jpg"
                  alt="image-product"
                ></img>
                <a
                  class="more"
                  href="/vaykinhdoanhthechap"
                  className="font-semibold text-[1.6rem] absolute bottom-10 left-1/2 -translate-x-1/2 px-5 py-2 rounded-3xl border-2 border-solid border-white text-white whitespace-nowrap"
                >
                  Tìm hiểu thêm
                </a>
              </div>
            </div>
            <p className="group-hover:text-[#1eb14f]">
              Combo ưu đãi sản phẩm cho vay
            </p>
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SliderHome;
