const WhyUsCard = ({ reason }) => {
    return (
      <div className="bg-white rounded-3xl border-4 border-[#0a3254] drop-shadow-[-5px_5px_0_#163156]
 p-6 flex flex-col items-center md:min-h-[284px] lg:min-h-[259px]">
        <div className="flex justify-center mb-4">{getReasonIcon(reason.icon)}</div>
        <h3 className="text-[#0a3254] font-bold text-lg mb-2 text-center">{reason.title}</h3>
        <p className="text-gray-600 font-normal lg:text-[20px] text-center">{reason.description}</p>
      </div>
    )
  }
  
  const getReasonIcon = (iconName) => {
    switch (iconName) {
      case "verified":
        return (
          <img src="/images/verified-cleaners.svg" alt="" />
        )
      case "booking":
        return (
          <img src="/images/easy-booking.svg" alt="" />
        )
      case "schedule":
        return (
          <img src="/images/custom-schedules.svg" alt="" />
        )
      case "payment":
        return (
          <img src="/images/secured-payments.svg" alt="" />
        )
      case "location":
        return (
          <img src="/images/montreal-freelancers.svg" alt="" /> 
        )
      default:
        return null
    }
  }
  
  export default WhyUsCard
  