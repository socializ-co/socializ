import type { AuthCopy, AuthMode, Testimonial } from './auth.types';

export const HERO_HEADLINES = [
  'Bring every social conversation together.',
  'Plan content without the busywork.',
  'Let your chatbot keep conversations moving.',
] as const;

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Socializ gives our team one calm place to plan every channel.',
    initials: 'LM',
    avatar: 'https://i.pravatar.cc/80?img=47',
    name: 'Lena Martins',
    role: 'Community manager',
  },
  {
    quote:
      'Scheduling content and keeping conversations moving finally feels simple.',
    initials: 'DK',
    avatar: 'https://i.pravatar.cc/80?img=12',
    name: 'Diego Kim',
    role: 'Creator and founder',
  },
  {
    quote: 'Our chatbot handles the first reply while we focus on the people.',
    initials: 'SR',
    avatar: 'https://i.pravatar.cc/80?img=32',
    name: 'Sofia Reed',
    role: 'Support lead',
  },
];

export const AUTH_COPY: Record<AuthMode, AuthCopy> = {
  login: {
    title: 'Welcome back!',
    description: 'Sign in to continue where you left off.',
    submit: 'Sign in',
    prompt: "Don't have an account?",
    linkLabel: 'Create an account',
    linkHref: '/register',
  },
  register: {
    title: 'Join Socializ',
    description: 'Create your account and start building your community.',
    submit: 'Create account',
    prompt: 'Already have an account?',
    linkLabel: 'Sign in',
    linkHref: '/login',
  },
};
