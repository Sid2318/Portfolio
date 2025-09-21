"use client";

import LightRays from "@/components/LightRay-bg";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Light Rays Background */}
      <div className="absolute inset-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#FFFFFF"
          raysSpeed={0}
          lightSpread={1.2}
          rayLength={2.3}
          followMouse={true}
          mouseInfluence={0.3}
          noiseAmount={0.0}
          distortion={0.0}
          className="custom-rays"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 xl:px-18">
        {/* Top Labels */}
        <div className="flex flex-row justify-between items-center mb-0">
          <div className="text-lg font-light tracking-wider">SOFTWARE</div>
          <div className="text-lg font-light tracking-wider">
            SCROLL TO EXPLORE
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-10">
          {/* Left Side - Main Text */}
          <div className="flex-1 w-full lg:w-auto">
            {/* Large DEVELOPER Text */}
            <h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] 2xl:text-[15rem] font-black leading-none tracking-tight font-mono mb-4">
              <b> DEVELOPER</b>
            </h1>

            {/* Location */}
            {/* <div className="text-base sm:text-lg font-light tracking-wide mb-8 md:mb-9">
              Based in Madhya Pradesh, India
            </div> */}

            <div className="flex w-full lg:w-auto">

              {/* Description */}
              <div className=" lg:max-w-5xl">
                <p className="text-3xl sm:text-2xl lg:text-4xl font-light leading-relaxed text-white">
                 <span className="text-gray-500"> Bringing together strategy, creativity and technology</span> to build
                  digital products, websites, and apps that make sense to
                  businesses and people.
                </p>
              </div>

              {/* Right Side - Video */}
              <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-end mt-8 lg:mt-0 mx-3">
                <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl lg:w-96 xl:w-[450px] h-48 sm:h-56 lg:h-64 xl:h-72 rounded-lg overflow-hidden">
                  <video
                    className="w-full h-full object-cover rounded-lg"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/images/video-1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
