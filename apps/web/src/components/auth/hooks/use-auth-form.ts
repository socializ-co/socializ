'use client';

import { useCallback, useState } from 'react';
import type { FormEvent } from 'react';

import { authClient } from '@/lib/auth-client';

import type { AuthMode } from '../auth.types';
import type { AuthFormController } from '../auth.types';

export function useAuthForm(mode: AuthMode): AuthFormController {
  const [showPassword, setShowPassword] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onTogglePassword = useCallback(() => {
    setShowPassword((value) => !value);
  }, []);

  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIsPending(true);
      setSubmitted(false);
      setErrorMessage(null);
      setSuccessMessage(null);

      const formData = new FormData(event.currentTarget);
      const email = String(formData.get('email') ?? '');
      const password = String(formData.get('password') ?? '');

      const result =
        mode === 'login'
          ? await authClient.signIn.email({ email, password })
          : await authClient.signUp.email({
              email,
              password,
              name: String(formData.get('name') ?? ''),
            });

      setIsPending(false);

      if (result.error) {
        setErrorMessage(
          result.error.message ?? 'Unable to complete authentication.',
        );
        return;
      }

      setSubmitted(true);
      setSuccessMessage(
        mode === 'login'
          ? 'You are signed in to Socializ.'
          : 'Your Socializ account has been created.',
      );
    },
    [mode],
  );

  return {
    showPassword,
    isPending,
    submitted,
    errorMessage,
    successMessage,
    onSubmit,
    onTogglePassword,
  };
}
