import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import PackagesSection from "@/components/services/PackagesSection";
import AddonsSection from "@/components/services/AddonsSection";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "خدماتنا وباقاتنا | توب تريند",
  description:
    "استعرض باقات التسويق الرقمي وإدارة السوشيال ميديا من توب تريند. ثلاث باقات شهرية + هوية بصرية + خدمات بالذكاء الاصطناعي.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-brand-dark pt-32 pb-20 text-center px-4">
          <span className="inline-block bg-brand-burgundy/20 text-brand-rose border border-brand-burgundy/30 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            الباقات والخدمات
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
            حلول تناسب كل علامة تجارية
          </h1>
          <p className="text-brand-gray text-lg max-w-xl mx-auto leading-relaxed">
            اختر الباقة التي تناسب حجم عملك وميزانيتك، أو صمّم باقتك الخاصة
            بالكامل.
          </p>
        </section>

        <PackagesSection />
        <AddonsSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
