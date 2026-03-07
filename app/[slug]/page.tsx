import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { businesses } from "@/lib/data";
import StarRating from "@/components/StarRating";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return businesses.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const business = businesses.find((b) => b.slug === slug);
  if (!business) return {};
  return {
    title: `${business.name} – PawDirectory`,
    description: business.description,
  };
}

const CATEGORY_LABELS: Record<string, string> = {
  "grooming-salon": "Grooming Salon",
  "mobile-grooming": "Mobile Grooming",
  "self-service-bath": "Self-Service Bath",
  "vet-grooming": "Vet Grooming",
};

const CATEGORY_COLORS: Record<string, string> = {
  "grooming-salon": "bg-violet-100 text-violet-700",
  "mobile-grooming": "bg-blue-100 text-blue-700",
  "self-service-bath": "bg-cyan-100 text-cyan-700",
  "vet-grooming": "bg-emerald-100 text-emerald-700",
};

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default async function BusinessPage({ params }: Props) {
  const { slug } = await params;
  const business = businesses.find((b) => b.slug === slug);
  if (!business) notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-amber-600 transition-colors">
          PawDirectory
        </Link>
        <span className="mx-2">›</span>
        <span className="text-slate-600">{business.name}</span>
      </nav>

      {/* Header banner */}
      <div className="relative rounded-2xl overflow-hidden h-64 mb-8 bg-slate-100">
        <Image
          src={business.image}
          alt={`${business.name} – dog grooming in ${business.city}`}
          fill
          sizes="(max-width: 1024px) 100vw, 960px"
          className="object-cover"
          priority
        />
      </div>

      {/* Name & meta */}
      <div className="flex flex-wrap items-start gap-3 mb-2">
        <h1 className="text-3xl font-bold text-slate-900 leading-tight">{business.name}</h1>
        {business.badge && (
          <span className="mt-1 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white">
            {business.badge}
          </span>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className={`rounded-full px-3 py-1 text-xs font-medium ${CATEGORY_COLORS[business.category]}`}>
          {CATEGORY_LABELS[business.category]}
        </span>
        <span className="text-sm text-slate-500">
          {business.city}, {business.state}
        </span>
        <StarRating rating={business.rating} reviewCount={business.reviewCount} />
      </div>

      {/* Body: two columns on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          {/* Description */}
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-3">About</h2>
            <p className="text-slate-700 leading-relaxed">{business.description}</p>
          </section>

          {/* Services */}
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-3">Services</h2>
            <ul className="flex flex-wrap gap-2">
              {business.services.map((service) => (
                <li
                  key={service}
                  className="rounded-lg border border-slate-100 bg-white px-3 py-1.5 text-sm text-slate-700 shadow-xs"
                >
                  {service}
                </li>
              ))}
            </ul>
          </section>

          {/* Hours */}
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-3">Hours</h2>
            <div className="rounded-xl border border-slate-100 overflow-hidden">
              {DAYS.map((day, i) => (
                <div
                  key={day}
                  className={`flex justify-between px-4 py-2.5 text-sm ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                >
                  <span className="font-medium text-slate-700">{day}</span>
                  <span
                    className={
                      business.hours[day] === "Closed"
                        ? "text-slate-400"
                        : "text-slate-600"
                    }
                  >
                    {business.hours[day] ?? "—"}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right column: contact card */}
        <aside className="flex flex-col gap-4">
          <div className="rounded-2xl border border-slate-100 bg-white shadow-sm p-5 flex flex-col gap-4">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Contact</h2>

            <div className="flex items-start gap-3 text-sm text-slate-700">
              <span className="text-lg">📍</span>
              <span>{business.address}</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-700">
              <span className="text-lg">📞</span>
              <a href={`tel:${business.phone.replace(/\D/g, "")}`} className="hover:text-amber-600 transition-colors">
                {business.phone}
              </a>
            </div>

            {business.website && (
              <div className="flex items-center gap-3 text-sm">
                <span className="text-lg">🌐</span>
                <a
                  href={business.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:underline truncate"
                >
                  Visit Website
                </a>
              </div>
            )}

            <a
              href={`tel:${business.phone.replace(/\D/g, "")}`}
              className="mt-2 w-full rounded-full bg-amber-500 py-2.5 text-center text-sm font-semibold text-white hover:bg-amber-600 transition-colors"
            >
              Call Now
            </a>
          </div>

          <Link
            href="/"
            className="text-center text-sm text-slate-400 hover:text-amber-600 transition-colors"
          >
            ← Back to all listings
          </Link>
        </aside>
      </div>
    </div>
  );
}
