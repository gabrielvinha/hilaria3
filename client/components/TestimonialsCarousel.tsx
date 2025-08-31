import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface TestimonialImage {
  src: string;
  alt: string;
}

const testimonials: TestimonialImage[] = [
  {
    src: "https://hilariagama.com.br/wp-content/uploads/2025/06/Imagem-do-WhatsApp-de-2025-06-06-as-15.54.13_2317bf3f-3.png",
    alt: "Print de depoimento real no WhatsApp – Mentoria Gestão Blindada",
  },
  {
    src: "https://hilariagama.com.br/wp-content/uploads/2025/06/Imagem-do-WhatsApp-de-2025-06-09-as-15.00.07_d2fc09cf.jpg",
    alt: "Print de depoimento real no WhatsApp – Mentoria Gestão Blindada",
  },
  {
    src: "https://hilariagama.com.br/wp-content/uploads/2025/06/Imagem-do-WhatsApp-de-2025-06-09-as-15.06.11_10d0323e.jpg",
    alt: "Print de depoimento real no WhatsApp – Mentoria Gestão Blindada",
  },
];

export const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState<boolean[]>(
    new Array(testimonials.length).fill(false),
  );

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleImageLoad = (index: number) => {
    setImageLoaded((prev) => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  // Touch handling for mobile swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Carousel Container */}
      <div
        className="relative w-full h-0 pb-[125%] bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        role="region"
        aria-label="Carrossel de depoimentos"
      >
        {/* Counter Badge */}
        <div className="absolute top-4 right-4 z-20 bg-black/60 text-white text-xs font-medium px-2 py-1 rounded-full">
          {currentIndex + 1}/{testimonials.length}
        </div>

        {/* Images */}
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-300 ease-in-out flex flex-col ${
              index === currentIndex
                ? "transform translate-x-0"
                : index < currentIndex
                  ? "transform -translate-x-full"
                  : "transform translate-x-full"
            }`}
          >
            {!imageLoaded[index] && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}
            <img
              src={testimonial.src}
              alt={testimonial.alt}
              className="w-full h-full object-contain self-center"
              loading={index === 0 ? "eager" : "lazy"}
              onLoad={() => handleImageLoad(index)}
              style={{
                display:
                  imageLoaded[index] || index === currentIndex
                    ? "block"
                    : "none",
              }}
            />
          </div>
        ))}

        {/* Desktop Navigation Arrows */}
        <div className="hidden md:flex">
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-navy-dark p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Anterior"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-navy-dark p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Próximo"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? "bg-gold scale-110"
                : "bg-navy-dark/30 hover:bg-navy-dark/50"
            }`}
            aria-label={`Ir para depoimento ${index + 1} de ${testimonials.length}`}
          />
        ))}
      </div>
    </div>
  );
};
