"use client";

import { MotionConfig, motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { gsrWhileInViewViewport, type GsrScrollTriggerViewport } from "@/lib/gsr-motion-viewport";

export const gsrEase = [0.22, 1, 0.36, 1] as const;

export const gsrViewport = gsrWhileInViewViewport;

export const gsrSectionVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 44 },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.96, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
  },
} as const;

export type GsrSectionMotion = keyof typeof gsrSectionVariants;

export const gsrSectionTransition = { duration: 0.68, ease: gsrEase } as const;

/** Respecte les préférences « réduire les animations » du système. */
export function LeCoinMotionShell({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function GsrHeaderIntro({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function GsrHeaderIntroItem({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: -14 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.58, ease: gsrEase } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function GsrHeroTitle({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.78, ease: gsrEase }}
    >
      {children}
    </motion.div>
  );
}

export function GsrHeroCard({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.82, delay: 0.12, ease: gsrEase }}
    >
      {children}
    </motion.div>
  );
}

export function GsrHeroSubline({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.42, ease: gsrEase }}
    >
      {children}
    </motion.p>
  );
}

export function GsrSection({
  id,
  className,
  children,
  motion: motionName = "fadeUp",
  transition = gsrSectionTransition,
  viewport = gsrWhileInViewViewport,
  "aria-label": ariaLabel,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  motion?: GsrSectionMotion;
  transition?: { duration: number; ease: readonly [number, number, number, number] };
  viewport?: GsrScrollTriggerViewport;
  "aria-label"?: string;
}) {
  return (
    <motion.section
      id={id}
      aria-label={ariaLabel}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={gsrSectionVariants[motionName]}
      transition={transition}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export function GsrStagger({
  className,
  children,
  stagger = 0.08,
  delayChildren = 0.06,
  viewport = gsrWhileInViewViewport,
}: {
  className?: string;
  children: ReactNode;
  stagger?: number;
  delayChildren?: number;
  viewport?: GsrScrollTriggerViewport;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function GsrStaggerItem({
  children,
  className,
  slide = "up",
  duration = 0.5,
}: {
  children: ReactNode;
  className?: string;
  slide?: "up" | "left" | "right";
  duration?: number;
}) {
  const dir =
    slide === "left" ? { x: -22, y: 0 } : slide === "right" ? { x: 22, y: 0 } : { x: 0, y: 22 };
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...dir },
        visible: { opacity: 1, x: 0, y: 0, transition: { duration, ease: gsrEase } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function GsrReveal({
  children,
  className,
  delay = 0,
  duration = 0.58,
  viewport = gsrWhileInViewViewport,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  viewport?: GsrScrollTriggerViewport;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration, delay, ease: gsrEase }}
    >
      {children}
    </motion.div>
  );
}

export function GsrImageReveal({
  children,
  className,
  zoom = 1.04,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  zoom?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      initial={{ opacity: 0, scale: zoom }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={gsrWhileInViewViewport}
      transition={{ duration: 0.82, delay, ease: gsrEase }}
    >
      {children}
    </motion.div>
  );
}

export function GsrFooter({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <motion.footer
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={gsrWhileInViewViewport}
      transition={{ duration: 0.58, ease: gsrEase }}
    >
      {children}
    </motion.footer>
  );
}
