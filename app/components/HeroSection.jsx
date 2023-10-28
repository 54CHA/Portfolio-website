"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className=" mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500">
              Hello, I'm {""}
            </div>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Alexander",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "a Web Developer",
                1000,
                "a UI/UX Designer",
                1000,
                "a ML developer",
                1000,
                "a data analyst",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#cfcfcf] text-base sm:text-lg mb-6">
            sdfsdafsadfsdafsdafsadfsadfasdfasdffffffdsafasdfsadfsafdsfsdfsdfsadfasdfsdaf
            sdfsadfdsfsadf sadfsadfsadfasdf
          </p>

          <button className="  px-6 py-3 rounded-full w-full sm:w-fit  text-[#191919] font-semibold bg-gradient-to-tr from-yellow-300 to-orange-500 mr-4">
            <span className="hover:bg-orange-700">Download CV</span>
          </button>

          <button className="px-1 py-1 rounded-full w-full sm:w-fit bg-transparent bg-gradient-to-tr from-yellow-300 to-orange-500 hover:bg-slate-800 text-white font-semibold mt-3">
            <span className="block bg-[#191919] hover:bg-slate-800 rounded-full px-5 py-2">
              Contact Me
            </span>
          </button>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="w-[250] h-[250] lg:w-[400] lg:h-[400] ">
            <div className="p-2 bg-gradient-to-tr from-yellow-300 to bg-orange-500 rounded-full">
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
