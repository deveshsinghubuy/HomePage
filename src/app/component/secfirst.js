const SecFirst = () => {
  return (
    <div className="flex justify-center items-center">
    <div
      className="max-w-[1350px] max-h-[900px] h-[650px] md:h-[350px] lg:h-screen  2xl:max-w-[2560px] 2xl:h-[1200px] relative w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/images/sec1stbg.png')" }}
    >
      {/* container */}
      <div className="bg-[#FFF3E3] w-[643px]  origin-top-right md:scale-55 lg:scale-70 xl:scale-100 2xl:w-[943px] absolute font-poppins right-14 lg:right-14 top-1/4 md:top-1/5 lg:top-1/5 xl:top-1/5 px-10  py-12 2xl:py-18 flex flex-col rounded-[10px]">
        <h4 className="text-[16px] 2xl:text-[28px] font-semibold tracking-widest">
          New Arrival
        </h4>
        <div className="pr-40 leading-tight mb-3">
          <h1 className="text-[52px] 2xl:text-[82px]  font-bold text-[#B88E2F]">
            Discover Our New Collection{" "}
          </h1>
        </div>
        <div className="pr-8 mb-10">
          <h4 className="text-[18px] 2xl:text-[28px] font-medium">
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </h4>
        </div>
        <button className="cursor-pointer text-[16px] 2xl:text-[26px] text-white font-bold w-55 p-8 py-6 bg-[#B88E2F]">
          Buy Now
        </button>
      </div>
    </div>
    </div>
  );
};

export default SecFirst;
