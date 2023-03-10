import React from "react";

// function Footer() {
//     return (
//         <div className="footer">
//             <div className="after-footer-content">

//                 <div className="after-footer-content-text">
//                     <p>
//                         <a href="">@ 2021 VIB - Bản quyền đã được bảo hộ</a>
//                     </p>
//                 </div>
//                 <div className="after-footer-content-text">
//                     <p>
//                         <a href="">Chính sách bảo mật</a>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Footer
// =======

const Footer = () => {
  return (
    <div className="bg-[#f0f8ff]">
      <div className="container flex justify-between items-center mx-auto h-[25.5rem] md:h-[12.8rem]">
        <div className="flex justify-between items-center md:items-start w-full gap-x-6 gap-y-10 md:gap-y-0  flex-col md:flex-row ">
          <img
            src="https://vaythechap.vpbank.com.vn/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimgs%2Flogo-vpb.9546b9737de466adda82339a9b5a32c0.png&w=256&q=75"
            alt="x"
          />
          <div className="space-y-3">
            <p className="outline-[rgba(255,_0,_0,_0.3)_solid_1px] text-[1.6rem] font-bold text-black">
              NGÂN HÀNG TMCP VIỆT NAM THỊNH VƯỢNG
            </p>
            <p className="text-[1.6rem] text-[#888] font-semibold">
              Trụ sở chính: 89 Láng Hạ, Quận Đống Đa, Hà Nội
            </p>
          </div>
          <div>
            <p className="outline-[rgba(255,_0,_0,_0.3)_solid_1px] text-[2rem] font-bold text-gradient">
              Hotline: 1900 54 54 15
            </p>
          </div>
          <div className="flex justify-center items-center gap-x-6">
            <a className="" href="https://zalo.me/1981821191843516248">
              <img
                src="https://vaythechap.vpbank.com.vn/_next/image?url=%…lo.3c8a316db839cc8ab0ecba715aa1ea39.svg&w=32&q=75"
                alt="x"
              />
            </a>
            <a
              className=""
              href="https://www.youtube.com/channel/UCyRH0SIaaQBPOxsqJfgwkoA/"
            >
              <img
                src="https://vaythechap.vpbank.com.vn/_next/image?url=%…be.a6fab91b8663b0363b490104a6cf12c9.svg&w=32&q=75"
                alt="x"
              />
            </a>
            <a className="" href="https://www.facebook.com/VPBank/">
              <img
                src="https://vaythechap.vpbank.com.vn/_next/image?url=%…ok.3524c773a002ceae26aeaa04c5fe28ea.svg&w=32&q=75"
                alt="x"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
