"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

const packages = [
  {
    name: "Start",
    nameAr: "باقة البداية",
    price: "٢٥٠٠",
    tag: null,
    description: "مثالية للشركات الجديدة والمشاريع الصغيرة",
    features: ["٢ منصة سوشيال ميديا", "١٢ منشور شهرياً", "١٢ ستوري", "٤ ريلز", "تقرير شهري"],
    highlighted: false,
  },
  {
    name: "Grow",
    nameAr: "باقة النمو",
    price: "٤٥٠٠",
    tag: "الأكثر طلباً",
    description: "مثالية للشركات الراغبة في حضور أقوى",
    features: ["٣ منصات سوشيال ميديا", "٢٢ منشور شهرياً", "٢٢ ستوري", "٨ ريلز", "متابعة الرسائل والتعليقات"],
    highlighted: true,
  },
  {
    name: "Pro",
    nameAr: "الباقة الاحترافية",
    price: "٨٥٠٠",
    tag: null,
    description: "للشركات الراغبة في نمو أسرع وتأثير أقوى",
    features: ["٤ منصات سوشيال ميديا", "٣٠ منشور شهرياً", "٣٠ ستوري", "١٥ ريلز", "إدارة المجتمع", "تقرير مفصّل"],
    highlighted: false,
  },
];

export default function PackagesPreview() {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="الباقات"
          title="اختر الباقة المناسبة"
          subtitle="ثلاث باقات مصممة لتناسب مختلف أحجام الأعمال والميزانيات."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative rounded-3xl p-8 border flex flex-col transition-all duration-300 ${
                pkg.highlighted
                  ? "bg-brand-burgundy text-white border-brand-burgundy shadow-2xl shadow-brand-burgundy/20 scale-[1.03]"
                  : "bg-white text-brand-dark border-brand-blush hover:border-brand-burgundy/20 hover:shadow-card"
              }`}
            >
              {pkg.tag && (
                <div className="absolute -top-3.5 right-1/2 translate-x-1/2">
                  <span className="bg-brand-rose text-brand-dark text-xs font-bold px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
                    {pkg.tag}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <span
                  className={`text-xs font-bold uppercase tracking-widest ${
                    pkg.highlighted ? "text-brand-rose" : "text-brand-burgundy"
                  }`}
                >
                  {pkg.name}
                </span>
                <h3
                  className={`text-xl font-extrabold mt-1 ${
                    pkg.highlighted ? "text-white" : "text-brand-dark"
                  }`}
                >
                  {pkg.nameAr}
                </h3>
                <p
                  className={`text-sm mt-2 ${
                    pkg.highlighted ? "text-brand-rose/80" : "text-brand-gray"
                  }`}
                >
                  {pkg.description}
                </p>
              </div>

              <div className="mb-8" />

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <span
                      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                        pkg.highlighted
                          ? "bg-white/20 text-white"
                          : "bg-brand-burgundy/10 text-brand-burgundy"
                      }`}
                    >
                      ✓
                    </span>
                    <span className={pkg.highlighted ? "text-white/90" : "text-brand-dark"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/request"
                className={`block text-center font-bold py-3 rounded-full transition-all duration-300 ${
                  pkg.highlighted
                    ? "bg-white text-brand-burgundy hover:bg-brand-blush"
                    : "bg-brand-burgundy text-white hover:bg-brand-burgundy-dark"
                }`}
              >
                اطلب الآن
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="text-brand-burgundy font-semibold hover:underline text-sm"
          >
            استعرض جميع الباقات والخدمات ←
          </Link>
        </div>
      </div>
    </section>
  );
}
