# Groupe Saint-Roch (@rdc/groupe-st-roch)

Vitrine **autonome** (comme Deli’s Corner et Niña Bonita) : une app Next déployable sur **son propre domaine / sous-domaine**.

## Développement local

```bash
cd rdc-builder
npm install
npm run dev:groupe-st-roch
```

- **URL** : [http://127.0.0.1:3012/](http://127.0.0.1:3012/)
- **Build** : `npm run build -w @rdc/groupe-st-roch`
- **Start** : `npm run start -w @rdc/groupe-st-roch`

## Variables d’environnement

| Variable | Rôle |
|----------|------|
| `NEXT_PUBLIC_SITE_URL` | URL **publique** de **ce** site (ex. `https://groupe-saint-roch.fr`) — utilisée pour `metadataBase` / canonical en prod. |
| `NEXT_PUBLIC_DELIS_URL` | Lien vers le site **Deli’s Corner** (ex. `https://deliscorner.com`). Défaut dev : `http://127.0.0.1:3010` |
| `NEXT_PUBLIC_NINA_URL` | Lien vers le site **Niña Bonita**. Défaut dev : `http://127.0.0.1:3011` |

Les deux dernières alimentent les boutons « Découvrir Deli’s / Niña ». Ce projet **n’est pas** monté sous Deli ou Niña : c’est un **troisième déploiement** à part.
