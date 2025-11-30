"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const slides = [
  {
    id: 1,
    image: "/home-physiotherapy-treatment-hands.jpg",
    title: "Terapia de mano",
    subtitle: "y rehabilitación neurológica",
  },
  {
    id: 2,
    image: "/mobile-physiotherapy-home-visit.jpg",
    title: "Rehabilitación",
    subtitle: "personalizada y a domicilio",
  },
  {
    id: 3,
    image: "/hand-therapy-treatment-closeup.jpg",
    title: "Especialistas",
    subtitle: "en terapia de la mano",
  },
  {
    id: 4,
    image: "/physiotherapy-equipment-portable.jpg",
    title: "Atención profesional",
    subtitle: "para tu recuperación",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden bg-gray-800">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            {/* Title */}
            <h1 className="text-4xl lg:text-6xl font-light text-center px-4 max-w-4xl">
              <span className="font-normal">{slide.title}</span>{" "}
              <span className="font-extralight">{slide.subtitle}</span>
            </h1>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={48} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={48} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
