import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from "@/lib/utils";

const images = [
  {
    src: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=800&auto=format&fit=crop",
    alt: "Maize Field"
  },
  {
    src: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?q=80&w=800&auto=format&fit=crop",
    alt: "Fresh Vegetables"
  },
  {
    src: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=800&auto=format&fit=crop",
    alt: "Fruit Harvest"
  },
  {
    src: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=800&auto=format&fit=crop",
    alt: "Free Range Chickens"
  },
  {
    src: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=800&auto=format&fit=crop",
    alt: "Grass-fed Cattle"
  },
  {
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
    alt: "Sustainable Farm Scene"
  }
];

export function FarmCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 60 }, [
    Autoplay({ delay: 6000, stopOnInteraction: false })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <div className="relative w-full h-full group">
      <div className="overflow-hidden h-full rounded-t-[2rem] md:rounded-[2rem] md:rounded-b-none" ref={emblaRef}>
        <div className="flex h-full touch-pan-y">
          {images.map((image, index) => (
            <div className="flex-[0_0_100%] min-w-0 relative h-full" key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className="block w-full h-full object-cover"
              />
              {/* Subtle gradient overlay for better text readability if needed, but keeping it clean for now */}
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300 shadow-sm backdrop-blur-sm",
              index === selectedIndex 
                ? "bg-white w-6" 
                : "bg-white/50 hover:bg-white/80"
            )}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
