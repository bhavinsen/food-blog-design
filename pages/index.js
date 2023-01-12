import Header from "../components/Header/Index";
import Chefs from "../components/Chefs/Index";
import Guide from "../components/Guide/Index";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="xl:px-[50px] px-3 2xl:px-[100px] mx-auto">
        <div className="mt-[50px] ">
          <div className="flex flex-col  justify-center items-center">
            <h2 className="text-[34px] text-center  mb-5 leading-[40px] text-dark600">
              V A R I E T I E S
            </h2>
            <div className="bg-[#342679] h-[3px] w-[80px] shadow-bordershadow "></div>
          </div>
          <div className="grid xl:grid-cols-2 grid-cols-1 mt-[50px]  gap-[30px]">
            <div className="relative rounded-[20px] overflow-hidden">
              <img src="/assets/images/Bitmap.png" className="w-full" />
              <div className="absolute lg:px-[65px] px-5 py-4 lg:pt-[50px] w-full bottom-0 lg:pb-[66px] bg-[#342679]/[0.8] ">
                <div className="border-b pb-[20px] border-white">
                  <h1 className="font-bold text-[16px] md:text-[26px] lg:mt-[24px] mb-[12px] 2xl:mt-0 2xl:mb-[24px] leading-[26px] md:leading-[40px] text-white">
                    Pizza is a savory dish of Italian origin
                  </h1>
                  <p className="font-medium text-xs md:text-[14px] leading-[18px]  md:leading-[26px] text-white">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry.
                  </p>
                </div>
                <div className="md:mt-4 mt-[18px] flex justify-between items-center">
                  <button className="text-white border text-[16px] font-bold border-white gap-[26px] px-[16px] py-2 lg:px-[30px] lg:py-4 flex items-center justify-center rounded-[20px]">
                    Explore <img src="/assets/images/icons/Shape.svg" className="w-5 md:h-auto h-5 md:w-auto"/>
                  </button>
                  <button className="text-white text-[16px] font-bold gap-[20px] lg:py-4 flex items-center justify-center rounded-[20px]">
                    <img src="/assets/images/icons/Shape (1).svg" className="w-5 md:h-auto h-5 md:w-auto"/> Rated
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-[40px] lg:grid-cols-2 grid-cols-1">
            <div className="w-full rounded-[20px] overflow-hidden relative">
                <img
                  src="/assets/images/Bitmap (1).png"
                  className="h-full w-full"
                />
                  <div className="absolute bg-white/[0.8] xl:pt-0 pt-6 xl:pb-0 px-5 lg:px-[25px] pb-6 bottom-0 w-full">
                  <div className="border-b xl:pb-[38px] pb-4 border-[#616161]">
                    <h2 className="text-[#2B2B2B] xl:mt-[24px] xl:mb-[12px] mb-3 md:mb-[24px] 2xl:text-[24px] text-[16px] leading-[24px] md:text-[20px] md:leading-[32px] font-bold">
                      Crispy French Fries
                    </h2>
                    <p className="text-xs md:text-[18px] xl:text-sm font-medium leading-[18px] md:leading-[26px] text-black">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                  <div className="md:mt-4 mt-[18px] flex justify-between items-center">
                    <button className="text-[#2B2B2B]  text-[16px] font-bold gap-[26px] px-[16px] py-2 lg:px-[30px] lg:py-4 flex items-center justify-center rounded-[20px]">
                      Explore <img src="/assets/images/icons/Shape (3).svg" className="w-5 md:h-auto h-5 md:w-auto"/>
                    </button>
                    <button className="text-[#2B2B2B] text-[16px] font-bold gap-[20px]  flex items-center justify-center rounded-[20px]">
                      <img src="/assets/images/icons/Shape (2).svg" className="w-5 md:h-auto h-5 md:w-auto"/> Rated
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full rounded-[20px] overflow-hidden relative">
                <img
                  src="/assets/images/Bitmap (2).png"
                  className="h-full w-full"
                />
                   <div className="absolute bg-white/[0.8] xl:pt-0 pt-6 xl:pb-0 px-5 lg:px-[25px] pb-6 bottom-0 w-full">
                  <div className="border-b xl:pb-[38px] pb-4 border-[#616161]">
                    <h2 className="text-[#2B2B2B] xl:mt-[24px] xl:mb-[12px] mb-3 md:mb-[24px] 2xl:text-[24px] text-[16px] leading-[24px] md:text-[20px] md:leading-[32px] font-bold">
                      Crispy French Fries
                    </h2>
                    <p className="text-xs md:text-[18px] xl:text-sm font-medium leading-[18px] md:leading-[26px] text-black">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                  <div className="md:mt-4 mt-[18px] flex justify-between items-center">
                    <button className="text-[#2B2B2B]  text-[16px] font-bold gap-[26px] px-[16px] py-2 lg:px-[30px] lg:py-4 flex items-center justify-center rounded-[20px]">
                      Explore <img src="/assets/images/icons/Shape (3).svg" className="w-5 md:h-auto h-5 md:w-auto"/>
                    </button>
                    <button className="text-[#2B2B2B] text-[16px] font-bold gap-[20px]  flex items-center justify-center rounded-[20px]">
                      <img src="/assets/images/icons/Shape (2).svg" className="w-5 md:h-auto h-5 md:w-auto"/> Rated
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full rounded-[20px] overflow-hidden relative">
                <img
                  src="/assets/images/Bitmap (3).png"
                  className="h-full w-full"
                />

                <div className="absolute bg-black/[0.8] xl:pt-0 pt-6 xl:pb-0 px-5 lg:px-[25px] pb-6 bottom-0 w-full">
                  <div className="border-b xl:pb-[38px] pb-4 border-[#616161]">
                    <h2 className="text-white xl:mt-[24px] xl:mb-[12px] mb-3 md:mb-[24px] 2xl:text-[24px] text-[16px] leading-[24px] md:text-[20px] md:leading-[32px] font-bold">
                      Crispy French Fries
                    </h2>
                    <p className="text-xs md:text-[18px] xl:text-sm font-medium leading-[18px] md:leading-[26px] text-white">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                  <div className="md:mt-4 mt-[18px] flex justify-between items-center">
                    <button className="text-white  text-[16px] font-bold gap-[26px] px-[16px] py-2 lg:px-[30px] lg:py-4 flex items-center justify-center rounded-[20px]">
                      Explore <img src="/assets/images/icons/left-white.svg" className="w-5 md:h-auto h-5 md:w-auto" />
                    </button>
                    <button className="text-white text-[16px] font-bold gap-[20px]  flex items-center justify-center rounded-[20px]">
                      <img src="/assets/images/icons/white-star.svg" className="w-5 md:h-auto h-5 md:w-auto"/> Rated
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full rounded-[20px] overflow-hidden relative">
                <img
                  src="/assets/images/Bitmap (4).png"
                  className="h-full w-full"
                />
                 <div className="absolute bg-white/[0.8] xl:pt-0 pt-6 xl:pb-0 px-5 lg:px-[25px] pb-6 bottom-0 w-full">
                  <div className="border-b xl:pb-[38px] pb-4 border-[#616161]">
                    <h2 className="text-[#2B2B2B] xl:mt-[24px] xl:mb-[12px] mb-3 md:mb-[24px] 2xl:text-[24px] text-[16px] leading-[24px] md:text-[20px] md:leading-[32px] font-bold">
                      Crispy French Fries
                    </h2>
                    <p className="text-xs md:text-[18px] xl:text-sm font-medium leading-[18px] md:leading-[26px] text-black">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                  <div className="md:mt-4 mt-[18px] flex justify-between items-center">
                    <button className="text-[#2B2B2B]  text-[16px] font-bold gap-[26px] px-[16px] py-2 lg:px-[30px] lg:py-4 flex items-center justify-center rounded-[20px]">
                      Explore <img src="/assets/images/icons/Shape (3).svg" className="w-5 md:h-auto h-5 md:w-auto"/>
                    </button>
                    <button className="text-[#2B2B2B] text-[16px] font-bold gap-[20px]  flex items-center justify-center rounded-[20px]">
                      <img src="/assets/images/icons/Shape (2).svg" className="w-5 md:h-auto h-5 md:w-auto"/> Rated
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-[28px] 2xl:gap-[56px] md:grid-cols-3 grid-cols-1 mt-20 md:mt-52">
            <div className="md:px-[20px] px-0">
              <h1 className="xl:text-[34px] md:text-[23px] text-[15px] font-bold text-dark600 xl:leading-normal leading[32px]">
                Indian Cuisine
              </h1>
              <p className="font-medium 2xl:text-lg text-[13px] 2xl:mt-7 mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
            <div className="md:px-[20px] px-0">
              <h1 className="xl:text-[34px] md:text-[23px] font-bold text-dark600 xl:leading-normal leading[32px]">
              American Cuisine
              </h1>
              <p className="font-medium 2xl:text-lg text-[13px] 2xl:mt-7 mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
              </p>
            </div>
            <div className="md:px-[20px] px-0">
              <h1 className="xl:text-[34px] md:text-[23px] font-bold text-dark600 xl:leading-normal leading[32px]">
              Chinese Cuisine
              </h1>
              <p className="font-medium 2xl:text-lg text-[13px] 2xl:mt-7 mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
          <Chefs />
          <Guide />
        </div>
      </div>
    </div>
  );
}
