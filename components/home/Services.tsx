"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  {
    number: "01",
    title: "إدارة السوشيال ميديا",
    subtitle: "نمو وتفاعل",
    body: "ندير حساباتك على منصات التواصل الاجتماعي باحترافية لتعزيز الوصول وبناء مجتمع حول علامتك.",
    icon: "📱",
  },
  {
    number: "02",
    title: "صناعة المحتوى الإبداعي",
    subtitle: "استراتيجية ومحتوى",
    body: "نصمم المحتوى البصري ونكتب النصوص الجذابة التي تعكس هوية علامتك وتحقق التفاعل.",
    icon: "🎨",
  },
  {
    number: "03",
    title: "الإعلانات الرقمية",
    subtitle: "إعلانات وجذب عملاء",
    body: "نصمم وندير حملات إعلانية مدفوعة تستهدف جمهورك المثالي وتحقق نتائج قابلة للقياس.",
    icon: "📢",
  },
  {
    number: "04",
    title: "الهوية البصرية والبراندينج",
    subtitle: "تصميم وتميز",
    body: "نبني هوية بصرية متكاملة وقوية تعكس روح علامتك وتجعلها لا تُنسى.",
    icon: "💎",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="خدماتنا"
          title="ما الذي نقدمه لك؟"
          subtitle="أربع خدمات متكاملة مصممة لبناء حضورك الرقمي وتنمية علامتك التجارية."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative bg-brand-cream rounded-3xl p-8 border border-brand-blush hover:border-brand-burgundy/20 hover:shadow-card-hover transition-all duration-400 overflow-hidden"
            >
              {/* Background number */}
              <span className="absolute top-4 left-6 text-7xl font-extrabold text-brand-blush select-none pointer-events-none transition-colors group-hover:text-brand-burgundy/10">
                {service.number}
              </span>

              <div className="relative z-10">
                <div className="text-4xl mb-4">{service.icon}</div>
                <span className="text-xs font-semibold text-brand-burgundy uppercase tracking-widest bg-brand-burgundy/8 px-3 py-1 rounded-full">
                  {service.subtitle}
                </span>
                <h3 className="text-xl font-bold text-brand-dark mt-3 mb-3 group-hover:text-brand-burgundy transition-colors">
                  {service.title}
                </h3>
                <p className="text-brand-gray leading-relaxed text-sm">{service.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
