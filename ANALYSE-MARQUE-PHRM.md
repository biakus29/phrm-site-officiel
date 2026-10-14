# Analyse du site PHRM — Brief pour expert en brand design

> Document destiné à un expert en identité de marque / direction artistique.
> Objectif : décrire l'état actuel du site vitrine PHRM, son identité visuelle, ses
> forces et ses faiblesses, afin que l'expert propose la meilleure direction de marque
> et de design pour l'ensemble de l'écosystème.
>
> _Rédigé à partir d'un audit du code source du site (mai 2026). Le site est en ligne et fonctionnel._

---

## 1. Le produit : l'écosystème PHRM

**PHRM** est une **suite de logiciels de gestion d'entreprise** destinée au marché **camerounais et de la zone OHADA** (Afrique francophone). Ce n'est pas un produit unique mais un ensemble de modules, chacun avec sa propre application web :

| Module | Rôle | Domaine | État |
|---|---|---|---|
| **Gestion RH & Paie** | Produit phare : paie conforme **CNPS**, barème IRPP, recrutement, espace candidat, libre-service employé, bulletins de paie | `paie.phrm.app` | En ligne |
| **Comptabilité OHADA** | Comptabilité en partie double **SYSCOHADA**, Plan Comptable Général, balance de vérification, devise **franc CFA (XAF)** | `compta.phrm.app` | En ligne |
| _(à venir)_ | D'autres modules sont prévus | `*.phrm.app` | — |

- **Domaine principal** : `phrm.app` (l'ancien `phrmapp.com` est obsolète).
- **Marché** : entreprises (PME et plus grandes) au Cameroun, contraintes réglementaires locales fortes (CNPS, fiscalité, OHADA).
- **Langue** : **français** (langue du marché cible).

### Le site analysé ici
Le présent site est **uniquement la vitrine marketing** (« landing page ») de l'écosystème. Il **présente** les produits et **renvoie** vers les applications (`paie.phrm.app`, `compta.phrm.app`). Il ne contient pas le produit lui-même. C'est une page unique (one-page) qui défile, sans navigation multi-pages.

---

## 2. Identité visuelle actuelle (inventaire)

### 2.1 Logo
- Un seul fichier : `logophrm.png` (≈ 53 Ko, fond transparent).
- Affiché en petit (≈ 28 à 56 px). Le mot « PHRM » est rendu **en texte brut gras**, pas comme un logotype dessiné.
- **Pas de déclinaisons** (monochrome, fond sombre, favicon dédié, version horizontale/empilée).

### 2.2 Couleurs
La couleur de marque du **site** est définie « à la main » en CSS :

| Rôle | Valeur | Usage |
|---|---|---|
| Bleu marine principal (`phrm-dark`) | `#0F3B67` | Titres, boutons, accents |
| Cyan clair (`phrm-light`) | `#9DE8FF` | Fonds de badges, survols de boutons |
| Contour foncé (`phrm-stroke`) | `#072537` | Bordures |
| Texte foncé (`phrm-text`) | `#071725` | Texte |

⚠️ **Incohérence de marque majeure** : la couleur « bleue PHRM » n'est **pas la même** d'un produit à l'autre :
- Site vitrine : `#0F3B67` (marine profond)
- App RH/Paie : `#1E40AF` (bleu roi)
- App Comptabilité : `#2563EB` (bleu vif) + `#0EA5E9` (cyan)

→ **Trois bleus différents** pour la même marque. À unifier.

De plus, le site empile **sans système** une multitude de couleurs d'accent (bleu, vert, violet, orange, jaune, rouge) — chaque carte de statistique a sa propre couleur. Il n'y a pas de palette disciplinée (primaire / secondaire / neutres / sémantiques).

### 2.3 Typographie
- **Aucune police de marque.** Le site utilise la **police système par défaut** (pile `sans-serif` du navigateur). Aucune Google Font, aucun `@font-face`.
- **Pas d'échelle typographique** définie : les tailles sont posées au cas par cas (titre principal en très grand, sous-titres variables).
- → C'est l'une des plus grosses opportunités d'identité : une marque sérieuse (paie, compta, conformité) gagnerait à avoir une typographie choisie et cohérente.

### 2.4 Iconographie & style
- Icônes : **lucide-react** uniquement (style ligne, cohérent).
- Style visuel dominant : **dégradés**, cartes blanches à ombre portée, **maquettes de tableaux de bord dessinées à la main** (faux écrans), et **beaucoup d'animations** (rebond, pulsation, cartes qui pivotent, zoom au survol).
- Aucune photographie, aucune illustration de marque (hors le portrait du directeur et le logo). _Note : une section « écosystème » récemment ajoutée prévoit des emplacements d'images, encore vides._

### 2.5 Ton éditorial
- Sérieux, orienté bénéfices, vocabulaire de conformité (« CNPS », « conforme », « réglementation »).
- Mélange de promesses chiffrées fortes (« -80 % de temps », « ROI 300 % », « essai 14 jours effectifs », « support 24/7 », « chiffrement AES-256 », « RGPD ») dont certaines mériteraient d'être étayées.

---

## 3. Structure de la page (section par section)

Dans l'ordre d'apparition :

| # | Section | Rôle | Remarques |
|---|---|---|---|
| 1 | **Navbar** | Logo + liens d'ancrage + « Se connecter / S'inscrire » | Contient un bouton « Se déconnecter » (mobile) inutile sur une vitrine |
| 2 | **Hero** | Accroche + 2 boutons + faux tableau de bord animé | Chiffres simulés, accroche 100 % RH |
| 3 | **À propos** | Onglets (présentation, rôle, mission, objectifs, recrutement, formations) + photo du directeur | Formations chargées depuis la base |
| 4 | **Statistiques** | 4 chiffres clés « temps réel » | **Données factices** générées aléatoirement |
| 5 | **Nos Services** | 6 cartes (Paie, Recrutement, Vérif. CV, Conseil, Self-service, Tableaux de bord) | Bon résumé de l'offre RH |
| 6 | **L'écosystème PHRM** _(récent)_ | Présente les modules (RH, Compta) en bandeaux | Images à intégrer |
| 7 | **Interface PHRM** | Maquettes desktop/mobile/tablette dessinées | Faux écrans, données figées |
| 8 | **Démonstration interactive** | Encore des maquettes de tableau de bord | **Redondant** avec la section 7 |
| 9 | **Libre-service employés** | Explication + avantages | — |
| 10 | **Témoignages** | 3 avis clients | Noms probablement fictifs, pas de photo |
| 11 | **Blog** | Catégories + articles récents (base de données) | Renvoie vers `paie.phrm.app/blog` |
| 12 | **Pourquoi choisir PHRM** (ancre « Tarifs ») | Conformité + économies chiffrées | ⚠️ ancré sur « Tarifs » mais **ne contient aucun tarif** |
| 13 | **FAQ** | 5 questions/réponses | — |
| 14 | **Contact** | Email, téléphone, adresse, réseaux sociaux | Liens réseaux non fonctionnels |
| 15 | **Footer** | Liens + copyright | Majorité des liens non fonctionnels (`#`) |

---

## 4. Points forts

- **Structure de vitrine complète et logique** : on retrouve tous les blocs attendus (accroche, preuve, offre, démo, social proof, FAQ, contact).
- **Positionnement clair et différenciant** : conformité **locale** (CNPS, OHADA, francs CFA) — c'est l'argument fort face aux outils RH génériques.
- **Cohérence des icônes** (lucide) et lisibilité globale de la mise en page (grilles, cartes).
- **Site rapide** (chargement différé des sections, code découpé).
- **Tout est en français**, adapté au marché.

---

## 5. Problèmes & limites identifiés

### A. Stratégie de marque & positionnement
1. **Le site raconte « PHRM = RH/Paie », pas « PHRM = écosystème ».** L'accroche, la nav et 90 % du contenu parlent uniquement de RH. Le passage à une **suite multi-produits** (RH + Compta + à venir) n'est pas porté par la marque. Il faut décider : PHRM est-il une **marque ombrelle** (avec des sous-marques RH, Compta…) ou un **produit unique modulaire** ?
2. **Pas de système de nommage** des modules (RH & Paie ? PHRM Paie ? PHRM Compta ?), ni de logique de sous-marques / sous-domaines visible dans l'identité.

### B. Identité visuelle
3. **Trois bleus de marque différents** selon le produit (voir §2.2) — à unifier dans une charte unique.
4. **Aucune typographie de marque** — la police système n'envoie aucun signal de qualité ni de personnalité.
5. **Palette d'accents non maîtrisée** (6+ couleurs sans hiérarchie). Manque une palette structurée (primaire / secondaire / neutres / états sémantiques succès-alerte-erreur).
6. **Logo non systématisé** : pas de logotype dessiné, pas de déclinaisons, pas de favicon dédié (la couleur de thème du navigateur `#1e3a5f` ne correspond même pas au bleu de marque `#0F3B67`).
7. **Surcharge d'animations** (rebonds, pulsations, cartes pivotantes, zooms) : effet « gadget » qui peut **dévaluer la perception de sérieux** pour un produit de paie/compta.

### C. Expérience & contenu (crédibilité)
8. **Données fabriquées affichées comme réelles** : les statistiques « temps réel » (employés, entreprises, disponibilité) sont **générées aléatoirement** dans le code et s'incrémentent toutes les 30 s. Idem « +X ce mois ». Risque de **crédibilité** si un visiteur averti le remarque.
9. **Pas de vraies captures produit** : tous les « écrans » sont des maquettes dessinées avec des chiffres figés identiques (1 247 employés, 98,5 %…), répétés sur plusieurs sections.
10. **Deux sections de démo quasi identiques** (« Interface » + « Démonstration interactive ») → redondance, page longue et répétitive.
11. **Témoignages sans preuve** (pas de photo, d'entreprise identifiable, de logo client).
12. **Section « Tarifs » trompeuse** : le lien « Tarifs » mène à une section qui ne montre **aucun prix**.
13. **Liens non fonctionnels** : la plupart des liens du footer et tous les réseaux sociaux pointent vers `#`.
14. **Email de contact générique** : `sarlphrm17@gmail.com` (Gmail) alors que la marque possède le domaine `phrm.app` → incohérence de professionnalisme.

### D. Accessibilité & qualité (à corriger, impacte la perception de marque)
15. **Plusieurs problèmes de contraste / lisibilité** :
    - Le mot « PHRM » du footer est en bleu marine sur fond **quasi noir** → presque invisible.
    - Section Contact : sous-titres et textes en **bleu sur fond bleu marine** → peu lisibles.
    - Bandeau « Libre-service » et bandeau CTA du blog : **texte noir sur dégradé bleu foncé** → illisible.
16. **Dégradés « vides »** : plusieurs dégradés vont d'une couleur **vers elle-même** (`bleu → bleu`) — vestige de copier-coller, sans effet.
17. **Couleurs dynamiques non rendues** : les pastilles d'avatars des témoignages utilisent des classes de couleur générées dynamiquement qui **risquent de ne pas s'afficher** (fond manquant).

---

## 6. Décisions de marque à trancher (questions pour l'expert)

1. **Architecture de marque** : marque ombrelle « PHRM » + sous-marques par module, ou produit unique « PHRM » avec modules ? Quel impact sur logos, noms, couleurs ?
2. **Couleur(s)** : garde-t-on le bleu marine `#0F3B67`, ou redéfinit-on une primaire unique pour tout l'écosystème ? Faut-il une **couleur d'accent par module** (ex. RH = bleu, Compta = vert) dans un système cohérent ?
3. **Typographie** : quelle police de titre + texte (lisibilité chiffres/tableaux pour la paie et la compta) ? Licence web compatible.
4. **Logo** : refonte d'un logotype + système de déclinaisons (clair/sombre, favicon, par module) ?
5. **Direction visuelle** : photographies (professionnels africains), illustrations de marque, ou captures produit réelles ? Quel équilibre ? Niveau d'animation souhaité (sobre vs dynamique) ?
6. **Ton & messages** : assume-t-on les chiffres de performance ? Avec quelles preuves (études de cas, logos clients réels) ?

---

## 7. Livrables suggérés à demander à l'expert

- **Plateforme de marque** courte : positionnement, promesse, personnalité, ton.
- **Architecture de marque** (ombrelle vs produit, nommage des modules).
- **Charte graphique** : logo + déclinaisons, palette structurée (primaire/secondaire/neutres/sémantiques) **unifiée sur les 3 apps**, typographie (titres/texte/chiffres), iconographie, règles d'animation.
- **Direction artistique** : style photo/illustration, traitement des captures produit, motifs/fonds.
- **Kit de composants UI** de référence (boutons, cartes, badges, tableaux) cohérent avec les apps RH (React/Tailwind+MUI) et Compta (Vue/Tailwind).
- **Maquettes** de la nouvelle page d'accueil (Hero + section écosystème en priorité).

---

## 8. Annexe — contexte technique (pour information)

- **Site vitrine** : React 18 + Vite + Tailwind CSS v3, déployé sur Vercel. Page unique, sections en composants.
- **App RH/Paie** (`paie.phrm.app`) : React 19 + Firebase, Tailwind v3 + MUI v7.
- **App Comptabilité** (`compta.phrm.app`) : Vue 3 + Firebase, Tailwind v4.
- Les trois partagent **Firebase** comme back-end et **Tailwind** pour le style — un **design system commun** (tokens de couleur/typo) serait donc techniquement réaliste et très rentable.
- La couleur de marque du site est aujourd'hui codée « en dur » en CSS (avec `!important`), hors de la configuration Tailwind — à reprendre proprement lors de la refonte.

_Fin du document._
