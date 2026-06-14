"use client";

import { useState } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface ImageSlide {
  src: string;
  alt: string;
  // Añadimos dimensiones opcionales para cuando se abra en el modal en HD
  fullWidth?: number;
  fullHeight?: number;
}

interface MiniCarouselProps {
  images: ImageSlide[];
  onImageClick: (src: string, alt: string, width?: number, height?: number) => void;
}

export default function MiniCarousel({ images, onImageClick }: MiniCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
  });

  return (
    <div className="carousel-wrapper">
      <div ref={sliderRef} className="keen-slider">
        {images.map((image, index) => (
          <div key={index} className="keen-slider__slide carousel-slide">
            <figure 
              className="screenshot-frame fixed-aspect-frame" 
              // Al hacer clic, le pasamos las dimensiones reales (fullWidth/fullHeight) al modal
              onClick={() => onImageClick(image.src, image.alt, image.fullWidth || 1920, image.fullHeight || 1080)}
            >
              <div className="aspect-container">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}  // Medida base de optimización para el slide
                  height={450} // Medida base de optimización para el slide
                  className="carousel-image clickable-screenshot"
                  priority={index === 0}
                />
              </div>
              <figcaption>{image.alt} <span className="zoom-hint">(Click para ver pantalla completa)</span></figcaption>
            </figure>
          </div>
        ))}
      </div>
      
      {/* Indicadores (Dots) */}
      {loaded && instanceRef.current && (
        <div className="carousel-dots">
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`carousel-dot${currentSlide === idx ? " active" : ""}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}