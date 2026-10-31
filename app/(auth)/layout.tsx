import { requireUnAuth } from "@/features/auth/actions";
import React from "react";

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default async function AuthLayout({ children }: AuthLayoutProps) {
  await requireUnAuth();

  return (
    <div className="relative flex min-h-svh w-full items-center justify-center p-4 md:p-8">
      {children}
    </div>
  );
}
