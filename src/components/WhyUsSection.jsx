import WhyUsCard from './WhyUsCard';

const WhyUsSection = () => {
  const reasons = [
    {
      icon: 'verified',
      title: 'Verified Cleaners',
      description: 'We carefully vet and verify all cleaners to ensure top-quality services',
    },
    {
      icon: 'booking',
      title: 'Easy Booking',
      description: 'Book your cleaning service in just a few clicks!',
    },
    {
      icon: 'schedule',
      title: 'Custom Schedules',
      description: 'Flexible scheduling to fit your needs.',
    },
    {
      icon: 'payment',
      title: '100% Secured Payments',
      description: 'Your security is our priority!',
    },
    {
      icon: 'location',
      title: 'Montreal-Based Freelancers Only',
      description: 'Supporting local talent in Montreal.',
    },
  ];

  return (
    <section className="relative pt-16 pb-12 mt-20">
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

      {/* Greeting Duck - positioned to overlap from the section above */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-20 w-32 md:w-40 z-10">
        <img src="/images/greeting-duck.svg" alt="Greeting Duck" className="w-full h-auto" />
      </div>

      {/* Section Header */}
      <div className="bg-[#163156] py-4 mb-10 relative z-10">
        <h2 className="text-3xl font-bold text-white text-center">WHY USE QUACKWASH?</h2>
      </div>

      {/* Feature Cards Grid */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {reasons.map((reason, index) => (
            <div key={index} className="basis-full md:basis-[30%] md:max-w-[30%] flex-shrink-0">
            <WhyUsCard reason={reason} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
