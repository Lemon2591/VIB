import { Form, Input, Select } from "antd";
import React, { useState } from "react";
import CalcMoneyRent from "./CalcMoneyRent";
const FormInfo = () => {
  const [form] = Form.useForm();
  const [hasVendorSupported, setHasVendorSupported] = useState(false);

  return (
    <div className="container mx-auto">
      <Form form={form}>
        <div className="px-10 571px:px-0">
          <div className="flex justify-start items-center gap-x-3">
            <p className="font-bold mb-[1.6rem] leading-[3.6rem] text-[2.8rem] text-[#1e4a84]">
              Thông tin khách hàng
            </p>
            <span className="font-light italic text-[#ff0000]">*</span>
            <span className="text-[rgb(136,_136,_136)] font-light italic">
              thông tin nhập bắt buộc
            </span>
          </div>
          <div className="grid 571px:grid-cols-2 md:grid-cols-4 gap-x-6">
            <div className="relative">
              <Form.Item>
                <Input
                  className="h-[4.7rem] text-[1.6rem]"
                  placeholder="Nhập họ và tên"
                />
              </Form.Item>
              <div className="absolute -mt-1 -top-4 left-5 bg-white px-1 py-1 flex justify-center items-center gap-x-3">
                <span className="-mt-2 text-[rgb(136,_136,_136)] text-[1.4rem]">
                  Họ và tên
                </span>
                <span className="text-[#ff0000]">*</span>
              </div>
            </div>
            <div className="relative custom-select">
              <Form.Item>
                <Select
                  options={[]}
                  className="h-[4.7rem] text-[1.6rem]"
                  placeholder="Chọn nơi ở hiện tại"
                />
              </Form.Item>
              <div className="absolute -mt-1 -top-4 left-5 bg-white px-1 py-1 flex justify-center items-center gap-x-3">
                <span className="-mt-2 text-[rgb(136,_136,_136)] text-[1.4rem]">
                  Nơi ở hiện tại
                </span>
                <span className="text-[#ff0000]">*</span>
              </div>
            </div>
            <div className="relative">
              <Form.Item>
                <Input
                  className="h-[4.7rem] text-[1.6rem]"
                  placeholder="Nhập số điện thoại"
                />
              </Form.Item>
              <div className="absolute -mt-1 -top-4 left-5 bg-white px-1 py-1 flex justify-center items-center gap-x-3">
                <span className="-mt-2 text-[rgb(136,_136,_136)] text-[1.4rem]">
                  Số điện thoại
                </span>
                <span className="text-[#ff0000]">*</span>
              </div>
            </div>
            <div className="relative">
              <Form.Item>
                <Input
                  className="h-[4.7rem] text-[1.6rem]"
                  placeholder="Nhập email"
                />
              </Form.Item>
              <div className="absolute -mt-1 -top-4 left-5 bg-white px-1 py-1 flex justify-center items-center gap-x-3">
                <span className="-mt-1 text-[rgb(136,_136,_136)] text-[1.4rem]">
                  Email
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-left px-10 571px:px-0">
          <p className="font-bold mb-[1.6rem] leading-[3.6rem] text-[2.8rem] text-[#1e4a84]">
            Thông tin khoản vay
          </p>
          <div className="grid 571px:grid-cols-2 md:grid-cols-4 gap-x-3">
            <div className="relative custom-select">
              <Form.Item>
                <Select
                  options={[]}
                  className="h-[4.7rem] text-[1.6rem]"
                  placeholder="Chọn tài sản thế chấp"
                />
              </Form.Item>
              <div className="absolute -mt-1 -top-4 left-5 bg-white px-1 py-1 flex justify-center items-center gap-x-3">
                <span className="-mt-2  text-[rgb(136,_136,_136)] text-[1.4rem]">
                  Tài sản thế chấp
                </span>
                <span className="text-[#ff0000]">*</span>
              </div>
            </div>
            <div className="px-5">
              <p className="text-[#1eb14f] font-semibold">Chi nhánh hỗ trợ?</p>
              <div className="flex items-center gap-x-5 pt-[0.5rem]">
                <div
                  onClick={() => setHasVendorSupported(true)}
                  className="flex 572px:w-1/2 text-left justify-start items-center gap-2 cursor-pointer"
                >
                  <img
                    className="w-[18px] h-[18px]"
                    src={
                      hasVendorSupported
                        ? "https://vaythechap.vpbank.com.vn/assets/icons/check.svg"
                        : "https://vaythechap.vpbank.com.vn/assets/icons/uncheck.svg"
                    }
                    alt="check"
                  />
                  <span>Có</span>
                </div>
                <div
                  onClick={() => setHasVendorSupported(false)}
                  className="flex 571px:w-1/2 text-left justify-start items-center gap-2 cursor-pointer"
                >
                  <img
                    className="w-[18px] h-[18px]"
                    src={
                      !hasVendorSupported
                        ? "https://vaythechap.vpbank.com.vn/assets/icons/check.svg"
                        : "https://vaythechap.vpbank.com.vn/assets/icons/uncheck.svg"
                    }
                    alt="check"
                  />
                  <span>Không</span>
                </div>
              </div>
            </div>
            {hasVendorSupported && (
              <div className="relative custom-select mt-10 571px:mt-0">
                <Form.Item>
                  <Select
                    className="h-[4.7rem] text-[1.6rem]"
                    placeholder="Chọn chi nhánh hỗ trợ"
                  />
                </Form.Item>
                <div className="absolute -mt-1 -top-4 left-5 bg-white px-1 py-1 flex justify-center items-center gap-x-3">
                  <span className="-mt-2  text-[rgb(136,_136,_136)] text-[1.4rem]">
                    Thông tin chi nhánh hỗ trợ
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
        <button className="mb-[0.8rem] mt-[1.6rem] font-semibold text-center mx-auto text-[1.6rem] px-[4.8rem] rounded-[2.6rem] h-[4.8rem] z-10 bg-[linear-gradient(80deg,_#233f82,_#1fb14f_80%)] text-white">
          Đăng ký
        </button>
        <CalcMoneyRent form={form} />
      </Form>
    </div>
  );
};

export default FormInfo;
