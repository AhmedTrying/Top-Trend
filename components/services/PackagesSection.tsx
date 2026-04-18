"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

const packages = [
  {
    name: "Start",
    nameAr: "باقة البداية",
    price: "٢٥٠٠",
    description: "مثالية للشركات الجديدة والمشاريع الصغيرة",
    ideal: "الشركات الناشئة والمشاريع الجديدة",
    features: [
      "إدارة ٢ منصة سوشيال ميديا",
      "١٢ منشور شهرياً",
      "١٢ ستوري شهرياً",
      "٤ ريلز شهرياً",
      "كتابة المحتوى",
      "تصاميم ثابتة",
      "جدولة ونشر",
      "تقرير شهري أساسي",
    ],
    highlighted: false,
    color: "bg-white",
  },
  {
    name: "Grow",
    nameAr: "باقة النمو",
    price: "٤٥٠٠",
    description: "مثالية للشركات الراغبة في حضور أقوى وتفاعل أعلى",
    ideal: "الشركات الراغبة في توسيع حضورها الرقمي",
    features: [
      "إدارة ٣ منصات سوشيال ميديا",
      "٢٢ منشور شهرياً",
      "٢٢ ستوري شهرياً",
      "٨ ريلز شهرياً",
      "كتابة المحتوى",
      "تصاميم ثابتة",
      "جدولة ونشر",
      "تقرير شهري أساسي",
      "متابعة الرسائل والتعليقات (أساسي)",
    ],
    highlighted: true,
    color: "bg-brand-burgundy",
  },
  {
    name: "Pro",
    nameAr: "الباقة الاحترافية",
    price: "٨٥٠٠",
    description: "للشركات الراغبة في نمو أسرع وتأثير رقمي أقوى",
    ideal: "الشركات الراغبة في نمو متسارع وحضور احترافي",
    features: [
      "إدارة ٤ منصات سوشيال ميديا",
      "٣٠ منشور شهرياً",
      "٣٠ ستوري شهرياً",
      "١٥ ريلز / مقاطع قصيرة",
      "خطة محتوى شهرية",
      "إدارة المجتمع",
      "تقرير أداء مفصّل",
      "اجتماع مراجعة شهري",
    ],
    highlighted: false,
    color: "bg-white",
  },
];

const extraServices = [
  {
    name: "تصميم الهوية البصرية",
    price: "تبدأ من ٩٩٩ درهم",
    features: [
      "تصميم شعار احترافي",
      "دليل الهوية البصرية",
      "تصاميم مطبوعات أساسية",
      "قوالب سوشيال ميديا",
      "هوية متكاملة للشركة",
      "بطاقة أعمال",
      "ألوان وخطوط العلامة التجارية",
      "بروفايل الشركة",
    ],
    icon: "💎",
  },
  {
    name: "خدمات الذكاء الاصطناعي",
    price: "تبدأ من ٢٩٩ درهم فقط",
    features: [
      "شعار بالذكاء الاصطناعي",
      "فيديوهات وريلز بالذكاء الاصطناعي",
      "صور براند بالذكاء الاصطناعي",
      "موديلز افتراضية",
      "تصاميم تسويقية بالذكاء الاصطناعي",
      "بروفايل شركة بالذكاء الاصطناعي",
      "كتابة محتوى إعلاني بالذكاء الاصطناعي",
    ],
    icon: "🤖",
  },
];

export default function PackagesSection() {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="الباقات الشهرية"
          title="باقات إدارة السوشيال ميديا"
          subtitle="باقات شاملة تغطي كل ما تحتاجه لحضور رقمي قوي ومتسق."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative rounded-3xl p-8 border flex flex-col transition-all duration-300 ${
                pkg.highlighted
                  ? "bg-brand-burgundy text-white border-brand-burgundy shadow-2xl shadow-brand-burgundy/25"
                  : "bg-white text-brand-dark border-brand-blush hover:border-brand-burgundy/20 hover:shadow-card"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 right-1/2 translate-x-1/2">
                  <span className="bg-brand-rose text-brand-dark text-xs font-bold px-4 py-1.5 rounded-full shadow">
                    ⭐ الأكثر طلباً
                  </span>
                </div>
              )}

              <div className="mb-6">
                <span
                  className={`text-xs font-bold tracking-widest uppercase ${
                    pkg.highlighted ? "text-brand-rose" : "text-brand-burgundy"
                  }`}
                >
                  {pkg.name}
                </span>
                <h3
                  className={`text-2xl font-extrabold mt-1 mb-2 ${
                    pkg.highlighted ? "text-white" : "text-brand-dark"
                  }`}
                >
                  {pkg.nameAr}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    pkg.highlighted ? "text-brand-rose/80" : "text-brand-gray"
                  }`}
                >
                  {pkg.description}
                </p>
              </div>

              <div className="mb-6 pb-6 border-b border-current/10">
                <span
                  className={`text-4xl font-extrabold ${
                    pkg.highlighted ? "text-white" : "text-brand-dark"
                  }`}
                >
                  {pkg.price}
                </span>
                <span
                  className={`text-sm mr-2 ${
                    pkg.highlighted ? "text-brand-rose/70" : "text-brand-gray"
                  }`}
                >
                  درهم إماراتي / شهر
                </span>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                        pkg.highlighted
                          ? "bg-white/20 text-white"
                          : "bg-brand-burgundy/10 text-brand-burgundy"
                      }`}
                    >
                      ✓
                    </span>
                    <span
                      className={
                        pkg.highlighted ? "text-white/90" : "text-brand-dark"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/request?package=${pkg.name}`}
                className={`block text-center font-bold py-3.5 rounded-full transition-all duration-300 text-sm ${
                  pkg.highlighted
                    ? "bg-white text-brand-burgundy hover:bg-brand-blush"
                    : "bg-brand-burgundy text-white hover:bg-brand-burgundy-dark"
                }`}
              >
                اطلب {pkg.nameAr}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Extra services */}
        <SectionHeader
          label="خدمات إضافية"
          title="هوية بصرية وذكاء اصطناعي"
          subtitle="خدمات متخصصة لتمييز علامتك التجارية ورفع مستوى محتواها."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {extraServices.map((svc, i) => (
            <motion.div
              key={svc.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-brand-blush hover:border-brand-burgundy/20 hover:shadow-card transition-all duration-300"
            >
              <div className="text-4xl mb-4">{svc.icon}</div>
              <h3 className="text-xl font-bold text-brand-dark mb-1">{svc.name}</h3>
              <p className="text-brand-burgundy font-semibold text-sm mb-6">{svc.price}</p>
              <ul className="space-y-2.5">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-brand-dark">
                    <span className="w-5 h-5 rounded-full bg-brand-burgundy/10 text-brand-burgundy text-xs font-bold flex items-center justify-center flex-shrink-0">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/request"
                  className="block text-center bg-brand-burgundy text-white font-bold py-3 rounded-full text-sm hover:bg-brand-burgundy-dark transition-colors"
                >
                  استفسر عن الخدمة
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom package */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-dark rounded-3xl p-10 text-center"
        >
          <h3 className="text-2xl font-extrabold text-white mb-3">
            🎨 صمّم باقتك الخاصة
          </h3>
          <p className="text-brand-gray max-w-lg mx-auto mb-8 leading-relaxed">
            اختر المنصات، المنشورات، الريلز، والخدمات التي تحتاجها فعلاً —
            سيتم تحديد السعر بناءً على ما تختاره.
          </p>
          <Link
            href="/request?package=custom"
            className="inline-block bg-brand-burgundy text-white font-bold px-10 py-4 rounded-full hover:bg-brand-burgundy-dark transition-colors"
          >
            ابنِ باقتك الآن
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
