// src/hooks/useSlideTimer.ts
import { useState, useEffect, useRef, useCallback } from 'react';
import { ANIM } from '../data/animationConstants';

export const useSlideTimer = (totalSlides: number) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress]         = useState(0);
  const [isPaused, setIsPaused]         = useState(false);
  const timerRef    = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const startRef    = useRef<number>(0);
  const elapsedRef  = useRef<number>(0);

  const startProgress = useCallback((elapsed: number = 0) => {
    const startTime = Date.now() - elapsed;
    startRef.current = startTime;

    progressRef.current = setInterval(() => {
      const el = Date.now() - startTime;
      setProgress(Math.min((el / ANIM.SLIDE_DURATION) * 100, 100));
    }, 16);

    timerRef.current = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
      setProgress(0);
      elapsedRef.current = 0;
    }, ANIM.SLIDE_DURATION - elapsed);
  }, [totalSlides]);

  const pause = useCallback(() => {
    setIsPaused(true);
    elapsedRef.current = Date.now() - startRef.current;
    if (timerRef.current) clearTimeout(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
  }, []);

  const resume = useCallback(() => {
    setIsPaused(false);
    startProgress(elapsedRef.current);
  }, [startProgress]);

  const goToSlide = useCallback((index: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    elapsedRef.current = 0;
    setCurrentSlide(index);
    setProgress(0);
    startProgress(0);
  }, [startProgress]);

  useEffect(() => {
    startProgress(0);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [startProgress]);

  return { currentSlide, progress, isPaused, pause, resume, goToSlide };
};