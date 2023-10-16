import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold mb-6">
            Hello, I'm Alexander
          </h1>
          <p className="text-[#cfcfcf] text -lg lg:text-xl mb-6">
            sdfsdafsadfsdafsdafsadfsadfasdfasdffffff
          </p>
          <div>
            <div className="p-2 bg-gradient-to-tr from-amber-500 to bg-fuchsia-700 rounded-full">
              <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black font-semibold">
                Download CV
              </button>
            </div>
            <div className="p-2 bg-gradient-to-tr from-amber-500 to bg-fuchsia-700 rounded-full">
              <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black font-semibold">
                Contact Me
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="w-[250] h-[250] lg:w-[500] lg:h[500] flex transform absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <div className="p-2 bg-gradient-to-tr from-amber-500 to bg-fuchsia-700 rounded-full">
              <div className="p-2 bg-[#191919] rounded-full">
                <Image
                  src="/Images/pfp.jpeg"
                  width={500}
                  height={500}
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
