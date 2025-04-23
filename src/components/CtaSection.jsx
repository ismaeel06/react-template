

const CtaSection = () => {
  return (
    <section className="py-12 px-6 bg-[#0a3254] text-white relative">
      {/* <div className="absolute inset-0 bg-[url('/bubble-pattern.svg')] opacity-10 z-0"></div> */}

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col items-center text-center md-6 md:mb-0 md:mr-6 lg:items-start lg:text-left">
            <h2 className="text-3xl font-medium mb-4"><span className="block">Ready to find your</span><span className="block"> perfect cleaner?</span></h2>
            <button className="bg-[#52C970] text-[#163156] font-medium px-6 py-3 rounded-full">FIND CLEANER</button>
          </div>

          <div className="flex items-center pb-20 pt-10 md:pb-0 md:pt-0">
            <img src="/images/mopping-duck-reversed.svg" alt="" />

          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
