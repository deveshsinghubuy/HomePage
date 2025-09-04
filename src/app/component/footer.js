import Link from "next/link"

const Footer = () => {
  return (
    <div className=' flex items-center justify-center '>
      <div className='px-18 py-14 md:py-4 md:px-0 lg:py-4 lg:px-0 xl:py-14 xl:px-18 2xl:px-32 max-w-[1350px] w-full  2xl:py-24 md:max-w-[768px] lg:max-w-[1350px]  xl:max-w-[1350px] 2xl:max-w-[2250px] 2xl:w-full md:scale-90 lg:scale-90 xl:scale-100'>
        <div className='grid grid-cols-[25%_15%_16%_30%] gap-16 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-22 pb-8 border-b-1 border-neutral-400'>
            <div>
                <h1 className='font-montserrat text-[34px] md:text-[24px] lg:text-[34px]  2xl:text-[46px] font-bold mb-12 md:mb-5 lg:mb-8 xl:mb-12'>Furniro.</h1>
                <p className='text-neutral-600 md:text-[10px] lg:text-[16px] 2xl:text-[22px]'>400 university Drive suite 200 Coral Gables,</p>
                <p className='text-neutral-600 md:text-[10px] lg:text-[16px] 2xl:text-[22px]'>FL 33134 USA</p>
            </div>
            <div className="pt-2 2xl:pt-4 px-5">
                <h1 className="mb-15 md:mb-6 lg:mb-11 xl:mb-15 text-neutral-600 md:text-[14px] lg:text-[18px] 2xl:text-[24px] 2xl:mb-15">Link</h1>
                <ul className="font-poppins text-[16px] md:text-[12px] lg:text-[16px] 2xl:text-[24px] font-medium flex flex-col gap-10 md:gap-5 lg:gap-8 xl:gap-10 2xl:gap-14">
                    <li><Link href="#home">Home</Link></li>
                    <li><Link href="#shop">Shop</Link></li>
                    <li><Link href="#about">About</Link></li>
                    <li><Link href="#contact">Contact</Link></li>
                </ul>
            </div>
            <div className="pt-2 2xl:pt-4  2xl:px-3">
                <h1 className=" mb-15 md:mb-6 lg:mb-11 xl:mb-15 text-neutral-600 md:text-[14px] lg:text-[18px] 2xl:text-[24px] 2xl:mb-15">Help</h1>
                <ul className="font-poppins text-[16px] md:text-[12px] lg:text-[16px] 2xl:text-[24px] font-medium flex flex-col gap-10 md:gap-5 lg:gap-8 xl:gap-10 2xl:gap-14 ">
                    <li><Link href="#home">Payment Options</Link></li>
                    <li><Link href="#shop">Returns</Link></li>
                    <li><Link href="#about">Privacy Policies</Link></li>
                </ul>
            </div>
            <div className="pt-2 2xl:pt-4">
                <h1 className="text-neutral-600 mb-15 md:mb-6 lg:mb-11 xl:mb-15 md:text-[14px] lg:text-[18px] 2xl:text-[24px]">NewsLetter</h1>
                <div className="flex gap-15 md:gap-4 lg:gap-4 xl:gap-15 2xl:gap-10">
                    <input className="border-b-1 outline-none md:text-[12px] lg:text-[16px] 2xl:text-[20px]" type="email" name="email" placeholder="Enter Your Email Address"></input>
                    <button className="border-b-1 cursor-pointer md:text-[12px] lg:text-[16px] 2xl:text-[20px]" >SUBSCRIBE</button>
                </div>
            </div>
        </div>
        <div className="mt-12 md:mt-3 lg:mt-7 xl:mt-12 text-neutral-600 md:text-[12px] lg:text-[16px] xl:text-[16px] 2xl:text-[24px]">2023 furniro. All rights reverved</div>
        
      </div>
    </div>
  )
}

export default Footer
