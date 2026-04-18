"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const values = [
  {
    icon: "🎯",
    title: "رسالتنا",
    body: "تقديم حلول تسويق رقمي مخصصة تعزز حضور علامتك التجارية، وتزيد التفاعل، وتحقق نتائج قابلة للقياس.",
  },
  {
    icon: "🌟",
    title: "رؤيتنا",
    body: "أن نكون الشريك الإبداعي الموثوق للعلامات التجارية الطامحة إلى نمو رقمي حديث واستراتيجي يحقق النتائج.",
  },
];

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="من نحن"
          title="توب تريند — شريكك الإبداعي"
          subtitle="وكالة متخصصة في التسويق الرقمي وإدارة وسائل التواصل الاجتماعي، نساعد الشركات على بناء حضور رقمي قوي والتواصل مع جمهورها بفاعلية."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-brand-cream rounded-2xl p-8 border border-brand-blush hover:border-brand-burgundy/20 transition-all duration-300 hover:shadow-card group"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-burgundy transition-colors">
                {item.title}
              </h3>
              <p className="text-brand-gray leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>

        {/* AI badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 bg-gradient-to-l from-brand-burgundy/5 to-brand-blush rounded-2xl p-6 border border-brand-burgundy/10 flex items-center gap-4"
        >
          <span className="text-3xl">🤖</span>
          <div>
            <h4 className="font-bold text-brand-dark mb-1">مدعوم بالذكاء الاصطناعي</h4>
            <p className="text-sm text-brand-gray">
              نستخدم تقنيات الذكاء الاصطناعي لتطوير وتحسين المحتوى الإعلاني
              الخاص بنا، مع إشراف بشري احترافي يضمن الدقة والجودة.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
