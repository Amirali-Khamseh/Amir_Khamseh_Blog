import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Linkedin } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className=" bottom-0 z-40 w-full border-t bg-background p-6 ">
      <div className="sm:px-8 px-4 flex flex-col md:flex-row justify-between items-center h-16 space-y-4 sm:space-y-0">
        <div className="flex gap-6 items-center">
          <div className="">
            &copy; {new Date().getFullYear()} Next Template
          </div>
        </div>
        <nav className="flex gap-4 items-center text-sm">
          <Link
            href="https://www.linkedin.com/in/amirali-khamseh"
            className="flex items-center gap-1"
            target="_blank"
          >
            <Linkedin size={20} /> Linkedin
          </Link>
          <Link
            href="https://github.com/Amirali-Khamseh"
            className="flex items-center gap-1"
            target="_blank"
          >
            <GitHubLogoIcon width={20} height={20} /> GitHub
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
