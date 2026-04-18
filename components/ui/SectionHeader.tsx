"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? "text-center" : "text-right"}`}
    >
      {label && (
        <span
          className={`inline-block text-sm font-semibold tracking-widest uppercase mb-3 px-4 py-1 rounded-full border ${
            light
              ? "text-brand-blush border-brand-blush/30 bg-white/10"
              : "text-brand-burgundy border-brand-burgundy/20 bg-brand-burgundy/5"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold leading-tight ${
          light ? "text-white" : "text-brand-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg max-w-2xl ${centered ? "mx-auto" : ""} leading-relaxed ${
            light ? "text-brand-blush/80" : "text-brand-gray"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-5 h-1 w-16 rounded-full ${centered ? "mx-auto" : "mr-0"} ${
          light ? "bg-white/40" : "bg-brand-burgundy"
        }`}
      />
    </motion.div>
  );
}
