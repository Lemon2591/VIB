import React from "react";
import Banner from "../components/Banner";
import FeatureCard from "../components/FeatureCard";
import FormInfo from "../components/FormInfo";

const HouseLandPage = ({ pageData }) => {
  return (
    <div>
      <Banner imageSrc={pageData?.bannerImageSrc} />
      <div className="bg-[rgba(240,248,255)] relative pb-[6.4rem]">
        <div className="text-center mb-[3.2rem] mt-[0.8rem]">
          <h1 className="font-bold mb-[1.6rem] leading-[8rem] text-gradient text-[4.8rem] md:text-[6rem] mt-0">
            Lợi ích vay vốn
          </h1>
          <p className="text-[#1e4a84] font-bold mb-[1.6rem] leading-[3.6rem] text-[2.8rem]">
            Lãi suất chỉ từ 10%/năm
          </p>
        </div>
        <div className="w-full px-10 571px:px-0">
          <div className="mx-auto flex md:flex-row flex-col justify-center items-stretch gap-x-12 container">
            <FeatureCard features={pageData?.features} />
            <FeatureCard features={pageData?.loanApplication} />
          </div>
        </div>
        <img
          src="https://vaythechap.vpbank.com.vn/assets/imgs/right-pattern.svg"
          className="absolute right-0 bottom-[3rem] w-28 md:w-auto"
          alt="x"
        />
      </div>
      <div className="bg-white mb-[6.4rem] text-center px-2">
        <h1 className="font-bold mb-[1.6rem] leading-[8rem] text-gradient text-[4.8rem] md:text-[6rem] mt-0">
          {pageData?.loanType}
        </h1>
        <FormInfo />
      </div>
      <div className="container mx-auto text-black font-semibold mb-20 px-10 571px:px-0">
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
    </div>
  );
};

export default HouseLandPage;
