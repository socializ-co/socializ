'use client';

import { useEffect, useState } from 'react';

import { TESTIMONIALS } from '../auth.constants';

export function useRotatingTestimonial() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTestimonialIndex((index) => (index + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return TESTIMONIALS[testimonialIndex];
}
