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

const values = [
  { title: "Passion", desc: "S'engager pleinement dans chaque projet" },
  { title: "Qualité", desc: "Bien faire ce que nous entreprenons" },
  { title: "Réactivité", desc: "Disponibilité 24/7 pour vos urgences" },
  { title: "Innovation", desc: "Technologies de pointe pour des résultats exceptionnels" },
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

const inspirations = [
  { title: "Lettrage LED illuminé", image: "/images/services/lettrage-illumine.png" },
  { title: "Enseigne commerciale", image: "/images/realisations/realisation-7.png" },
  { title: "Habillage vinyle", image: "/images/services/habillage-deja-vu.png" },
  { title: "Display promotionnel", image: "/images/services/display-epilys.png" },
  { title: "Roll-up événementiel", image: "/images/realisations/realisation-6.png" },
  { title: "Grand format", image: "/images/services/grand-format-epilys.png" },
];

const businessInfo = {
  name: "ilan247",
  website: "https://www.ilan247.com/",
  image: "https://www.ilan247.com/images/atelier-ilan247.png",
  phoneDisplay: "(541) 653-7360",
  phoneE164: "+1-541-653-7360",
  email: "info@ilan247.com",
  facebook: "",
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
  const [headerVisible, setHeaderVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("idle");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    const formData = new FormData(e.target);

    // --- OPTION 1 : Web3Forms (recommandé) ---
    // Allez sur https://web3forms.com, entrez info@ilan247.com,
    // puis remplacez la clé ci-dessous par celle que vous recevrez par email.
    const WEB3FORMS_KEY = "b2c17fe2-d001-43eb-9165-6c7efe9215ca";

    if (WEB3FORMS_KEY !== "VOTRE_CLE_ICI") {
      formData.append("access_key", WEB3FORMS_KEY);
      formData.append("subject", "Nouvelle demande de soumission - ilan247.com");
      formData.append("from_name", "Site web ilan247");

      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        if (data.success) {
          setFormStatus("success");
          e.target.reset();
        } else {
          setFormStatus("error");
        }
      } catch {
        setFormStatus("error");
      }
      return;
    }

    // --- OPTION 2 : Fallback mailto (en attendant la clé Web3Forms) ---
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const phone = formData.get("phone") || "";
    const project = formData.get("project") || "";
    const message = formData.get("message") || "";

    const body = `Nom: ${name}%0AEmail: ${email}%0ATéléphone: ${phone}%0AType de projet: ${project}%0A%0AMessage:%0A${message}`;
    window.location.href = `mailto:${businessInfo.email}?subject=Demande de soumission - ${name}&body=${body}`;
    setFormStatus("success");
    e.target.reset();
  };

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
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 16);

      if (currentY < 100) {
        setHeaderVisible(true);
      } else if (currentY < lastScrollY - 5) {
        setHeaderVisible(true);
      } else if (currentY > lastScrollY + 5) {
        setHeaderVisible(false);
      }

      lastScrollY = currentY;
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
    sameAs: [],
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
        className={`sticky top-0 z-50 border-b backdrop-blur-md transition-all duration-300 ${
          headerVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "border-slate-200 bg-white shadow-sm"
            : "border-slate-200/60 bg-white/95 shadow-sm"
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
      </header>

      {/* Menu mobile - en dehors du header pour éviter les problèmes d'affichage */}
      <div
        className={`fixed inset-0 top-16 z-[100] overflow-y-auto bg-white transition-all duration-300 md:hidden ${
          mobileMenuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "#ffffff" }}
        aria-hidden={!mobileMenuOpen}
      >
        <nav className="flex flex-col gap-1 p-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-lg font-semibold text-slate-900 transition hover:bg-slate-100 hover:text-brand-600"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary mt-6 w-full justify-center"
          >
            Demander une soumission
          </a>
        </nav>
      </div>

      <main>
        <section id="accueil" className="relative overflow-hidden bg-slate-900">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero-bg absolute inset-0 h-full w-full object-cover opacity-65 brightness-110"
            poster={heroImageSources[0]}
          >
            <source src="/videos/impression-publicitaire-montreal-ilan247.mp4" type="video/mp4" />
          </video>
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
            <div className="hero-anim mt-12 flex flex-wrap items-center gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                <span>5.0/5 sur Google</span>
              </div>
              <div className="h-4 w-px bg-slate-400/50 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                <span>Livraison rapide</span>
              </div>
              <div className="h-4 w-px bg-slate-400/50 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <span className="text-brand-400">✓</span>
                <span>Garantie qualité</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-accent-700 py-6">
          <div className="section-container">
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
              <div className="flex items-center gap-2 text-white/90">
                <Clock3 className="h-5 w-5 text-brand-400" />
                <span className="text-sm font-medium">Disponible 24/7</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="h-5 w-5 text-brand-400" />
                <span className="text-sm font-medium">Montréal et environs</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Phone className="h-5 w-5 text-brand-400" />
                <span className="text-sm font-medium">{businessInfo.phoneDisplay}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 sm:py-16">
          <div className="section-container">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="reveal-on-scroll text-center">
                <p className="font-['Rajdhani'] text-4xl font-bold text-brand-600">500+</p>
                <p className="mt-1 text-sm text-slate-600">Projets réalisés</p>
              </div>
              <div className="reveal-on-scroll text-center">
                <p className="font-['Rajdhani'] text-4xl font-bold text-brand-600">24/7</p>
                <p className="mt-1 text-sm text-slate-600">Disponibilité</p>
              </div>
              <div className="reveal-on-scroll text-center">
                <p className="font-['Rajdhani'] text-4xl font-bold text-brand-600">100%</p>
                <p className="mt-1 text-sm text-slate-600">Clients satisfaits</p>
              </div>
              <div className="reveal-on-scroll text-center">
                <p className="font-['Rajdhani'] text-4xl font-bold text-brand-600">48h</p>
                <p className="mt-1 text-slate-600 text-sm">Délai moyen</p>
              </div>
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

        <section id="produits" className="py-16 sm:py-20">
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
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={`Exemple de ${service.title} réalisé par ilan247 à Montréal`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-['Rajdhani'] text-xl font-semibold group-hover:text-brand-600 transition-colors">{service.title}</h3>
                    <p className="mt-2 text-slate-600">{service.description}</p>
                    <a
                      href="#contact"
                      className="mt-4 inline-block font-semibold text-brand-600 hover:text-brand-700"
                    >
                      Demander une soumission →
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

        <section className="py-16 sm:py-20 bg-white">
          <div className="section-container">
            <div className="reveal-on-scroll mb-8 text-center">
              <h2 className="section-title">Inspirations & Tendances</h2>
              <p className="section-subtitle mx-auto">
                Découvrez nos dernières réalisations et inspirations pour vos projets d'affichage et de signalétique.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {inspirations.map((item, index) => (
                <article 
                  key={index} 
                  className="group reveal-on-scroll relative overflow-hidden rounded-2xl cursor-pointer"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-['Rajdhani'] text-xl font-bold text-white">{item.title}</h3>
                  </div>
                </article>
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
                <article key={step.title} className="reveal-on-scroll card interactive-card p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-100">
                    <span className="font-['Rajdhani'] text-2xl font-bold text-brand-600">{index + 1}</span>
                  </div>
                  <h3 className="font-['Rajdhani'] text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-slate-600 text-sm">{step.desc}</p>
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
                <article key={item.author} className="reveal-on-scroll card interactive-card p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5 text-amber-400">
                      {[...Array(item.stars)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    {item.localGuide && (
                      <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
                        Local Guide
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-slate-700 leading-relaxed">"{item.quote}"</p>
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center">
                        <span className="font-bold text-brand-600">{item.author.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800">{item.author}</p>
                        <p className="text-xs text-slate-500">{item.date}</p>
                      </div>
                    </div>
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
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {values.map((value) => (
                  <div key={value.title} className="flex items-start gap-3">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100">
                      <span className="text-brand-600 font-bold text-sm">{value.title[0]}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{value.title}</h4>
                      <p className="text-sm text-slate-600">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-xl bg-accent-50 p-5 border border-accent-100">
                <h4 className="font-['Rajdhani'] text-lg font-bold text-accent-700">Notre mission</h4>
                <p className="mt-2 text-slate-700">
                  Leader en matière d'affichage, de signalétique et d'impression à Montréal. 
                  Offrir un service personnalisé et des produits de qualité qui dépassent les attentes de nos clients.
                </p>
              </div>
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
              {formStatus === "success" ? (
                <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-6 text-center">
                  <p className="font-['Rajdhani'] text-2xl font-bold text-accent-600">Merci !</p>
                  <p className="mt-2 text-slate-600">
                    Votre demande a bien été envoyée. Nous vous répondrons dans les plus brefs délais.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormStatus("idle")}
                    className="btn-primary mt-4"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              ) : (
                <form className="mt-6 space-y-4" onSubmit={handleFormSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nom *"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-brand-600 focus:ring-2"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Adresse e-mail *"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-brand-600 focus:ring-2"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Téléphone"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-brand-600 focus:ring-2"
                  />
                  <select name="project" className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-brand-600 focus:ring-2">
                    <option>Type de projet</option>
                    <option>Roll-up</option>
                    <option>X-Banner</option>
                    <option>Impression grand format</option>
                    <option>Lettrage</option>
                    <option>Habillage vinyle</option>
                  </select>
                  <textarea
                    name="message"
                    placeholder="Message *"
                    rows={4}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-brand-600 focus:ring-2"
                    required
                  />
                  <input
                    type="file"
                    name="attachment"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-500"
                  />
                  {formStatus === "error" && (
                    <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
                      Une erreur est survenue. Veuillez réessayer ou nous contacter par courriel.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="btn-primary w-full disabled:opacity-60"
                  >
                    {formStatus === "sending" ? (
                      "Envoi en cours..."
                    ) : (
                      <><Send className="mr-2 h-4 w-4" /> Envoyer la demande</>
                    )}
                  </button>
                </form>
              )}
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
                <p className="flex items-center gap-3">
                  <Send className="h-5 w-5 text-accent-600" />
                  <a href={`mailto:${businessInfo.email}`} className="text-brand-600 hover:text-brand-700">{businessInfo.email}</a>
                </p>
                <p className="rounded-xl bg-slate-100 p-3 text-sm">
                  <strong>Zones desservies:</strong> Montréal, Laval, Longueuil, Rive-Nord et
                  Rive-Sud.
                </p>
              </div>
              <a
                href={`mailto:${businessInfo.email}`}
                className="btn-secondary mt-6"
              >
                Nous écrire par courriel
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

      <footer className="bg-slate-900 py-16 text-slate-200">
        <div className="section-container">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-['Rajdhani'] text-3xl font-bold tracking-wide text-white">
                <span className="text-brand-600">ilan</span>
                <span className="text-accent-500">247</span>
              </p>
              <p className="mt-3 text-sm text-slate-300">
                Votre partenaire de confiance en affichage, signalétique et impression à Montréal.
              </p>
              <a href={`mailto:${businessInfo.email}`} className="mt-4 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition">
                <Send className="h-4 w-4" /> {businessInfo.email}
              </a>
            </div>
            <div>
              <h4 className="font-['Rajdhani'] text-lg font-bold text-white">Services</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#produits" className="text-slate-400 hover:text-white transition">Roll-up</a></li>
                <li><a href="#produits" className="text-slate-400 hover:text-white transition">X-Banner</a></li>
                <li><a href="#produits" className="text-slate-400 hover:text-white transition">Impression grand format</a></li>
                <li><a href="#produits" className="text-slate-400 hover:text-white transition">Lettrage</a></li>
                <li><a href="#produits" className="text-slate-400 hover:text-white transition">Habillage vinyle</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-['Rajdhani'] text-lg font-bold text-white">Informations</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#apropos" className="text-slate-400 hover:text-white transition">À propos</a></li>
                <li><a href="#realisations" className="text-slate-400 hover:text-white transition">Réalisations</a></li>
                <li><a href="#temoignages" className="text-slate-400 hover:text-white transition">Témoignages</a></li>
                <li><a href="#contact" className="text-slate-400 hover:text-white transition">Contact</a></li>
                <li><a href="/roll-up-montreal" className="text-slate-400 hover:text-white transition">Roll-up Montréal</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-['Rajdhani'] text-lg font-bold text-white">Contact</h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center gap-2 text-slate-400">
                  <MapPin className="h-4 w-4 text-brand-500" />
                  {businessInfo.streetAddress}, {businessInfo.city}
                </li>
                <li className="flex items-center gap-2 text-slate-400">
                  <Phone className="h-4 w-4 text-brand-500" />
                  {businessInfo.phoneDisplay}
                </li>
                <li className="flex items-center gap-2 text-slate-400">
                  <Clock3 className="h-4 w-4 text-brand-500" />
                  Disponible 24/7
                </li>
                <li className="flex items-center gap-2 text-slate-400">
                  <Send className="h-4 w-4 text-brand-500" />
                  <a href={`mailto:${businessInfo.email}`} className="hover:text-white transition">{businessInfo.email}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-500">© {new Date().getFullYear()} ilan247. Tous droits réservés.</p>
            <div className="flex gap-4 text-xs text-slate-500">
              <a href="/politique-confidentialite" className="hover:text-white transition">Politique de confidentialité</a>
              <a href="/conditions-utilisation" className="hover:text-white transition">Conditions d'utilisation</a>
            </div>
          </div>
        </div>
      </footer>

      <a
        href={`https://wa.me/15416537360?text=${encodeURIComponent("Bonjour, je souhaite obtenir une soumission pour un projet publicitaire.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110 hover:shadow-xl"
        aria-label="Nous contacter sur WhatsApp"
      >
        <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}

export default App;
