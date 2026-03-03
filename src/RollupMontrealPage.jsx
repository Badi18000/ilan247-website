import { useEffect, useState } from "react";
import { ArrowLeft, CheckCircle2, Clock3, MapPin, Menu, Phone, X } from "lucide-react";

const navLinks = [
  { href: "/#produits", label: "Nos Produits" },
  { href: "/#apropos", label: "À Propos" },
  { href: "/#temoignages", label: "Témoignages" },
  { href: "/#realisations", label: "Réalisations" },
  { href: "/roll-up-montreal", label: "Roll-up Montréal" },
  { href: "/#contact", label: "Contact" },
  { href: "/#coordonnees", label: "Coordonnées" },
];

const businessInfo = {
  name: "ilan247",
  website: "https://www.ilan247.com/",
  pageUrl: "https://www.ilan247.com/roll-up-montreal",
  phoneDisplay: "+1 (514) 000-0000",
  phoneE164: "+1-514-000-0000",
  streetAddress: "8558 Bd Pie-IX",
  city: "Montréal",
  region: "QC",
  postalCode: "H1Z 4G2",
  country: "Canada",
};

const faq = [
  {
    q: "Quel est le prix d'un roll-up à Montréal ?",
    a: "Chez ilan247, notre offre spéciale actuelle est à 100$ (prix régulier 200$). Le prix final dépend du format, de la finition et des quantités.",
  },
  {
    q: "Quel est le délai de fabrication ?",
    a: "Nous proposons un service rapide 24/7. Le délai exact dépend de la charge de production et du type de visuel à imprimer.",
  },
  {
    q: "Pouvez-vous m'aider avec la maquette ?",
    a: "Oui. Nous pouvons préparer ou ajuster votre maquette pour obtenir un résultat clair, professionnel et prêt à l'impression.",
  },
  {
    q: "Livrez-vous à Montréal et alentours ?",
    a: "Oui, nous desservons Montréal, Laval, Longueuil, la Rive-Nord et la Rive-Sud.",
  },
];

export default function RollupMontrealPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Roll-up à Montréal | ilan247 - Impression rapide 24/7";

    const setMeta = (name, content, type = "name") => {
      const selector = type === "property" ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let tag = document.head.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(type, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    const setCanonical = (href) => {
      let link = document.head.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };

    setMeta(
      "description",
      "Commandez votre roll-up à Montréal avec ilan247. Impression rapide 24/7, visuel professionnel, accompagnement maquette et livraison locale.",
    );
    setMeta(
      "keywords",
      "roll-up Montréal, roll up Montréal, impression roll-up Montréal, bannière roll-up Québec, support publicitaire roll-up",
    );
    setMeta("og:title", "Roll-up à Montréal | ilan247", "property");
    setMeta(
      "og:description",
      "Roll-up professionnel à Montréal: impression rapide, qualité premium, service 24/7.",
      "property",
    );
    setMeta("og:url", businessInfo.pageUrl, "property");
    setMeta("twitter:title", "Roll-up à Montréal | ilan247");
    setMeta(
      "twitter:description",
      "Impression roll-up à Montréal avec service rapide 24/7 et support personnalisé.",
    );
    setCanonical(businessInfo.pageUrl);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Impression Roll-up à Montréal",
    provider: {
      "@type": "ProfessionalService",
      name: businessInfo.name,
      telephone: businessInfo.phoneE164,
      address: {
        "@type": "PostalAddress",
        streetAddress: businessInfo.streetAddress,
        addressLocality: businessInfo.city,
        addressRegion: businessInfo.region,
        postalCode: businessInfo.postalCode,
        addressCountry: "CA",
      },
    },
    areaServed: ["Montréal", "Laval", "Longueuil", "Rive-Nord", "Rive-Sud"],
    serviceType: "Impression et fabrication de roll-up publicitaire",
    url: businessInfo.pageUrl,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: businessInfo.website,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Roll-up à Montréal",
        item: businessInfo.pageUrl,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="section-container flex h-16 items-center justify-between">
          <a href="/" className="font-['Rajdhani'] text-2xl font-bold tracking-wide">
            <span className="text-brand-600">ilan</span>
            <span className="text-accent-600">247</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={
                  link.href === "/roll-up-montreal" ? "font-semibold text-brand-600" : "transition hover:text-brand-600"
                }
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a href="/#contact" className="btn-primary hidden md:inline-flex">
            Demander une soumission
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100 md:hidden"
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        <div
          className={`fixed inset-0 top-16 z-40 bg-white md:hidden ${
            mobileMenuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
          } transition-all duration-300`}
          aria-hidden={!mobileMenuOpen}
        >
          <nav className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-xl px-4 py-3 text-lg font-medium transition hover:bg-slate-100 ${
                  link.href === "/roll-up-montreal" ? "text-brand-600" : "text-slate-800 hover:text-brand-600"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary mt-4 w-full justify-center"
            >
              Demander une soumission
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-slate-900 py-20">
          <img
            src="/images/atelier-ilan247.png"
            alt="Atelier ilan247 de fabrication de roll-up à Montréal"
            className="absolute inset-0 h-full w-full object-cover object-[center_42%] opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent-700/55 via-slate-900/55 to-slate-900/45" />
          <div className="section-container relative">
            <a
              href="/"
              className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> Retour à l'accueil
            </a>
            <h1 className="hero-text-shadow max-w-3xl font-['Rajdhani'] text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Roll-up à Montréal: impression rapide et visuel professionnel.
            </h1>
            <p className="hero-text-shadow mt-5 max-w-2xl text-lg text-slate-200">
              Besoin d'un roll-up pour un salon, un événement ou votre point de vente? ilan247 vous
              accompagne de la maquette à la fabrication, avec un service 24/7 à Montréal.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/#contact" className="btn-primary">
                Obtenir un devis roll-up
              </a>
              <a
                href="tel:+15140000000"
                className="inline-flex items-center justify-center rounded-xl border border-accent-500 bg-accent-600/90 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-accent-700"
              >
                Appeler maintenant
              </a>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="section-container grid gap-6 lg:grid-cols-3">
            <article className="card p-6">
              <h2 className="font-['Rajdhani'] text-2xl font-bold">Pourquoi choisir nos roll-up ?</h2>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-accent-600" />
                  Impression nette et durable
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-accent-600" />
                  Structure stable et facile à transporter
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-accent-600" />
                  Service rapide disponible 24/7
                </li>
              </ul>
            </article>

            <article className="card p-6">
              <h2 className="font-['Rajdhani'] text-2xl font-bold">Prix roll-up Montréal</h2>
              <p className="mt-4 text-slate-600">
                Offre actuelle: <span className="font-semibold line-through">200$</span>
              </p>
              <p className="text-4xl font-bold text-brand-600">100$</p>
              <p className="mt-2 text-sm text-slate-500">Maximum 2 unités par client.</p>
              <a href="/#contact" className="btn-primary mt-5">
                Réserver mon offre
              </a>
            </article>

            <article className="card p-6">
              <h2 className="font-['Rajdhani'] text-2xl font-bold">Coordonnées locales</h2>
              <div className="mt-4 space-y-3 text-slate-700">
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-5 w-5 text-accent-600" />
                  {businessInfo.streetAddress}, {businessInfo.city}, Québec {businessInfo.postalCode}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-accent-600" />
                  {businessInfo.phoneDisplay}
                </p>
                <p className="flex items-center gap-2">
                  <Clock3 className="h-5 w-5 text-accent-600" />
                  Ouvert 24/7
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="bg-white py-14 sm:py-16">
          <div className="section-container">
            <h2 className="section-title">FAQ - Roll-up à Montréal</h2>
            <div className="mt-6 space-y-4">
              {faq.map((item) => (
                <details key={item.q} className="card p-5">
                  <summary className="cursor-pointer list-none font-['Rajdhani'] text-xl font-semibold">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-slate-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
