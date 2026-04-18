"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import type { Submission, SubmissionStatus } from "@/lib/types";

const statusColors: Record<SubmissionStatus, string> = {
  جديد: "bg-emerald-100 text-emerald-700",
  "تم التواصل": "bg-blue-100 text-blue-700",
  مغلق: "bg-gray-100 text-gray-500",
};

interface Props {
  submissions: Submission[];
  userEmail: string;
}

export default function AdminSubmissionsClient({ submissions, userEmail }: Props) {
  const [filter, setFilter] = useState<SubmissionStatus | "الكل">("الكل");
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  const filtered =
    filter === "الكل"
      ? submissions
      : submissions.filter((s) => s.status === filter);

  const counts = {
    الكل: submissions.length,
    جديد: submissions.filter((s) => s.status === "جديد").length,
    "تم التواصل": submissions.filter((s) => s.status === "تم التواصل").length,
    مغلق: submissions.filter((s) => s.status === "مغلق").length,
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Admin header */}
      <header className="bg-brand-dark border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-white font-bold text-lg">لوحة تحكم توب تريند</h1>
            <p className="text-brand-gray text-xs mt-0.5">{userEmail}</p>
          </div>
          <button
            onClick={handleLogout}
            className="text-brand-gray hover:text-white text-sm transition-colors"
          >
            تسجيل الخروج
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {(["الكل", "جديد", "تم التواصل", "مغلق"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`rounded-2xl p-4 text-right border transition-all ${
                filter === s
                  ? "bg-brand-burgundy text-white border-brand-burgundy shadow-md"
                  : "bg-white text-brand-dark border-gray-200 hover:border-brand-burgundy/30"
              }`}
            >
              <div className="text-2xl font-extrabold">{counts[s]}</div>
              <div className="text-sm mt-0.5 opacity-80">{s}</div>
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-right px-5 py-3.5 font-semibold text-gray-600">الاسم</th>
                  <th className="text-right px-5 py-3.5 font-semibold text-gray-600 hidden sm:table-cell">الهاتف</th>
                  <th className="text-right px-5 py-3.5 font-semibold text-gray-600 hidden md:table-cell">الخدمة</th>
                  <th className="text-right px-5 py-3.5 font-semibold text-gray-600 hidden lg:table-cell">الباقة</th>
                  <th className="text-right px-5 py-3.5 font-semibold text-gray-600">الحالة</th>
                  <th className="text-right px-5 py-3.5 font-semibold text-gray-600 hidden sm:table-cell">التاريخ</th>
                  <th className="px-5 py-3.5" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-12 text-gray-400">
                      لا توجد طلبات
                    </td>
                  </tr>
                ) : (
                  filtered.map((s) => (
                    <tr key={s.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-4 font-medium text-brand-dark">{s.full_name}</td>
                      <td className="px-5 py-4 text-gray-600 hidden sm:table-cell" dir="ltr">
                        {s.phone}
                      </td>
                      <td className="px-5 py-4 text-gray-600 hidden md:table-cell">
                        {serviceLabel(s.service_needed)}
                      </td>
                      <td className="px-5 py-4 text-gray-600 hidden lg:table-cell">
                        {s.package_interest ?? "—"}
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${statusColors[s.status]}`}
                        >
                          {s.status}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-gray-500 text-xs hidden sm:table-cell">
                        {new Date(s.created_at).toLocaleDateString("ar-AE")}
                      </td>
                      <td className="px-5 py-4">
                        <Link
                          href={`/admin/submissions/${s.id}`}
                          className="text-brand-burgundy font-semibold hover:underline text-xs"
                        >
                          عرض
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

function serviceLabel(key: string): string {
  const map: Record<string, string> = {
    social_media: "إدارة السوشيال ميديا",
    content: "صناعة المحتوى",
    ads: "الإعلانات الرقمية",
    branding: "الهوية البصرية",
    ai: "خدمات الذكاء الاصطناعي",
    website: "موقع إلكتروني",
    custom: "باقة مخصصة",
    other: "أخرى",
  };
  return map[key] ?? key;
}
