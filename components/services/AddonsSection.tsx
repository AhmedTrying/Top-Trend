"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const addons = [
  { name: "جلسة تصوير محتوى", price: "٥٠٠ – ١٥٠٠ درهم", icon: "📸" },
  { name: "ريلز / مقطع فيديو قصير", price: "٢٥٠ – ٥٠٠ درهم", icon: "🎬" },
  { name: "كتابة محتوى (عربي / إنجليزي)", price: "٥٠٠ – ١٠٠٠ درهم", icon: "✍️" },
  { name: "تصميم وتطوير موقع إلكتروني", price: "٣٠٠٠ – ١٥٠٠٠ درهم", icon: "🌐" },
  {
    name: "إدارة حملة مؤثرين",
    price: "٢٠٠٠ درهم (لا تشمل أتعاب المؤثر)",
    icon: "⭐",
  },
];

export default function AddonsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="إضافات"
          title="خدمات إضافية اختيارية"
          subtitle="أضف ما تحتاجه لباقتك الأساسية بمرونة تامة."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {addons.map((addon, i) => (
            <motion.div
              key={addon.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-4 bg-brand-cream rounded-2xl p-5 border border-brand-blush hover:border-brand-burgundy/20 hover:shadow-card transition-all duration-300"
            >
              <span className="text-2xl mt-0.5">{addon.icon}</span>
              <div>
                <h4 className="font-bold text-brand-dark text-sm mb-1">{addon.name}</h4>
                <p className="text-brand-burgundy font-semibold text-sm">{addon.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
