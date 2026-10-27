import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldSet,
} from "@/components/ui/field";
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
    <div className="flex w-full items-center justify-center">
      <Card className="relative w-full max-w-md overflow-hidden rounded-3xl border border-border/70 bg-card/75 p-2 backdrop-blur-xl shadow-2xl shadow-black/10 dark:shadow-primary/5 transition-all duration-300 hover:border-border">
        {/* Ambient glow & top highlight line */}
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-44 w-72 -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/20 via-primary/5 to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          aria-hidden="true"
        />

        <CardHeader className="items-center text-center pb-2">
          {/* Subtle status tag */}
          <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-0.5 text-[11px] font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            AI Pull Request Reviewer
          </div>

          {/* Logo container with soft illumination */}
          <div className="relative mb-3 flex justify-center">
            <div className="relative flex items-center justify-center rounded-2xl p-1 transition-transform duration-300 hover:scale-105">
              <Image
                src="/logo2.svg"
                alt="Chai AI Code Reviewer"
                width={120}
                height={120}
                priority
                className="drop-shadow-[0_8px_20px_rgba(59,130,246,0.25)]"
              />
            </div>
          </div>

          <CardTitle className="text-2xl font-bold tracking-tight text-foreground">
            Welcome back
          </CardTitle>
          <CardDescription className="max-w-[280px] text-center text-sm text-muted-foreground leading-relaxed">
            Sign in with GitHub to review and manage your code.
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-2">
          <FieldSet className="gap-5">
            <FieldGroup className="gap-4">
              <Field className="gap-4">
                <GithubSignInForm callbackUrl={callbackUrl} />

                <FieldDescription className="text-center">
                  <span className="flex items-start gap-2.5 rounded-xl border border-border/50 bg-muted/40 p-3 text-left text-xs text-muted-foreground leading-normal">
                    <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
                    <span>
                      We only request the permissions needed to identify your
                      account. You can revoke access anytime from GitHub settings.
                    </span>
                  </span>
                </FieldDescription>

                {/* Feature highlights */}
                <div className="flex items-center justify-center gap-3 pt-1 text-[11px] text-muted-foreground/75">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3 text-primary" /> Automated reviews
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3 text-primary" /> Zero code storage
                  </span>
                </div>
              </Field>
            </FieldGroup>
          </FieldSet>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
