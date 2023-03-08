import React from "react";

const Banner = () => {
  return (
    <div className="w-full relative">
      <img
        className="w-full"
        src="https://vaythechap.vpbank.com.vn/media/public/2022/10/20/7a9724f0-920a-4e4b-bc24-19c71fcc7480.jpg"
        alt="x"
      />
      <button className="max-w-[180px] absolute right-[27.19%] bottom-[21.6%] text-[1.6rem] px-[3.6rem] rounded-[2.6rem] h-[4.8rem] z-10 bg-[linear-gradient(80deg,_#233f82,_#1fb14f_80%)] text-white">
        Đăng ký ngay
      </button>
    </div>
  );
};

export default Banner;
