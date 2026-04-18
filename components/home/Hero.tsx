"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-burgundy/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-brand-rose/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block bg-brand-burgundy/20 text-brand-rose border border-brand-burgundy/30 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                وكالة تسويق رقمي إبداعية 🎯
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
            >
              اجعل علامتك التجارية{" "}
              <span className="text-brand-rose">تتألق</span>
              {" "}في العالم الرقمي
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg text-brand-gray leading-relaxed max-w-lg"
            >
              نحن توب تريند — وكالة متخصصة في إدارة وسائل التواصل الاجتماعي،
              صناعة المحتوى الإبداعي، والإعلانات الرقمية. نتائج حقيقية، استراتيجية
              مدروسة.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/request"
                className="bg-brand-burgundy hover:bg-brand-burgundy-dark text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-300 shadow-lg hover:shadow-brand-burgundy/30 hover:shadow-xl hover:-translate-y-0.5"
              >
                ابدأ رحلتك معنا ←
              </Link>
              <Link
                href="/services"
                className="border-2 border-white/20 text-white hover:border-brand-rose hover:text-brand-rose font-semibold px-8 py-4 rounded-full text-base transition-all duration-300"
              >
                استعرض باقاتنا
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-14 grid grid-cols-3 gap-6"
            >
              {[
                { value: "٤+", label: "خدمات متكاملة" },
                { value: "AI", label: "محتوى مدعوم بالذكاء الاصطناعي" },
                { value: "٣", label: "باقات تناسب كل ميزانية" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-extrabold text-brand-rose mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-brand-gray leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Logo / visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-brand-burgundy/30 blur-2xl scale-110" />
              <div className="relative bg-brand-burgundy/10 border border-brand-burgundy/20 rounded-3xl p-10 backdrop-blur-sm">
                <Image
                  src="/logo-dark.jpeg"
                  alt="توب تريند"
                  width={280}
                  height={280}
                  className="rounded-2xl"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-brand-cream to-transparent pointer-events-none" />
    </section>
  );
}
