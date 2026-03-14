import { useEffect } from "react";
import { Link } from "react-router-dom";

const businessInfo = {
  name: "ilan247",
  email: "info@ilan247.com",
  phone: "(541) 653-7360",
  address: "8558 Bd Pie-IX, Montréal, QC H1Z 4G2, Canada",
  website: "https://www.ilan247.com",
};

export default function ConditionsUtilisation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/98 shadow-sm backdrop-blur">
        <div className="section-container flex h-16 items-center justify-between">
          <Link to="/" className="font-['Rajdhani'] text-2xl font-bold tracking-wide">
            <span className="text-brand-600">ilan</span>
            <span className="text-accent-600">247</span>
          </Link>
          <Link to="/" className="text-sm font-medium transition hover:text-brand-600">
            ← Retour à l'accueil
          </Link>
        </div>
      </header>

      <main className="py-16 sm:py-20">
        <div className="section-container max-w-4xl">
          <h1 className="font-['Rajdhani'] text-3xl font-bold text-slate-900 sm:text-4xl">
            Conditions d'utilisation
          </h1>
          <p className="mt-2 text-sm text-slate-500">Dernière mise à jour : mars 2026</p>

          <div className="mt-10 space-y-8 text-slate-700 leading-relaxed">
            <section>
              <h2 className="font-['Rajdhani'] text-xl font-bold text-slate-900">1. Acceptation des conditions</h2>
              <p className="mt-3">
                En accédant au site web de {businessInfo.name} ({businessInfo.website}), 
                vous acceptez d'être lié par les présentes conditions d'utilisation. 
                Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.
              </p>
            </section>

            <section>
              <h2 className="font-['Rajdhani'] text-xl font-bold text-slate-900">2. Description des services</h2>
              <p className="mt-3">
                {businessInfo.name} est un atelier de fabrication de supports publicitaires 
                basé à Montréal. Notre site web présente nos services, y compris la fabrication 
                de roll-up, X-banner, impressions grand format, lettrage et habillage vinyle. 
                Le site permet également aux visiteurs de nous contacter via un formulaire de demande de soumission.
              </p>
            </section>

            <section>
              <h2 className="font-['Rajdhani'] text-xl font-bold text-slate-900">3. Utilisation du site</h2>
              <p className="mt-3">Vous vous engagez à :</p>
              <ul className="mt-2 space-y-1 pl-5 list-disc">
                <li>Utiliser le site de manière légale et respectueuse</li>
                <li>Ne pas tenter d'accéder de manière non autorisée à nos systèmes</li>
                <li>Ne pas utiliser le site pour transmettre du contenu illicite, menaçant ou nuisible</li>
                <li>Fournir des informations exactes lors de l'utilisation du formulaire de contact</li>
              </ul>
            </section>

            <section>
              <h2 className="font-['Rajdhani'] text-xl font-bold text-slate-900">4. Propriété intellectuelle</h2>
              <p className="mt-3">
                L'ensemble du contenu de ce site web (textes, images, logos, design, photographies) 
                est la propriété de {businessInfo.name} ou est utilisé avec autorisation. 
                Toute reproduction, distribution ou utilisation non autorisée de ce contenu est interdite 
                sans notre consentement écrit préalable.
              </p>
            </section>

            <section>
              <h2 className="font-['Rajdhani'] text-xl font-bold text-slate-900">5. Soumissions et devis</h2>
              <p className="mt-3">
                Les prix affichés sur le site sont à titre indicatif et peuvent être modifiés sans préavis. 
                Les offres spéciales sont valides selon les conditions indiquées et dans la limite des stocks disponibles. 
                Toute soumission demandée via le formulaire de contact ne constitue pas un engagement contractuel 
                de notre part tant qu'elle n'a pas été formellement acceptée par les deux parties.
              </p>
            </section>

            <section>
              <h2 className="font-['Rajdhani'] text-xl font-bold text-slate-900">6. Limitation de responsabilité</h2>
              <p className="mt-3">
                {businessInfo.name} s'efforce de maintenir les informations du site exactes et à jour, 
                mais ne garantit pas l'exactitude, l'exhaustivité ou l'actualité de tout le contenu. 
                Nous ne sommes pas responsables des dommages directs ou indirects résultant de 
                l'utilisation ou de l'impossibilité d'utiliser ce site.
              </p>
            </section>

            <section>
              <h2 className="font-['Rajdhani'] text-xl font-bold text-slate-900">7. Liens externes</h2>
              <p className="mt-3">
                Notre site peut contenir des liens vers des sites tiers (Google Maps, réseaux sociaux). 
                Nous ne sommes pas responsables du contenu ou des pratiques de confidentialité de ces sites externes. 
                Nous vous encourageons à lire les conditions d'utilisation de chaque site que vous visitez.
              </p>
            </section>

            <section>
              <h2 className="font-['Rajdhani'] text-xl font-bold text-slate-900">8. Droit applicable</h2>
              <p className="mt-3">
                Les présentes conditions d'utilisation sont régies par les lois du Québec et les lois 
                fédérales du Canada qui s'y appliquent. Tout litige sera soumis aux tribunaux compétents 
                du district judiciaire de Montréal.
              </p>
            </section>

            <section>
              <h2 className="font-['Rajdhani'] text-xl font-bold text-slate-900">9. Modifications</h2>
              <p className="mt-3">
                Nous nous réservons le droit de modifier ces conditions d'utilisation à tout moment. 
                Les modifications prennent effet dès leur publication sur cette page. 
                Votre utilisation continue du site après la publication de modifications constitue 
                votre acceptation de ces changements.
              </p>
            </section>

            <section>
              <h2 className="font-['Rajdhani'] text-xl font-bold text-slate-900">10. Nous contacter</h2>
              <p className="mt-3">
                Pour toute question concernant ces conditions d'utilisation, contactez-nous :
              </p>
              <ul className="mt-3 space-y-1 pl-5 list-disc">
                <li><strong>{businessInfo.name}</strong></li>
                <li>{businessInfo.address}</li>
                <li>Courriel : <a href={`mailto:${businessInfo.email}`} className="text-brand-600 hover:text-brand-700">{businessInfo.email}</a></li>
                <li>Téléphone : {businessInfo.phone}</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 py-10 text-slate-200">
        <div className="section-container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-['Rajdhani'] text-xl font-bold tracking-wide text-white">
            <span className="text-brand-600">ilan</span>
            <span className="text-accent-500">247</span>
          </p>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} ilan247. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
