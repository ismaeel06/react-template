import heroBg from '/images/background/Hero-layer.png'

const HeroSection = () => {
  return (
    <section className="relative py-16 overflow-hidden
    bg-[url('/images/background/Hero-layer.png')]
    bg-no-repeat [background-size:100%_100%]">

      {/* —— multiple translucent bubble overlays —— */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        <img
          src="/images/background/bubbles.png"
          alt=""
          className="
            absolute top-8 left-12
            w-[300px]
            opacity-30
            transform rotate-0
          "
        />
        <img
          src="/images/background/bubbles.png"
          alt=""
          className="
            absolute top-1/3 right-12
            w-[400px]
            opacity-25
            transform rotate-45
          "
        />
        <img
          src="/images/background/bubbles.png"
          alt=""
          className="
            absolute bottom-16 left-1/4
            w-[500px]
            opacity-20
            transform -rotate-30
          "
        />
        <img
          src="/images/background/bubbles.png"
          alt=""
          className="
            absolute bottom-12 right-1/3
            w-[600px]
            opacity-15
            transform rotate-90
          "
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="relative min-h-[300px] md:min-h-[400px]">
          {/* Left Duck - responsive positioning */}
          <div
            className="absolute bottom-0 left-0 w-24 sm:w-28 md:w-36 lg:w-48 
                         transform translate-y-1/2 sm:translate-y-1/6 md:translate-y-0 
                         -translate-x-1/5 sm:-translate-x-1/6 md:translate-x-0 
                         z-10"
          >
            <img src="/images/mopping-duck.svg" alt="Mopping Duck" className="w-full h-auto" />
          </div>

          {/* Right Duck - responsive positioning */}
          <div
            className="absolute top-0 right-0 w-24 sm:w-28 md:w-36 lg:w-48 
                         transform -translate-y-1/2 sm:-translate-y-1/6 md:translate-y-0 
                         translate-x-1/5 sm:translate-x-1/6 md:translate-x-0 
                         z-10"
          >
            <img src="/images/glass-cleaner-duck.svg" alt="Glass Cleaner Duck" className="w-full h-auto" />
          </div>

          {/* Center Content - with responsive padding */}
          <div
            className="flex flex-col items-center justify-center text-center 
                         max-w-lg mx-auto py-10 sm:py-12 md:py-16 lg:py-20 
                         px-4 sm:px-6 md:px-0"
          >
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                          font-bold text-white leading-tight tracking-wide 
                          mb-6 sm:mb-8 
                          drop-shadow-[0_3.8px_3.8px_rgba(0,0,100,0.8)]"
            >
              <span className="block">CHOOSE YOUR CLEANER,</span>
              <span className="block">SET YOUR SCHEDULE,</span>
              <span className="block">RELAX!</span>
            </h1>

            <div
              className="flex flex-col sm:flex-row justify-center 
                           w-full max-w-md mx-auto
                           space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <input
                type="text"
                placeholder="ENTER POSTAL CODE"
                className="w-full sm:w-auto px-4 sm:px-6 py-3 
                         rounded-[15.93px] text-gray-700 
                         focus:outline-none focus:ring-2 focus:ring-[#4CAF50] 
                         shadow-md border-black border-[1px]"
              />
              <button
                className="w-full sm:w-auto bg-[#4CAF50] hover:bg-[#3d9c40] 
                              text-white font-bold px-4 sm:px-6 py-3 
                              rounded-[15.93px] drop-shadow-[-3.98px_3.98px_0_#10812C] 
                              transition-colors"
              >
                FIND CLEANER
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
