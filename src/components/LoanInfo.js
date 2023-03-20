import React, { useEffect, useRef, useState } from "react";

const LoanInfo = () => {
  const [person, setPerson] = useState(false);
  const [insurance, setInsurance] = useState(false);
  const [acc, setAcc] = useState(false);
  const [card, setCard] = useState(false);
  const [percentage, setPercentage] = useState(0);

  // let a = 1;
  // let b = 1;
  // let c = 0.2;
  // let d = 0.3;

  useEffect(() => {
    let a = 0;
    const percent = [
      {
        check: person,
        per: 1,
      },
      {
        check: insurance,
        per: 1,
      },
      {
        check: acc,
        per: 0.2,
      },
      {
        check: card,
        per: 0.1,
      },
    ];
    for (let i = 0; i < percent.length; i++) {
      if (percent[i].check) {
        // eslint-disable-next-line no-const-assign
        a += percent[i].per;
      } else {
        setPercentage(0);
      }
    }
    if (a > 0) {
      setPercentage(a.toFixed(1));
    }
  }, [person, insurance, acc, card]);

  return (
    <div className="px-4 md:px-0 md:pr-16 pb-10">
      <div className="color-label md:text-[2.8rem] title_form  text-[#1e4a84]  font-bold pb-4 pt-2 text-[2rem]">
        Thông tin khoản vay
      </div>
      <div className="flex">
        <div className="h-6 w-6 flex items-center cursor-pointer justify-center mr-2">
          <img
            className="object-contain max-w-none mt-2 ml-1"
            src="https://vaythechap.vpbank.com.vn/assets/icons/check.svg"
            alt="Checkbox"
          />
        </div>
        <div className="flex">
          <div className="font-medium text-[#1FB14F] md:text-[1.6rem] text-[1.4rem]">
            Sản phẩm Vay thế chấp kinh doanh theo hạn mức{" "}
            <span className="font-thin font-medi-svn">(Sản phẩm chính)</span>
          </div>
        </div>
      </div>
      <div className="w-full text-[#222222]">
        <div className="tableHead flex"></div>
      </div>
      <table className="loanInfo w-full text-base text-[#222222] space-y-10">
        <thead className="underline md:text-[1.6rem] text-[1.4rem] py-2">
          <tr>
            <th className="w-2/3 md:w-1/2 font-medium font-medi-svn text-left pt-10">
              Sản phẩm đi kèm trong Combo Business
            </th>
            <th className="w-1/3 md:w-1/2 font-medium font-medi-svn text-left pt-10 md:text-center md:ml-10 ml-0">
              Mức giảm lãi suất gói Vay thế chấp{" "}
              <span className="hidden md:inline-block underline">
                kinh doanh theo hạn mức
              </span>
            </th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="mt-">
            <td className="w-2/3 md:w-1/2 pr-3 py-6 pt-10">
              <div className="flex">
                <div
                  className="h-6 w-6 flex items-center justify-center mr-6"
                  onClick={() => setPerson(!person)}
                >
                  <img
                    className="object-contain max-w-none cursor-pointer undefined"
                    src={
                      person
                        ? "https://vaythechap.vpbank.com.vn/assets/icons/check.svg"
                        : "https://vaythechap.vpbank.com.vn/assets/icons/uncheck.svg"
                    }
                    alt="/assets/icons/check.svg"
                  />
                </div>
                <div className="flex md:text-[1.6rem] text-[1.4rem] font-semibold">
                  Vay tiêu dùng tín chấp cá nhân
                </div>
              </div>
            </td>
            <td className="w-1/3 md:w-1/2 md:text-[#16133E] text-[#222222] md:text-[1.6rem] text-right md:text-center text-[1.4rem]">
              <span style={{ fontWeight: "700" }}>{person ? "-1%" : "0%"}</span>
            </td>
          </tr>
          <tr className="mt-">
            <td className="w-2/3 md:w-1/2 pr-3 py-6">
              <div className="flex">
                <div
                  className="h-6 w-6 flex items-center justify-center mr-6"
                  onClick={() => {
                    setInsurance(!insurance);
                  }}
                >
                  <img
                    className="object-contain max-w-none cursor-pointer undefined"
                    src={
                      insurance
                        ? "https://vaythechap.vpbank.com.vn/assets/icons/check.svg"
                        : "https://vaythechap.vpbank.com.vn/assets/icons/uncheck.svg"
                    }
                    alt="/assets/icons/check.svg"
                  />
                </div>
                <div className="flex md:text-[1.6rem] text-[1.4rem] font-semibold">
                  Bảo hiểm nhân thọ
                </div>
              </div>
            </td>
            <td className="w-1/3 md:w-1/2 md:text-[#16133E] text-[#222222] md:text-[1.6rem] text-right md:text-center text-[1.4rem]">
              <span style={{ fontWeight: "700" }}>
                {insurance ? "-1%" : "0%"}
              </span>
            </td>
          </tr>
          <tr className="mt-">
            <td className="w-2/3 md:w-1/2 pr-3 py-6">
              <div className="flex">
                <div
                  className="h-6 w-6 flex items-center justify-center mr-6"
                  onClick={() => setAcc(!acc)}
                >
                  <img
                    className="object-contain max-w-none cursor-pointer undefined"
                    src={
                      acc
                        ? "https://vaythechap.vpbank.com.vn/assets/icons/check.svg"
                        : "https://vaythechap.vpbank.com.vn/assets/icons/uncheck.svg"
                    }
                    alt="/assets/icons/check.svg"
                  />
                </div>
                <div className="flex md:text-[1.6rem] text-[1.4rem] font-semibold">
                  Tài khoản thanh toán VPBank
                </div>
              </div>
            </td>
            <td className="w-1/3 md:w-1/2 md:text-[#16133E] text-[#222222] md:text-[1.6rem] text-right md:text-center text-[1.4rem]">
              <span style={{ fontWeight: "700" }}>{acc ? "-0.2%" : "0%"}</span>
            </td>
          </tr>
          <tr className="mt-">
            <td className="w-2/3 md:w-1/2 pr-3 py-6">
              <div className="flex">
                <div
                  className="h-6 w-6 flex items-center justify-center mr-6"
                  onClick={() => setCard(!card)}
                >
                  <img
                    className="object-contain max-w-none cursor-pointer undefined"
                    src={
                      card
                        ? "https://vaythechap.vpbank.com.vn/assets/icons/check.svg"
                        : "https://vaythechap.vpbank.com.vn/assets/icons/uncheck.svg"
                    }
                    alt="/assets/icons/check.svg"
                  />
                </div>
                <div className="flex md:text-[1.6rem] text-[1.4rem] font-semibold">
                  Thẻ tín dụng VPBank
                </div>
              </div>
            </td>
            <td className="w-1/3 md:w-1/2 md:text-[#16133E] text-[#222222] md:text-[1.6rem] text-right md:text-center text-[1.4rem]">
              <span style={{ fontWeight: "700" }}>{card ? "-0.1%" : "0%"}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="px-4 md:px-0 mt-8 mb-4 relative">
        <img
          className="inline-block mr-2"
          src="https://vaythechap.vpbank.com.vn/assets/icons/surprise.svg"
          width="56"
        />
        <span className="text-[1.4rem] md:text-[1.6rem] text-[rgb(31,_177,_79)] font-semibold text-surprise absolute bottom-0">
          ƯU ĐÃI: giảm {percentage}%/năm cho sản phẩm Vay thế chấp kinh doanh
          theo hạn mức
        </span>
      </div>
      <div className="mt-4 px-4 md:px-0 text-[11px] md:text-[1.4rem]">
        <p className="font-bold text-base md:text-[1.8rem] font-bold-svn color-label ">
          Lưu ý:{" "}
        </p>
        <div className="italic text-[#888888] md:mt-3 md:text-[1.4rem] mt-6 font-medium text-[11px] font-medi-svn">
          (*) Mức lãi suất ưu đãi áp dụng cho khách hàng tham gia đầy đủ tất cả
          các sản phẩm trong Combo và có thể thay đổi theo chính sách của VPBank
          từng thời kỳ
        </div>
        <div className="italic text-[#888888] md:mt-3 mt-2  md:text-[1.4rem] text-[11px] font-medi-svn font-medium">
          (**) Áp dụng cho những khách hàng thỏa mãn điều kiện, điều khoản
        </div>
      </div>
    </div>
  );
};

export default LoanInfo;
