"use client"

import React from "react";
import Image from "next/image";
import {useState} from "react"
import { AiOutlineShareAlt, AiOutlineHeart } from "react-icons/ai";
import { TbArrowsShuffle } from "react-icons/tb"; // shuffle = compare

const ShopSecSecond = () => {
  const boxdata = [
    {
      id: 1,
      image: "/images/product1.png",
      head_1: "Syltherine",
      head_2: "Stylish cafe chair ",
      price: "Rp 2.500.000",
      price2: "Rp 3.500.000",
    },
    {
      id: 2,
      image: "/images/product2.png",
      head_1: "Syltherine",
      head_2: "Stylish cafe chair ",
      price: "Rp 2.500.000",
      price2: "Rp 3.500.000",
    },

    {
      id: 3,
      image: "/images/product3.png",
      head_1: "Syltherine",
      head_2: "Stylish cafe chair ",
      price: "Rp 2.500.000",
      price2: "Rp 3.500.000",
    },
    {
      id: 4,
      image: "/images/product4.png",
      head_1: "Syltherine",
      head_2: "Stylish cafe chair ",
      price: "Rp 2.500.000",
      price2: "Rp 3.500.000",
    },
    {
      id: 5,
      image: "/images/product5.png",
      head_1: "Syltherine",
      head_2: "Stylish cafe chair ",
      price: "Rp 2.500.000",
      price2: "Rp 3.500.000",
    },
    {
      id: 6,
      image: "/images/product6.png",
      head_1: "Syltherine",
      head_2: "Stylish cafe chair ",
      price: "Rp 2.500.000",
      price2: "Rp 3.500.000",
    },
    {
      id: 7,
      image: "/images/product7.png",
      head_1: "Syltherine",
      head_2: "Stylish cafe chair ",
      price: "Rp 2.500.000",
      price2: "Rp 3.500.000",
    },
    {
      id: 8,
      image: "/images/product8.png",
      head_1: "Syltherine",
      head_2: "Stylish cafe chair ",
      price: "Rp 2.500.000",
      price2: "Rp 3.500.000",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
    const visiblePages = 3; 

    const startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);
  
    const handlePageChange = (page) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      }
    };

  return (
    <div className="flex justify-center items-center">
      <div className="2xl:px-20 xl:px-20 md:px-8  2xl:py-10 xl:py-3 md:py-0 ">
        <div className="grid grid-cols-4  2xl:gap-12 xl:gap-7 lg:gap-4 md:gap-4 sm:gap-1">
          
          {boxdata.map((b, index) => (
            <div key={b.id || index} className="relative group">
              <Image
                className="md:w-[180px] lg:w-[285px] 2xl:w-[400px]"
                src={b.image}
                alt="image"
                width={285}
                height={301}
              ></Image>

              <div className="lg:p-5 bg-[#F4F5F7] pb-8 md:p-2 lg:pb-8 flex flex-col gap-1">
                <h1 className="text-[24px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[38px] font-semibold text-[#3A3A3A]">
                  {b.head_1}
                </h1>
                <h4 className="text-[16px] md:text-[10px] lg:text-[14px] xl:text-[16px] 2xl:text-[24px] font-medium text-[#898989]">
                  {b.head_2}
                </h4>
                <div className="flex justify-between items-center">
                  <span className="text-[20px] md:text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] font-semibold text-[#3A3A3A]">
                    {b.price}
                  </span>
                  <span className="text-[16px] md:text-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[22px] font-normal text-[#B0B0B0] line-through">
                    {b.price2}
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 flex flex-col gap-5 justify-center items-center md:text-[10px] lg:text-[20px] font-semibold text-white bg-[#3A3A3A]/50 opacity-0 group-hover:opacity-100 ">
                <div className="lg:px-15 md:px-12 py-4 bg-white">
                  <button className="text-[#B88E2F] cursor-pointer ">
                    Add to Cart
                  </button>
                </div>
                <div className="flex items-center lg:gap-5 md:gap-3">
                  <div className="flex lg:gap-2 md:gap-1 items-center">
                    <AiOutlineShareAlt />
                    <h1>Share</h1>
                  </div>

                  <div className="flex lg:gap-2 md:gap-1 items-center">
                    <TbArrowsShuffle />
                    <h1>Compare</h1>
                  </div>

                  <div className="flex lg:gap-2 md:gap-1 items-center">
                    <AiOutlineHeart />
                    <h1>Like</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {boxdata.map((b, index) => (
            <div key={b.id || index} className="relative group">
              <Image
                className="md:w-[180px] lg:w-[285px] 2xl:w-[400px]"
                src={b.image}
                alt="image"
                width={285}
                height={301}
              ></Image>

              <div className="lg:p-5 bg-[#F4F5F7] pb-8 md:p-2 lg:pb-8 flex flex-col gap-1">
                <h1 className="text-[24px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[38px] font-semibold text-[#3A3A3A]">
                  {b.head_1}
                </h1>
                <h4 className="text-[16px] md:text-[10px] lg:text-[14px] xl:text-[16px] 2xl:text-[24px] font-medium text-[#898989]">
                  {b.head_2}
                </h4>
                <div className="flex justify-between items-center">
                  <span className="text-[20px] md:text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] font-semibold text-[#3A3A3A]">
                    {b.price}
                  </span>
                  <span className="text-[16px] md:text-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[22px] font-normal text-[#B0B0B0] line-through">
                    {b.price2}
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 flex flex-col gap-5 justify-center items-center md:text-[10px] lg:text-[20px] font-semibold text-white bg-[#3A3A3A]/50 opacity-0 group-hover:opacity-100 ">
                <div className="lg:px-15 md:px-12 py-4 bg-white">
                  <button className="text-[#B88E2F] cursor-pointer ">
                    Add to Cart
                  </button>
                </div>
                <div className="flex items-center lg:gap-5 md:gap-3">
                  <div className="flex lg:gap-2 md:gap-1 items-center">
                    <AiOutlineShareAlt />
                    <h1>Share</h1>
                  </div>

                  <div className="flex lg:gap-2 md:gap-1 items-center">
                    <TbArrowsShuffle />
                    <h1>Compare</h1>
                  </div>

                  <div className="flex lg:gap-2 md:gap-1 items-center">
                    <AiOutlineHeart />
                    <h1>Like</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}

          
        </div>
        <div className="flex  xl:mt-18  sm:mt-7 items-center justify-center font-poppins font-normal">
             <div className="flex space-x-2">
                  {Array.from({ length: endPage - startPage + 1 }, (_, i) => {
                    const page = startPage + i;
                    const isActive = currentPage === page;
                    return (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`xl:px-6 xl:m-4 xl:py-4 sm:px-4 sm:m-2 sm:py-2 xl:rounded-lg sm:rounded-md cursor-pointer transition-all duration-300 
                          ${isActive 
                            ? "bg-[#B88E2F] text-white scale-110" 
                            : "bg-[#faf3ea] hover:bg-gray-100"
                          }`}
                      >
                        {page}
                      </button>
                    );
                  })}
                </div>
                {currentPage < totalPages && (
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="xl:ml-4 xl:px-5 xl:py-4 sm:ml-3 sm:px-4 sm:py-2 bg-[#faf3ea] rounded-lg sm:rounded-md cursor-pointer transition hover:bg-gray-200"
                  >
                    Next
                  </button>
                )}
          </div>
      </div>
    </div>
  );
};

export default ShopSecSecond;
