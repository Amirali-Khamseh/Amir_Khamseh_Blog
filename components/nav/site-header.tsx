import Link from "next/link";
import { ModeToggle } from "@/components/nav/theme-toggle";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Links } from "./links";

function SiteHeader() {
  return (
    <header className="sticky  top-0 z-50 w-full border-b bg-background">
      <div className="flex h-16 items-center px-6  sm:justify-between gap-5">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="p-2 sm:hidden">
            <HamburgerMenuIcon />
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <SheetHeader className="pt-4">
              <div className="text-xl font-bold">Navigation</div>
            </SheetHeader>
            <nav className="mt-6 flex flex-col space-y-6 text-lg pl-2">
              <Link href={Links.main} className="hover:text-muted-foreground">
                <SheetClose>Home</SheetClose>
              </Link>
              <Link href="/blog" className="hover:text-muted-foreground">
                <SheetClose>Blog</SheetClose>
              </Link>
              <Link
                href={Links.contacts}
                className="hover:text-muted-foreground"
              >
                <SheetClose>Contact</SheetClose>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Site Logo */}
        <Link href={Links.main} className="text-2xl font-bold">
          Amir&apos;s Blog
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-6 text-sm">
          <Link href="/blog" className="hover:text-muted-foreground">
            Blog
          </Link>
          <Link href={Links.contacts} className="hover:text-muted-foreground">
            Contact
          </Link>
        </nav>

        {/* Right Section */}
        <div className="flex flex-1 justify-end items-center gap-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
