"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const reasons = [
  {
    icon: "✨",
    title: "محتوى إبداعي مخصص",
    body: "نصمم كل محتوى ليعكس هوية علامتك التجارية ويجذب جمهورك المستهدف.",
  },
  {
    icon: "⚡",
    title: "تواصل سريع ومنظم",
    body: "نحرص على أن تكون العملية بسيطة وسريعة وسهلة المتابعة في كل خطوة.",
  },
  {
    icon: "🌐",
    title: "محتوى ثنائي اللغة",
    body: "نقدم محتوى باللغتين العربية والإنجليزية لتوسيع نطاق وصولك.",
  },
  {
    icon: "📊",
    title: "حضور بصري متسق",
    body: "نضمن حضوراً بصرياً متناسقاً عبر جميع المنصات لتعزيز هوية علامتك.",
  },
  {
    icon: "🧠",
    title: "محتوى استراتيجي",
    body: "محتوى مدروس ومخطط، لا عشوائي. نبني استراتيجية تتناسب مع أهداف عملك.",
  },
  {
    icon: "📦",
    title: "باقات مرنة",
    body: "باقات متنوعة تناسب مختلف الأحجام والميزانيات، مع إمكانية التخصيص الكامل.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="لماذا توب تريند"
          title="ما الذي يجعلنا مختلفين؟"
          subtitle="لا نقدم خدمات عشوائية — نبني شراكة استراتيجية حقيقية مع علامتك التجارية."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group bg-white rounded-2xl p-6 border border-brand-blush hover:border-brand-burgundy/30 hover:shadow-card transition-all duration-300"
            >
              <div className="text-3xl mb-4">{reason.icon}</div>
              <h3 className="font-bold text-brand-dark text-lg mb-2 group-hover:text-brand-burgundy transition-colors">
                {reason.title}
              </h3>
              <p className="text-sm text-brand-gray leading-relaxed">{reason.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
