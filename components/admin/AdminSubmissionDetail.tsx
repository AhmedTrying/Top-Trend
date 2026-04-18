"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import type { Submission, SubmissionStatus } from "@/lib/types";

interface Props {
  submission: Submission;
}

const statuses: SubmissionStatus[] = ["جديد", "تم التواصل", "مغلق"];

const fieldRows = (s: Submission) => [
  { label: "الاسم الكامل", value: s.full_name },
  { label: "الهاتف / واتساب", value: s.phone, dir: "ltr" as const },
  { label: "البريد الإلكتروني", value: s.email, dir: "ltr" as const },
  { label: "اسم الشركة", value: s.company_name },
  { label: "نوع النشاط", value: s.business_type },
  { label: "المدينة / الدولة", value: s.city },
  { label: "الخدمة المطلوبة", value: s.service_needed },
  { label: "الباقة المهتم بها", value: s.package_interest },
  { label: "روابط التواصل الحالية", value: s.current_links, dir: "ltr" as const },
  { label: "الهدف من التسويق", value: s.goal },
  { label: "الميزانية", value: s.budget_range },
  { label: "طريقة التواصل المفضلة", value: s.preferred_contact },
  { label: "ملاحظات العميل", value: s.notes },
];

export default function AdminSubmissionDetail({ submission }: Props) {
  const [status, setStatus] = useState<SubmissionStatus>(submission.status);
  const [adminNotes, setAdminNotes] = useState(submission.admin_notes ?? "");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const supabase = createClient();
  const router = useRouter();

  const handleSave = async () => {
    setSaving(true);
    setSaved(false);
    await supabase
      .from("submissions")
      .update({ status, admin_notes: adminNotes })
      .eq("id", submission.id);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <header className="bg-brand-dark border-b border-white/10 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            href="/admin/submissions"
            className="text-brand-rose hover:text-white text-sm transition-colors"
          >
            ← العودة للطلبات
          </Link>
          <h1 className="text-white font-bold">تفاصيل الطلب</h1>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-brand-cream border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <div>
              <h2 className="font-extrabold text-brand-dark text-lg">
                {submission.full_name}
              </h2>
              <p className="text-brand-gray text-sm mt-0.5">
                {new Date(submission.created_at).toLocaleString("ar-AE")}
              </p>
            </div>
            <span
              className={`text-sm font-semibold px-3 py-1 rounded-full ${
                status === "جديد"
                  ? "bg-emerald-100 text-emerald-700"
                  : status === "تم التواصل"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {status}
            </span>
          </div>

          <div className="divide-y divide-gray-100">
            {fieldRows(submission).map(
              (row) =>
                row.value && (
                  <div
                    key={row.label}
                    className="grid grid-cols-3 px-6 py-3.5 text-sm"
                  >
                    <span className="font-semibold text-gray-500 col-span-1">
                      {row.label}
                    </span>
                    <span
                      dir={row.dir}
                      className="text-brand-dark col-span-2 leading-relaxed"
                    >
                      {row.value}
                    </span>
                  </div>
                )
            )}
          </div>
        </div>

        {/* Admin actions */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-5">
          <h3 className="font-bold text-brand-dark text-base">إجراءات الإدارة</h3>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              حالة الطلب
            </label>
            <div className="flex gap-3 flex-wrap">
              {statuses.map((s) => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    status === s
                      ? "bg-brand-burgundy text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              ملاحظات داخلية
            </label>
            <textarea
              value={adminNotes}
              onChange={(e) => setAdminNotes(e.target.value)}
              rows={4}
              placeholder="أضف ملاحظاتك الداخلية هنا..."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand-dark focus:outline-none focus:border-brand-burgundy transition-colors resize-none"
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleSave}
              disabled={saving}
              className="bg-brand-burgundy text-white font-bold px-8 py-3 rounded-full hover:bg-brand-burgundy-dark transition-colors disabled:opacity-60"
            >
              {saving ? "جارٍ الحفظ..." : "حفظ التغييرات"}
            </button>
            {saved && (
              <span className="text-emerald-600 text-sm font-semibold">
                ✓ تم الحفظ
              </span>
            )}
          </div>
        </div>

        {/* WhatsApp shortcut */}
        <div className="flex justify-end">
          <a
            href={`https://wa.me/${submission.phone.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
          >
            💬 تواصل عبر واتساب
          </a>
        </div>
      </main>
    </div>
  );
}
