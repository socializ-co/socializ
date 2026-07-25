import Link from 'next/link';
import {
  ArrowRight,
  Code2,
  CreditCard,
  Eye,
  EyeOff,
  Globe2,
  LockKeyhole,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import type { AuthCopy, AuthFormController, AuthMode } from '../auth.types';

type AuthFormCardProps = {
  mode: AuthMode;
  copy: AuthCopy;
  showSocialAuth: boolean;
  form: AuthFormController;
};

export function AuthFormCard({
  mode,
  copy,
  showSocialAuth,
  form,
}: AuthFormCardProps) {
  return (
    <Card className="border-0 bg-transparent shadow-none ring-0">
      <CardHeader className="gap-2 px-0 sm:gap-3">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {copy.title}
          </h1>
          <p className="text-sm leading-6 text-muted-foreground">
            {copy.description}
          </p>
        </div>
      </CardHeader>

      <CardContent className="space-y-5 px-0 sm:space-y-6">
        {showSocialAuth && <SocialAuthOptions />}

        <form className="space-y-5" onSubmit={form.onSubmit}>
          {mode === 'register' && (
            <div className="space-y-2">
              <Label htmlFor="name">Full name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Alex Morgan"
                autoComplete="name"
                className="h-10"
                required
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="alex@socializ.dev"
              autoComplete="email"
              className="h-10"
              required
            />
          </div>

          <PasswordField mode={mode} form={form} />

          {mode === 'register' ? <TermsField /> : <RememberField />}

          <Button
            type="submit"
            className="h-10 w-full gap-2"
            disabled={form.isPending}
          >
            {copy.submit}
            <ArrowRight className="size-4" />
          </Button>

          {form.errorMessage && (
            <p
              className="rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-center text-xs text-destructive"
              role="alert"
            >
              {form.errorMessage}
            </p>
          )}

          {form.submitted && form.successMessage && (
            <p
              className="rounded-lg border border-primary/20 bg-primary/5 p-3 text-center text-xs text-muted-foreground"
              role="status"
            >
              {form.successMessage}
            </p>
          )}
        </form>

        <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
          <span>{copy.prompt}</span>
          <Button variant="link" className="h-auto p-0" asChild>
            <Link href={copy.linkHref}>{copy.linkLabel}</Link>
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <LockKeyhole className="size-3.5 text-primary" />
            Secure workspace
          </span>
          <span className="h-3 w-px bg-border" aria-hidden="true" />
          <span className="inline-flex items-center gap-2">
            <CreditCard className="size-3.5 text-primary" />
            No credit card required
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

function SocialAuthOptions() {
  return (
    <>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Button type="button" variant="outline" className="h-10 gap-2">
          <Code2 className="size-4" />
          GitHub
        </Button>
        <Button type="button" variant="outline" className="h-10 gap-2">
          <Globe2 className="size-4" />
          Google
        </Button>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="absolute inset-x-0 border-t" />
        <span className="relative bg-background px-3 text-xs text-muted-foreground">
          Or continue with email
        </span>
      </div>
    </>
  );
}

function PasswordField({
  mode,
  form,
}: {
  mode: AuthMode;
  form: AuthFormController;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="password">Password</Label>
        {mode === 'login' && (
          <Button type="button" variant="link" className="h-auto p-0 text-xs">
            Forgot password?
          </Button>
        )}
      </div>
      <div className="relative">
        <Input
          id="password"
          name="password"
          type={form.showPassword ? 'text' : 'password'}
          placeholder="••••••••"
          autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
          className="h-10 pr-10"
          required
        />
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          className="absolute right-1 top-1/2 -translate-y-1/2 text-muted-foreground"
          aria-label={form.showPassword ? 'Hide password' : 'Show password'}
          onClick={form.onTogglePassword}
        >
          {form.showPassword ? <EyeOff /> : <Eye />}
        </Button>
      </div>
      {mode === 'register' && (
        <p className="text-xs text-muted-foreground">
          Use at least 8 characters with a number or symbol.
        </p>
      )}
    </div>
  );
}

function TermsField() {
  return (
    <label className="flex items-start gap-2 text-xs leading-5 text-muted-foreground">
      <Checkbox id="terms" name="terms" className="mt-0.5" required />
      <span>
        I agree to the{' '}
        <Link
          href="/terms"
          className="font-medium text-foreground underline underline-offset-4"
        >
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link
          href="/privacy"
          className="font-medium text-foreground underline underline-offset-4"
        >
          Privacy Policy
        </Link>
        .
      </span>
    </label>
  );
}

function RememberField() {
  return (
    <label className="flex items-center gap-2 text-xs text-muted-foreground">
      <Checkbox id="remember" name="remember" />
      Remember me for 30 days
    </label>
  );
}
