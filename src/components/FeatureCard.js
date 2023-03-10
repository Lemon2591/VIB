import React from "react";

const FeatureCard = ({ features }) => {
  return (
    <div className="w-full md:w-1/2 text-[1.6rem] shadow-xl py-[2rem] px-[2.2rem] mb-[1.2rem] rounded-md bg-white">
      <h3 className="text-gradient text-[2.8rem] font-bold p-[1.6rem] border-b-[2px] border-gray-200 border-solid">
        Đặc điểm sản phẩm
      </h3>
      <div className="mb-[1.6rem] pt-[1.8rem]">
        {features?.map((feature, index) => (
          <div
            key={index}
            className="py-[0.8rem] flex justify-start items-center gap-x-8"
          >
            <img
              className="min-w-[2.5rem] h-[2rem]"
              src={feature?.imageSrc}
              alt="x"
            />
            <p className="font-semibold text-[1.6rem] m-0 leading-[2.4rem]">
              {feature?.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;
