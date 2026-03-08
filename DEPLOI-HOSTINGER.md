# Déployer le site ilan247 sur Hostinger

## Étape 1 : Construire le site (déjà fait)

Dans le dossier du projet, exécutez :

```bash
npm run build
```

Cela crée le dossier `dist` avec tous les fichiers prêts pour l’hébergement.

---

## Étape 2 : Contenu à envoyer sur Hostinger

Uploadez **tout le contenu** du dossier `dist` dans `public_html` sur Hostinger :

- `index.html` (à la racine de public_html)
- `assets/` (dossier complet)
- `images/` (dossier complet : atelier, realisations, services, equipe)
- `robots.txt`
- `sitemap.xml`
- `.htaccess` (pour le routage React Router)

---

## Étape 3 : Connexion à Hostinger

1. Connectez-vous à [hpanel.hostinger.com](https://hpanel.hostinger.com)
2. Allez dans **Fichiers** → **Gestionnaire de fichiers**
3. Ouvrez le dossier `public_html` (ou le sous-dossier de votre domaine)

---

## Étape 4 : Upload des fichiers

**Option A – Glisser-déposer (File Manager)**  
- Supprimez le contenu actuel de `public_html` si nécessaire  
- Glissez-déposez tout le contenu de `dist` dans `public_html`

**Option B – FTP (FileZilla, etc.)**  
- Hôte : `ftp.votredomaine.com` ou l’adresse FTP fournie par Hostinger  
- Identifiants : ceux de votre compte Hostinger  
- Envoyez le contenu de `dist` vers `public_html`

---

## Étape 5 : Vérifier le .htaccess

Le fichier `.htaccess` est dans `public/` et est copié dans `dist` lors du build.  
Il permet à React Router de fonctionner (ex. `/roll-up-montreal`).

Si les sous-pages ne s’affichent pas, créez manuellement un `.htaccess` dans `public_html` avec :

```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## Étape 6 : Associer le domaine

Si ce n’est pas déjà fait :

1. Dans Hostinger : **Domaines** → choisir le domaine (ex. ilan247.com)
2. Pointer le domaine vers l’hébergement qui contient `public_html`

---

## Mise à jour du site

Après chaque modification :

1. `npm run build`
2. Remplacer les fichiers dans `public_html` par le nouveau contenu de `dist`

---

## Structure finale attendue dans public_html

```
public_html/
├── index.html
├── .htaccess
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── index-xxxxx.js
│   └── index-xxxxx.css
└── images/
    ├── atelier-ilan247.png
    ├── equipe-ilan247-installation.png
    ├── realisations/
    │   └── (realisation-1 à 7)
    └── services/
        └── (toutes les images services)
```
