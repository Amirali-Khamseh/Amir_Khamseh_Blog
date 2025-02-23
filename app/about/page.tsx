import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Me",
    description:
      "A blog about web development and cloud computing, with a focus on JavaScript and AWS. Expect hands-on tutorials, best practices, and insights to help you build and scale modern applications.",
  };
}

export default function About() {
  return (
    <div className="max-w-3xl z-10 w-full items-center justify-between">
      will be connected to portfolio
    </div>
  );
}
