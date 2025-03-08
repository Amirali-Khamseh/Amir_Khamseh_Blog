import type { Metadata } from "next";
import { redirect } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Amir Khamseh's blog",
    description:
      "A blog about web development and cloud computing, with a focus on JavaScript and AWS. Expect hands-on tutorials, best practices, and insights to help you build and scale modern applications.",
  };
}

export default function Home() {
  return (
    <div className="max-w-3xl z-10 w-full items-center justify-between">
      {redirect("/blog")}
    </div>
  );
}
