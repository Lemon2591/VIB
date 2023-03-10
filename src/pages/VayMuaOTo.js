import React from 'react'

import Banner from "../components/Banner";
import FeatureCard from "../components/FeatureCard";
import FormInfo from "../components/FormInfo";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function VayMuaOTo() {
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
                        <FeatureCard />
                        <FeatureCard />
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
            <Copyright />
        </div>
    )
}

export default VayMuaOTo