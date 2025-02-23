"use client";

import { Post } from "@/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  posts: Post[];
};

export default function Search({ posts }: Props) {
  const [searchPost, setSearchPost] = useState("");
  const [results, setResults] = useState<Post[]>([]);

  useEffect(() => {
    const filteredResults = searchPost.trim()
      ? posts.filter((post) =>
          post.slug.toLowerCase().includes(searchPost.toLowerCase().trim())
        )
      : [];

    setResults(filteredResults);
  }, [searchPost, posts]);

  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <label className="block text-gray-700 font-medium mb-2">
        Search Posts
      </label>
      <input
        type="text"
        placeholder="Type to search..."
        value={searchPost}
        onChange={(e) => setSearchPost(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {results.length > 0 && (
        <ul className="mt-2 bg-white shadow-md rounded-lg overflow-hidden text-slate-950">
          {results.map((post) => (
            <li key={post.slug} className="border-b last:border-none">
              <Link
                href={`/blog/${post.slug}`}
                className="block px-4 py-2 hover:bg-gray-100 text-slate-950"
              >
                {post.slug}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
