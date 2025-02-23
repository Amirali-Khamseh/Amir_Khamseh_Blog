import ReactMarkdown from "react-markdown";
import Image from "next/image";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact Me",
    description:
      "A blog about web development and cloud computing, with a focus on JavaScript and AWS. Expect hands-on tutorials, best practices, and insights to help you build and scale modern applications.",
  };
}

export default function Blog() {
  return (
    <div className="max-w-3xl z-10 w-full items-center justify-between">
      <div className="w-full flex justify-center items-center flex-col gap-6">
        <p>Will be connected to portfolio</p>
        <div className="w-full"></div>
      </div>
    </div>
  );
}
