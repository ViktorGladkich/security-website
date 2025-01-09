import { useState, useEffect, useCallback } from "react";

function useCarouselSlide(images) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isUserInteracted, setIsUserInteracted] = useState(false);

  const nextSlide = useCallback(() => {
    if (!isUserInteracted) {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }
  }, [images.length, isUserInteracted]);

  const resetUserInteraction = useCallback(() => {
    setIsUserInteracted(false);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 2000);

    return () => clearInterval(intervalId);
  }, [nextSlide]);

  useEffect(() => {
    if (isUserInteracted) {
      const timerId = setTimeout(resetUserInteraction, 4000);
      return () => clearTimeout(timerId);
    }
  }, [isUserInteracted, resetUserInteraction]);

  const handleUserInteraction = useCallback((index) => {
    setIsUserInteracted(true);
    setCurrentSlide(index);
  }, []);

  return [currentSlide, handleUserInteraction];
}

export default useCarouselSlide;
