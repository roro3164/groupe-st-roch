/** `whileInView` — même idée que Niña / MCW : déclenchement fiable sur mobile. */
export const gsrWhileInViewViewport = {
  once: true,
  amount: 0.2,
  margin: "0px",
} as const;

export type GsrScrollTriggerViewport = typeof gsrWhileInViewViewport;
