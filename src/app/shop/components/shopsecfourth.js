import React from "react";
import Image from "next/image";

const ShopSecFourth = () => {
  return (
    <div className="flex justify-center items-center md:mt-5">
      <div className="bg-[#FAF3EA] max-w-[2560px] w-full h-auto lg:py-20 md:py-7 font-poppins flex justify-center items-center">
       
        <div className="grid grid-cols-4  md:w-[95%] 2xl:w-[90%] xl:w-[95%] items-center 2xl:gap-10 xl:gap-5  md:gap-0">
          <div className="flex justify-center md:pl-3 lg:p-0 items-center xl:gap-4 md:gap-1">
            <Image
              className="w-[25%] h-[70%]"
              src="/shopPageimages/trophy.svg"
              alt="image"
              width={60}
              height={60}
            ></Image>
            <div>
              <h1 className="font-semibold 2xl:text-[25px] xl:text-[22px] md:text-[12px]">
                High Quality
              </h1>
              <h4 className="font-medium 2xl:text-[20px] xl:text-[16px] text-[#898989] md:text-[10px] lg:whitespace-nowrap">
                Crafted from top materials
              </h4>
            </div>
          </div>
          <div className="flex justify-center items-center xl:gap-4 md:gap-1">
            <Image
              className="w-[25%] h-[70%]"
              src="/shopPageimages/verify.svg"
              alt="image"
              width={60}
              height={60}
            ></Image>
            <div>
              <h1 className="font-semibold 2xl:text-[25px] xl:text-[20px] md:text-[12px] lg:whitespace-nowrap">
                Warranty Protection
              </h1>
              <h4 className="font-medium 2xl:text-[20px] xl:text-[16px] text-[#898989] md:text-[10px]">
                Over 2 years
              </h4>
            </div>
          </div>
          <div className="flex justify-center items-center xl:gap-4 md:gap-1">
            <Image
              className="w-[25%] h-[70%]"
              src="/shopPageimages/shipping.svg"
              alt="image"
              width={60}
              height={60}
            ></Image>
            <div>
              <h1 className="font-semibold 2xl:text-[25px] xl:text-[22px] md:text-[12px]">
                Free Shipping
              </h1>
              <h4 className="font-medium 2xl:text-[20px] xl:text-[16px] text-[#898989] md:text-[10px]">
                Order over 150 $
              </h4>
            </div>
          </div>
          <div className="flex justify-center items-center xl:gap-4 md:gap-1">
            <Image
              className="w-[25%] h-[70%]"
              src="/shopPageimages/customer.svg"
              alt="image"
              width={60}
              height={60}
            ></Image>
            <div>
              <h1 className="font-semibold 2xl:text-[25px] xl:text-[22px] md:text-[12px]">
                24 / 7 Support
              </h1>
              <h4 className="font-medium 2xl:text-[20px] xl:text-[16px] text-[#898989] md:text-[10px]">
                Dedicated support
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSecFourth;
