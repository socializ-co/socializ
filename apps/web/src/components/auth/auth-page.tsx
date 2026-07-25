'use client';

import { AuthPageView } from './components/auth-page-view';
import { AUTH_COPY } from './auth.constants';
import { useAuthForm } from './hooks/use-auth-form';
import { useHeroTyping } from './hooks/use-hero-typing';
import { useRotatingTestimonial } from './hooks/use-rotating-testimonial';
import type { AuthMode } from './auth.types';
import { editionConfig } from '@/lib/edition';

export function AuthPage({ mode }: { mode: AuthMode }) {
  const { typedHeadline } = useHeroTyping();
  const testimonial = useRotatingTestimonial();
  const form = useAuthForm(mode);

  return (
    <AuthPageView
      mode={mode}
      copy={AUTH_COPY[mode]}
      typedHeadline={typedHeadline}
      testimonial={testimonial}
      showSocialAuth={!editionConfig.isCommunity}
      form={form}
    />
  );
}
