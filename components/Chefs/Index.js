import React from "react";

export default function Index() {
  return (
    <>
      <div className="mt-20 md:mt-52">
        <div className="flex flex-col  justify-center items-center">
          <h2 className="text-[34px] text-center mb-5 leading-[40px] text-dark600">
            T O P C H E F S
          </h2>
          <div className="bg-[#342679] h-[3px] w-[80px] shadow-bordershadow mx-auto"></div>
          <div className="mt-12 banner w-full pt-[73px] py-[219px]">
            <div className="max-w-[1008px] flex items-center gap-x-8 mx-auto md:flex-nowrap flex-wrap xl:justify-start justify-center">
              <div>
                <div className="h-[150px] w-[150px] bg-black rounded-full overflow-hidden mx-auto mb-8">
                  <img src="/assets/images/Mask Group.png" alt="MaskGroup" />
                </div>
                <h1 className="text-xl font-bold text-white">
                  Eileen Johnson
                </h1>
                <p className="text-lg font-medium text-white">
                  Executive Chef, USA
                </p>
              </div>
              <div>
                <div className="lg:max-w-[566px] px-2 my-2 mx-3 bg-white rounded-[20px] overflow-hidden flex justify-center py-[50px]">
                  <div>
                    <img
                      src="/assets/images/Mask Group (1).png"
                      alt="MaskGroup"
                      className="mx-auto mb-7"
                    />
                    <h1 className="text-xl font-bold text-dark600 text-center">
                      Robert Downey Jr
                    </h1>
                    <p className="text-lg leading-[26px] font-medium text-dark600 pt-2 text-center">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="h-[150px] w-[150px] bg-black rounded-full overflow-hidden mx-auto mb-8">
                  <img
                    src="/assets/images/Mask Group (2).png"
                    alt="MaskGroup"
                  />
                </div>
                <h1 className="text-xl font-bold text-white">Amanda Dority</h1>
                <p className="text-lg font-medium text-white">
                  Sous Chef, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
