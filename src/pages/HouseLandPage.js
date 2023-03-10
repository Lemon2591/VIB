import React from "react";
import Banner from "../components/Banner";
import FeatureCard from "../components/FeatureCard";
import FormInfo from "../components/FormInfo";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const HouseLandPage = () => {

  const dataIcon = {
    icon_1: "https://vaythechap.vpbank.com.vn/assets/icons/cash.svg",
    icon_2: "https://vaythechap.vpbank.com.vn/assets/icons/calendar.svg",
    icon_3: "https://vaythechap.vpbank.com.vn/assets/icons/icon_menu_home.svg",
    icon_4: "https://vaythechap.vpbank.com.vn/assets/icons/self.svg",
    icon_5: "https://vaythechap.vpbank.com.vn/assets/icons/file.svg",
    icon_6: "https://vaythechap.vpbank.com.vn/assets/icons/cmnd.svg",
    icon_7: "https://vaythechap.vpbank.com.vn/assets/icons/cmnd.svg",
    icon_8: "https://vaythechap.vpbank.com.vn/assets/icons/contract.svg"

  }
  return (
    <div>
      <Nav />
      <Banner />
      <div className="bg-[rgba(240,248,255)] relative pb-[6.4rem]">
        <div className="text-center mb-[3.2rem] mt-[0.8rem]">
          <h1 className="font-bold mb-[1.6rem] leading-[8rem] text-gradient text-[6rem] mt-0">
            Lợi ích vay vốn
          </h1>
          <p className="text-[#1e4a84] font-bold mb-[1.6rem] leading-[3.6rem] text-[2.8rem]">
            Lãi suất chỉ từ 10%/năm
          </p>
        </div>
        <div className="w-full">
          <div className="mx-auto flex justify-center items-start gap-x-12 container">
            <div className="w-1/2 text-[1.6rem] shadow-xl py-[2rem] px-[2.2rem] mb-[1.2rem] rounded-md bg-white">
              <h3 className="text-gradient text-[2.8rem] font-bold p-[1.6rem] border-b-[2px] border-gray-200 border-solid">
                Đặc điểm sản phẩm
              </h3>
              <div className="mb-[1.6rem] pt-[1.8rem]">
                <div className="py-[0.8rem] flex justify-start items-center gap-x-8">
                  <img
                    className="min-w-[2.5rem] h-[2rem]"
                    src={dataIcon.icon_1}
                    alt="x"
                  />
                  <p className="font-semibold text-[1.6rem] m-0 leading-[2.4rem]">
                    Cho vay lên đến 100% nhu cầu vay và tối đa 20 tỷ
                  </p>
                </div>
                <div className="py-[0.8rem] flex justify-start items-center gap-x-8">
                  <img
                    className="min-w-[2.5rem] h-[2rem]"
                    src={dataIcon.icon_2}
                    alt="x"
                  />
                  <p className="font-semibold text-[1.6rem] m-0 leading-[2.4rem]">
                    Thời gian vay 25 năm
                  </p>
                </div>
                <div className="py-[0.8rem] flex justify-start items-center gap-x-8">
                  <img
                    className="min-w-[2.5rem] h-[2rem]"
                    src={dataIcon.icon_3}
                    alt="x"
                  />
                  <p className="font-semibold text-[1.6rem] m-0 leading-[2.4rem]">
                    Ân hạn gốc 12 tháng
                  </p>
                </div>
                <div className="py-[0.8rem] flex justify-start items-center gap-x-8">
                  <img
                    className="min-w-[2.5rem] h-[2rem]"
                    src={dataIcon.icon_4}
                    alt="x"
                  />
                  <p className="font-semibold text-[1.6rem] m-0 leading-[2.4rem]">

                    Giấy đề nghị vay vốn
                  </p>
                </div>
              </div>
            </div>

            <div className="w-1/2 text-[1.6rem] shadow-xl py-[2rem] px-[2.2rem] mb-[1.2rem] rounded-md bg-white">
              <h3 className="text-gradient text-[2.8rem] font-bold p-[1.6rem] border-b-[2px] border-gray-200 border-solid">
                Hồ sơ vay vốn
              </h3>
              <div className="mb-[1.6rem] pt-[1.8rem]">
                <div className="py-[0.8rem] flex justify-start items-center gap-x-8">
                  <img
                    className="min-w-[2.5rem] h-[2rem]"
                    src={dataIcon.icon_5}
                    alt="x"
                  />
                  <p className="font-semibold text-[1.6rem] m-0 leading-[2.4rem]">
                    Giấy đề nghị vay vốn
                  </p>
                </div>
                <div className="py-[0.8rem] flex justify-start items-center gap-x-8">
                  <img
                    className="min-w-[2.5rem] h-[2rem]"
                    src={dataIcon.icon_6}
                    alt="x"
                  />
                  <p className="font-semibold text-[1.6rem] m-0 leading-[2.4rem]">
                    CMND và hộ khẩu
                  </p>
                </div>
                <div className="py-[0.8rem] flex justify-start items-center gap-x-8">
                  <img
                    className="min-w-[2.5rem] h-[2rem]"
                    src={dataIcon.icon_4}
                    alt="x"
                  />
                  <p className="font-semibold text-[1.6rem] m-0 leading-[2.4rem]">
                    Bảng thu nhập khách hàng tự kê khai
                  </p>
                </div>
                <div className="py-[0.8rem] flex justify-start items-center gap-x-8">
                  <img
                    className="min-w-[2.5rem] h-[2rem]"
                    src={dataIcon.icon_8}
                    alt="x"
                  />
                  <p className="font-semibold text-[1.6rem] m-0 leading-[2.4rem]">
                    Giấy chứng nhận quyền sở hữu BĐS
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <img
          src="https://vaythechap.vpbank.com.vn/assets/imgs/right-pattern.svg"
          className="absolute right-0 bottom-[3rem]"
          alt="x"
        />
      </div>
      <div className="bg-white mb-[6.4rem] text-center">
        <h1 className="font-bold mb-[1.6rem] leading-[8rem] text-gradient text-[6rem] mt-0">
          Đăng ký vay mua nhà đất
        </h1>
        <FormInfo />
      </div>
      <div className="container mx-auto text-black font-semibold mb-20">
        <p className="text-[#1e4a84] text-[1.8rem] leading-7">Lưu ý:</p>
        <p className="ml-[1.2rem] italic text-[1.4rem] leading-[22px]">
          - Số tiền trả hàng tháng được tạm tính dựa trên lãi suất tại thời điểm
          tính (Lãi suất có thể thay đổi vào thời điểm nộp hồ sơ).
        </p>
        <p className="ml-[1.2rem] italic text-[1.4rem] leading-[22px]">
          - Công cụ tính toán chỉ mang tính chất tham khảo và không phải là cam
          kết khoản vay của VPBank.
        </p>
      </div>
      <Footer />
      {/* <Copyright /> */}
    </div>
  );
};

export default HouseLandPage;
