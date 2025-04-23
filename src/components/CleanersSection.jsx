"use client"

import { useState, useRef, useEffect } from "react"
import CleanerCard from "./CleanerCard"

const CleanersSection = () => {
  const sliderRef = useRef(null)
  const containerRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [scrollPosition, setScrollPosition] = useState(0)

  const cleaners = [
    {
      id: 1,
      name: "Ethan Hunt",
      description: "Description Description Description",
      price: "$25",
      image: "/placeholder-avatar.svg",
    },
    {
      id: 2,
      name: "Ethan Hunt",
      description: "Description Description Description",
      price: "$25",
      image: "/placeholder-avatar.svg",
    },
    {
      id: 3,
      name: "Ethan Hunt",
      description: "Description Description Description",
      price: "$25",
      image: "placeholder-avatar.svg",
    },
    {
      id: 4,
      name: "Ethan Hunt",
      description: "Description Description Description",
      price: "$25",
      image: "placeholder-avatar.svg",
    },
    {
      id: 5,
      name: "Ethan Hunt",
      description: "Description Description Description",
      price: "$25",
      image: "placeholder-avatar.svg",
    },
    {
      id: 6,
      name: "Ethan Hunt",
      description: "Description Description Description",
      price: "$25",
      image: "placeholder-avatar.svg",
    },
    {
      id: 7,
      name: "Ethan Hunt",
      description: "Description Description Description",
      price: "$25",
      image: "placeholder-avatar.svg",
    },
    {
      id: 8,
      name: "Ethan Hunt",
      description: "Description Description Description",
      price: "$25",
      image: "placeholder-avatar.svg",
    },
  ]

  // Check if we need to show navigation arrows
  useEffect(() => {
    const checkArrows = () => {
      if (!sliderRef.current) return

      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
      setScrollPosition(scrollLeft)
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10) // 10px buffer
    }

    // Initial check
    checkArrows()

    // Add scroll event listener
    const slider = sliderRef.current
    if (slider) {
      slider.addEventListener("scroll", checkArrows)
      return () => slider.removeEventListener("scroll", checkArrows)
    }
  }, [])

  // Scroll functions
  const scrollLeft = () => {
    if (!sliderRef.current) return
    const cardWidth = sliderRef.current.querySelector("div").offsetWidth // card width
    sliderRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" })
  }

  const scrollRight = () => {
    if (!sliderRef.current) return
    const cardWidth = sliderRef.current.querySelector("div").offsetWidth // card width
    sliderRef.current.scrollBy({ left: cardWidth, behavior: "smooth" })
  }

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
            opacity-15
            transform rotate-0
          "
        />
        <img
          src="/images/background/bubbles.png"
          alt=""
          className="
            absolute top-1/3 right-5
            w-[300px]
            opacity-15
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

      <div ref={containerRef} className="container mx-auto relative z-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white drop-shadow-[0_2px_2px_rgba(22,49,86,0.8)]">BEST CLEANERS</h2>
          <a href="#" className="text-[#163156] hover:underline font-medium">
            Browse All
          </a>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md z-20"
              onClick={scrollLeft}
              aria-label="Scroll left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Card Slider Container - Fixed width to show exactly 4.5 cards */}
          <div className="max-w-[calc(100%-2rem)] mx-auto overflow-hidden relative">
            <div
              ref={sliderRef}
              className="flex overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar px-[10%] md:px-0"
              style={{
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                maskImage:       'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
              }}
            >
            {cleaners.map((cleaner) => (
              <div
                key={cleaner.id}
                className="flex-shrink-0 w-full md:w-[40%] lg:w-[22.22%] pr-4 snap-center lg:snap-start"
              >
                <CleanerCard cleaner={cleaner} />
            </div>
            ))}
          </div>
        </div>


          {/* Right Arrow */}
          {showRightArrow && (
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md z-20"
              onClick={scrollRight}
              aria-label="Scroll right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default CleanersSection
