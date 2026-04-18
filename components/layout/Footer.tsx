import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/logo-dark.jpeg"
              alt="توب تريند"
              width={80}
              height={80}
              className="h-16 w-auto object-contain rounded-xl mb-4"
            />
            <p className="text-brand-rose/80 text-sm leading-relaxed max-w-xs">
              وكالة توب تريند للتسويق الرقمي وإدارة وسائل التواصل الاجتماعي.
              نساعدك على بناء حضور رقمي قوي وتحقيق نتائج حقيقية.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-base mb-5 text-brand-blush">روابط سريعة</h4>
            <ul className="space-y-3">
              {[
                { label: "الرئيسية", href: "/" },
                { label: "خدماتنا وباقاتنا", href: "/services" },
                { label: "اطلب خدمة", href: "/request" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-rose/70 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-base mb-5 text-brand-blush">تواصل معنا</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/971581820011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-rose/70 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span>📱</span>
                  <span dir="ltr">+971 58 182 0011</span>
                </a>
              </li>
              <li className="text-sm text-brand-rose/70">
                <span>📍</span>{" "}
                <span className="mr-2">المويهات 2 - عجمان - الإمارات</span>
              </li>
              <li className="text-sm text-brand-rose/50">
                رقم الرخصة: 136604
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-rose/40">
            © {new Date().getFullYear()} توب تريند. جميع الحقوق محفوظة.
          </p>
          <p className="text-xs text-brand-rose/30">
            وكالة إبداعية في الإمارات العربية المتحدة
          </p>
        </div>
      </div>
    </footer>
  );
}
