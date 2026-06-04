import Image from "next/image";
import Link from "next/link";
import { LeCoinGalleryColumns } from "@/components/le-coin-gallery-columns";
import {
  GsrFooter,
  GsrHeaderIntro,
  GsrHeaderIntroItem,
  GsrHeroCard,
  GsrHeroSubline,
  GsrHeroTitle,
  GsrReveal,
  GsrSection,
  GsrStagger,
  GsrStaggerItem,
  LeCoinMotionShell,
} from "@/components/le-coin-motion";
import { cn } from "@/lib/cn";
import { getDelisSiteUrl, getNinaSiteUrl } from "@/lib/site-urls";

const HERO_IMAGE =
  "/images/ChatGPT%20Image%209%20mai%202026%2C%2013_59_17%201.webp";

const DELI_RESTAURANT_IMG = "/images/external/delis/hero-main.webp";
/** Fond de la grande zone hero (titre + carte duo). */
const HERO_SECTION_BG = "/images/heroplace.webp";
const NINA_RESTAURANT_IMG = "/nina.webp";

function SectionTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        "font-[family-name:var(--font-display-serif)] text-2xl font-bold tracking-tight text-[var(--gsr-ink)] sm:text-3xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}

function SectionAccent() {
  return (
    <div className="mb-3 flex justify-center sm:mb-4">
      <span
        className="h-1 w-12 rounded-full bg-gradient-to-r from-[var(--gsr-deli)] via-[var(--gsr-nina-gold)]/90 to-[var(--gsr-deli)]"
        aria-hidden
      />
    </div>
  );
}

export default function LeCoinSaintRochPage() {
  const delisUrl = getDelisSiteUrl();
  const ninaUrl = getNinaSiteUrl();

  return (
    <LeCoinMotionShell>
      <div className="min-h-screen">
      <header className="relative z-10 border-b border-black/[0.08] bg-gradient-to-b from-white via-[var(--gsr-cream)]/35 to-white shadow-[0_1px_0_0_rgba(0,0,0,0.03)]">
        <div
          className="h-[3px] w-full bg-gradient-to-r from-[var(--gsr-deli)] via-[var(--gsr-nina-gold)] to-[var(--gsr-deli)]"
          aria-hidden
        />
        <GsrHeaderIntro className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-6 sm:py-6">
          <GsrHeaderIntroItem className="text-center sm:text-left">
            <p className="font-[family-name:var(--font-display-serif)] text-2xl font-bold tracking-tight text-[var(--gsr-ink)] sm:text-3xl md:text-[2rem]">
              Le Coin Saint-Roch
            </p>
            <p className="mt-2 max-w-xl font-[family-name:var(--font-dm)] text-[0.9rem] font-medium leading-snug text-[var(--gsr-muted)] sm:text-[0.95rem]">
              <span className="font-semibold text-[var(--gsr-ink)]">Deli&apos;s Corner</span>
              <span className="mx-2 font-light text-[var(--gsr-muted)]/65">×</span>
              <span className="font-semibold text-[var(--gsr-ink)]">Niña Bonita</span>
              <span className="mt-1 block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--gsr-deli-dark)] sm:mt-1.5 sm:inline sm:before:mx-2 sm:before:inline sm:before:font-light sm:before:text-[var(--gsr-muted)] sm:before:content-['·']">
                Concept hybride
              </span>
            </p>
          </GsrHeaderIntroItem>

          <GsrHeaderIntroItem className="flex flex-col items-center sm:items-end">
            <p className="rounded-full border border-[var(--gsr-deli)]/22 bg-white/85 px-3.5 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.24em] text-[var(--gsr-deli-dark)] shadow-[0_2px_12px_rgba(27,88,64,0.08)] backdrop-blur-[2px] sm:px-4">
              Montpellier — Quartier Saint-Roch
            </p>
          </GsrHeaderIntroItem>
        </GsrHeaderIntro>
      </header>

      <main>
        <section className="border-b border-black/10">
          <div className="relative overflow-hidden pb-4 pt-3 sm:pb-5 sm:pt-4">
            {/* Grande section : hero Deli&apos;s derrière titre + carte (hors conteneur arrondi) */}
            <div
              className="pointer-events-none absolute inset-0 bg-cover bg-[center_42%] bg-no-repeat sm:bg-center"
              style={{ backgroundImage: `url("${HERO_SECTION_BG}")` }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/38 to-black/52"
              aria-hidden
            />

            <div className="relative z-10">
              <GsrHeroTitle className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
                <div
                  className="pointer-events-none absolute -top-1 left-1/2 h-28 w-[min(100%,26rem)] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.07),transparent_72%)]"
                  aria-hidden
                />
                <h1 className="relative text-pretty font-[family-name:var(--font-display-serif)] text-[1.5rem] font-semibold leading-snug tracking-tight text-white sm:text-3xl md:text-[2.5rem] md:leading-[1.15] [text-shadow:0_2px_24px_rgba(0,0,0,0.65),0_1px_2px_rgba(0,0,0,0.9)]">
                  Le concept hybride s&apos;invite à Montpellier
                  <br />
                  <span className="mt-0.5 inline-block text-[0.9em] font-medium italic leading-snug text-white/88 sm:mt-1">
                    coffee shop &amp; sandwicherie le jour, tapas andalouses le soir.
                  </span>
                </h1>
              </GsrHeroTitle>

              <div className="mx-auto mt-2 max-w-xl px-4 sm:mt-3 sm:max-w-3xl sm:px-6 md:mt-3 md:max-w-4xl lg:max-w-5xl">
                <GsrHeroCard className="relative overflow-hidden rounded-2xl border border-black/10 bg-[#ebe9e4] shadow-[0_10px_40px_rgba(0,0,0,0.09),inset_0_1px_0_0_rgba(255,255,255,0.45)] ring-1 ring-black/[0.05] sm:rounded-3xl">
                  <Image
                    src={HERO_IMAGE}
                    alt="Deli&apos;s Corner le midi, Niña Bonita le soir — même lieu à Montpellier, Saint-Roch"
                    width={4755}
                    height={3144}
                    className="relative z-[1] h-auto w-full object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 48rem, 64rem"
                    priority
                  />

                  <div
                    className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_65%_58%_at_25%_50%,rgba(0,0,0,0.22),transparent_62%),radial-gradient(ellipse_65%_58%_at_75%_50%,rgba(0,0,0,0.22),transparent_62%),linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.06)_50%,transparent_100%)]"
                    aria-hidden
                  />

                  <div className="pointer-events-none absolute inset-0 z-10">
                  <div className="pointer-events-auto absolute inset-y-0 left-0 flex w-1/2 items-center justify-center px-1 sm:px-3 md:px-5">
                    <a
                      href={delisUrl}
                      aria-label="Découvrir Deli&apos;s Corner"
                      className={cn(
                        "inline-flex min-h-[2.65rem] items-center justify-center rounded-xl border border-white/60 px-5 py-2.5 text-center shadow-[0_4px_20px_rgba(0,0,0,0.12)] ring-1 ring-white/35 transition-all duration-200 sm:min-h-[3.35rem] sm:rounded-[1.35rem] sm:px-10 sm:py-3.5",
                        "bg-gradient-to-b from-[var(--gsr-deli)]/26 to-[var(--gsr-deli-dark)]/34 text-white backdrop-blur-2xl backdrop-saturate-150",
                        "hover:from-[var(--gsr-deli)]/40 hover:to-[var(--gsr-deli-dark)]/50 hover:border-white/75 hover:shadow-[0_8px_28px_rgba(19,72,50,0.22)] active:scale-[0.99]",
                        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gsr-deli)]",
                      )}
                    >
                      <span className="text-[0.78rem] font-bold uppercase tracking-[0.18em] text-white sm:text-[0.92rem] sm:tracking-[0.24em] [text-shadow:0_1px_2px_rgba(0,0,0,0.92),0_0_20px_rgba(0,0,0,0.55),0_0_1px_rgba(0,0,0,1)]">
                        Découvrir
                      </span>
                    </a>
                  </div>
                  <div className="pointer-events-auto absolute inset-y-0 right-0 flex w-1/2 items-center justify-center px-1 sm:px-3 md:px-5">
                    <a
                      href={ninaUrl}
                      aria-label="Découvrir Niña Bonita"
                      className={cn(
                        "inline-flex min-h-[2.65rem] items-center justify-center rounded-xl border border-[var(--gsr-nina-gold)]/55 px-5 py-2.5 text-center shadow-[0_4px_20px_rgba(0,0,0,0.15)] ring-1 ring-[var(--gsr-nina-gold)]/28 transition-all duration-200 sm:min-h-[3.35rem] sm:rounded-[1.35rem] sm:px-10 sm:py-3.5",
                        "bg-gradient-to-b from-[var(--gsr-deli-dark)]/18 to-black/26 text-white backdrop-blur-2xl backdrop-saturate-150",
                        "hover:from-[var(--gsr-deli-dark)]/34 hover:to-black/40 hover:border-[var(--gsr-nina-gold)]/72 hover:shadow-[0_8px_28px_rgba(0,0,0,0.22)] active:scale-[0.99]",
                        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gsr-nina-gold)]",
                      )}
                    >
                      <span className="text-[0.78rem] font-bold uppercase tracking-[0.18em] text-[var(--gsr-nina-gold)] brightness-110 contrast-[1.08] sm:text-[0.92rem] sm:tracking-[0.24em] [text-shadow:0_1px_3px_rgba(0,0,0,1),0_0_14px_rgba(0,0,0,0.85),0_0_24px_rgba(250,204,21,0.35)]">
                        Découvrir
                      </span>
                    </a>
                  </div>
                </div>
              </GsrHeroCard>
              </div>

              <GsrHeroSubline className="mt-2.5 text-center text-[0.68rem] font-medium uppercase tracking-[0.28em] text-white/60 sm:mt-3 sm:text-[0.7rem]">
                Choisir une expérience
              </GsrHeroSubline>
            </div>
          </div>

          <div className="border-t border-black/[0.04] bg-[var(--gsr-cream)]">
            <GsrReveal className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
              <p className="text-pretty text-center text-base leading-relaxed text-[var(--gsr-ink)]/88 sm:text-lg">
                Entre la rue des Teissiers et la rue Saint-Paul,{" "}
                <strong className="font-semibold text-[var(--gsr-ink)]">Deli&apos;s Corner</strong> et{" "}
                <strong className="font-semibold text-[var(--gsr-ink)]">Niña Bonita</strong> incarnent une nouvelle façon
                de penser la restauration : inspirée des grandes villes nordiques, avec une touche méditerranéenne. Un
                lieu vivant qui change de peau au fil de la journée — même adresse, même équipe, deux expériences.
              </p>
            </GsrReveal>
          </div>
        </section>

        <GsrSection className="border-b border-black/[0.06] bg-white px-4 py-12 sm:px-6 sm:py-14">
          <div className="mx-auto max-w-6xl">
            <SectionAccent />
            <SectionTitle className="text-center">Les deux adresses en images</SectionTitle>
            <p className="mx-auto mt-2 max-w-xl text-center text-sm text-[var(--gsr-muted)]">
              Même carrefour à Saint-Roch — deux atmosphères.
            </p>
            <GsrStagger className="mt-8 grid gap-5 md:grid-cols-2 md:gap-6 lg:mt-10">
              <GsrStaggerItem slide="left">
              <figure
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-[var(--gsr-deli)]/22 bg-[var(--gsr-cream)] shadow-[0_8px_32px_rgba(27,88,64,0.12)] ring-1 ring-black/[0.04]",
                  "transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(27,88,64,0.15)]",
                )}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10]">
                  <Image
                    src={DELI_RESTAURANT_IMG}
                    alt="Deli&apos;s Corner — visuel hero du site, coffee shop et sandwicherie à Montpellier"
                    fill
                    className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[var(--gsr-deli)]/15 via-transparent to-transparent" />
                </div>
                <figcaption className="border-t border-black/[0.06] bg-white/90 px-5 py-4 backdrop-blur-sm">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[var(--gsr-deli)]">
                    Deli&apos;s Corner
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-display-serif)] text-lg font-bold text-[var(--gsr-ink)]">
                    Le jour — café &amp; sandwiches
                  </p>
                </figcaption>
              </figure>
              </GsrStaggerItem>

              <GsrStaggerItem slide="right">
              <figure
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-[var(--gsr-nina-gold)]/40 shadow-[0_10px_36px_rgba(23,61,20,0.35)] ring-1 ring-white/10",
                  "bg-gradient-to-br from-[var(--gsr-nina-green-light)] via-[var(--gsr-nina-green)] to-[var(--gsr-nina-green-deep)]",
                  "transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_56px_rgba(23,61,20,0.45)]",
                )}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10]">
                  <Image
                    src={NINA_RESTAURANT_IMG}
                    alt="Niña Bonita — soirée tapas et ambiance chaleureuse à Montpellier"
                    fill
                    className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--gsr-nina-green-deep)]/55 via-transparent to-[var(--gsr-nina-green)]/25" />
                </div>
                <figcaption className="border-t border-white/15 bg-[var(--gsr-nina-green)]/95 px-5 py-4 backdrop-blur-[2px]">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[var(--gsr-nina-gold)]">
                    Niña Bonita
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-display-serif)] text-lg font-bold text-[var(--gsr-cream)]">
                    Le soir — tapas &amp; convivialité
                  </p>
                </figcaption>
              </figure>
              </GsrStaggerItem>
            </GsrStagger>
          </div>
        </GsrSection>

        <GsrSection className="relative px-4 py-12 sm:px-6 sm:py-14">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(201,162,39,0.06),transparent),radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(27,88,64,0.05),transparent)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-5xl">
            <SectionAccent />
            <SectionTitle className="text-center">Une journée, trois temps</SectionTitle>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[var(--gsr-muted)] sm:text-base">
              Rue des Teissiers / rue Saint-Paul — le même lieu pour enchaîner café, déjeuner et soirée.
            </p>
            <GsrStagger className="mt-10 grid list-none gap-6 p-0 sm:grid-cols-3">
              <GsrStaggerItem className="min-w-0">
                <div
                  className={cn(
                    "h-full rounded-2xl border border-[var(--gsr-deli)]/25 bg-white p-6",
                    "shadow-[0_4px_24px_rgba(0,0,0,0.05)] ring-1 ring-black/[0.04]",
                    "transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-[var(--gsr-deli)]/45 hover:shadow-[0_14px_40px_rgba(27,88,64,0.1)]",
                  )}
                >
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--gsr-deli)]">Le matin</p>
                <p className="mt-2 font-[family-name:var(--font-display-serif)] text-lg font-bold text-[var(--gsr-ink)]">
                  Coffee shop premium
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--gsr-muted)]">
                  Cafés de spécialité, vanilla latte, matcha frappé, chai latte… et le heartbeat du quartier autour
                  d&apos;une tasse.
                </p>
                </div>
              </GsrStaggerItem>
              <GsrStaggerItem className="min-w-0">
                <div
                  className={cn(
                    "h-full rounded-2xl border border-[var(--gsr-deli)]/25 bg-white p-6",
                    "shadow-[0_4px_24px_rgba(0,0,0,0.05)] ring-1 ring-black/[0.04]",
                    "transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-[var(--gsr-deli)]/45 hover:shadow-[0_14px_40px_rgba(27,88,64,0.1)]",
                  )}
                >
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--gsr-deli)]">Le midi</p>
                <p className="mt-2 font-[family-name:var(--font-display-serif)] text-lg font-bold text-[var(--gsr-ink)]">
                  Sandwicherie gourmet
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--gsr-muted)]">
                  Pain brioché travaillé, produits frais et recettes créatives — une offre digne des enseignes
                  internationales, sans quitter le centre-ville.
                </p>
                </div>
              </GsrStaggerItem>
              <GsrStaggerItem className="min-w-0">
                <div
                  className={cn(
                    "h-full rounded-2xl border border-[var(--gsr-nina-gold)]/45 p-6",
                    "bg-gradient-to-br from-[var(--gsr-nina-green-light)] via-[var(--gsr-nina-green)] to-[var(--gsr-nina-green-deep)]",
                    "shadow-[0_8px_28px_rgba(23,61,20,0.35)] ring-1 ring-white/10",
                    "transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(23,61,20,0.45)]",
                  )}
                >
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--gsr-nina-gold)]">À partir de 17h</p>
                <p className="mt-2 font-[family-name:var(--font-display-serif)] text-lg font-bold text-[var(--gsr-cream)]">
                  Niña Bonita
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/88">
                  Tapas andalouses, lumières tamisées, ambiance conviviale et festive — le lieu se métamorphose sans
                  changer d&apos;adresse.
                </p>
                </div>
              </GsrStaggerItem>
            </GsrStagger>
          </div>
        </GsrSection>

        <GsrSection className="border-t border-black/5 bg-white px-4 py-14 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <SectionAccent />
            <SectionTitle className="text-center">Trois signatures</SectionTitle>
            <GsrStagger className="mt-10 grid list-none gap-6 p-0 md:grid-cols-3">
              <GsrStaggerItem className="min-w-0">
                <div className="h-full rounded-2xl bg-[var(--gsr-cream)] p-6 ring-1 ring-black/[0.04] transition hover:shadow-md">
                <p className="font-semibold text-[var(--gsr-ink)]">Café premium</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--gsr-muted)]">
                  Une exigence de cafés et boissons gourmandes à la hauteur des grandes maisons.
                </p>
                </div>
              </GsrStaggerItem>
              <GsrStaggerItem className="min-w-0">
                <div className="h-full rounded-2xl bg-[var(--gsr-cream)] p-6 ring-1 ring-black/[0.04] transition hover:shadow-md">
                <p className="font-semibold text-[var(--gsr-ink)]">Sandwich dans du pain brioché</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--gsr-muted)]">
                  La sandwicherie comme une vraie proposition gourmet — produits frais, recettes pensées, présentation
                  soignée.
                </p>
                </div>
              </GsrStaggerItem>
              <GsrStaggerItem className="min-w-0">
                <div className="h-full rounded-2xl bg-[var(--gsr-cream)] p-6 ring-1 ring-black/[0.04] transition hover:shadow-md">
                <p className="font-semibold text-[var(--gsr-ink)]">Niña Bonita le soir</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--gsr-muted)]">
                  Cuisine du partage, méditerranéenne et andalouse : table conviviale, énergie du sud.
                </p>
                </div>
              </GsrStaggerItem>
            </GsrStagger>
          </div>
        </GsrSection>

        <GsrSection className="px-4 py-14 sm:px-6 sm:py-16">
          <GsrStagger className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
            <GsrStaggerItem slide="left">
            <div>
              <SectionTitle>À partir de 17h : le lieu change d&apos;univers</SectionTitle>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-[var(--gsr-muted)] sm:text-base">
                Sans changer d&apos;adresse, le client entre dans un nouvel univers : lumières plus tamisées,
                ambiance chaleureuse, cuisine tournée vers le partage.{" "}
                <strong className="font-semibold text-[var(--gsr-ink)]">Deli&apos;s Corner</strong> laisse place à{" "}
                <strong className="font-semibold text-[var(--gsr-ink)]">Niña Bonita</strong> — même courage au
                comptoir, autre promesse le                 soir.
              </p>
            </div>
            </GsrStaggerItem>
            <GsrStaggerItem slide="right">
            <div>
              <SectionTitle>Une seule équipe, deux expériences</SectionTitle>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-[var(--gsr-muted)] sm:text-base">
                Le modèle hybride mutualise les équipes, les installations et les espaces : optimisation des coûts,
                meilleure rentabilité du lieu, et pour le client une continuité de qualité. Ce n&apos;est pas deux
                restaurants qui cohabitent : c&apos;est{" "}
                <strong className="font-semibold text-[var(--gsr-ink)]">un seul lieu pensé intelligemment</strong>, qui
                s&apos;adapte au rythme de la journée — zéro temps mort, expérience évolutive.
              </p>
            </div>
            </GsrStaggerItem>
          </GsrStagger>
        </GsrSection>

        <GsrSection className="border-t border-black/5 bg-gradient-to-br from-[var(--gsr-deli)]/10 via-[var(--gsr-cream)] to-amber-500/10 px-4 py-14 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <SectionAccent />
            <SectionTitle>Une tendance venue du Nord… ancrée à Montpellier</SectionTitle>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-[var(--gsr-muted)] sm:text-base">
              À Copenhague, Stockholm ou Helsinki, les lieux qui changent d&apos;identité au fil de la journée sont
              devenus une référence. Ce modèle répond à des usages nouveaux : flexibilité, expériences multiples, ancrage
              dans un seul lieu de vie urbain — ici avec une personnalité méditerranéenne.{" "}
              <strong className="font-semibold text-[var(--gsr-ink)]">
                Le matin café · Le midi sandwich premium · Le soir fiesta
              </strong>
            </p>
          </div>
        </GsrSection>

        <GsrSection className="border-t border-black/[0.06] bg-gradient-to-b from-white via-[var(--gsr-cream)]/40 to-white px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <SectionAccent />
            <SectionTitle className="text-center">Galerie</SectionTitle>
            <div className="mt-8 overflow-hidden rounded-2xl border border-black/[0.08] bg-[var(--gsr-cream)]/80 shadow-inner ring-1 ring-black/[0.04] sm:mt-10">
              <LeCoinGalleryColumns />
            </div>
          </div>
        </GsrSection>

        <GsrSection className="px-4 py-16 sm:px-6">
          <GsrStagger className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <GsrStaggerItem>
              <p className="font-[family-name:var(--font-display-serif)] text-xl font-bold text-[var(--gsr-ink)] sm:text-2xl">
                Une adresse à vivre du matin à la nuit
              </p>
            </GsrStaggerItem>
            <GsrStaggerItem>
              <p className="text-sm leading-relaxed text-[var(--gsr-muted)] sm:text-base">
                Plus qu&apos;un restaurant : une façon de vivre la ville — café, déjeuner et soirée au même carrefour du
                Saint-Roch.
              </p>
            </GsrStaggerItem>
            <GsrStaggerItem className="w-full">
              <div className="flex w-full max-w-md flex-col gap-3 sm:mx-auto sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
                <a
                  href={delisUrl}
                  aria-label="Aller sur le site Deli&apos;s Corner"
                  className="inline-flex min-h-[2.625rem] flex-1 items-center justify-center rounded-xl bg-[var(--gsr-deli)] px-5 py-2.5 text-center text-[0.8125rem] font-semibold text-white shadow-md transition hover:bg-[var(--gsr-deli-dark)] sm:min-h-[3rem] sm:min-w-[11rem] sm:flex-initial sm:px-8 sm:text-base"
                >
                  Deli&apos;s Corner
                </a>
                <a
                  href={ninaUrl}
                  aria-label="Aller sur le site Niña Bonita"
                  className="inline-flex min-h-[2.625rem] flex-1 items-center justify-center rounded-xl border border-black/10 bg-[var(--gsr-nina-yellow)] px-5 py-2.5 text-center text-[0.8125rem] font-semibold text-[var(--gsr-nina-green-deep)] shadow-md transition hover:bg-[var(--gsr-nina-yellow-mid)] hover:shadow-lg sm:min-h-[3rem] sm:min-w-[11rem] sm:flex-initial sm:px-8 sm:text-base"
                >
                  Niña Bonita
                </a>
              </div>
            </GsrStaggerItem>
          </GsrStagger>
        </GsrSection>
      </main>

      <GsrFooter className="border-t border-black/10 bg-[var(--gsr-ink)] px-4 py-8 text-center text-xs text-white/65 sm:px-6">
        <p>
          Le Coin Saint-Roch —{" "}
          <a href={delisUrl} className="underline-offset-2 hover:text-white hover:underline">
            Deli&apos;s Corner
          </a>{" "}
          &{" "}
          <a href={ninaUrl} className="underline-offset-2 hover:text-white hover:underline">
            Niña Bonita
          </a>
          , Montpellier.
        </p>
        <p className="mt-3">
          <Link href="/mentions-legales" className="underline-offset-2 hover:text-white hover:underline">
            Mentions légales
          </Link>
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-2 border-t border-white/12 pt-5">
          <span className="block text-white/55">Réalisation —</span>
          <a
            href="https://romaindesigncode.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center opacity-90 transition-opacity hover:opacity-100"
          >
            <Image
              src="/logo-romain-design-code.webp"
              alt="Romain Design Code"
              width={140}
              height={41}
              className="h-7 w-auto sm:h-8"
            />
          </a>
        </div>
      </GsrFooter>
    </div>
    </LeCoinMotionShell>
  );
}
