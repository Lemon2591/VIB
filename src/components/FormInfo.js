import { Form, Input, Select, Spin, message, Modal } from "antd";
import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import CalcMoneyRent from "./CalcMoneyRent";
import LoanInfo from "./LoanInfo";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Loading from "../layout/Loading";
const FormInfo = ({ finalPage }) => {
  const [form] = Form.useForm();
  const [hasVendorSupported, setHasVendorSupported] = useState(false);
  const [province, setProvince] = useState([]);
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const locations = useLocation();
  useEffect(() => {
    if (locations.pathname === "/combouudai") {
      return setLocation("Combo ưu đãi");
    }
    if (locations.pathname === "/vaymuanha") {
      return setLocation("Vay mua nhà");
    }
    if (locations.pathname === "/vaykinhdoanhthechap") {
      return setLocation("Vay kinh doanh thế chấp");
    }
    if (locations.pathname === "/vaymuaoto") {
      return setLocation("Vay mua ô tô");
    }
    if (locations.pathname === "/vaymuanhaduan") {
      return setLocation("Vay mua nhà dự án");
    }
    if (locations.pathname === "/vaytieudungthechap") {
      return setLocation("Vay tiêu dùng thế chấp");
    }
  }, [locations]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("https://provinces.open-api.vn/api/p/");
        const data = res.data?.map((data) => {
          return { label: data.name, value: data.name };
        });
        setProvince(data);
      } catch (error) {}
    })();
  }, []);

  const sendEmail = () => {
    const name = form.getFieldsValue().name;
    const add = form.getFieldsValue().add;
    const phone = form.getFieldsValue().phone;
    const mail = form.getFieldsValue().mail;
    const nha = form.getFieldsValue().nha;
    const support = form.getFieldsValue().support || "Không";
    setIsLoading(true);
    try {
      emailjs
        .send(
          "service_3kdubno",
          "template_mavnp4r",
          {
            name,
            add,
            phone,
            mail,
            nha,
            support,
            location,
          },
          "BXfEhSXDFx6iNNDHW"
        )
        .then(
          (result) => {
            if (result.status === 200) {
              setIsLoading(false);
              message.success("Gửi đăng ký thành công !");
            }
          },
          (error) => {
            setIsLoading(false);
            message.error(error.text);
          }
        );
    } catch (error) {
      message.error("Có lỗi xảy ra !");
    }
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isLoading ? <Loading /> : null}
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <div className="container mx-auto">
        <Form form={form} onFinish={sendEmail}>
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
                <Form.Item
                  required
                  name={"name"}
                  rules={[
                    { required: true, message: "Vui lòng không để trống" },
                  ]}
                >
                  <Input
                    name="name"
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
                <Form.Item
                  required
                  name={"add"}
                  rules={[
                    { required: true, message: "Vui lòng không để trống" },
                  ]}
                >
                  <Select
                    style={{ alignItems: "center" }}
                    name="add"
                    options={province}
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
                <Form.Item
                  required
                  name={"phone"}
                  rules={[
                    { required: true, message: "Vui lòng nhập trường này này" },
                  ]}
                >
                  <Input
                    name="phone"
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
                <Form.Item
                  required
                  name={"mail"}
                  rules={[
                    { required: true, message: "Vui lòng nhập trường này này" },
                  ]}
                >
                  <Input
                    name="mail"
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
                <Form.Item
                  style={{ alignItems: "center" }}
                  required
                  name={"nha"}
                  rules={[
                    { required: true, message: "Vui lòng nhập trường này này" },
                  ]}
                >
                  <Select
                    name="nha"
                    options={[
                      {
                        label: "Nhà",
                        value: "Nhà",
                      },
                      {
                        label: "Đất",
                        value: "Đất",
                      },
                      {
                        label: "Xe ô tô",
                        value: "Xe ô tô",
                      },
                    ]}
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
                <p className="text-[#1eb14f] font-semibold">
                  Chi nhánh hỗ trợ?
                </p>
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
                  <Form.Item
                    style={{ alignItems: "center" }}
                    required
                    name={"support"}
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập trường này này",
                      },
                    ]}
                  >
                    <Select
                      name="support"
                      className="h-[4.7rem] text-[1.6rem]"
                      placeholder="Chọn chi nhánh hỗ trợ"
                      options={[
                        {
                          label: "Không",
                          value: "Không",
                        },
                      ]}
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
          {finalPage && <LoanInfo className="text-center mx-auto " />}
          <button
            htmlType="submit"
            className="flex items-center mb-[0.8rem] mt-[1.6rem] font-semibold text-center mx-auto text-[1.6rem] px-[4.8rem] rounded-[2.6rem] h-[4.8rem] z-10 bg-[linear-gradient(80deg,_#233f82,_#1fb14f_80%)] text-white"
          >
            Đăng ký
          </button>
          {!finalPage && <CalcMoneyRent form={form} />}
        </Form>
      </div>
    </>
  );
};

export default FormInfo;
