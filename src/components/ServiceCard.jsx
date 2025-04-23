const ServiceCard = ({ service }) => {
  const { title, description, iconType } = service;
  return (
    <div className="relative w-full max-w-sm">
      {/* Card with border */}
      <div className="bg-white rounded-3xl border-4 border-[#0a3254] drop-shadow-[-5px_5px_0_#163156]
 p-6 flex flex-col items-center">
        {/* Icon */}
        <div className="mb-6">
        <img
          src={`/images/${iconType}`}
          alt={`${title} icon`}
          className="w-19 h-19 mb-6"
        />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-[#0a6ebd] mb-4">{title}</h3>

        {/* Description */}
        <p className="text-gray-700 text-center">{description}</p>
      </div>
    </div>
  )
}

export default ServiceCard;

