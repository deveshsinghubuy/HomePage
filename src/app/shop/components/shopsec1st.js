import React from "react";
import Image from "next/image";
const ShopSec1st = () => {
  return (
    <div className="flex justify-center lg:h-[600px] md:h-[300px] h-[550px]">
      <div className=" max-w-[2026px] w-full h-[100%] font-poppins">
        <div
          style={{ backgroundImage: 'url("../shopPageimages/secBg.png")' }}
          className="w-full h-[70%] bg-cover  bg-no-repeat flex justify-center items-center "
        >
          <div className="text-center w-[9%] h-auto flex flex-col items-center">
            <h1 className="text-[42px] sm:text-[18px] md:text-[23px] lg:text-[24px] xl:text-[40px] 2xl:text-[52px]  font-medium">
              Shop
            </h1>
            <div className="gap-2.5 flex 2xl:gap-3 xl:gap-2 lg:gap-2 md:gap-1  items-center">
              <span className="text-[14px] sm:text-[5px] xl:text-[14px] 2xl:text-[18px]  md:text-[8px] lg:text-[10px] font-medium">
                Home
              </span>
              <span className="w-[7px] 2xl:w-[8px] xl:w-[6px] lg:w-[6px] md:w-[3px] ">
                <Image
                  src="/shopPageimages/leftArrow.png"
                  alt="image"
                  width={10}
                  height={8}
                />
              </span>
              <span className="text-[14px]  xl:text-[14px] 2xl:text-[18px] sm:text-[5px] md:text-[8px] lg:text-[10px] font-light">
                Shop
              </span>
            </div>
          </div>
        </div>
        {/* /bottom  */}
        <div className=" w-full sm:flex justify-between px-7 sm:px-5 py-2 xl:px-20 2xl:py-10 xl:py-10 sm:py-4  bg-[#F9F1E7]">
          <div className="grid grid-cols-2 sm:flex items-center gap-4 sm:gap-4 justify-center">
            
            
            <div className="flex lg:gap-4 sm:gap-2 justify-start sm:justify-center items-center">
              <Image
                className="w-[25px] sm:w-[20px] 2xl:w-[30px] xl:w-[25px]"
                src="/shopPageimages/bottomIcon1.png"
                alt="image"
                width={30}
                height={30}
              ></Image>
              <h1 className="text-[22px] md:text-[16px] 2xl:text-[26px] xl:text-[20px] font-normal">
                Filter
              </h1>
            </div>
            <div className="flex justify-end gap-3 sm:gap-4">
              <Image
                className="w-[25px] sm:w-[20px] 2xl:w-[30px] xl:w-[25px]"
                src="/shopPageimages/bottomIcon2.png"
                alt="image"
                width={30}
                height={30}
              ></Image>
              <Image
                className="w-[25px] sm:w-[20px] 2xl:w-[30px] xl:w-[25px]"
                src="/shopPageimages/bottomIcon3.png"
                alt="image"
                width={30}
                height={30}
              ></Image>
            </div>
            <div className="bg-[#9F9F9F] hidden sm:block w-0.5 h-full"></div>
            <h1 className="2xl:text-[22px] md:text-[12px] xl:text-[16px] col-span-2 font-normal">
              Showing 116 of 32 results
            </h1>
          </div>

          <div className="text-[20px] md:text-[14px] sm:flex lg:text-[16px] md:gap-5 2xl:gap-7 xl:gap-7 2xl:text-[26px] xl:text-[18px] font-normal">
            <div className="flex justify-between items-center md:gap-3 2xl:gap-8 xl:gap-5">
              <h1>Show</h1>
              <div className="p-2 pr-1 pl-3 md:p-1 2xl:p-4 2xl:pl-6 xl:p-1 xl:pl-4 bg-white ">
                <input
                  className="w-20 md:w-8 2xl:w-9 xl:w-7 text-center 2xl:text-2xl xl:text-sm"
                  type="number"
                  placeholder="16"
                />
              </div>
            </div>
            <div className="flex justify-between items-center md:gap-3 2xl:gap-8 xl:gap-5">
              <h1>Short by</h1>
              <div className="md:p-1 2xl:p-4 2xl:pl-6 xl:p-1 xl:pl-4 bg-white ">
                <input
                  className="w-40 md:w-20 md:text-[] text-sm 2xl:w-35 xl:w-30  2xl:text-2xl xl:text-sm"
                  type="text"
                  placeholder="Defalut"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSec1st;
