import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            Hello, I'm Alexander
          </h1>
          <p className="text-[#cfcfcf] text-base sm:text-lg mb-6">
            sdfsdafsadfsdafsdafsadfsadfasdfasdffffff
          </p>
          <div className="flex">
            <div className="p-2 bg-gradient-to-tr from-amber-500 to bg-fuchsia-700 rounded-full mr-4">
              <div className=" rounded-full bg-[#191919]">
                <button className=" px-6 py-3 rounded-full bg-bg-[#191919] hover:bg-slate-700 text-white font-semibold">
                  Download CV
                </button>
              </div>
            </div>
            <div className="p-2 bg-gradient-to-tr from-amber-500 to bg-fuchsia-700 rounded-full">
              <div className=" rounded-full bg-[#191919]">
                <button className="px-6 py-3 rounded-full bg-[#191919] hover:bg-slate-700 text-white font-semibold">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="w-[250] h-[250] lg:w-[400] lg:h-[400] ">
            <div className="p-2 bg-gradient-to-tr from-amber-500 to bg-fuchsia-700 rounded-full">
              <div className="p-2 bg-[#191919] rounded-full">
                <Image
                  src="/Images/pfp.jpeg"
                  width={400}
                  height={400}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
