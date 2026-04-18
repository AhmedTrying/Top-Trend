"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import type { SubmissionFormData } from "@/lib/types";

const schema = z.object({
  full_name: z.string().min(2, "الاسم الكامل مطلوب"),
  phone: z.string().min(8, "رقم الهاتف غير صحيح"),
  email: z.string().email("البريد الإلكتروني غير صحيح").optional().or(z.literal("")),
  company_name: z.string().optional(),
  business_type: z.string().optional(),
  city: z.string().optional(),
  service_needed: z.string().min(1, "يرجى اختيار الخدمة المطلوبة"),
  package_interest: z.string().optional(),
  current_links: z.string().optional(),
  goal: z.string().optional(),
  budget_range: z.string().min(1, "يرجى اختيار الميزانية"),
  preferred_contact: z.string().min(1, "يرجى اختيار طريقة التواصل"),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const fieldClass =
  "w-full bg-white border border-brand-blush rounded-xl px-4 py-3 text-brand-dark text-sm placeholder:text-brand-gray/60 focus:outline-none focus:border-brand-burgundy focus:ring-2 focus:ring-brand-burgundy/10 transition-all duration-200";

const labelClass = "block text-sm font-semibold text-brand-dark mb-2";
const errorClass = "text-xs text-red-500 mt-1.5";

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className={labelClass}>
        {label}
        {required && <span className="text-brand-burgundy mr-1">*</span>}
      </label>
      {children}
      {error && <p className={errorClass}>{error}</p>}
    </div>
  );
}

export default function RequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "حدث خطأ ما");
      }
      setSubmitted(true);
    } catch (err: unknown) {
      setServerError(err instanceof Error ? err.message : "حدث خطأ ما، يرجى المحاولة مرة أخرى");
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl p-12 text-center border border-brand-blush shadow-card"
      >
        <div className="text-6xl mb-6">🎉</div>
        <h2 className="text-2xl font-extrabold text-brand-dark mb-3">
          تم إرسال طلبك بنجاح!
        </h2>
        <p className="text-brand-gray leading-relaxed max-w-sm mx-auto">
          شكراً لتواصلك مع توب تريند. سيقوم فريقنا بمراجعة طلبك والتواصل معك
          في أقرب وقت ممكن.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/"
            className="bg-brand-burgundy text-white font-bold px-8 py-3 rounded-full hover:bg-brand-burgundy-dark transition-colors"
          >
            العودة للرئيسية
          </a>
          <a
            href="https://wa.me/971581820011"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-brand-burgundy text-brand-burgundy font-semibold px-8 py-3 rounded-full hover:bg-brand-burgundy hover:text-white transition-all"
          >
            تواصل واتساب
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-3xl p-8 md:p-10 border border-brand-blush shadow-card space-y-6"
      noValidate
    >
      <div className="mb-2">
        <h2 className="text-xl font-extrabold text-brand-dark mb-1">
          نموذج طلب الخدمة
        </h2>
        <p className="text-sm text-brand-gray">
          الحقول المعلّمة بـ <span className="text-brand-burgundy font-bold">*</span> إلزامية
        </p>
      </div>

      {/* Personal info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="الاسم الكامل" required error={errors.full_name?.message}>
          <input
            {...register("full_name")}
            placeholder="محمد أحمد"
            className={fieldClass}
          />
        </Field>

        <Field label="رقم الهاتف / واتساب" required error={errors.phone?.message}>
          <input
            {...register("phone")}
            placeholder="+971 50 000 0000"
            dir="ltr"
            className={fieldClass}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="البريد الإلكتروني" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            placeholder="example@email.com"
            dir="ltr"
            className={fieldClass}
          />
        </Field>

        <Field label="اسم الشركة / العلامة التجارية">
          <input
            {...register("company_name")}
            placeholder="اسم شركتك أو مشروعك"
            className={fieldClass}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="نوع النشاط التجاري">
          <input
            {...register("business_type")}
            placeholder="مطعم، عيادة، متجر..."
            className={fieldClass}
          />
        </Field>

        <Field label="المدينة / الدولة">
          <input
            {...register("city")}
            placeholder="عجمان، الإمارات"
            className={fieldClass}
          />
        </Field>
      </div>

      {/* Service info */}
      <div className="border-t border-brand-blush pt-5">
        <h3 className="font-bold text-brand-dark mb-4">تفاصيل الخدمة</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="الخدمة المطلوبة" required error={errors.service_needed?.message}>
            <select {...register("service_needed")} className={fieldClass}>
              <option value="">اختر الخدمة...</option>
              <option value="social_media">إدارة السوشيال ميديا</option>
              <option value="content">صناعة المحتوى الإبداعي</option>
              <option value="ads">الإعلانات الرقمية</option>
              <option value="branding">الهوية البصرية والبراندينج</option>
              <option value="ai">خدمات الذكاء الاصطناعي</option>
              <option value="website">تصميم موقع إلكتروني</option>
              <option value="custom">باقة مخصصة</option>
              <option value="other">أخرى</option>
            </select>
          </Field>

          <Field label="الباقة التي تهمك">
            <select {...register("package_interest")} className={fieldClass}>
              <option value="">اختر الباقة...</option>
              <option value="start">باقة البداية</option>
              <option value="grow">باقة النمو</option>
              <option value="pro">الباقة الاحترافية</option>
              <option value="brand_identity">تصميم الهوية البصرية</option>
              <option value="ai_services">خدمات الذكاء الاصطناعي</option>
              <option value="custom">باقة مخصصة</option>
              <option value="not_sure">لست متأكداً بعد</option>
            </select>
          </Field>
        </div>

        <div className="mt-5">
          <Field label="روابط السوشيال ميديا أو الموقع الحالي">
            <input
              {...register("current_links")}
              placeholder="instagram.com/yourpage, yourwebsite.com"
              dir="ltr"
              className={fieldClass}
            />
          </Field>
        </div>

        <div className="mt-5">
          <Field label="هدفك الرئيسي من التسويق الرقمي">
            <textarea
              {...register("goal")}
              rows={3}
              placeholder="مثال: زيادة المبيعات، بناء الوعي بالعلامة التجارية، جذب عملاء جدد..."
              className={`${fieldClass} resize-none`}
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
          <Field label="الميزانية الشهرية المتوقعة" required error={errors.budget_range?.message}>
            <select {...register("budget_range")} className={fieldClass}>
              <option value="">اختر المدى...</option>
              <option value="under_2500">أقل من ٢٥٠٠ درهم</option>
              <option value="2500_5000">٢٥٠٠ – ٥٠٠٠ درهم</option>
              <option value="5000_10000">٥٠٠٠ – ١٠٠٠٠ درهم</option>
              <option value="above_10000">أكثر من ١٠٠٠٠ درهم</option>
              <option value="not_sure">لم أحدد بعد</option>
            </select>
          </Field>

          <Field label="طريقة التواصل المفضلة" required error={errors.preferred_contact?.message}>
            <select {...register("preferred_contact")} className={fieldClass}>
              <option value="">اختر...</option>
              <option value="whatsapp">واتساب</option>
              <option value="call">مكالمة هاتفية</option>
              <option value="email">بريد إلكتروني</option>
            </select>
          </Field>
        </div>

        <div className="mt-5">
          <Field label="ملاحظات إضافية">
            <textarea
              {...register("notes")}
              rows={3}
              placeholder="أي تفاصيل أخرى تريد إضافتها..."
              className={`${fieldClass} resize-none`}
            />
          </Field>
        </div>
      </div>

      {serverError && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-600 text-sm">
          {serverError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand-burgundy hover:bg-brand-burgundy-dark text-white font-bold py-4 rounded-full text-base transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg hover:shadow-brand-burgundy/30 hover:-translate-y-0.5"
      >
        {isSubmitting ? "جارٍ الإرسال..." : "إرسال الطلب ←"}
      </button>
    </motion.form>
  );
}
