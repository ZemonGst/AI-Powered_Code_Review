import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { GithubSignInForm } from "@/features/auth/components/github-sign-in-form";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Sign In - AI Code Reviewer",
  description: "Sign in with GitHub to review and manage your code.",
};

type SignInPageProps = {
  searchParams: Promise<{ callbackUrl?: string }>;
};

const SignInPage = async ({ searchParams }: SignInPageProps) => {
  const { callbackUrl } = await searchParams;

  return (
    <div className="flex w-full max-w-sm flex-col items-center justify-center space-y-6 text-center">
      {/* Logo */}
      <div className="flex items-center justify-center">
        <Image
          src="/logo2.svg"
          alt="AI Code Reviewer"
          width={80}
          height={80}
          priority
          className="drop-shadow-md"
        />
      </div>

      {/* Header */}
      <div className="space-y-1.5 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Welcome back
        </h1>
        <p className="text-sm text-muted-foreground">
          Sign in with GitHub to review and manage your code.
        </p>
      </div>

      {/* Sign-in form */}
      <div className="w-full">
        <GithubSignInForm callbackUrl={callbackUrl} />
      </div>

      {/* Permissions notice */}
      <div className="flex items-start gap-2.5 rounded-xl border border-border/50 bg-muted/40 p-3 text-left text-xs text-muted-foreground leading-normal">
        <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
        <span>
          We only request the permissions needed to identify your account.
          You can revoke access anytime from GitHub settings.
        </span>
      </div>

      {/* Feature highlights */}
      <div className="flex items-center justify-center gap-3 text-[11px] text-muted-foreground/75">
        <span className="flex items-center gap-1">
          <CheckCircle2 className="h-3 w-3 text-primary" /> Automated reviews
        </span>
        <span>•</span>
        <span className="flex items-center gap-1">
          <CheckCircle2 className="h-3 w-3 text-primary" /> Zero code storage
        </span>
      </div>
    </div>
  );
};

export default SignInPage;
