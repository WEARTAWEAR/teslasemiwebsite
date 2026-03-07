import Link from "next/link";
import Image from "next/image";
import type { Business } from "@/lib/data";
import StarRating from "./StarRating";

const CATEGORY_LABELS: Record<Business["category"], string> = {
  "grooming-salon": "Grooming Salon",
  "mobile-grooming": "Mobile Grooming",
  "self-service-bath": "Self-Service Bath",
  "vet-grooming": "Vet Grooming",
};

const CATEGORY_COLORS: Record<Business["category"], string> = {
  "grooming-salon": "bg-violet-100 text-violet-700",
  "mobile-grooming": "bg-blue-100 text-blue-700",
  "self-service-bath": "bg-cyan-100 text-cyan-700",
  "vet-grooming": "bg-emerald-100 text-emerald-700",
};

type Props = { business: Business };

export default function BusinessCard({ business }: Props) {
  return (
    <Link
      href={`/${business.slug}`}
      className="group flex flex-col rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md hover:border-amber-200 transition-all overflow-hidden"
    >
      {/* Photo */}
      <div className="relative h-44 w-full overflow-hidden bg-slate-100">
        <Image
          src={business.image}
          alt={`${business.name} – dog grooming in ${business.city}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-2 p-5 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-base font-semibold text-slate-900 leading-tight group-hover:text-amber-600 transition-colors">
            {business.name}
          </h2>
          {business.badge && (
            <span className="shrink-0 rounded-full bg-amber-500 px-2 py-0.5 text-[11px] font-semibold text-white">
              {business.badge}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${CATEGORY_COLORS[business.category]}`}>
            {CATEGORY_LABELS[business.category]}
          </span>
          <span className="text-xs text-slate-400">
            {business.city}, {business.state}
          </span>
        </div>

        <StarRating rating={business.rating} reviewCount={business.reviewCount} size="sm" />

        <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mt-1">
          {business.description}
        </p>

        <span className="mt-auto pt-3 text-sm font-medium text-amber-600 group-hover:underline">
          View details →
        </span>
      </div>
    </Link>
  );
}
