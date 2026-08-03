"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Pagination from "./Pagination";
import type { PostSummary } from "../../lib/contentful";

const POSTS_PER_PAGE = 12;

export default function PostsGrid({ posts }: { posts: PostSummary[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const pagePosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {pagePosts.map((post) => (
          <Link
            key={post.slug}
            className="rounded-md border transition p-5 hover:scale-105 prose hover:shadow-lg"
            href={`/mujeres/${post.slug}`}
          >
            <div className="relative aspect-square w-full mb-3">
              <Image
                className="object-cover rounded"
                alt={post.title}
                src={post.heroImage}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 25vw"
              />
            </div>
            <h3 className="font-serif font-normal text-2xl">{post.title}</h3>
            {post.subtitle && (
              <h4 className="line-clamp-3">{post.subtitle}</h4>
            )}
            {post.description && (
              <p className="line-clamp-4">{post.description}</p>
            )}
          </Link>
        ))}
      </section>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
}
