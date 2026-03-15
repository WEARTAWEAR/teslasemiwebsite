export default function Home() {
  return (
    <div className="mx-auto max-w-[1120px] px-5 py-10 sm:py-14">
      {/* Masthead */}
      <section className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.2fr_0.7fr] gap-8 lg:gap-10 items-start">
        <div className="order-2 lg:order-1">
          <h1 className="font-black tracking-[-0.04em] leading-[0.86] text-[64px] sm:text-[92px] lg:text-[104px]">
            READZ
          </h1>

          <p className="mt-6 text-[15px] leading-6 text-black/70 max-w-[28ch]">
            A modern magazine
            <br />
            for curious minds.
          </p>

          <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/55 px-4 py-2.5 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
            <span className="text-[12px] tracking-[0.14em] uppercase text-black/50">
              Subscribe
            </span>
            <div className="w-px h-5 bg-black/10" />
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              placeholder="your@email.com"
              className="bg-transparent outline-none text-[13px] placeholder:text-black/35 w-[170px] sm:w-[220px]"
            />
            <button className="rounded-full border border-black/15 px-3 py-1.5 text-[12px] tracking-[0.12em] uppercase hover:bg-black hover:text-[color:var(--paper)] transition-colors">
              Join
            </button>
          </div>
        </div>

        {/* Featured story */}
        <article className="order-1 lg:order-2 rounded-2xl bg-white/55 border border-black/10 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          <div className="grid grid-cols-1 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="p-6 sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[11px] tracking-[0.22em] uppercase text-black/55">
                  Featured
                </span>
                <span className="text-[11px] tracking-[0.22em] uppercase text-black/35">
                  05 · 2026
                </span>
              </div>

              <h2 className="mt-3 font-serif text-[28px] leading-[1.05] tracking-[-0.02em]">
                The small details that make big ideas feel inevitable
              </h2>
              <p className="mt-3 text-[13px] leading-6 text-black/65">
                A short guide to layouts, rhythm, and visual hierarchy—designed for teams building
                modern products.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <a
                  href="#recent"
                  className="inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-[12px] tracking-[0.14em] uppercase text-[color:var(--paper)] hover:opacity-90 transition-opacity"
                >
                  Read
                </a>
                <a
                  href="#recent"
                  className="inline-flex items-center justify-center rounded-full border border-black/15 px-4 py-2 text-[12px] tracking-[0.14em] uppercase hover:bg-black/5 transition-colors"
                >
                  Save
                </a>
              </div>
            </div>

            <div className="min-h-[220px] sm:min-h-full bg-[linear-gradient(135deg,rgba(0,0,0,0.92),rgba(0,0,0,0.72))] relative">
              <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.12),transparent_50%)]" />
              <div className="absolute inset-0 flex items-end justify-end p-4">
                <span className="rounded-full bg-white/10 border border-white/15 px-3 py-1.5 text-[11px] tracking-[0.18em] uppercase text-white/85">
                  Cover
                </span>
              </div>
            </div>
          </div>
        </article>

        {/* Side rail */}
        <aside className="order-3 flex lg:flex-col gap-4 lg:gap-5">
          <div className="flex-1 rounded-xl border border-black/10 bg-white/40 p-5">
            <p className="text-[11px] tracking-[0.22em] uppercase text-black/50">Spotlight</p>
            <p className="mt-3 font-serif text-[18px] leading-[1.1]">
              Design systems that still feel human.
            </p>
            <p className="mt-2 text-[12px] leading-5 text-black/60">
              Patterns, tokens, and a little bit of taste.
            </p>
          </div>
          <div className="w-[120px] lg:w-auto rounded-xl border border-black/10 bg-white/40 p-5 flex items-center justify-center">
            <span className="text-[11px] tracking-[0.22em] uppercase text-black/45 text-center">
              Read list
            </span>
          </div>
        </aside>
      </section>

      {/* Recent blog */}
      <section id="recent" className="mt-14">
        <div className="flex items-end justify-between gap-6">
          <h3 className="font-serif text-[18px] tracking-[-0.01em]">Recent blog</h3>
          <a
            href="#recent"
            className="text-[11px] tracking-[0.22em] uppercase text-black/55 hover:text-black transition-colors"
          >
            View all
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "A quiet guide to good grids", tag: "Layout", img: "/thumb-grid.svg" },
            { title: "Color that feels expensive", tag: "Color", img: "/thumb-color.svg" },
            { title: "Typography for products", tag: "Type", img: "/thumb-type.svg" },
            { title: "Editorial motion, minimal UI", tag: "Motion", img: "/thumb-motion.svg" },
            { title: "Images that don’t scream", tag: "Visual", img: "/thumb-photo.svg" },
            { title: "Component libraries, curated", tag: "Systems", img: "/thumb-system.svg" },
          ].map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-black/10 bg-white/55 overflow-hidden shadow-[0_1px_0_rgba(0,0,0,0.04)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)] transition-shadow"
            >
              <div className="aspect-[16/10] bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img}
                  alt=""
                  className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-black/15 bg-black/[0.03] px-3 py-1 text-[10px] tracking-[0.18em] uppercase text-black/55">
                    {p.tag}
                  </span>
                  <span className="text-[10px] tracking-[0.18em] uppercase text-black/35">
                    3 min
                  </span>
                </div>
                <h4 className="mt-3 font-serif text-[16px] leading-[1.15] tracking-[-0.01em]">
                  {p.title}
                </h4>
                <p className="mt-2 text-[12px] leading-5 text-black/60">
                  Notes on craft, clarity, and the choices you make when no one is watching.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Editor's choice */}
      <section className="mt-16">
        <h3 className="font-serif text-[18px] tracking-[-0.01em]">Editor’s choice</h3>
        <div className="mt-6 rounded-2xl border border-black/10 bg-white/55 p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-6 items-center">
            <div>
              <p className="text-[11px] tracking-[0.22em] uppercase text-black/50">
                Long read
              </p>
              <h4 className="mt-3 font-serif text-[26px] leading-[1.05]">
                Building a magazine-feel web app without losing usability
              </h4>
              <p className="mt-3 text-[13px] leading-6 text-black/65">
                How to keep the rhythm, the whitespace, and the hierarchy—while still being fast,
                accessible, and responsive.
              </p>
              <a
                href="#recent"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-[12px] tracking-[0.14em] uppercase text-[color:var(--paper)] hover:opacity-90 transition-opacity"
              >
                Read the essay
              </a>
            </div>
            <div className="rounded-xl border border-black/10 bg-[linear-gradient(135deg,rgba(0,0,0,0.1),rgba(0,0,0,0.02))] h-[220px]" />
          </div>
        </div>
      </section>
    </div>
  );
}
