import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="relative bg-[#52C970] pt-16 pb-12">
      {/* Duck image that overlaps with the section above */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src="/images/broom-duck.svg" alt="Quackwash Duck" className="w-[150px] h-[150px] z-10" />
      </div>

      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="text-center md:text-left mb-8">
          <h2 className="text-4xl font-extrabold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">QUACKWASH</h2>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full py-3 px-8 shadow-md inline-flex items-center flex-wrap justify-center drop-shadow-[-5px_5px_0_#163156]">
            <a href="/contact" className="text-[#163156] font-[600] hover:underline mx-2">
              Contact
            </a>
            <span className="mx-2 text-[#163156]">•</span>
            <a href="/terms" className="text-[#163156] font-[600] hover:underline mx-2">
              Terms & Conditions
            </a>
            <span className="mx-2 text-[#163156]">•</span>
            <a href="/privacy" className="text-[#163156] font-[600] hover:underline mx-2">
              Privacy & Policy
            </a>
            <span className="mx-2 text-[#163156]">•</span>
            <a href="/become-cleaner" className="text-[#163156] font-[600] hover:underline mx-2">
              Become a Cleaner
            </a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center">
          <div className="bg-white rounded-full py-3 px-6 shadow-md inline-flex items-center drop-shadow-[-5px_5px_0_#163156]">
            <a href="#" className="mx-3 text-[#163156] hover:text-[#4CD964] transition-colors">
              <Facebook size={24} />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="mx-3 text-[#163156] hover:text-[#4CD964] transition-colors">
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="mx-3 text-[#163156] hover:text-[#4CD964] transition-colors">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="mx-3 text-[#163156] hover:text-[#4CD964] transition-colors">
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
