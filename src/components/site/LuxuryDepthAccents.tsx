"use client";

import { motion, useReducedMotion } from "framer-motion";

type LuxuryDepthAccentsProps = {
  className?: string;
  variant?: "hero" | "section" | "cta";
  ribbon?: boolean;
};

const variantClasses: Record<NonNullable<LuxuryDepthAccentsProps["variant"]>, string> = {
  hero: "opacity-100",
  section: "opacity-85",
  cta: "opacity-95",
};

export default function LuxuryDepthAccents({
  className = "",
  variant = "section",
  ribbon = false,
}: LuxuryDepthAccentsProps) {
  const reduceMotion = useReducedMotion();

  const floatSlow = reduceMotion
    ? undefined
    : {
        y: [0, -14, 0, 10, 0],
        x: [0, 10, 0, -8, 0],
      };

  const floatOrb = reduceMotion
    ? undefined
    : {
        y: [0, 12, 0, -10, 0],
        x: [0, -10, 0, 8, 0],
      };

  const pulseGlow = reduceMotion ? undefined : { opacity: [0.48, 0.8, 0.48] };

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${variantClasses[variant]} ${className}`}
    >
      <motion.div
        className="absolute -left-12 top-[10%] h-52 w-52 rounded-full bg-[radial-gradient(circle,var(--luxe-pearl),transparent_68%)] blur-[var(--luxe-blur)] md:h-72 md:w-72"
        animate={floatSlow}
        transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-8%] top-[12%] hidden h-56 w-56 rounded-full border border-[rgba(255,249,238,0.18)] bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.02))] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-md md:block"
        animate={floatOrb}
        transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[10%] top-[32%] h-28 w-28 rounded-full bg-[radial-gradient(circle,var(--luxe-champagne),transparent_70%)] blur-[calc(var(--luxe-blur)*0.75)] md:h-44 md:w-44"
        animate={pulseGlow}
        transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[8%] left-[24%] hidden h-20 w-[38%] rounded-full bg-[linear-gradient(90deg,rgba(255,244,230,0.12),rgba(231,201,124,0.08),rgba(234,193,184,0.14))] blur-3xl md:block"
        animate={reduceMotion ? undefined : { x: [0, 22, 0], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      {ribbon ? <div className="luxury-ribbon" /> : null}
    </div>
  );
}
