import type { Metadata } from "next";
import AdminLoginForm from "@/components/admin/AdminLoginForm";

export const dynamic = "force-dynamic";
import Image from "next/image";

export const metadata: Metadata = {
  title: "تسجيل الدخول | لوحة تحكم توب تريند",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Image
            src="/logo-dark.jpeg"
            alt="توب تريند"
            width={80}
            height={80}
            className="mx-auto rounded-xl mb-4"
          />
          <h1 className="text-xl font-bold text-white">لوحة تحكم توب تريند</h1>
          <p className="text-brand-gray text-sm mt-1">للاستخدام الداخلي فقط</p>
        </div>
        <AdminLoginForm />
      </div>
    </div>
  );
}
