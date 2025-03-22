import fs from "node:fs";
import path from "node:path";
import React from "react";
import dynamic from "next/dynamic";
import type { Metadata, ResolvingMetadata } from "next";
import { format } from "date-fns";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPost(params);
  return {
    title: post.metadata.title,
    description: post.metadata.description,
  };
}

async function getPost({ slug }: { slug: string }) {
  try {
    const mdxPath = path.join("content", "blogs", `${slug}.mdx`);
    if (!fs.existsSync(mdxPath)) {
      throw new Error(`MDX file for slug ${slug} does not exist`);
    }

    const { metadata } = await import(`@/content/blogs/${slug}.mdx`);

    return {
      slug,
      metadata,
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    throw new Error(`Unable to fetch the post for slug: ${slug}`);
  }
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("content", "blogs"));
  const params = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return params;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const post = await getPost(params);
  // Dynamically import the MDX file based on the slug
  const MDXContent = dynamic(() => import(`@/content/blogs/${slug}.mdx`));

  const formattedDate = format(
    new Date(post.metadata.publishDate),
    "MMMM dd, yyyy"
  );

  return (
    <div className="w-full max-w-3xl">
      <div className="w-full flex justify-center items-center flex-col gap-6">
        <article className="prose prose-lg dark:prose-invert w-full max-w-none">
          <div className="pb-8">
            <p className="font-semibold text-lg">
              <span className="text-gray-500 pr-1">
                {post.metadata.publishDate}
              </span>{" "}
              {post.metadata.category}
            </p>
          </div>
          <div className="pb-10">
            <h1 className="text-4xl sm:text-5xl font-black capitalize leading-tight">
              {post.metadata.title}
            </h1>
          </div>
          <div className="w-full [&>*]:break-words [&>pre]:overflow-x-auto [&>pre]:whitespace-pre-wrap">
            <MDXContent />
          </div>
        </article>
      </div>
    </div>
  );
}
