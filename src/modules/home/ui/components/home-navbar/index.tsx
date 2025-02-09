import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { AuthButton } from "@/modules/auth/ui/components/auth-button";

export const HomeNavbar = () => {
  return (
    <nav className="top-0 right-0 left-0 z-50 fixed flex items-center bg-white px-2 pr-5 h-16">
      <div className="flex items-center gap-4 w-full">
        {/* Menu and Logo */}
        <div className="flex flex-shrink-0 items-center">
          <SidebarTrigger />
          <Link href="/">
            <div className="flex items-center gap-1 p-4">
              <Image src="logo.svg" alt="Logo" width={32} height={32} />
              <p className="font-semibold text-xl tracking-tight">Youtube</p>
            </div>
          </Link>
        </div>

        {/* Search bar */}
        <div className="flex flex-1 justify-center mx-auto max-w-[720px]">
          <SearchInput />
        </div>

        <div className="flex flex-shrink-0 items-center gap-4">
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};
