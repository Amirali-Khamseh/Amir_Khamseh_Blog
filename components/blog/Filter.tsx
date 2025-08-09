"use client";
import { Post } from "@/types";
import { useState } from "react";
import { Button } from "../ui/button";

export default function Filter({ posts }: { posts: Post[] }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const categories = ["all", ...Array.from(new Set(posts.map((post) => post.metadata.category)))];

  const filterPosts = (category: string) => {
    if (category === "all") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter((post) => post.metadata.category === category)
      );
    }
  };

  return (
    <div>
      <div className="flex gap-4 mb-4">
        {categories.map((category) => (
          <Button key={category} onClick={() => filterPosts(category)}>
            {category}
          </Button>
        ))}
      </div>
      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <div key={post.slug} className="p-4 border rounded-md shadow">
            <a className="flex flex-col" href={`/blog/${post.slug}`}>
              <div className="text-2xl font-bold hover:underline">
                {post.metadata.title}
              </div>
              <div>{post.metadata.publishDate}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}