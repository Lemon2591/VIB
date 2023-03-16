import React from "react";

import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";
import Banner from "../components/Banner";
import Benefit from "../components/Benefit";
import CalcMoneyRent from "../components/CalcMoneyRent";
import FormInfo from "../components/FormInfo";

function Combo() {
  return (
    <div>
      <Banner
        imageSrc={
          "https://vaythechap.vpbank.com.vn/media/public/2022/07/29/d3b2da38-ed3c-4942-88d7-ef9858bb17ca.jpg"
        }
      />
      <div className="text-center mb-[3.2rem] mt-[5rem]">
        <h1 className="font-bold mb-[1.6rem] leading-[8rem] text-gradient-color-2 text-[5rem] mt-0">
          Gói vay thế chấp kinh doanh theo hạn mức
        </h1>
        <div className="background-theme px-10 py-1 max-w-max mx-auto rounded-xl">
          <p className="text-white font-bold mb-[1.6rem] leading-[5rem] text-[4.8rem]">
            Combo Business
          </p>
        </div>
      </div>
      <div className="w-full bg-[rgba(240,248,255)] flex flex-col md:flex-row md:max-w-[1120px] p-6  rounded-lg mx-auto mt-[4rem]">
        <div className="w-full flex justify-center items-start gap-x-12 container">
          <img src="https://vaythechap.vpbank.com.vn/media/public/2022/07/29/75b88422-98dd-47b3-9eeb-2c0c496bba95.png" />
          <div className="flex-1">
            <div className="">
              <div className="py-[0.8rem] flex justify-start items-center gap-x-8">
                <img src={icon1} />
                <p className=" text-black text-[2rem] m-0">
                  Hạn mức cho vay lên tới 8 tỷ đồng
                </p>
              </div>
            </div>
            <div className="">
              <div className="py-[0.8rem] flex justify-start items-center gap-x-8">
                <img src={icon2} />
                <p className=" text-black text-[2rem] m-0">
                  Vay vốn linh hoạt, lên đến 100% nhu cầu vay
                </p>
              </div>
            </div>
            <div className="">
              <div className="py-[0.8rem] flex justify-start items-center gap-x-8">
                <img src={icon3} />
                <p className=" text-black text-[2rem] m-0">
                  Vay vốn linh hoạt, lên đến 100% nhu cầu vay
                </p>
              </div>
            </div>
            <div className="">
              <div className="py-[0.8rem] flex justify-start items-center gap-x-8">
                <img src={icon4} />
                <p className=" text-black text-[2rem] m-0 whitespace-nowrap">
                  Lãi suất ưu đãi chỉ còn 5,7%/năm khi tham gia đầy đủ Combo *
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ lineHeight: "32px" }}
        class="font-medi-svn text-[#1E4A84] lg:w-[1120px] md:text-[2rem] md:px-9 w-full text-[1.6rem] text-center mx-auto md:my-20 my-8"
      >
        Khách hàng
        <span class="font-bold"> vay thế chấp kinh doanh theo hạn mức</span> có
        thể kết hợp sử dụng Combo nhiều sản phẩm của VPBank &amp; được cộng dồn
        giảm lãi suất tối đa tới<span class="font-bold">&nbsp;2.3%/năm</span>
      </div>
      {/* ---------------- */}
      <div class="cardProduct flex mx-auto md:px-2 px-4 md:w-auto md:gap-8 gap-4 max-h-[288px] max-w-max overflow-hidden">
        <div class="cardProductItem max-w-[256px] flex flex-col rounded-lg bg-[#F0F8FF]">
          <div
            class="h-[144px] w-[256px] bg-cover bg-no-repeat overflow-hidden rounded-t-lg flex-shrink-0"
            style={{
              backgroundImage:
                "url(https://vaythechap.vpbank.com.vn/media/public/2022/07/29/a755bd39-2d4f-4678-a2aa-3c33cf35eb15.png)",
            }}
          ></div>
          <div class="flex h-[144px] flex-col px-3 justify-between">
            <div class="text-gradient-color-2 text-center mt-2 mb-0 text-[2rem] font-bold flex-shrink-0">
              Vay tiêu dùng tín chấp cá nhân
            </div>
            <div class="mb-4">
              <div class="text-center font-medi-svn font-medium text-[1.6rem] text-[#222222]">
                Giảm thêm 1% lãi suất
              </div>
              <div class="flex mt-1">
                <div class="m-auto flex items-center cursor-pointer">
                  <div class="mr-2 text-[#1FB14F] text-[1.6rem]">Chi tiết</div>
                  <div class="flex justify-center items-center mt-1">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.121 0.292786C7.73062 0.683286 7.73062 1.31629 8.121 1.70679L11.413 4.99979L1 5.00679C0.447715 5.00679 0 5.4545 0 6.00679C0 6.55907 0.447715 7.00679 1 7.00679L11.414 6.99979L8.121 10.2928C7.86104 10.5439 7.75679 10.9157 7.8483 11.2653C7.93982 11.6149 8.21286 11.888 8.56249 11.9795C8.91212 12.071 9.28393 11.9667 9.535 11.7068L13.121 8.12179C13.6837 7.55916 13.9999 6.79602 13.9999 6.00029C13.9999 5.20455 13.6837 4.44141 13.121 3.87879L9.535 0.292786C9.1445 -0.0975955 8.5115 -0.0975955 8.121 0.292786Z"
                        fill="#1FB14F"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cardProductItem max-w-[256px] flex flex-col rounded-lg bg-[#F0F8FF]">
          <div
            class="h-[144px] w-[256px] bg-cover bg-no-repeat overflow-hidden rounded-t-lg flex-shrink-0"
            style={{
              backgroundImage:
                "url(https://vaythechap.vpbank.com.vn/media/public/2022/07/29/e3af6691-4749-4f47-9b4f-130347732bc3.png)",
            }}
          ></div>
          <div class="flex h-[144px] flex-col px-3 justify-between">
            <div class="text-gradient-color-2 text-center mt-2 mb-0 font-bold flex-shrink-0 text-[2rem]">
              Bảo hiểm nhân thọ
            </div>
            <div class="mb-4">
              <div class="text-center font-medi-svn font-medium text-[#222222] text-[1.6rem]">
                Giảm thêm 1% lãi suất
              </div>
              <div class="flex mt-1">
                <div class="m-auto flex items-center cursor-pointer">
                  <div class="mr-2 text-[#1FB14F] text-[1.6rem]">Chi tiết</div>
                  <div class="flex justify-center items-center mt-1">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.121 0.292786C7.73062 0.683286 7.73062 1.31629 8.121 1.70679L11.413 4.99979L1 5.00679C0.447715 5.00679 0 5.4545 0 6.00679C0 6.55907 0.447715 7.00679 1 7.00679L11.414 6.99979L8.121 10.2928C7.86104 10.5439 7.75679 10.9157 7.8483 11.2653C7.93982 11.6149 8.21286 11.888 8.56249 11.9795C8.91212 12.071 9.28393 11.9667 9.535 11.7068L13.121 8.12179C13.6837 7.55916 13.9999 6.79602 13.9999 6.00029C13.9999 5.20455 13.6837 4.44141 13.121 3.87879L9.535 0.292786C9.1445 -0.0975955 8.5115 -0.0975955 8.121 0.292786Z"
                        fill="#1FB14F"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cardProductItem max-w-[256px] flex flex-col rounded-lg bg-[#F0F8FF]">
          <div
            class="h-[144px] w-[256px] bg-cover bg-no-repeat overflow-hidden rounded-t-lg flex-shrink-0"
            style={{
              backgroundImage:
                "url(https://vaythechap.vpbank.com.vn/media/public/2022/07/29/873b4595-459f-491c-80c3-a88517f9d162.png)",
            }}
          ></div>
          <div class="flex h-[144px] flex-col px-3 justify-between">
            <div class="text-gradient-color-2 text-center mt-2 mb-0 font-bold flex-shrink-0 text-[2rem]">
              Tài khoản thanh toán VPBank
            </div>
            <div class="mb-4">
              <div class="text-center font-medi-svn font-medium text-[#222222] text-[1.6rem]">
                Giảm thêm 0.2% lãi suất
              </div>
              <div class="flex mt-1">
                <div class="m-auto flex items-center cursor-pointer">
                  <div class="mr-2 text-[#1FB14F] text-[1.6rem]">Chi tiết</div>
                  <div class="flex justify-center items-center mt-1">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.121 0.292786C7.73062 0.683286 7.73062 1.31629 8.121 1.70679L11.413 4.99979L1 5.00679C0.447715 5.00679 0 5.4545 0 6.00679C0 6.55907 0.447715 7.00679 1 7.00679L11.414 6.99979L8.121 10.2928C7.86104 10.5439 7.75679 10.9157 7.8483 11.2653C7.93982 11.6149 8.21286 11.888 8.56249 11.9795C8.91212 12.071 9.28393 11.9667 9.535 11.7068L13.121 8.12179C13.6837 7.55916 13.9999 6.79602 13.9999 6.00029C13.9999 5.20455 13.6837 4.44141 13.121 3.87879L9.535 0.292786C9.1445 -0.0975955 8.5115 -0.0975955 8.121 0.292786Z"
                        fill="#1FB14F"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cardProductItem max-w-[256px] flex flex-col rounded-lg bg-[#F0F8FF]">
          <div
            class="h-[144px] w-[256px] bg-cover bg-no-repeat overflow-hidden rounded-t-lg flex-shrink-0"
            style={{
              backgroundImage:
                "url(https://vaythechap.vpbank.com.vn/media/public/2022/07/29/b64d7fa4-81a1-4977-9af4-05600bd732f0.png)",
            }}
          ></div>
          <div class="flex h-[144px] flex-col px-3 justify-between">
            <div class="text-gradient-color-2 text-center mt-2 mb-0 font-bold flex-shrink-0 text-[2rem]">
              Thẻ tín dụng VPBank
            </div>
            <div class="mb-4">
              <div class="text-center font-medi-svn font-medium text-[1.6rem] text-[#222222]">
                Giảm thêm 0.1% lãi suất
              </div>
              <div class="flex mt-1">
                <div class="m-auto flex items-center cursor-pointer">
                  <div class="mr-2 text-[#1FB14F] text-[1.6rem]">Chi tiết</div>
                  <div class="flex justify-center items-center mt-1">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.121 0.292786C7.73062 0.683286 7.73062 1.31629 8.121 1.70679L11.413 4.99979L1 5.00679C0.447715 5.00679 0 5.4545 0 6.00679C0 6.55907 0.447715 7.00679 1 7.00679L11.414 6.99979L8.121 10.2928C7.86104 10.5439 7.75679 10.9157 7.8483 11.2653C7.93982 11.6149 8.21286 11.888 8.56249 11.9795C8.91212 12.071 9.28393 11.9667 9.535 11.7068L13.121 8.12179C13.6837 7.55916 13.9999 6.79602 13.9999 6.00029C13.9999 5.20455 13.6837 4.44141 13.121 3.87879L9.535 0.292786C9.1445 -0.0975955 8.5115 -0.0975955 8.121 0.292786Z"
                        fill="#1FB14F"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------- */}

      <div
        class="flex bg-[#F0F8FF] flex-col w-full pb-[8rem] mt-[8rem]"
        id="registerCombo"
      >
        <div class="text-gradient-color-2 md:text-[4.8rem] md:leading-[64px] inline-block m-auto font-semibold text-[2.8rem] text-center md:mt-20 mt-10 leading-8 mb-[3.2rem] px-20 align-top">
          <span class="hidden md:inline">Đăng ký Combo Business</span>
          <p class="text-gradient-color-2 md:hidden block my-0">Đăng ký</p>
          <p class="text-gradient-color-2 md:hidden block my-0">
            Combo Business
          </p>
        </div>
        <FormInfo finalPage={true} />
      </div>

      <div className="container mx-auto">
        <CalcMoneyRent />
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
      <Benefit />
    </div>
  );
}

export default Combo;
