import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Logo } from '@/components/brand/logo';

import type { Testimonial } from '../auth.types';

type AuthHeroPanelProps = {
  typedHeadline: string;
  testimonial: Testimonial;
};

export function AuthHeroPanel({
  typedHeadline,
  testimonial,
}: AuthHeroPanelProps) {
  return (
    <section className="relative hidden overflow-hidden border-r bg-muted/30 p-10 lg:flex lg:flex-col lg:justify-between xl:p-14">
      <div className="absolute -right-32 -top-32 size-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 size-[28rem] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10">
        <Logo />

        <div className="mt-28 max-w-lg space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground">
              One home for your social world
            </p>
            <h2
              className="min-h-[9rem] text-4xl font-semibold tracking-tight xl:text-5xl"
              aria-live="polite"
            >
              {typedHeadline}
              <span
                className="ml-1 inline-block animate-pulse text-primary"
                aria-hidden="true"
              >
                |
              </span>
            </h2>
            <p className="max-w-md text-base leading-7 text-muted-foreground">
              Socializ connects your social networks so you can plan and
              schedule content, grow your audience, and let chatbots keep
              conversations moving.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 space-y-5">
        <blockquote
          key={testimonial.quote}
          className="max-w-md animate-in text-lg leading-8 tracking-tight fade-in duration-500"
          aria-live="polite"
        >
          “{testimonial.quote}”
        </blockquote>
        <div className="flex items-center gap-3">
          <Avatar className="size-9">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback className="bg-primary text-xs font-semibold text-primary-foreground">
              {testimonial.initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
