"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { CATEGORIES } from "@/lib/data";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function SubmitPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto px-4 py-24 text-center">
        <p className="text-6xl mb-6">🐾</p>
        <h1 className="text-2xl font-bold text-slate-900 mb-3">Listing Submitted!</h1>
        <p className="text-slate-500 mb-8">
          Thanks for adding your business. Our team will review it and publish it shortly.
        </p>
        <Link
          href="/"
          className="rounded-full bg-amber-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-amber-600 transition-colors"
        >
          Back to Directory
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-amber-600 transition-colors">
          PawDirectory
        </Link>
        <span className="mx-2">›</span>
        <span className="text-slate-600">Submit a Listing</span>
      </nav>

      <h1 className="text-2xl font-bold text-slate-900 mb-1">Add Your Business</h1>
      <p className="text-slate-500 text-sm mb-8">
        List your dog grooming or bathing business for free. It only takes a minute.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Business Name */}
        <Field label="Business Name" required>
          <input
            type="text"
            name="name"
            placeholder="e.g. Pawfect Cuts"
            required
            className={inputClass}
          />
        </Field>

        {/* Category */}
        <Field label="Category" required>
          <select name="category" required className={inputClass}>
            <option value="">Select a category…</option>
            {CATEGORIES.filter((c) => c.value !== "all").map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </Field>

        {/* City & State */}
        <div className="grid grid-cols-2 gap-4">
          <Field label="City" required>
            <input
              type="text"
              name="city"
              placeholder="e.g. Austin"
              required
              className={inputClass}
            />
          </Field>
          <Field label="State" required>
            <input
              type="text"
              name="state"
              placeholder="e.g. TX"
              maxLength={2}
              required
              className={inputClass}
            />
          </Field>
        </div>

        {/* Address */}
        <Field label="Street Address" required>
          <input
            type="text"
            name="address"
            placeholder="e.g. 123 Main St, Austin, TX 78704"
            required
            className={inputClass}
          />
        </Field>

        {/* Phone */}
        <Field label="Phone Number" required>
          <input
            type="tel"
            name="phone"
            placeholder="e.g. (512) 555-0100"
            required
            className={inputClass}
          />
        </Field>

        {/* Website */}
        <Field label="Website (optional)">
          <input
            type="url"
            name="website"
            placeholder="https://yoursite.com"
            className={inputClass}
          />
        </Field>

        {/* Description */}
        <Field label="Description" required>
          <textarea
            name="description"
            rows={4}
            placeholder="Tell us about your business, specialties, and what makes you stand out…"
            required
            className={`${inputClass} resize-none`}
          />
        </Field>

        {/* Services */}
        <Field label="Services Offered" hint="One service per line" required>
          <textarea
            name="services"
            rows={4}
            placeholder={"Full Groom\nBath & Brush\nNail Trim"}
            required
            className={`${inputClass} resize-none`}
          />
        </Field>

        {/* Hours */}
        <fieldset>
          <legend className="text-sm font-medium text-slate-700 mb-3">
            Business Hours <span className="text-red-500">*</span>
          </legend>
          <div className="flex flex-col gap-2">
            {DAYS.map((day) => (
              <div key={day} className="flex items-center gap-3">
                <span className="w-24 text-sm text-slate-600 shrink-0">{day}</span>
                <input
                  type="text"
                  name={`hours_${day}`}
                  placeholder="e.g. 9 AM – 5 PM or Closed"
                  className={`${inputClass} flex-1`}
                />
              </div>
            ))}
          </div>
        </fieldset>

        <button
          type="submit"
          className="rounded-full bg-amber-500 py-3 text-sm font-semibold text-white hover:bg-amber-600 transition-colors shadow-sm"
        >
          Submit Listing
        </button>
      </form>
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400";

function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-slate-700">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
        {hint && <span className="ml-2 text-xs font-normal text-slate-400">{hint}</span>}
      </label>
      {children}
    </div>
  );
}
