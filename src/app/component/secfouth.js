import Image from "next/image";

const SecFouth = () => {
  return (
    <div className="flex flex-col items-center max-h-[850px] 2xl:max-h-[2000px] bg-transparent lg:h-[600px] xl:h-[800px] 2xl:h-[1250px] border-b-1 border-neutral-300  text-center font-poppins">
      <div>
        <h4 className="text-neutral-500 font-semibold text-[18px] md:text-[12px] lg:text-[14px] xl:text-[18px] 2xl:text-[22px]">
          Share your setup with
        </h4>
        <h1 className="font-bold text-[38px] md:text-[24px] lg:text-[32px] xl:text-[38px] 2xl:text-[60px]">
          #FuniroFurniture
        </h1>
      </div>

      <div className="relative max-w-[1350px] w-full  md:w-[1350px] lg:w-[1350px] h-[400px] xl:overflow-hidden 2xl:overflow-hidden lg:h-[600px] xl:h-[700px] bg-white p-4 mt-12 md:mt-0 lg:mt-0 xl:mt-12 md:scale-56 lg:scale-76 xl:scale-100 2xl:scale-[1.5] 2xl: origin-top">
        <Image
          className="absolute -left-3 top-0"
          src="/furniture/Rectangle36.png"
          alt="image"
          width={70}
          height={70}
        />
        <Image
          className="absolute -left-3 top-[355px]"
          src="/furniture/Rectangle37.png"
          alt="image"
          width={160}
          height={20}
        />
        <Image
          className="absolute left-[75px] top-[30px]"
          src="/furniture/Rectangle38.png"
          alt="image"
          width={450}
          height={312}
        />
        <Image
          className="absolute left-[165px] top-[355px]"
          src="/furniture/Rectangle39.png"
          alt="image"
          width={360}
          height={320}
        />
        <Image
          className="absolute left-[540px] top-[110px]"
          src="/furniture/Rectangle40.png"
          alt="image"
          width={290}
          height={392}
        />
        <Image
          className="absolute right-[348px] top-[415px]"
          src="/furniture/Rectangle41.png"
          alt="image"
          width={158}
          height={242}
        />
        <Image
          className="absolute right-[225px] top-[70px]"
          src="/furniture/Rectangle42.png"
          alt="image"
          width={280}
          height={348}
        />
        <Image
          className="absolute right-[76px] top-[415px] lg:"
          src="/furniture/Rectangle43.png"
          alt="image"
          width={258}
          height={196}
        />
        <Image
          className="absolute -right-[30px] top-[10px]"
          src="/furniture/Rectangle44.png"
          alt="image"
          width={240}
          height={248}
        />
      </div>
    </div>
  );
};

export default SecFouth;
