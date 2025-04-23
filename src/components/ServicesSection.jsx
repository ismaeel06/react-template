import ServiceCard from "./ServiceCard"

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Apartment Cleaning",
      description: "Description Description Description Description",
      iconType: "apartment-cleaning.svg",
    },
    {
      id: 2,
      title: "Move In/Move Out",
      description: "Description Description Description Description",
      iconType: "moveIn-moveOut.svg",
    },
    {
      id: 3,
      title: "Deep Cleaning",
      description: "Description Description Description Description",
      iconType: "deep-cleaning.svg",
    },
    {
      id: 4,
      title: "Eco Friendly Cleaning",
      description: "Description Description Description Description",
      iconType: "ecoFriendly-cleaning.svg",
    },
  ]

  return (
    <section className="py-12 px-6 relative">
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

      <div className="container mx-auto relative z-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-[#163156] drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]">
            OUR SERVICES
          </h2>
          <a href="#" className="text-[#163156] hover:underline font-medium">
            Browse All
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>

    </section>
  )
}

export default ServicesSection
