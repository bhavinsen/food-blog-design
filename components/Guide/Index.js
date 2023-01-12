import React from "react";

export default function Index() {
  return (
    <div>
      <div className="food-banner relative pt-[124px]">
        <div>
          <h2 className="text-[34px] text-center mb-5 leading-[40px] text-dark600">
            F O O D G U I D E
          </h2>
          <div className="bg-[#342679] h-[3px] w-[80px] shadow-bordershadow mx-auto"></div>
          <div className="grid md:grid-cols-2 gap-5 grid-cols-1">
            <div className="md:mt-0 mt-4">
              <div className="mx-auto w-[120px] h-[120px] bg-[#342679B2]/70 rounded-full flex justify-center items-center">
                <img src="/assets/images/icons/carrot 1.svg" alt="" className="w-[50px]" />
              </div>
              <h1 className="text-[24px] text-center text-dark600 font-bold mt-[50px]">
                VEGETABLES
              </h1>
              <p className="text-[18px] font-medium text-dark600  xl:w-[510px] w-auto mt-[30px] text-center mx-auto">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </p>
            </div>
            <div className="md:mt-0 mt-4">
              <div className="mx-auto w-[120px] h-[120px] bg-[#342679B2]/70 rounded-full flex justify-center items-center">
                <img src="/assets/images/icons/apple 1.svg" alt=""  className="w-[50px]"/>
              </div>
              <h1 className="text-[24px] text-center text-dark600 font-bold mt-[50px]">
                FRUITS
              </h1>
              <p className="text-[18px] font-medium text-dark600  xl:w-[510px] w-auto mt-[30px] text-center mx-auto">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 mt-7">
            <div className="">
              <div className="mx-auto w-[120px] h-[120px] bg-[#342679B2]/70 rounded-full flex justify-center items-center">
                <img src="/assets/images/icons/wheat 1.svg" alt=""  className="w-[50px]"/>
              </div>
              <h1 className="text-[24px] text-center text-dark600 font-bold mt-[50px]">
                WHOLE GRAINS
              </h1>
              <p className="text-[18px] font-medium text-dark600  xl:w-[510px] w-auto mt-[30px] text-center mx-auto">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </p>
            </div>
            <div className="md:mt-0 mt-4">
              <div className="mx-auto w-[120px] h-[120px] bg-[#342679B2]/70 rounded-full flex justify-center items-center">
                <img src="/assets/images/icons/meat 1.svg" alt="" className="w-[50px]" />
              </div>
              <h1 className="text-[24px] text-center text-dark600 font-bold mt-[50px]">
                WHOLE GRAINS
              </h1>
              <p className="text-[18px] font-medium text-dark600  xl:w-[510px] w-auto mt-[30px] text-center mx-auto">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
