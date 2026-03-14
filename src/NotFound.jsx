import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <p className="font-['Rajdhani'] text-8xl font-bold text-brand-600 sm:text-9xl">404</p>
      <h1 className="mt-4 font-['Rajdhani'] text-2xl font-bold text-slate-900 sm:text-3xl">
        Page introuvable
      </h1>
      <p className="mt-3 max-w-md text-slate-600">
        La page que vous cherchez n'existe pas ou a été déplacée.
        Retournez à l'accueil pour découvrir nos services.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/" className="btn-primary">
          Retour à l'accueil
        </Link>
        <Link to="/#contact" className="btn-secondary">
          Nous contacter
        </Link>
      </div>
      <p className="mt-12 font-['Rajdhani'] text-xl font-bold tracking-wide">
        <span className="text-brand-600">ilan</span>
        <span className="text-accent-600">247</span>
      </p>
    </div>
  );
}
