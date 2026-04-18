import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RequestForm from "@/components/form/RequestForm";

export const metadata: Metadata = {
  title: "اطلب خدمة | توب تريند",
  description:
    "أرسل طلبك لتوب تريند واحصل على باقة تسويق رقمي مخصصة لعلامتك التجارية.",
};

export default function RequestPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-brand-dark pt-32 pb-16 text-center px-4">
          <span className="inline-block bg-brand-burgundy/20 text-brand-rose border border-brand-burgundy/30 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            ابدأ رحلتك معنا
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            أخبرنا عن مشروعك
          </h1>
          <p className="text-brand-gray text-lg max-w-lg mx-auto leading-relaxed">
            املأ النموذج أدناه وسنتواصل معك في أقرب وقت لنقدم لك أفضل حل
            يناسب علامتك التجارية.
          </p>
        </section>

        <section className="py-16 bg-brand-cream">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <RequestForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
