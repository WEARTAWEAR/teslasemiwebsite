"use client";

import { useState, useMemo } from "react";
import { businesses, CATEGORIES } from "@/lib/data";
import BusinessCard from "@/components/BusinessCard";
import CategoryPill from "@/components/CategoryPill";
import type { Category } from "@/lib/data";

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return businesses.filter((b) => {
      const matchesCategory = activeCategory === "all" || b.category === activeCategory;
      const matchesQuery =
        !q ||
        b.name.toLowerCase().includes(q) ||
        b.city.toLowerCase().includes(q) ||
        b.state.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  const featured = filtered.filter((b) => b.featured);
  const rest = filtered.filter((b) => !b.featured);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-4xl mb-4">🐶</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-3">
            Find Dog Grooming & Baths
          </h1>
          <p className="text-lg text-slate-500 mb-8">
            Discover grooming salons, mobile groomers, self-service baths, and vet grooming in your city.
          </p>

          {/* Search */}
          <div className="relative max-w-lg mx-auto">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg pointer-events-none">
              🔍
            </span>
            <input
              type="text"
              placeholder="Search by name, city, or state…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-full border border-slate-200 bg-white pl-11 pr-5 py-3 text-sm text-slate-800 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-lg"
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-14 z-40 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex gap-2 overflow-x-auto scrollbar-none">
          {CATEGORIES.map((cat) => (
            <CategoryPill
              key={cat.value}
              label={cat.label}
              active={activeCategory === cat.value}
              onClick={() => setActiveCategory(cat.value)}
            />
          ))}
        </div>
      </section>

      {/* Listings */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-slate-400">
            <p className="text-5xl mb-4">🐾</p>
            <p className="text-lg font-medium">No businesses found</p>
            <p className="text-sm mt-1">Try a different search or category.</p>
          </div>
        ) : (
          <>
            {/* Featured */}
            {featured.length > 0 && (
              <div className="mb-10">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-4">
                  ⭐ Featured
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {featured.map((b) => (
                    <BusinessCard key={b.id} business={b} />
                  ))}
                </div>
              </div>
            )}

            {/* All results */}
            {rest.length > 0 && (
              <div>
                {featured.length > 0 && (
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
                    All Listings
                  </h2>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {rest.map((b) => (
                    <BusinessCard key={b.id} business={b} />
                  ))}
                </div>
              </div>
            )}

            <p className="mt-8 text-center text-sm text-slate-400">
              Showing {filtered.length} of {businesses.length} listings
            </p>
          </>
        )}
      </section>
    </>
  );
}
