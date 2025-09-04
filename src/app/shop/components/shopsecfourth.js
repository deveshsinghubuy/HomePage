import React from 'react'
import Image from 'next/image'

const ShopSecFourth = () => {
  return (
    <div className="flex justify-center items-center">
        <div className='bg-[#FAF3EA] max-w-[2560px] w-full h-[270px] font-poppins flex justify-center items-center'>
            <div className='flex gap-30 '>
                <div className='flex gap-4'>
                    <Image src="/shopPageimages/trophy.svg" alt='image' width={60} height={60}></Image>
                    <div>
                        <h1 className='font-semibold text-[25px]'>High Quality</h1>
                        <h4  className='font-medium text-[20px]'>crafted from top materials</h4>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <Image src="/shopPageimages/verify.svg" alt='image' width={60} height={60}></Image>
                    <div>
                        <h1 className='font-semibold text-[25px]'>Warranty Protection</h1>
                        <h4  className='font-medium text-[20px]'>Over 2 years</h4>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <Image src="/shopPageimages/shipping.svg" alt='image' width={60} height={60}></Image>
                    <div>
                        <h1 className='font-semibold text-[25px]'>Free Shipping</h1>
                        <h4  className='font-medium text-[20px]'>Order over 150 $</h4>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <Image src="/shopPageimages/customer.svg" alt='image' width={60} height={60}></Image>
                    <div>
                        <h1 className='font-semibold text-[25px]'>24 / 7 Support</h1>
                        <h4  className='font-medium text-[20px]'>Dedicated support</h4>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ShopSecFourth
   