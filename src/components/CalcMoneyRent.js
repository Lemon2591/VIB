import { Form, Input, Slider } from "antd";
import React, { useEffect, useState } from "react";

const CalcMoneyRent = ({ form }) => {
  const [moneyRent, setMoneyRent] = useState(100000000);
  const [years, setYears] = useState(1);

  useEffect(() => {
    form.setFieldsValue({
      moneyRent: formatCurrencyInput(moneyRent),
    });
  }, [form, moneyRent]);

  function formatMoneyToString(value) {
    if (value >= 1000000000) {
      return `${Math.floor(value / 1000000000)} tỷ ${formatMoneyToString(
        value % 1000000000
      )}`;
    } else if (value >= 1000000) {
      return `${Math.floor(value / 1000000)} triệu ${formatMoneyToString(
        value % 1000000
      )}`;
    } else if (value >= 1000) {
      return `${Math.floor(value / 1000)} nghìn ${formatMoneyToString(
        value % 1000
      )}`;
    } else {
      return `${value || ""} VNĐ`;
    }
  }

  function formatCurrencyInput(number) {
    let numStr = number?.toString();
    let groups = [];
    while (numStr.length > 0) {
      groups.unshift(numStr.slice(-3));
      numStr = numStr.slice(0, -3);
    }
    return groups.join(".");
  }

  const validateMoneyRent = (rule, value, callback) => {
    const intValue = parseInt(value?.split(".")?.join(""));
    if (!intValue) {
      return Promise.reject("Vui lòng nhập số tiền vay");
    } else if (intValue < 100000000) {
      return Promise.reject("Số tiền vay tối thiểu là 100.000.000 đồng");
    } else if (intValue > 20000000000) {
      return Promise.reject("Số tiền vay tối đa là 20.000.000.000 đồng");
    } else {
      return Promise.resolve();
    }
  };
  return (
    <>
      <div className="text-left py-[1.6rem]">
        <p className="font-bold mb-[1.6rem] leading-[3.6rem] text-[2.8rem] text-[#1e4a84]">
          Công cụ tính khoản vay (tham khảo)
        </p>
      </div>
      <div className="grid grid-cols-3 gap-x-6 mt-[2.4rem] mb-[2.4rem]">
        <div className="custom-slider">
          <Slider
            // dotStyle={{ backgroundColor: "#ff0000" }}
            value={moneyRent}
            defaultValue={0}
            min={100000000}
            step={1000000}
            max={50000000000}
            onChange={setMoneyRent}
            trackStyle={{
              backgroundColor: "#1fb14f",
            }}
            handleStyle={{
              backgroundColor: "#1fb14f",
              // boxShadow: "0 0 0 2px #1fb14f",
            }}
            tooltip={{
              open: true,
              formatter: () => (
                <img
                  src="https://vaythechap.vpbank.com.vn/assets/imgs/icon_slider_money.png"
                  alt="xxx"
                />
              ),
            }}
          />
          <div className="text-left text-[rgb(51,_51,_51)] text-[1.6rem] font-semibold ml-[1.2rem]">
            {formatMoneyToString(moneyRent)}
          </div>
        </div>
        <div className="custom-slider">
          <Slider
            value={years}
            defaultValue={1}
            min={1}
            max={25}
            onChange={setYears}
            trackStyle={{
              backgroundColor: "#1fb14f",
            }}
            handleStyle={{
              backgroundColor: "#1fb14f",
              // boxShadow: "0 0 0 2px #1fb14f",
            }}
            tooltip={{
              open: true,
              formatter: () => (
                <img
                  src="https://vaythechap.vpbank.com.vn/assets/imgs/icon_slider_calendar.png"
                  alt="xxx"
                />
              ),
            }}
          />
          <div className="text-left text-[rgb(51,_51,_51)] text-[1.6rem] font-semibold ml-[1.2rem]">
            {years} năm
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-6 mt-[2.4rem] mb-[2.4rem]">
        <div className="relative">
          <Form.Item
            name="moneyRent"
            rules={[
              {
                required: true,
                message:
                  "Vui lòng nhập số tiền vay từ 100.000.000 đến 20.000.000.000 VNĐ",
              },
              {
                validator: validateMoneyRent,
              },
            ]}
            validateTrigger="onChange"
          >
            <Input
              suffix="VNĐ"
              onChange={(e) => {
                const money = e.target.value?.split(".").join("");
                setMoneyRent(parseInt(money));
              }}
              className="h-[4.7rem] text-[1.6rem]"
              placeholder="Nhập họ và tên"
            />
          </Form.Item>
          <div className="absolute -mt-1 z-50 -top-1 left-5 bg-white px-1 py-1 flex justify-center items-center gap-x-3">
            <span className="-mt-2 text-[1.4rem] text-[rgb(136,_136,_136)]">
              Số tiền vay
            </span>
          </div>
        </div>
        <div className="relative">
          <Form.Item>
            <Input
              suffix="năm"
              value={years}
              className="h-[4.7rem] text-[1.6rem]"
              placeholder="Nhập họ và tên"
            />
          </Form.Item>
          <div className="absolute -mt-1 z-50 -top-1 left-5 bg-white px-1 py-1 flex justify-center items-center gap-x-3">
            <span className="-mt-2 text-[1.4rem] text-[rgb(136,_136,_136)]">
              Thời hạn vay
            </span>
          </div>
        </div>
        <div className="relative ">
          <Form.Item>
            <Input
              suffix="VNĐ"
              disabled
              value={formatCurrencyInput(moneyRent)}
              className="h-[4.7rem] text-[1.6rem]"
            />
          </Form.Item>
          <div className="absolute -mt-1 z-50 -top-1 left-5 bg-white px-1 py-1 flex justify-center items-center gap-x-3">
            <span className="-mt-2 text-[1.4rem] text-[rgb(136,_136,_136)]">
              Số tiền trả hàng tháng
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalcMoneyRent;
