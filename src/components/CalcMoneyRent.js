import { Input, Slider } from "antd";
import React, { useState } from "react";

const CalcMoneyRent = () => {
  const [moneyRent, setMoneyRent] = useState(100000000);
  const [years, setYears] = useState(0);

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
    const formatter = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
    });
    return formatter.format(number).slice(0);
  }

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
            value={moneyRent}
            defaultValue={0}
            min={100000000}
            step={1000000}
            max={50000000000}
            onChange={setMoneyRent}
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
          <Input
            suffix="VNĐ"
            value={formatCurrencyInput(moneyRent)}
            className="h-[4.7rem] text-[1.6rem]"
            placeholder="Nhập họ và tên"
          />
          <div className="absolute -mt-1 z-50 -top-1 left-5 bg-white px-1 py-1 flex justify-center items-center gap-x-3">
            <span className="-mt-2 text-[1.4rem]">Số tiền vay</span>
          </div>
        </div>
        <div className="relative">
          <Input
            suffix="năm"
            value={years}
            className="h-[4.7rem] text-[1.6rem]"
            placeholder="Nhập họ và tên"
          />
          <div className="absolute -mt-1 z-50 -top-1 left-5 bg-white px-1 py-1 flex justify-center items-center gap-x-3">
            <span className="-mt-2 text-[1.4rem]">Thời hạn vay</span>
          </div>
        </div>
        <div className="relative">
          <Input
            suffix="VNĐ"
            value={formatCurrencyInput(moneyRent)}
            className="h-[4.7rem] text-[1.6rem]"
            placeholder="Nhập họ và tên"
          />
          <div className="absolute -mt-1 z-50 -top-1 left-5 bg-white px-1 py-1 flex justify-center items-center gap-x-3">
            <span className="-mt-2 text-[1.4rem]">Số tiền trả hàng tháng</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalcMoneyRent;
