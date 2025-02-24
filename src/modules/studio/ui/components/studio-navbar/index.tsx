import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { AuthButton } from "@/modules/auth/ui/components/auth-button";
import { StudioUploadModal } from "../studio-upload-model";

export const StudioNavbar = () => {
  return (
    <nav className="top-0 right-0 left-0 z-50 fixed flex items-center bg-white shadow-md px-2 pr-5 border-b h-16">
      <div className="flex items-center gap-4 w-full">
        {/* Menu and Logo */}
        <div className="flex flex-shrink-0 items-center">
          <SidebarTrigger />
          <Link href="/studio">
            <div className="flex items-center gap-1 p-4">
              <Image src="logo.svg" alt="Logo" width={32} height={32} />
              <p className="font-semibold text-xl tracking-tight">Studio</p>
            </div>
          </Link>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        <div className="flex flex-shrink-0 items-center gap-4">
          <StudioUploadModal />
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};
