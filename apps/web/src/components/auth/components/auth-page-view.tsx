import { Logo } from '@/components/brand/logo';

import { AuthFormCard } from './auth-form-card';
import { AuthHeroPanel } from './auth-hero-panel';
import type {
  AuthCopy,
  AuthFormController,
  AuthMode,
  Testimonial,
} from '../auth.types';

type AuthPageViewProps = {
  mode: AuthMode;
  copy: AuthCopy;
  typedHeadline: string;
  testimonial: Testimonial;
  showSocialAuth: boolean;
  form: AuthFormController;
};

export function AuthPageView({
  mode,
  copy,
  typedHeadline,
  testimonial,
  showSocialAuth,
  form,
}: AuthPageViewProps) {
  return (
    <main className="grid min-h-svh w-full overflow-x-hidden bg-background lg:grid-cols-[minmax(0,0.92fr)_minmax(520px,1fr)]">
      <AuthHeroPanel typedHeadline={typedHeadline} testimonial={testimonial} />

      <section className="flex min-h-svh items-center justify-center px-5 py-8 sm:px-8 sm:py-10">
        <div className="w-full max-w-md space-y-6 sm:space-y-8">
          <div className="flex items-center justify-center lg:hidden">
            <Logo showName={false} />
          </div>

          <AuthFormCard
            mode={mode}
            copy={copy}
            showSocialAuth={showSocialAuth}
            form={form}
          />
        </div>
      </section>
    </main>
  );
}
