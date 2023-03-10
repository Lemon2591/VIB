import React from "react";

const Banner = ({ imageSrc }) => {
  return (
    <div className="w-full relative">
      <img
        className="w-full object-cover object-center min-h-screen md:min-h-fit md:auto"
        src={imageSrc}
        alt="x"
      />
      <button className="max-w-[180px] font-semibold absolute right-1/2 translate-x-1/2 md:right-[27.19%] bottom-[21.6%] text-[1.6rem] px-[3.6rem] rounded-[2.6rem] h-[4.8rem] z-10 bg-[linear-gradient(80deg,_#233f82,_#1fb14f_80%)] text-white">
        Đăng ký ngay
      </button>
    </div>
  );
};

export default Banner;
