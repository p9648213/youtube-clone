"use client";

import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

export const AuthButton = () => {
  // TODO: Add different auth states
  return (
    <>
      <SignedIn>
        <UserButton />
        {/*//TODO Add menu items for Studio and User Profile */}
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant="outline"
            className="shadow-none px-4 py-2 border-blue-500/2 rounded-full font-medium text-blue-600 hover:text-blue-500 text-sm"
          >
            <UserCircleIcon />
            Sign in
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};
