import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Linkedin } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full border-t bg-background h-[50px] flex items-center justify-between px-6 sm:px-8 mt-auto  fixed bottom-0 z-40">
      {/* Copyright Text */}
      <div className="text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Amir Khamseh
      </div>

      {/* Social Links */}
      <nav className="flex gap-4 items-center text-xs">
        <Link
          href="https://www.linkedin.com/in/amirali-khamseh"
          className="flex items-center gap-1 hover:text-muted-foreground transition"
          target="_blank"
        >
          <Linkedin size={18} /> Linkedin
        </Link>
        <Link
          href="https://github.com/Amirali-Khamseh"
          className="flex items-center gap-1 hover:text-muted-foreground transition"
          target="_blank"
        >
          <GitHubLogoIcon width={18} height={18} /> GitHub
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
