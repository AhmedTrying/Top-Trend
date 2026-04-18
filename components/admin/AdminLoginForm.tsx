"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function AdminLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError("البريد الإلكتروني أو كلمة المرور غير صحيحة");
      setLoading(false);
      return;
    }

    router.push("/admin/submissions");
    router.refresh();
  };

  return (
    <form
      onSubmit={handleLogin}
      className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5"
    >
      <div>
        <label className="block text-sm text-brand-rose mb-2 font-medium">
          البريد الإلكتروني
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          dir="ltr"
          placeholder="admin@toptrend.ae"
          className="w-full bg-white/10 border border-white/10 text-white placeholder:text-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-burgundy transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm text-brand-rose mb-2 font-medium">
          كلمة المرور
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="••••••••"
          className="w-full bg-white/10 border border-white/10 text-white placeholder:text-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-burgundy transition-colors"
        />
      </div>

      {error && (
        <p className="text-red-400 text-sm bg-red-500/10 rounded-lg px-4 py-2.5">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-brand-burgundy hover:bg-brand-burgundy-dark text-white font-bold py-3.5 rounded-full transition-all duration-300 disabled:opacity-60"
      >
        {loading ? "جارٍ التحقق..." : "تسجيل الدخول"}
      </button>
    </form>
  );
}
