import type { FormEventHandler } from 'react';

export type AuthMode = 'login' | 'register';

export type AuthCopy = {
  title: string;
  description: string;
  submit: string;
  prompt: string;
  linkLabel: string;
  linkHref: string;
};

export type Testimonial = {
  quote: string;
  initials: string;
  avatar: string;
  name: string;
  role: string;
};

export type AuthFormController = {
  showPassword: boolean;
  isPending: boolean;
  submitted: boolean;
  errorMessage: string | null;
  successMessage: string | null;
  onSubmit: FormEventHandler<HTMLFormElement>;
  onTogglePassword: () => void;
};
