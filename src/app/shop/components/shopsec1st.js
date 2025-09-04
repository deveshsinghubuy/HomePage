import React from 'react'
import Image from 'next/image'
const ShopSec1st = () => {
  return (
    <div className='flex justify-center h-[600px]'>
    <div className=' max-w-[2026px] w-full h-[100%] font-poppins'>
        <div  style={{backgroundImage : 'url("../shopPageimages/secBg.png")'}} className='w-full h-[70%] bg-cover  bg-no-repeat flex justify-center items-center '>
            <div className='p-4 text-center w-[9%] h-auto flex flex-col items-center'>
                <h1 className='lg:text-[52px] sm:text-[16px] font-medium'>Shop</h1>
                <div className='flex gap-3 items-center'>
                    <span className='xl:text-[18px] sm:text-[5px] font-medium'>Home</span>
                    <span><Image className='w-[100%]' src="/shopPageimages/leftArrow.png" alt='image' width={10} height={8} /></span>
                    <span className='xl:text-[18px] sm:text-[5px] font-light'>Shop</span>
                </div>
            </div>
        </div>
        <div className=' w-full flex justify-between px-20 py-10 bg-[#F9F1E7]'>
            <div className='flex items-center gap-7 justify-center '>
                <div className='flex gap-4 justify-center items-center'>
                <Image src='/shopPageimages/bottomIcon1.png' alt='image' width={30} height={30}></Image>
                <h1 className='text-[26px] font-normal'>Filter</h1>
                </div>
                <Image src='/shopPageimages/bottomIcon2.png' alt='image' width={30} height={30}></Image>
                <Image src='/shopPageimages/bottomIcon3.png' alt='image' width={30} height={30}></Image>
                <div className='bg-[#9F9F9F] w-0.5 h-full'></div>
                <h1 className='text-[22px] font-normal'>Showing 1–16 of 32 results</h1>
            </div>
            <div className='flex gap-7 text-[26px] font-normal'>
                <div className='flex items-center gap-8'>
                    <h1 >Show</h1>
                    <div className='p-4 pl-6 bg-white '>
                        <input  className='w-9 text-center text-2xl' type='number' placeholder='16'  />
                    </div>
                </div>
                <div className='flex items-center gap-8'>
                    <h1 >Short by</h1>
                    <div className='p-4 pl-6 bg-white '>
                        <input  className='w-35 text-2xl' type='text' placeholder='Defalut'  />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ShopSec1st
