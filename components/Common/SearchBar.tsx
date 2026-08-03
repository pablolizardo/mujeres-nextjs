"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import type { PostSummary } from "../../lib/contentful";

type SearchItem = Pick<PostSummary, "slug" | "title" | "subtitle" | "heroImage">;

export default function SearchBar({ items }: { items: SearchItem[] }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const normalized = query.toLowerCase().trim();
    const filtered = items
      .filter(
        (item) =>
          item.title.toLowerCase().includes(normalized) ||
          item.subtitle.toLowerCase().includes(normalized)
      )
      .slice(0, 8);

    setResults(filtered);
    setIsOpen(true);
  }, [query, items]);

  return (
    <div ref={searchRef} className="relative w-full max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar..."
          className="font-serif text-xl w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <svg
            className="h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {results.map((result) => (
            <Link
              key={result.slug}
              href={`/mujeres/${result.slug}`}
              onClick={() => {
                setIsOpen(false);
                setQuery("");
              }}
              className="flex items-center p-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
            >
              <div className="relative w-12 h-12 mr-3 flex-shrink-0">
                <Image
                  src={result.heroImage}
                  alt={result.title}
                  fill
                  className="object-cover rounded-md"
                  sizes="48px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-serif text-sm font-medium text-gray-900 truncate">
                  {result.title}
                </h4>
                {result.subtitle && (
                  <p className="text-xs text-gray-500 line-clamp-1">
                    {result.subtitle}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}

      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4 text-center text-gray-500">
          No se encontraron resultados para &quot;{query}&quot;
        </div>
      )}
    </div>
  );
}
