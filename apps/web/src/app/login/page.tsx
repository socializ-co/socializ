import type { Metadata } from 'next';

import { AuthPage } from '@/components/auth/auth-page';

export const metadata: Metadata = {
  title: 'Sign in | Socializ',
  description: 'Sign in to your Socializ workspace.',
};

export default function LoginPage() {
  return <AuthPage mode="login" />;
}
