import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Clock3,
  ExternalLink,
  MapPin,
  Menu,
  Phone,
  Send,
  Star,
  X,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    image: "/images/realisations/realisation-4.png",
    title: "Roll-up",
    description:
      "Idéal pour salons, conférences et points de vente. Installation simple et rendu professionnel.",
  },
  {
    image: "/images/realisations/realisation-5.png",
    title: "X-Banner",
    description:
      "Support léger et économique pour mettre en valeur vos promotions et offres saisonnières.",
  },
  {
    image: "/images/services/grand-format-epilys.png",
    title: "Impression grand format",
    description:
      "Impressions nettes et durables pour affiches, panneaux et habillages commerciaux.",
  },
  {
    image: "/images/services/lettrage-boulangerie.png",
    title: "Lettrage",
    description:
      "Valorisez vos vitrines, véhicules et espaces avec un lettrage propre et lisible.",
  },
  {
    image: "/images/services/habillage-deja-vu.png",
    title: "Habillage vinyle",
    description:
      "Transformation visuelle de vitrines et surfaces pour renforcer votre présence locale.",
  },
  {
    image: "/images/services/display-epilys.png",
    title: "Cartes d'affaires & Flyers",
    description:
      "Supports imprimés essentiels pour présenter votre marque et générer de nouveaux contacts.",
  },
];

const googleReviews = [
  {
    author: "RL",
    quote:
      "Je recommande fortement le service de Ilan 247. Excellent service par des professionnels en peu de temps. Personnes à l'écoute et attentionnées pour la conception de tout ce que vous désirez. J'y retournerai sans hésiter vers vous. Merci pour tout Mr Ziyad et Mr Redouane et bonne continuation dans votre beau projet.",
    stars: 5,
    date: "il y a 5 mois",
    localGuide: false,
  },
  {
    author: "Dani",
    quote:
      "Service exceptionnel et de qualité. Ziyad, Redouane sont vraiment professionnels du début à la fin. Je recommande à 500%",
    stars: 5,
    date: "il y a 7 mois",
    localGuide: true,
  },
  {
    author: "Kd_bK",
    quote:
      "Excellent service. Machine Roland Haut de gamme. Qualité et rendu impeccable. Merci Redouane !!!",
    stars: 5,
    date: "il y a 5 mois",
    localGuide: true,
  },
  {
    author: "Achraf Alaoui Mdeghri",
    quote: "Service rapide et courtois, je recommande.",
    stars: 5,
    date: "il y a 6 mois",
    localGuide: false,
  },
  {
    author: "oswald sopi",
    quote:
      "Service parfait. Très professionnel et très bon prix avec super qualité. Je le recommande fortement.",
    stars: 5,
    date: "il y a 5 mois",
    localGuide: false,
  },
  {
    author: "Bouba Laouar",
    quote:
      "Belle expérience, personnel professionnel et produits excellent. Prix et durabilité garanties, avec des produits de qualité. Merci pour votre service.",
    stars: 5,
    date: "il y a 6 mois",
    localGuide: false,
  },
];

const googleMapsReviewsUrl =
  "https://www.google.com/maps/place/Ilan247/@45.5755879,-73.6120769,17z/data=!4m8!3m7!1s0x4cc91fca5a546993:0x1f4e9481ee19321e!8m2!3d45.5754205!4d-73.612226!9m1!1b1!16s%2Fg%2F11x0zzwvcz?entry=ttu";

const faq = [
  {
    q: "Quels types de produits offrez-vous ?",
    a: "Nous réalisons des roll-up, X-banner, impressions grand format, lettrage, habillage vinyle, cartes d'affaires et flyers.",
  },
  {
    q: "Comment fonctionne votre processus ?",
    a: "Nous analysons votre besoin, préparons une maquette, vous validez, puis nous passons à la fabrication.",
  },
  {
    q: "Quels sont vos tarifs ?",
    a: "Les tarifs dépendent du format et de la complexité. Nous proposons toujours une solution adaptée à votre budget.",
  },
  {
    q: "Travaillez-vous uniquement à Montréal ?",
    a: "Nous sommes basés à Montréal et nous desservons la région, avec des solutions adaptées selon le projet.",
  },
];

const processSteps = [
  {
    title: "Prise de besoin",
    desc: "Vous nous partagez vos objectifs, votre budget et vos délais.",
  },
  {
    title: "Maquette personnalisée",
    desc: "Nous préparons un visuel clair et aligné à votre image de marque.",
  },
  {
    title: "Validation client",
    desc: "Vous approuvez la maquette avant le lancement de la production.",
  },
  {
    title: "Fabrication & livraison",
    desc: "Nous produisons rapidement et assurons la livraison/pose selon le type de support.",
  },
];

const heroImageSources = [
  "/images/atelier-ilan247.png",
  "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=2000&q=80",
];

const realizationsImages = [
  { src: "/images/realisations/realisation-1.png", alt: "Panneaux ÉPILYS supermarché" },
  { src: "/images/realisations/realisation-2.png", alt: "Panneau publicitaire imprimé grand format" },
  { src: "/images/realisations/realisation-3.png", alt: "Lettrage Pâtisserie et Boulangerie" },
  { src: "/images/realisations/realisation-6.png", alt: "Roll-up événementiel imprimé par ilan247" },
  { src: "/images/realisations/realisation-7.png", alt: "Enseigne extérieure commerciale" },
  { src: "/images/services/enseigne-pizza.png", alt: "Enseigne lumineuse storefront réalisée par ilan247" },
  { src: "/images/services/enseigne-service-client.png", alt: "Installation enseigne suspendue en magasin" },
  { src: "/images/services/lettrage-illumine.png", alt: "Lettrage illuminé sur mesure" },
  { src: "/images/services/grand-format-epilys.png", alt: "Enseigne circulaire grand format" },
  { src: "/images/services/habillage-deja-vu.png", alt: "Installation enseigne DÉJÀ VU" },
  { src: "/images/services/display-epilys.png", alt: "Display promotionnel imprimé" },
  { src: "/images/services/lettrage-boulangerie.png", alt: "Enseigne Boulangerie illuminée" },
];

const businessInfo = {
  name: "ilan247",
  website: "https://www.ilan247.com/",
  image: "https://www.ilan247.com/images/atelier-ilan247.png",
  phoneDisplay: "+1 (514) 000-0000",
  phoneE164: "+1-514-000-0000",
  facebook: "https://www.facebook.com/",
  streetAddress: "8558 Bd Pie-IX",
  city: "Montréal",
  region: "QC",
  postalCode: "H1Z 4G2",
  country: "Canada",
  countryCode: "CA",
  serviceAreas: ["Montréal", "Laval", "Longueuil", "Rive-Nord", "Rive-Sud", "Québec"],
};

const navLinks = [
  { href: "#produits", label: "Nos Produits" },
  { href: "#apropos", label: "À Propos" },
  { href: "#temoignages", label: "Témoignages" },
  { href: "#realisations", label: "Réalisations" },
  { href: "/roll-up-montreal", label: "Roll-up Montréal" },
  { href: "#contact", label: "Contact" },
  { href: "#coordonnees", label: "Coordonnées" },
];

function App() {
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-anim", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
      });

      gsap.utils.toArray(".reveal-on-scroll").forEach((item) => {
        gsap.from(item, {
          y: 24,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        });
      });

      gsap.to(".hero-bg", {
        scale: 1.07,
        yPercent: 6,
        ease: "none",
        scrollTrigger: {
          trigger: "#accueil",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: businessInfo.name,
    image: businessInfo.image,
    url: businessInfo.website,
    telephone: businessInfo.phoneE164,
    priceRange: "$$",
    areaServed: businessInfo.serviceAreas,
    sameAs: [businessInfo.facebook],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.streetAddress,
      addressLocality: businessInfo.city,
      addressRegion: businessInfo.region,
      postalCode: businessInfo.postalCode,
      addressCountry: businessInfo.countryCode,
    },
    description:
      "Atelier de fabrication de supports publicitaires à Montréal: roll-up, X-banner, impression grand format, lettrage et habillage vinyle.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services d'impression et supports publicitaires",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roll-up" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "X-Banner" } },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Impression grand format" },
        },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lettrage" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Habillage vinyle" } },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      reviewCount: googleReviews.length,
    },
    review: googleReviews.slice(0, 3).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: { "@type": "Rating", ratingValue: r.stars, bestRating: 5 },
      reviewBody: r.quote,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div className="bg-slate-50 text-slate-800">
      <script type="application/ld+json">
        {JSON.stringify(localBusinessJsonLd)}
      </script>
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>

      <header
        className={`sticky top-0 z-50 border-b backdrop-blur transition-all duration-300 ${
          isScrolled
            ? "border-slate-200 bg-white/98 shadow-sm"
            : "border-white/20 bg-white/88 shadow-none"
        }`}
      >
        <div className="section-container flex h-16 items-center justify-between">
          <a href="#accueil" className="font-['Rajdhani'] text-2xl font-bold tracking-wide">
            <span className="text-brand-600">ilan</span>
            <span className="text-accent-600">247</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-brand-600">
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="btn-primary hidden md:inline-flex">
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
          className={`fixed inset-0 top-16 z-[60] md:hidden ${
            mobileMenuOpen
              ? "visible opacity-100"
              : "invisible opacity-0 pointer-events-none"
          } transition-all duration-300`}
          aria-hidden={!mobileMenuOpen}
        >
          {/* Fond sombre opaque pour masquer le contenu derrière */}
          <div
            className="absolute inset-0 bg-slate-900"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          {/* Panneau du menu - fond blanc 100% opaque */}
          <div
            className="relative flex h-full w-full max-w-sm flex-col bg-white shadow-2xl"
            style={{ backgroundColor: "#ffffff" }}
          >
            <nav className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-lg font-medium text-slate-800 transition hover:bg-slate-100 hover:text-brand-600"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary mt-4 w-full justify-center"
            >
              Demander une soumission
            </a>
          </nav>
          </div>
        </div>
      </header>

      <main>
        <section id="accueil" className="relative overflow-hidden bg-slate-900">
          <img
            src={heroImageSources[heroImageIndex]}
            alt="Atelier d'impression publicitaire moderne à Montréal"
            className="hero-bg absolute inset-0 h-full w-full object-cover object-[center_38%] opacity-65 brightness-110 md:object-[center_42%]"
            onError={() => {
              if (heroImageIndex < heroImageSources.length - 1) {
                setHeroImageIndex((current) => current + 1);
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent-700/45 via-slate-900/40 to-slate-900/35" />
          <div className="section-container relative flex min-h-[78vh] flex-col justify-center py-20">
            <p className="hero-anim mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-brand-600/40 bg-brand-600/15 px-3 py-1 text-sm text-white/95">
              <Clock3 className="h-4 w-4" /> Disponible 24/7 à Montréal
            </p>
            <h1 className="hero-anim hero-text-shadow max-w-3xl font-['Rajdhani'] text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl sm:leading-[1.08] lg:text-6xl">
              Supports publicitaires qui rendent votre entreprise plus visible.
            </h1>
            <p className="hero-anim hero-text-shadow mt-5 max-w-2xl text-base text-slate-200 sm:text-lg">
              ilan247 conçoit et fabrique vos roll-up, X-banner, impressions grand format,
              lettrage et habillage vinyle avec un service rapide et une qualité constante.
            </p>
            <div className="hero-anim mt-8 flex flex-wrap gap-3">
              <a href="#produits" className="btn-primary cta-pulse">
                Voir nos produits
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-accent-500 bg-accent-600/90 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-accent-700"
              >
                Demander une soumission
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="section-container">
            <div className="reveal-on-scroll mb-8">
              <h2 className="section-title">Offres spéciales</h2>
              <p className="section-subtitle">
                Promotions d'ouverture, maximum 2 unités par client.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <article className="reveal-on-scroll card interactive-card p-6">
                <h3 className="font-['Rajdhani'] text-2xl font-bold">Roll-up</h3>
                <p className="mt-3 text-slate-600">Support vertical professionnel pour événements.</p>
                <p className="mt-5 text-sm text-slate-500 line-through">Prix régulier: 200$</p>
                <p className="text-3xl font-bold text-brand-600">Offre spéciale: 100$</p>
                <a href="/roll-up-montreal" className="btn-primary mt-6">
                  Plus d'informations
                </a>
              </article>
              <article className="reveal-on-scroll card interactive-card p-6">
                <h3 className="font-['Rajdhani'] text-2xl font-bold">X-Banner</h3>
                <p className="mt-3 text-slate-600">Solution légère et économique pour promotions rapides.</p>
                <p className="mt-5 text-sm text-slate-500 line-through">Prix régulier: 150$</p>
                <p className="text-3xl font-bold text-brand-600">Offre spéciale: 75$</p>
                <a href="#contact" className="btn-primary mt-6">
                  Plus d'informations
                </a>
              </article>
            </div>
          </div>
        </section>

        <section id="produits" className="bg-white py-16 sm:py-20">
          <div className="section-container">
            <div className="reveal-on-scroll mb-8">
              <h2 className="section-title">Nos produits et services</h2>
              <p className="section-subtitle">
                Des supports publicitaires adaptés à votre image, vos délais et votre budget.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article key={service.title} className="group reveal-on-scroll card interactive-card overflow-hidden p-0">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={`Exemple de ${service.title} réalisé par ilan247 à Montréal`}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-['Rajdhani'] text-xl font-semibold">{service.title}</h3>
                    <p className="mt-2 text-slate-600">{service.description}</p>
                    <a
                      href="#contact"
                      className="mt-4 inline-block font-semibold text-brand-600 hover:text-brand-700"
                    >
                      Demander une soumission
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="realisations" className="py-16 sm:py-20">
          <div className="section-container">
            <div className="reveal-on-scroll mb-8">
              <h2 className="section-title">Nos réalisations</h2>
              <p className="section-subtitle">
                Quelques projets récents: lettrage, enseignes, panneaux et roll-up réalisés par
                ilan247 à Montréal et alentours.
              </p>
            </div>
          </div>
          <div className="realisations-marquee">
            <div className="realisations-track">
              {[...realizationsImages, ...realizationsImages].map((item, index) => (
                <figure key={`${item.src}-${index}`} className="realisations-item">
                  <img src={item.src} alt={item.alt} loading="lazy" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="section-container">
            <div className="reveal-on-scroll mb-8">
              <h2 className="section-title">Notre processus de travail</h2>
              <p className="section-subtitle">
                Un parcours simple pour passer de l'idée à un support publicitaire prêt à l'emploi.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <article key={step.title} className="reveal-on-scroll card p-5">
                  <p className="text-sm font-semibold text-accent-600">Étape {index + 1}</p>
                  <h3 className="mt-2 font-['Rajdhani'] text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-slate-600">{step.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="temoignages" className="bg-white py-16 sm:py-20">
          <div className="section-container">
            <div className="reveal-on-scroll mb-8">
              <h2 className="section-title">Avis Google</h2>
              <p className="section-subtitle">
                Ce que nos clients disent de nous sur Google. Rapidité, qualité et professionnalisme.
              </p>
              <a
                href={googleMapsReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal-on-scroll mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition hover:text-brand-700"
              >
                Voir tous les avis sur Google
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {googleReviews.map((item) => (
                <article key={item.author} className="reveal-on-scroll card p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5 text-amber-400">
                      {[...Array(item.stars)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    {item.localGuide && (
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                        Local Guide
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-slate-700">"{item.quote}"</p>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-800">{item.author}</p>
                    <p className="text-xs text-slate-500">{item.date}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="apropos" className="py-16 sm:py-20">
          <div className="section-container grid items-center gap-8 lg:grid-cols-2">
            <div className="reveal-on-scroll">
              <h2 className="section-title">Qui sommes-nous ?</h2>
              <p className="section-subtitle">
                Chez ilan247, nous sommes passionnés par la publicité visuelle qui aide les
                entreprises à se démarquer. Notre équipe vous accompagne de la maquette à la
                fabrication, avec une disponibilité 24/7.
              </p>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li>- Accompagnement personnalisé pour chaque projet</li>
                <li>- Qualité d'impression constante et finition soignée</li>
                <li>- Délais rapides pour vos urgences marketing</li>
              </ul>
            </div>
            <img
              src="/images/equipe-ilan247-installation.png"
              alt="Équipe ilan247 en installation d'une enseigne DÉJÀ VU"
              className="reveal-on-scroll h-full min-h-[320px] w-full rounded-2xl object-cover shadow-lg"
            />
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="section-container">
            <div className="reveal-on-scroll mb-8">
              <h2 className="section-title">Foire aux questions</h2>
            </div>
            <div className="space-y-4">
              {faq.map((item) => (
                <details key={item.q} className="reveal-on-scroll card p-5">
                  <summary className="cursor-pointer list-none font-['Rajdhani'] text-lg font-semibold">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-slate-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 sm:py-20">
          <div className="section-container grid gap-8 lg:grid-cols-2">
            <div className="reveal-on-scroll card p-6 sm:p-8">
              <h2 className="section-title">Contactez-nous</h2>
              <p className="section-subtitle mt-2">
                Besoin d'un devis rapide ? Envoyez-nous les détails de votre projet.
              </p>
              <form className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Nom *"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-brand-600 focus:ring-2"
                  required
                />
                <input
                  type="email"
                  placeholder="Adresse e-mail *"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-brand-600 focus:ring-2"
                  required
                />
                <input
                  type="tel"
                  placeholder="Téléphone"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-brand-600 focus:ring-2"
                />
                <select className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-brand-600 focus:ring-2">
                  <option>Type de projet</option>
                  <option>Roll-up</option>
                  <option>X-Banner</option>
                  <option>Impression grand format</option>
                  <option>Lettrage</option>
                  <option>Habillage vinyle</option>
                </select>
                <textarea
                  placeholder="Message *"
                  rows={4}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-brand-600 focus:ring-2"
                  required
                />
                <input
                  type="file"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-500"
                />
                <button type="submit" className="btn-primary w-full">
                  <Send className="mr-2 h-4 w-4" /> Envoyer la demande
                </button>
              </form>
            </div>

            <div className="reveal-on-scroll card p-6 sm:p-8">
              <h3 className="font-['Rajdhani'] text-2xl font-bold">Informations</h3>
              <div className="mt-6 space-y-4 text-slate-700">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  {businessInfo.streetAddress}, {businessInfo.city}, Québec, {businessInfo.country}
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent-600" /> {businessInfo.phoneDisplay}
                </p>
                <p className="flex items-center gap-3">
                  <Clock3 className="h-5 w-5 text-accent-600" /> Disponible 24/7
                </p>
                <p className="rounded-xl bg-slate-100 p-3 text-sm">
                  <strong>Zones desservies:</strong> Montréal, Laval, Longueuil, Rive-Nord et
                  Rive-Sud.
                </p>
              </div>
              <a
                href={businessInfo.facebook}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary mt-6"
              >
                Visiter Facebook
              </a>

              <iframe
                title="Localisation ilan247 à Montréal"
                className="mt-6 h-64 w-full rounded-2xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  `${businessInfo.streetAddress}, ${businessInfo.city}, ${businessInfo.region}, ${businessInfo.country}`,
                )}&output=embed`}
              />
            </div>
          </div>
        </section>

        <section id="coordonnees" className="bg-white py-12 sm:py-16">
          <div className="section-container">
            <div className="reveal-on-scroll card p-6 sm:p-8">
              <h2 className="section-title">Coordonnées officielles (Google Business Profile)</h2>
              <p className="section-subtitle mt-2">
                Ces informations doivent rester identiques sur le site, Google Business Profile et
                les annuaires locaux pour améliorer le SEO local.
              </p>
              <address className="mt-6 not-italic text-slate-700">
                <p>
                  <strong>Entreprise:</strong> {businessInfo.name}
                </p>
                <p>
                  <strong>Adresse:</strong> {businessInfo.streetAddress}, {businessInfo.city},{" "}
                  {businessInfo.region} {businessInfo.postalCode}, {businessInfo.country}
                </p>
                <p>
                  <strong>Téléphone:</strong> {businessInfo.phoneDisplay}
                </p>
                <p>
                  <strong>Site web:</strong>{" "}
                  <a href={businessInfo.website} className="text-brand-600 hover:text-brand-700">
                    {businessInfo.website}
                  </a>
                </p>
                <p>
                  <strong>Horaires:</strong> 24/7
                </p>
              </address>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 py-10 text-slate-200">
        <div className="section-container flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-['Rajdhani'] text-3xl font-bold tracking-wide text-white">
              <span className="text-brand-600">ilan</span>
              <span className="text-accent-500">247</span>
            </p>
            <p className="mt-1 text-sm text-slate-300">
              Supports publicitaires modernes pour entreprises ambitieuses.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#accueil" className="hover:text-white">
              Accueil
            </a>
            <a href="#produits" className="hover:text-white">
              Nos Produits
            </a>
            <a href="#apropos" className="hover:text-white">
              À Propos
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
            <a href="#realisations" className="hover:text-white">
              Réalisations
            </a>
            <a href="/roll-up-montreal" className="hover:text-white">
              Roll-up Montréal
            </a>
            <a href="#coordonnees" className="hover:text-white">
              Coordonnées
            </a>
          </div>
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} ilan247. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
