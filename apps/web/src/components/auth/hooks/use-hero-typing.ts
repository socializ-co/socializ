'use client';

import { useEffect, useState } from 'react';

import { HERO_HEADLINES } from '../auth.constants';

export function useHeroTyping() {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [typedHeadline, setTypedHeadline] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const headline = HERO_HEADLINES[headlineIndex];
    const isComplete = !isDeleting && typedHeadline === headline;
    const isEmpty = isDeleting && typedHeadline.length === 0;
    const delay = isComplete ? 2200 : isEmpty ? 500 : isDeleting ? 28 : 52;

    const timeout = window.setTimeout(() => {
      if (isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isEmpty) {
        setHeadlineIndex((index) => (index + 1) % HERO_HEADLINES.length);
        setIsDeleting(false);
        return;
      }

      const nextLength = typedHeadline.length + (isDeleting ? -1 : 1);
      setTypedHeadline(headline.slice(0, nextLength));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [headlineIndex, isDeleting, typedHeadline]);

  return { typedHeadline };
}
