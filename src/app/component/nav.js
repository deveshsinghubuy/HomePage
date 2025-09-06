
import Image from "next/image";
import Link from "next/link";
// eslint-disable-next-line react/display-name
const Nav =()=>{

    return(
        <div className="flex justify-center items-center lg:scale-100">
      <div className="px-7 py-6 h-auto max-w-[1350px] w-full 2xl:px-10 2xl:max-w-[2560px] 2xl:h-auto ">
        <div className=" w-full grid grid-cols-[25%_50%_25%] bg-white items-center" >
            <div className="w-full xl:pl-4 2xl:pl-7" >
                <div className="flex items-center gap-2">
                    <Image className="w-[45px] md:w-[30px] lg:w-[35px] xl:w-[45px] 2xl:w-[65px]" src="/images/logo.png" alt="image" width={50} height={32}></Image>
                    <h1 className="font-montserrat text-[34px] md:text-[18px] lg:text-[24px] xl:text-[34px] 2xl:text-[40px] font-bold">Furniro</h1>
                </div>
                
            </div>
            <div className="">
                <ul className="flex gap-18 md:gap-12 lg:gap-16 xl:gap-18 2xl:gap-24 justify-center font-poppins text-[16px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] font-medium items-center ">
                    <li><Link href="#home">Home</Link></li>
                    <li><Link href="/shop">Shop</Link></li>
                    <li><Link href="#about">About</Link></li>
                    <li><Link href="#contact">Contact</Link></li>
                </ul>
            </div>
            <div className="">
                    <ul className="flex justify-between pl-20 md:pl-12 lg:pl-16 xl:pl-20 2xl:pl-32 ">
                        
                        <li><Link href="#account"><Image  className="w-[28px] md:w-[18px] lg:w-[20px] xl:w-[28px]   2xl:w-[32px]" src="/images/account.svg" alt="image" width={28} height={28}></Image></Link></li>
                        <li><Link href="#search"><Image   className="w-[28px] md:w-[18px] lg:w-[20px]  xl:w-[28px]  2xl:w-[32px]" src="/images/search.svg" alt="image" width={28} height={28}></Image></Link></li>
                        <li><Link href="#like"><Image   className="w-[28px] md:w-[18px] lg:w-[20px]  xl:w-[28px]    2xl:w-[32px]" src="/images/like.svg" alt="image" width={28} height={28}></Image></Link></li>
                        <li><Link href="#cart"><Image   className="w-[28px] md:w-[18px] lg:w-[20px]  xl:w-[28px]    2xl:w-[32px]" src="/images/shopping.svg" alt="image" width={28} height={28}></Image></Link></li>
                    </ul>
            </div>
        </div>
      </div>
      </div>
    )
}

export default Nav;