import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "توب تريند | وكالة التسويق الرقمي الإبداعية",
  description:
    "وكالة توب تريند للتسويق الرقمي وإدارة وسائل التواصل الاجتماعي في عجمان، الإمارات. نساعدك على بناء حضور رقمي قوي وتحقيق نتائج حقيقية.",
  keywords: ["تسويق رقمي", "إدارة سوشيال ميديا", "هوية بصرية", "عجمان", "الإمارات"],
  openGraph: {
    title: "توب تريند | وكالة التسويق الرقمي الإبداعية",
    description: "وكالة توب تريند للتسويق الرقمي في عجمان، الإمارات",
    locale: "ar_AE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="min-h-screen flex flex-col bg-brand-cream text-brand-dark antialiased">
        {children}
      </body>
    </html>
  );
}
