"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-24 bg-brand-burgundy overflow-hidden relative">
      {/* Decorative circles */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            علامتك التجارية تستحق أن تتميز
          </h2>
          <p className="text-brand-rose/80 text-lg mb-10 leading-relaxed">
            دعنا نصنعها معاً — تواصل معنا اليوم وابدأ رحلتك نحو حضور رقمي قوي وحقيقي.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request"
              className="bg-white text-brand-burgundy font-bold px-10 py-4 rounded-full text-base hover:bg-brand-blush transition-all duration-300 shadow-lg"
            >
              اطلب خدمة الآن
            </Link>
            <a
              href="https://api.whatsapp.com/send/?phone=971522729796&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/30 text-white font-semibold px-10 py-4 rounded-full text-base hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              تواصل واتساب 💬
            </a>
          </div>

          <div className="mt-8 flex flex-col items-center gap-1 text-sm">
            <span dir="ltr" className="text-brand-rose/50">+971 52 272 9796</span>
            <span dir="ltr" className="text-brand-rose/30 text-xs">+966 56 086 1010</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
