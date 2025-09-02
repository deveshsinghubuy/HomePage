"use client"
import Image from 'next/image'
import { useState } from 'react'

const SecThird = () => {
    
    const [show,setShow]= useState(false)
    // const handlemore = ()=>{
    //         setShow(()=>!show)

    // }


  return (
    <div className='h-auto p-16 pt-4 xl:pt-4 md:px-6 md:py-0 md:mt-5 lg:px-10 xl:p-16 origin-top md:scale-95 lg:scale-95 xl:scale-100'>
      <div className='bg-white flex flex-col gap-6 items-center font-poppins'>
        <h1 className='text-[40px] md:text-[28px] lg:text-[34px] xl:text-[40px] 2xl:text-[60px] font-bold'>Our Products</h1>
        <div className='grid grid-cols-4 gap-8 md:gap-4 lg:gap-2 xl:gap-8'>
            <div>
                <Image className='w-[285px] 2xl:w-[400px]' src="/images/product1.png" alt="image" width={285} height={301}></Image>
                <div className='p-4 bg-[#F4F5F7] pb-8 md:pb-4 lg:pb-8 flex flex-col gap-1'>
                    <h1 className='text-[24px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[40px] font-semibold text-[#3A3A3A]'>Syltherine</h1>
                    <h4 className='text-[16px] md:text-[10px] lg:text-[14px] xl:text-[16px] 2xl:text-[26px] font-medium text-[#898989]'>Stylish cafe chair</h4>
                    <div className='flex justify-between items-center'>
                        <span className='text-[20px] md:text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[32px] font-semibold text-[#3A3A3A]'>Rp 2.500.000</span>
                        <span className='text-[16px] md:text-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[22px] font-normal text-[#B0B0B0] line-through'>Rp 3.500.000</span>
                    </div>
                </div>
            </div><div>
                <Image  className='w-[285px] 2xl:w-[400px]' src="/images/product2.png" alt="image" width={285} height={301}></Image>
                 <div className='p-4 bg-[#F4F5F7] pb-8 md:pb-4 lg:pb-8 flex flex-col gap-1'>
                    <h1 className='text-[24px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[40px] font-semibold text-[#3A3A3A]'>Laviosa</h1>
                    <h4 className='text-[16px] md:text-[10px] lg:text-[14px] xl:text-[16px] 2xl:text-[26px] font-medium text-[#898989]'>Stylish cafe chair</h4>
                    <div className='flex justify-between items-center'>
                        <span className='text-[20px] md:text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[32px] font-semibold text-[#3A3A3A]'>Rp 2.500.000</span>
                        <span className='text-[16px] md:text-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[22px]  font-normal text-[#B0B0B0] line-through'>Rp 3.500.000</span>
                    </div>
                </div>
            </div>
            <div>
                <Image  className='w-[285px] 2xl:w-[400px]' src="/images/product3.png" alt="image" width={285} height={301}></Image>
                 <div className='p-4 bg-[#F4F5F7] pb-8 md:pb-4 lg:pb-8 flex flex-col gap-1'>
                    <h1 className='text-[24px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[40px] font-semibold text-[#3A3A3A]'>Lolito</h1>
                    <h4 className='text-[16px]  md:text-[10px] lg:text-[14px] xl:text-[16px] 2xl:text-[26px] font-medium text-[#898989]'>Luxury big sofa</h4>
                    <div className='flex justify-between items-center'>
                        <span className='text-[20px] md:text-[12px] lg:text-[16px]  xl:text-[20px]  2xl:text-[32px] font-semibold text-[#3A3A3A]'>Rp 7.000.000</span>
                        <span className='text-[16px] md:text-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[22px]  font-normal text-[#B0B0B0] line-through'>Rp 14.000.000</span>
                    </div>
                </div> 
            </div>
            <div>
                <Image  className='w-[285px] 2xl:w-[400px]' src="/images/product4.png" alt="image" width={285} height={301}></Image>
                 <div className='p-4 bg-[#F4F5F7] pb-8 md:pb-4 lg:pb-8 flex flex-col gap-1'>
                    <h1 className='text-[24px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[40px] font-semibold text-[#3A3A3A]'>Respira</h1>
                    <h4 className='text-[16px]  md:text-[10px] lg:text-[14px] xl:text-[16px] 2xl:text-[26px] font-medium text-[#898989]'>Outdoor bar table</h4>
                    <div className='flex justify-between items-center'>
                        <span className='text-[20px] md:text-[12px] lg:text-[16px] xl:text-[20px]  2xl:text-[32px] font-semibold text-[#3A3A3A]'>Rp 500.000</span>
                        {/* <span className='text-16px] md:text-[8px] lg:text-[14px] xl:text-[16px] font-normal text-[#B0B0B0] line-through'>Rp 3.500.000</span> */}
                    </div>
                </div>
            </div>
            <div>
                <Image  className='w-[285px] 2xl:w-[400px]' src="/images/product5.png" alt="image" width={285} height={301}></Image>
                 <div className='p-4 bg-[#F4F5F7] pb-8 md:pb-4 lg:pb-8 flex flex-col gap-1'>
                    <h1 className='text-[24px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[40px] font-semibold text-[#3A3A3A]'>Grifo</h1>
                    <h4 className='text-[16px]  md:text-[10px] lg:text-[14px] xl:text-[16px] 2xl:text-[26px] font-medium text-[#898989]'>Night lamp</h4>
                    <div className='flex justify-between items-center'>
                        <span className='text-[20px] md:text-[12px] lg:text-[16px] xl:text-[20px]  2xl:text-[32px] font-semibold text-[#3A3A3A]'>Rp 1.500.000</span>
                        {/* <span className='text-16px] md:text-[8px] lg:text-[14px] xl:text-[16px] font-normal text-[#B0B0B0] line-through'>Rp 3.500.000</span> */}
                    </div>
                </div>
            </div>
            <div>
                <Image  className='w-[285px] 2xl:w-[400px]' src="/images/product6.png" alt="image" width={285} height={301}></Image>
                 <div className='p-4 bg-[#F4F5F7] pb-8 md:pb-4 lg:pb-8 flex flex-col gap-1'>
                    <h1 className='text-[24px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[40px] font-semibold text-[#3A3A3A]'>Muggo</h1>
                    <h4 className='text-[16px]  md:text-[10px] lg:text-[14px] xl:text-[16px] 2xl:text-[26px]  font-medium text-[#898989]'>StSmall mug</h4>
                    <div className='flex justify-between items-center'>
                        <span className='text-[20px] md:text-[12px] lg:text-[16px]  xl:text-[20px] 2xl:text-[32px] font-semibold text-[#3A3A3A]'>Rp 150.000</span>
                        {/* <span className='text-16px] md:text-[8px] lg:text-[14px] xl:text-[16px] font-normal text-[#B0B0B0] line-through'>Rp 3.500.000</span> */}
                    </div>
                </div>
            </div>
            <div>
                <Image  className='w-[285px] 2xl:w-[400px]' src="/images/product7.png" alt="image" width={285} height={301}></Image>
                 <div className='p-4 bg-[#F4F5F7] pb-8 md:pb-4 lg:pb-8 flex flex-col gap-1'>
                    <h1 className='text-[24px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[40px]  font-semibold text-[#3A3A3A]'>Pingky</h1>
                    <h4 className='text-[16px]  md:text-[10px] lg:text-[14px] xl:text-[16px] 2xl:text-[26px]  font-medium text-[#898989]'>Cute bed set</h4>
                    <div className='flex justify-between items-center'>
                        <span className='text-[20px] md:text-[12px] lg:text-[16px] xl:text-[20px]  2xl:text-[32px] font-semibold text-[#3A3A3A]'>Rp 7.000.000</span>
                        <span className='text-[16px] md:text-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[22px]  font-normal text-[#B0B0B0] line-through'>Rp 14.000.000</span>
                    </div>
                </div>
            </div>
            <div>
                <Image  className='w-[285px] 2xl:w-[400px]' src="/images/product8.png" alt="image" width={285} height={301}></Image>
                 <div className='p-4 bg-[#F4F5F7] pb-8 md:pb-4 lg:pb-8 flex flex-col gap-1'>
                    <h1 className='text-[24px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[40px] font-semibold text-[#3A3A3A]'>Potty</h1>
                    <h4 className='text-[16px]  md:text-[10px] lg:text-[14px] xl:text-[16px] 2xl:text-[26px]  font-medium text-[#898989]'>Minimalist flower pot</h4>
                    <div className='flex justify-between items-center'>
                        <span className='text-[20px] md:text-[12px] lg:text-[16px] xl:text-[20px]  2xl:text-[32px] font-semibold text-[#3A3A3A]'>Rp 500.000</span>
                        {/* <span className='text-16px] md:text-[8px] lg:text-[14px] xl:text-[16px] font-normal text-[#B0B0B0] line-through'>Rp 3.500.000</span> */}
                    </div>
                </div>
            </div>
        </div>
       { show &&  <div className='grid grid-cols-4 gap-8 md:gap-4 lg:gap-2 xl:gap-8'>
            <div>
                <Image className='w-[285px] 2xl:w-[400px]' src="/images/product1.png" alt="image" width={285} height={301}></Image>
                <div className='p-4 bg-[#F4F5F7] pb-8 md:pb-4 lg:pb-8 flex flex-col gap-1'>
                    <h1 className='text-[24px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[40px] font-semibold text-[#3A3A3A]'>Syltherine</h1>
                    <h4 className='text-[16px] md:text-[10px] lg:text-[14px] xl:text-[16px] 2xl:text-[26px] font-medium text-[#898989]'>Stylish cafe chair</h4>
                    <div className='flex justify-between items-center'>
                        <span className='text-[20px] md:text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[32px] font-semibold text-[#3A3A3A]'>Rp 2.500.000</span>
                        <span className='text-[16px] md:text-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[22px] font-normal text-[#B0B0B0] line-through'>Rp 3.500.000</span>
                    </div>
                </div>
            </div><div>
                <Image  className='w-[285px] 2xl:w-[400px]' src="/images/product2.png" alt="image" width={285} height={301}></Image>
                 <div className='p-4 bg-[#F4F5F7] pb-8 md:pb-4 lg:pb-8 flex flex-col gap-1'>
                    <h1 className='text-[24px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[40px] font-semibold text-[#3A3A3A]'>Laviosa</h1>
                    <h4 className='text-[16px] md:text-[10px] lg:text-[14px] xl:text-[16px] 2xl:text-[26px] font-medium text-[#898989]'>Stylish cafe chair</h4>
                    <div className='flex justify-between items-center'>
                        <span className='text-[20px] md:text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[32px] font-semibold text-[#3A3A3A]'>Rp 2.500.000</span>
                        <span className='text-[16px] md:text-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[22px]  font-normal text-[#B0B0B0] line-through'>Rp 3.500.000</span>
                    </div>
                </div>
            </div>
            <div>
                <Image  className='w-[285px] 2xl:w-[400px]' src="/images/product3.png" alt="image" width={285} height={301}></Image>
                 <div className='p-4 bg-[#F4F5F7] pb-8 md:pb-4 lg:pb-8 flex flex-col gap-1'>
                    <h1 className='text-[24px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[40px] font-semibold text-[#3A3A3A]'>Lolito</h1>
                    <h4 className='text-[16px]  md:text-[10px] lg:text-[14px] xl:text-[16px] 2xl:text-[26px] font-medium text-[#898989]'>Luxury big sofa</h4>
                    <div className='flex justify-between items-center'>
                        <span className='text-[20px] md:text-[12px] lg:text-[16px]  xl:text-[20px]  2xl:text-[32px] font-semibold text-[#3A3A3A]'>Rp 7.000.000</span>
                        <span className='text-[16px] md:text-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[22px]  font-normal text-[#B0B0B0] line-through'>Rp 14.000.000</span>
                    </div>
                </div> 
            </div>
            <div>
                <Image  className='w-[285px] 2xl:w-[400px]' src="/images/product4.png" alt="image" width={285} height={301}></Image>
                 <div className='p-4 bg-[#F4F5F7] pb-8 md:pb-4 lg:pb-8 flex flex-col gap-1'>
                    <h1 className='text-[24px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[40px] font-semibold text-[#3A3A3A]'>Respira</h1>
                    <h4 className='text-[16px]  md:text-[10px] lg:text-[14px] xl:text-[16px] 2xl:text-[26px] font-medium text-[#898989]'>Outdoor bar table</h4>
                    <div className='flex justify-between items-center'>
                        <span className='text-[20px] md:text-[12px] lg:text-[16px] xl:text-[20px]  2xl:text-[32px] font-semibold text-[#3A3A3A]'>Rp 500.000</span>
                        {/* <span className='text-16px] md:text-[8px] lg:text-[14px] xl:text-[16px] font-normal text-[#B0B0B0] line-through'>Rp 3.500.000</span> */}
                    </div>
                </div>
            </div>
            <div>
                <Image  className='w-[285px] 2xl:w-[400px]' src="/images/product5.png" alt="image" width={285} height={301}></Image>
                 <div className='p-4 bg-[#F4F5F7] pb-8 md:pb-4 lg:pb-8 flex flex-col gap-1'>
                    <h1 className='text-[24px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[40px] font-semibold text-[#3A3A3A]'>Grifo</h1>
                    <h4 className='text-[16px]  md:text-[10px] lg:text-[14px] xl:text-[16px] 2xl:text-[26px] font-medium text-[#898989]'>Night lamp</h4>
                    <div className='flex justify-between items-center'>
                        <span className='text-[20px] md:text-[12px] lg:text-[16px] xl:text-[20px]  2xl:text-[32px] font-semibold text-[#3A3A3A]'>Rp 1.500.000</span>
                        {/* <span className='text-16px] md:text-[8px] lg:text-[14px] xl:text-[16px] font-normal text-[#B0B0B0] line-through'>Rp 3.500.000</span> */}
                    </div>
                </div>
            </div>
            <div>
                <Image  className='w-[285px] 2xl:w-[400px]' src="/images/product6.png" alt="image" width={285} height={301}></Image>
                 <div className='p-4 bg-[#F4F5F7] pb-8 md:pb-4 lg:pb-8 flex flex-col gap-1'>
                    <h1 className='text-[24px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[40px] font-semibold text-[#3A3A3A]'>Muggo</h1>
                    <h4 className='text-[16px]  md:text-[10px] lg:text-[14px] xl:text-[16px] 2xl:text-[26px]  font-medium text-[#898989]'>StSmall mug</h4>
                    <div className='flex justify-between items-center'>
                        <span className='text-[20px] md:text-[12px] lg:text-[16px]  xl:text-[20px] 2xl:text-[32px] font-semibold text-[#3A3A3A]'>Rp 150.000</span>
                        {/* <span className='text-16px] md:text-[8px] lg:text-[14px] xl:text-[16px] font-normal text-[#B0B0B0] line-through'>Rp 3.500.000</span> */}
                    </div>
                </div>
            </div>
            <div>
                <Image  className='w-[285px] 2xl:w-[400px]' src="/images/product7.png" alt="image" width={285} height={301}></Image>
                 <div className='p-4 bg-[#F4F5F7] pb-8 md:pb-4 lg:pb-8 flex flex-col gap-1'>
                    <h1 className='text-[24px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[40px]  font-semibold text-[#3A3A3A]'>Pingky</h1>
                    <h4 className='text-[16px]  md:text-[10px] lg:text-[14px] xl:text-[16px] 2xl:text-[26px]  font-medium text-[#898989]'>Cute bed set</h4>
                    <div className='flex justify-between items-center'>
                        <span className='text-[20px] md:text-[12px] lg:text-[16px] xl:text-[20px]  2xl:text-[32px] font-semibold text-[#3A3A3A]'>Rp 7.000.000</span>
                        <span className='text-[16px] md:text-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[22px]  font-normal text-[#B0B0B0] line-through'>Rp 14.000.000</span>
                    </div>
                </div>
            </div>
            <div>
                <Image  className='w-[285px] 2xl:w-[400px]' src="/images/product8.png" alt="image" width={285} height={301}></Image>
                 <div className='p-4 bg-[#F4F5F7] pb-8 md:pb-4 lg:pb-8 flex flex-col gap-1'>
                    <h1 className='text-[24px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[40px] font-semibold text-[#3A3A3A]'>Potty</h1>
                    <h4 className='text-[16px]  md:text-[10px] lg:text-[14px] xl:text-[16px] 2xl:text-[26px]  font-medium text-[#898989]'>Minimalist flower pot</h4>
                    <div className='flex justify-between items-center'>
                        <span className='text-[20px] md:text-[12px] lg:text-[16px] xl:text-[20px]  2xl:text-[32px] font-semibold text-[#3A3A3A]'>Rp 500.000</span>
                        {/* <span className='text-16px] md:text-[8px] lg:text-[14px] xl:text-[16px] font-normal text-[#B0B0B0] line-through'>Rp 3.500.000</span> */}
                    </div>
                </div>
            </div>
        </div> }
            <button onClick={()=>setShow(()=>!show)} className='hover:bg-[#B88E2F] hover:text-white border-1 px-20 md:px-16 lg:px-18 xl:px-20 2xl:px-25 m-2 md:m-1 lg:m-2 2xl:m-6 cursor-pointer py-3 md:py-2 lg:py-2 xl:py-3 text-[16px] md:text-[12px] lg:text-[16px] 2xl:text-[28px] font-semibold text-[#B88E2F]'>{ show ?"Hide More" : "Show More"}</button>

      </div>
    </div>
  )
}

export default SecThird
