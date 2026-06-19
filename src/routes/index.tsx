import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode, type FormEvent } from "react";
import {
  Menu,
  X,
  Check,
  Star,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Palette,
  Smartphone,
  Zap,
  ShieldCheck,
  Map as MapIcon,
  RefreshCw,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SmithSites — Jackson MS Web Designer for Local Businesses" },
      { name: "description", content: "Custom websites for Jackson, MS small businesses. $150 setup, $50/month, live in 48–72 hours. Built by Jamauri Smith." },
      { property: "og:title", content: "SmithSites — Jackson MS Web Designer" },
      { property: "og:description", content: "Custom websites for local Jackson, MS businesses. $150 setup, $50/month." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <SocialProof />
        <Services />
        <Pricing />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ------------------------------ Reveal hook ------------------------------ */

function Reveal({ children, delay = 0, as: Tag = "div", className = "" }: { children: ReactNode; delay?: number; as?: any; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.transitionDelay = `${delay}ms`;
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return (
    <Tag ref={ref} className={`ss-reveal ${className}`}>
      {children}
    </Tag>
  );
}

/* --------------------------------- Nav ---------------------------------- */

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`flex items-center gap-2 font-display text-xl font-extrabold tracking-tight ${className}`}>
      <span className="relative">
        Smith<span className="text-foreground">Sites</span>
        <span className="ml-0.5 inline-block h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-[var(--gold)]" />
      </span>
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#pricing", label: "Pricing" },
    { href: "#how", label: "How It Works" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      id="top"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-[var(--gold)] px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.03] md:inline-flex"
        >
          Get Your Website
        </a>
        <button
          aria-label="Open menu"
          className="rounded-md border border-border p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[var(--gold)] px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Get Your Website
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* --------------------------------- Hero --------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div aria-hidden className="ss-hero-glow pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <span className="ss-hero-in inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles size={12} className="text-[var(--gold)]" />
            Jackson, MS Local Web Designer
          </span>
          <h1 className="ss-hero-in mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Your Business Deserves to Be{" "}
            <span className="relative inline-block text-[var(--gold)]">
              Found Online
              <span aria-hidden className="absolute -inset-x-2 -bottom-1 h-2 rounded-full bg-[var(--gold-soft)] blur-sm" />
            </span>
          </h1>
          <p className="ss-hero-in-2 mt-6 max-w-xl text-lg text-muted-foreground">
            I build clean, professional websites for local businesses in Jackson and surrounding areas. No templates. No fluff. Just results.
          </p>
          <div className="ss-hero-in-3 mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.03]"
            >
              Get a Free Demo Site
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              See How It Works
            </a>
          </div>
        </div>

        <div className="ss-hero-in-3">
          <div className="ss-glass rounded-2xl p-6 shadow-[var(--shadow-soft)] sm:p-7">
            <div className="grid grid-cols-2 gap-5">
              {[
                { k: "48hr", v: "Average turnaround" },
                { k: "$150", v: "One-time setup fee" },
                { k: "100%", v: "Custom built" },
                { k: "Local", v: "Jackson, MS based" },
              ].map((s) => (
                <div key={s.v} className="rounded-xl border border-border bg-background/40 p-4">
                  <div className="font-display text-2xl font-bold text-[var(--gold)]">{s.k}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2 rounded-xl border border-[var(--gold)]/30 bg-[var(--gold-soft)] p-3 text-center text-xs">
              <div>
                <div className="font-display text-lg font-bold text-foreground">$150</div>
                <div className="text-muted-foreground">upfront</div>
              </div>
              <div className="border-x border-[var(--gold)]/20">
                <div className="font-display text-lg font-bold text-foreground">$50</div>
                <div className="text-muted-foreground">per month</div>
              </div>
              <div>
                <div className="font-display text-lg font-bold text-foreground">∞</div>
                <div className="text-muted-foreground">updates incl.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Trust bar ------------------------------ */

function TrustBar() {
  const items = [
    "No contracts required",
    "Live in 48–72 hours",
    "Mobile-friendly design",
    "SSL security included",
    "Based in Jackson, MS",
  ];
  return (
    <section className="border-y border-border bg-secondary/30">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-5 text-xs sm:text-sm">
        {items.map((t) => (
          <div key={t} className="flex items-center gap-2 text-muted-foreground">
            <Check size={14} className="text-[var(--gold)]" />
            {t}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------- Why Local Businesses Choose Us ----------------------- */

function SocialProof() {
  const reviews = [
    {
      quote:
        "Jamauri had my shop online in two days. Folks call in asking about the lineup specials they saw on the site — never had that before.",
      name: "Marcus T.",
      biz: "Owner, Fade Lab Barbershop",
      city: "Jackson, MS",
    },
    {
      quote:
        "Our cake orders went up the first week. The site looks like something a big chain would have, but it's totally us. Worth way more than $150.",
      name: "Aaliyah B.",
      biz: "Owner, Sweet Magnolia Bakery",
      city: "Jackson, MS",
    },
    {
      quote:
        "I needed class times changed twice in a month — texted Jamauri, done same day. Best $50 I spend on my gym every month.",
      name: "Derrick W.",
      biz: "Owner, Capital City Strength",
      city: "Jackson, MS",
    },
  ];

  const faqs = [
    {
      q: "Do I own my website?",
      a: "Yes — 100%. The domain is in your name, and the design is yours. If you ever decide to leave, I'll hand over everything cleanly.",
    },
    {
      q: "What happens if I need changes later?",
      a: "Just text me. Small updates (hours, photos, prices, menu items, new specials) are included in your $50/month — no extra invoices, no waiting weeks.",
    },
    {
      q: "How fast can you actually build my site?",
      a: "Most sites go live in 48–72 hours after the call and setup payment. Larger sites with custom photography or e-commerce can take a few extra days.",
    },
    {
      q: "What if I don't like the first design?",
      a: "We revise it until it feels right. No design goes live until you're genuinely happy with it — that's the whole point of building locally.",
    },
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">Why local businesses choose us</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Real owners. Real results.</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Built side by side with Jackson business owners who needed a site that actually brings in customers.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 100}>
              <article className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold)]/40">
                <div className="flex gap-1 text-[var(--gold)]">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} size={15} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90">&ldquo;{r.quote}&rdquo;</p>
                <div className="mt-6 border-t border-border pt-4">
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.biz} · {r.city}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mx-auto mt-20 max-w-3xl">
            <h3 className="text-center font-display text-2xl font-bold">Frequently asked</h3>
            <div className="mt-8 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
              {faqs.map((f, i) => (
                <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-secondary/40"
        aria-expanded={open}
      >
        <span className="font-display text-base font-semibold">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180 text-[var(--gold)]" : ""}`}
        />
      </button>
      <div
        className="grid overflow-hidden px-5 transition-[grid-template-rows,padding] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr", paddingBottom: open ? "1.25rem" : 0 }}
      >
        <div className="min-h-0">
          <p className="text-sm leading-relaxed text-muted-foreground">{a}</p>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------- Services ------------------------------- */

function Services() {
  const items = [
    { icon: Palette, title: "Custom Design", body: "Built from scratch to match your brand, colors, and personality. No cookie-cutter templates." },
    { icon: Smartphone, title: "Mobile Friendly", body: "Looks perfect on every phone, tablet, and computer. Over 60% of customers browse on mobile." },
    { icon: Zap, title: "Fast Loading", body: "Optimized for speed so customers don't bounce. Slow sites lose business — yours won't." },
    { icon: ShieldCheck, title: "SSL Security", body: "Secure HTTPS certificate included so customers trust your site and Google ranks it higher." },
    { icon: MapIcon, title: "Google Maps", body: "Your location embedded so customers can find you instantly and get directions with one tap." },
    { icon: RefreshCw, title: "Monthly Updates", body: "Need to change hours, add photos, or update prices? Included in your $50/month — just text me." },
  ];
  return (
    <section id="services" className="border-t border-border bg-secondary/20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">Services</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Everything your site needs. Nothing it doesn't.</h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 80}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold)]/40 hover:shadow-[var(--shadow-soft)]">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--gold-soft)] text-[var(--gold)] transition-transform duration-300 group-hover:scale-110">
                  <it.icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Pricing -------------------------------- */

function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">Pricing</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Simple, honest pricing.</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">One small setup fee. One low monthly. Cancel any time.</p>
          </div>
        </Reveal>
        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          <Reveal>
            <PriceCard
              title="One-Time Setup"
              price="$150"
              caption="Paid once before we start"
              features={[
                "Custom website design",
                "Up to 5 pages",
                "Mobile responsive",
                "Contact form",
                "Google Maps integration",
                "Domain connection",
              ]}
              cta="Get Started"
            />
          </Reveal>
          <Reveal delay={120}>
            <PriceCard
              featured
              title="Monthly Plan"
              price="$50"
              caption="Per month, cancel anytime"
              features={[
                "Website stays live & hosted",
                "Unlimited small updates",
                "SSL certificate maintained",
                "Technical support",
                "Monthly performance check",
                "Direct text access to Jamauri",
              ]}
              cta="Get My Website"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PriceCard({
  title,
  price,
  caption,
  features,
  cta,
  featured = false,
}: {
  title: string;
  price: string;
  caption: string;
  features: string[];
  cta: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`relative h-full rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
        featured
          ? "border-[var(--gold)]/60 bg-card shadow-[var(--shadow-gold)]"
          : "border-border bg-card"
      }`}
    >
      {featured && (
        <span className="absolute -top-3 right-6 rounded-full bg-[var(--gold)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
          Most Popular
        </span>
      )}
      <div className="text-sm font-semibold text-muted-foreground">{title}</div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className={`font-display text-5xl font-extrabold ${featured ? "text-[var(--gold)]" : "text-foreground"}`}>{price}</span>
      </div>
      <div className="mt-1 text-xs text-muted-foreground">{caption}</div>
      <ul className="mt-6 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--gold-soft)] text-[var(--gold)]">
              <Check size={12} />
            </span>
            <span className="text-foreground/90">{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
          featured
            ? "bg-[var(--gold)] text-primary-foreground shadow-[var(--shadow-gold)]"
            : "border border-border bg-secondary/60 text-foreground hover:bg-secondary"
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

/* ------------------------------ How It Works ----------------------------- */

function HowItWorks() {
  const steps = [
    { n: 1, t: "Free Zoom Call", d: "We hop on a quick call so I can show you examples and learn about your business." },
    { n: 2, t: "You Pay $150", d: "One-time setup fee paid upfront via Stripe, Cash App, or Zelle. Then I get to work." },
    { n: 3, t: "I Build It", d: "Your custom site is built within 48–72 hours. You review it and I make any changes." },
    { n: 4, t: "You Go Live", d: "Site goes live on your domain. $50/month keeps it running and updated forever." },
  ];
  return (
    <section id="how" className="border-t border-border bg-secondary/20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">How it works</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">From call to live site in under a week.</h2>
          </div>
        </Reveal>
        <div className="relative mt-16 grid gap-8 md:grid-cols-4">
          <div aria-hidden className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent md:block" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="relative text-center md:text-left">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-[var(--gold)]/40 bg-background font-display text-lg font-bold text-[var(--gold)] shadow-[var(--shadow-gold)] md:mx-0">
                  {s.n}
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Contact -------------------------------- */

function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32" style={{ backgroundColor: "oklch(0.14 0.025 260)" }}>
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">Contact</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Let's Build Your Website</h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Fill out the form and I'll reach out within a day to set up a free Zoom call. No pressure, no sales pitch — just a real conversation about your business.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--gold-soft)] text-[var(--gold)]"><Phone size={16} /></span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
                  <div className="font-medium">(601) 000-0000</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--gold-soft)] text-[var(--gold)]"><Mail size={16} /></span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                  <div className="font-medium">jamauri@smithsites.com</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--gold-soft)] text-[var(--gold)]"><MapPin size={16} /></span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Location</div>
                  <div className="font-medium">Jackson, Mississippi</div>
                </div>
              </li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[var(--gold)]/40 bg-card p-10 text-center shadow-[var(--shadow-soft)]">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[var(--gold)] text-primary-foreground">
          <Check size={26} strokeWidth={3} />
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold">Request sent!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thanks — I'll text or email you within 24 hours to set up your free Zoom call.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-lg border border-border bg-background/60 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-[var(--gold)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/30";
  const labelCls = "mb-1.5 block text-xs font-medium text-muted-foreground";

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls}>First name</label>
          <input required className={inputCls} placeholder="Jane" />
        </div>
        <div>
          <label className={labelCls}>Last name</label>
          <input required className={inputCls} placeholder="Doe" />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls}>Business name</label>
          <input required className={inputCls} placeholder="Doe's Barbershop" />
        </div>
        <div>
          <label className={labelCls}>Phone number</label>
          <input required type="tel" className={inputCls} placeholder="(601) 555-0100" />
        </div>
        <div>
          <label className={labelCls}>Business type</label>
          <select required defaultValue="" className={inputCls}>
            <option value="" disabled>Select one…</option>
            <option>Barbershop / Salon</option>
            <option>Restaurant / Food</option>
            <option>Auto / Detailing</option>
            <option>Fitness / Gym</option>
            <option>Retail Store</option>
            <option>Cleaning Service</option>
            <option>Contractor / Handyman</option>
            <option>Other</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls}>Tell me a bit about your business</label>
          <textarea rows={4} className={inputCls} placeholder="What do you do, and what do you want your website to accomplish?" />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.02]"
      >
        Send My Request <ArrowRight size={16} />
      </button>
    </form>
  );
}

/* --------------------------------- Footer -------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center sm:px-8 md:flex-row md:justify-between md:text-left">
        <Logo />
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground">Services</a>
          <a href="#pricing" className="hover:text-foreground">Pricing</a>
          <a href="#how" className="hover:text-foreground">How It Works</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 bg-[var(--gold-soft)] px-3 py-1 text-xs font-semibold text-[var(--gold)]">
          Websites from $150
        </span>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-border px-5 pt-6 text-center text-xs text-muted-foreground sm:px-8">
        © 2025 SmithSites by Jamauri Smith · Jackson, MS
      </div>
    </footer>
  );
}
