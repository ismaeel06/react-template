const CleanerCard = ({ cleaner }) => {
  const { name = 'Ethan', description, price, image } = cleaner;

  return (
    <div className="relative w-full max-w-sm">
      {/* Card with border */}
      <div className="bg-white rounded-3xl border-4 border-[#0a3254] drop-shadow-[-5px_5px_0_#163156]
 p-6 flex flex-col items-center">
        {/* Profile Image with border and accent */}
        <div className="relative mb-4">
          <div className="w-32 h-32 rounded-full border-4 border-[#0a3254] overflow-hidden">
            <img src={`/images/${image || "placeholder-avatar.svg"}`} alt={name} className="w-full h-full object-cover" />
          </div>
          {/* Orange accent on the circle */}
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-[#FFA000] rounded-full -z-10 translate-x-2 translate-y-1"></div>
        </div>

        {/* Name */}
        <h3 className="text-3xl font-bold text-[#0a6ebd] mb-2">{name}</h3>

        {/* Description */}
        <p className="text-gray-700 text-center mb-6">{description}</p>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300 mb-6"></div>

        {/* Price and Button Row */}
        <div className="w-full flex justify-between items-center">
          {/* Price */}
          <div>
            <span className="text-3xl font-bold">{price}</span>
            <p className="text-gray-700">Starting Price</p>
          </div>

          {/* View Profile Button with accent */}
          <div className="relative">
            <button className="bg-[#0a3254] text-white font-semibold py-3 px-6 rounded-full drop-shadow-[-2px_2px_0_#A45200]">View Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleanerCard;
