import { useEffect } from "react";
import { Link } from "react-router-dom";

const businessInfo = {
  name: "ilan247",
  email: "info@ilan247.com",
  phone: "(541) 653-7360",
  address: "8558 Bd Pie-IX, Montréal, QC H1Z 4G2, Canada",
  website: "https://www.ilan247.com",
};

export default function PolitiqueConfidentialite() {
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
            Politique de confidentialité
          </h1>
          <p className="mt-2 text-sm text-slate-500">Dernière mise à jour : mars 2026</p>

          <div className="mt-10 space-y-8 text-slate-700 leading-relaxed">
            <section>
              <h2 className="font-['Rajdhani'] text-xl font-bold text-slate-900">1. Introduction</h2>
              <p className="mt-3">
                {businessInfo.name} s'engage à protéger la vie privée des visiteurs de son site web. 
                Cette politique de confidentialité explique quelles informations nous collectons, 
                comment nous les utilisons et quels sont vos droits, conformément à la 
                <strong> Loi 25 sur la protection des renseignements personnels</strong> du Québec 
                et à la législation canadienne applicable.
              </p>
            </section>

            <section>
              <h2 className="font-['Rajdhani'] text-xl font-bold text-slate-900">2. Responsable de la protection des renseignements</h2>
              <p className="mt-3">
                Le responsable de la protection des renseignements personnels chez {businessInfo.name} peut être contacté à :
              </p>
              <ul className="mt-3 space-y-1 pl-5 list-disc">
                <li>Courriel : <a href={`mailto:${businessInfo.email}`} className="text-brand-600 hover:text-brand-700">{businessInfo.email}</a></li>
                <li>Téléphone : {businessInfo.phone}</li>
                <li>Adresse : {businessInfo.address}</li>
              </ul>
            </section>

            <section>
              <h2 className="font-['Rajdhani'] text-xl font-bold text-slate-900">3. Renseignements collectés</h2>
              <p className="mt-3">Nous collectons les renseignements suivants lorsque vous utilisez notre site :</p>
              <h3 className="mt-4 font-semibold text-slate-900">Renseignements fournis volontairement</h3>
              <ul className="mt-2 space-y-1 pl-5 list-disc">
                <li>Nom</li>
                <li>Adresse courriel</li>
                <li>Numéro de téléphone</li>
                <li>Type de projet et message (via le formulaire de contact)</li>
                <li>Fichiers joints (si vous en envoyez avec votre demande)</li>
              </ul>
              <h3 className="mt-4 font-semibold text-slate-900">Renseignements collectés automatiquement</h3>
              <ul className="mt-2 space-y-1 pl-5 list-disc">
                <li>Adresse IP</li>
                <li>Type de navigateur et appareil</li>
                <li>Pages consultées et durée de visite</li>
                <li>Source de référence (comment vous avez trouvé notre site)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-['Rajdhani'] text-xl font-bold text-slate-900">4. Utilisation des renseignements</h2>
              <p className="mt-3">Nous utilisons vos renseignements pour :</p>
              <ul className="mt-2 space-y-1 pl-5 list-disc">
                <li>Répondre à vos demandes de soumission et de renseignements</li>
                <li>Vous contacter concernant votre projet</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Respecter nos obligations légales</li>
              </ul>
              <p className="mt-3">
                Nous <strong>ne vendons pas</strong> et <strong>ne louons pas</strong> vos renseignements personnels à des tiers.
              </p>
            </section>

            <section>
              <h2 className="font-['Rajdhani'] text-xl font-bold text-slate-900">5. Conservation des renseignements</h2>
              <p className="mt-3">
                Vos renseignements personnels sont conservés uniquement le temps nécessaire 
                pour répondre à votre demande ou pour la durée requise par la loi. 
                Les données du formulaire de contact sont conservées pour une durée maximale de 24 mois, 
                après quoi elles sont supprimées de manière sécurisée.
              </p>
            </section>

            <section>
              <h2 className="font-['Rajdhani'] text-xl font-bold text-slate-900">6. Sécurité</h2>
              <p className="mt-3">
                Nous prenons des mesures raisonnables pour protéger vos renseignements personnels 
                contre la perte, le vol, l'accès non autorisé, la divulgation ou la modification. 
                Notre site utilise le protocole HTTPS pour sécuriser les communications.
              </p>
            </section>

            <section>
              <h2 className="font-['Rajdhani'] text-xl font-bold text-slate-900">7. Vos droits</h2>
              <p className="mt-3">Conformément à la Loi 25 du Québec, vous avez le droit de :</p>
              <ul className="mt-2 space-y-1 pl-5 list-disc">
                <li>Accéder à vos renseignements personnels que nous détenons</li>
                <li>Demander la rectification de renseignements inexacts</li>
                <li>Demander la suppression de vos renseignements</li>
                <li>Retirer votre consentement à tout moment</li>
                <li>Déposer une plainte auprès de la Commission d'accès à l'information du Québec</li>
              </ul>
              <p className="mt-3">
                Pour exercer ces droits, contactez-nous à{" "}
                <a href={`mailto:${businessInfo.email}`} className="text-brand-600 hover:text-brand-700">{businessInfo.email}</a>.
              </p>
            </section>

            <section>
              <h2 className="font-['Rajdhani'] text-xl font-bold text-slate-900">8. Témoins de connexion (cookies)</h2>
              <p className="mt-3">
                Notre site peut utiliser des témoins de connexion (cookies) pour améliorer votre 
                expérience de navigation. Ces témoins ne contiennent aucune information personnelle 
                identifiable. Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.
              </p>
            </section>

            <section>
              <h2 className="font-['Rajdhani'] text-xl font-bold text-slate-900">9. Services tiers</h2>
              <p className="mt-3">
                Notre site utilise Google Maps pour afficher notre localisation. 
                L'utilisation de Google Maps est régie par la politique de confidentialité de Google. 
                Nous vous invitons à consulter leur politique pour plus de détails.
              </p>
            </section>

            <section>
              <h2 className="font-['Rajdhani'] text-xl font-bold text-slate-900">10. Modifications</h2>
              <p className="mt-3">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                Les modifications seront publiées sur cette page avec la date de mise à jour. 
                Nous vous encourageons à consulter cette page régulièrement.
              </p>
            </section>

            <section>
              <h2 className="font-['Rajdhani'] text-xl font-bold text-slate-900">11. Nous contacter</h2>
              <p className="mt-3">
                Pour toute question concernant cette politique de confidentialité ou vos renseignements personnels, contactez-nous :
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
