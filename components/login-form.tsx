"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FcGoogle } from "react-icons/fc";
import { RxGithubLogo } from "react-icons/rx";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";
import { signIn } from "next-auth/react";
import { useState } from "react";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  //   function loginGithub(provider: "github") {
  //     signIn(provider, {
  //       callbackUrl: DEFAULT_LOGIN_REDIRECT,
  //     });
  //   }

  //   function loginGoogle(provider: "google") {
  //     signIn(provider, {
  //       callbackUrl: DEFAULT_LOGIN_REDIRECT,
  //     });
  //   }
  const [loading, setLoading] = useState<"github" | "google" | null>(null);
  async function handleLogin(provider: "github" | "google") {
    try {
      setLoading(provider); // set loading state
      await signIn(provider, {
        callbackUrl: DEFAULT_LOGIN_REDIRECT,
      });
    } finally {
      setLoading(null); // in case signIn doesn’t redirect
    }
  }

  return (
    <div className={cn("flex flex-col gap-6 ", className)} {...props}>
      <Card className="h-[300px] justify-center">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>
            Login with your Github or Google account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="flex flex-col gap-4">
              <Button
                variant="outline"
                disabled={loading === "github"}
                onClick={() => handleLogin("github")}
              >
                <RxGithubLogo />
                {loading === "github" ? "Logging in..." : "Login with GitHub"}
              </Button>
              <Button
                variant="outline"
                disabled={loading === "google"}
                onClick={() => handleLogin("google")}
              >
                <FcGoogle />
                {loading === "google" ? "Logging in..." : "Login with Google"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
