"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    step: "١",
    title: "الاستكشاف",
    body: "نفهم عملك وأهدافك وجمهورك المستهدف لنبني معك من الصفر.",
  },
  {
    step: "٢",
    title: "الاستراتيجية",
    body: "نضع خطة محتوى مخصصة تناسب هوية علامتك التجارية وأهدافها.",
  },
  {
    step: "٣",
    title: "الإنتاج",
    body: "نصمم المحتوى البصري ونكتب النصوص الجذابة باحترافية عالية.",
  },
  {
    step: "٤",
    title: "المراجعة والاعتماد",
    body: "نشاركك المحتوى للمراجعة والموافقة قبل النشر.",
  },
  {
    step: "٥",
    title: "النشر والتحسين",
    body: "ننشر المحتوى ونحلل الأداء شهرياً لتحقيق أفضل النتائج.",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="كيف نعمل"
          title="منهجية عملنا"
          subtitle="نتبع منهجية واضحة ومثبتة لضمان أفضل النتائج في كل مشروع."
          light
        />

        {/* Timeline */}
        <div className="relative mt-4">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-10 right-10 left-10 h-0.5 bg-brand-burgundy/30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative text-center"
              >
                {/* Circle */}
                <div className="mx-auto w-16 h-16 rounded-full bg-brand-burgundy border-4 border-brand-burgundy/30 flex items-center justify-center mb-5 relative z-10">
                  <span className="text-white text-xl font-extrabold">{step.step}</span>
                </div>
                <h4 className="font-bold text-white text-base mb-2">{step.title}</h4>
                <p className="text-sm text-brand-gray leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
