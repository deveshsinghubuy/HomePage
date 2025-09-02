import React from 'react'
import Image from 'next/image'

const SecSecond = () => {
  return (
    <div>
        <div className='h-auto 2xl:h-auto md:scale-85 lg:scale-85 xl:scale-100 flex flex-col items-center mx-14 md:mx-0 lg:mx-0 xl:mx-14 2xl:mx-20 my-10 md:my-0 lg:my-0 xl:my-10 2xl:my-20 font-poppins'>

          <div className='bg-white  text-center'>
            <h1 className='text-[32px] md:text-[28px] xl:text-[32px]  2xl:text-[50px] font-bold'>Browse The Range</h1>
            <h5 className='text-[20px] md:text-[16px] xl:text-[20px] 2xl:text-[28px] font-normal text-neutral-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
          </div>

          <div className='bg-white h-auto flex gap-4 text-center mt-15 md:mt-8 lg:mt-12 xl:mt-15 '>
            <div className='flex flex-col gap-8 cursor-pointer'>
                < Image className="rounded-2xl w-[381px] 2xl:w-[550px]"  src="/images/imageC1.png" alt='image' width={381} height={480}></Image>
                <h1 className='text-[24px] md:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[35px] font-semibold'>Dining</h1>
            </div>
             <div className='flex flex-col gap-8 cursor-pointer' >
                < Image  className="rounded-2xl w-[381px] 2xl:w-[550px]" src="/images/imageC2.png" alt='image' width={381} height={480}></Image>
                <h1 className='text-[24px] md:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[35px] font-semibold'>Living</h1>
            </div>
             < div className='flex flex-col gap-8 cursor-pointer'>
                < Image  className="rounded-2xl w-[381px] 2xl:w-[550px]" src="/images/imageC3.png" alt='image' width={381} height={480}></Image>
                < h1 className='text-[24px] md:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[35px] font-semibold'>Bedroom</h1>
            </div>
        
          </div>
        </div>
    </div>
  )
}

export default SecSecond
