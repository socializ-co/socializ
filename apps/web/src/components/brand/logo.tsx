import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  showName?: boolean;
  size?: 'sm' | 'md';
};

const sizes = {
  sm: {
    container: 'h-8',
    icon: 32,
    iconClass: 'size-8',
    text: 'text-[1.5rem]',
  },
  md: {
    container: 'h-10',
    icon: 40,
    iconClass: 'size-10',
    text: 'text-[1.75rem]',
  },
} as const;

export function Logo({ className, showName = true, size = 'md' }: LogoProps) {
  const variant = sizes[size];

  return (
    <Link
      href="/"
      aria-label="Socializ home"
      className={cn(
        'inline-flex items-center gap-2',
        variant.container,
        className,
      )}
    >
      <Image
        src="/logo.svg"
        alt=""
        width={variant.icon}
        height={variant.icon}
        priority
        className={cn('shrink-0', variant.iconClass)}
      />
      {showName && (
        <span
          className={cn(
            'logo-wordmark flex h-full translate-y-px items-center leading-none',
            variant.text,
          )}
        >
          Socializ
        </span>
      )}
    </Link>
  );
}
