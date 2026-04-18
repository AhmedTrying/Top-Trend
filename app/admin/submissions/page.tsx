import type { Metadata } from "next";

export const dynamic = "force-dynamic";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import AdminSubmissionsClient from "@/components/admin/AdminSubmissionsClient";

export const metadata: Metadata = {
  title: "الطلبات | لوحة تحكم توب تريند",
  robots: { index: false, follow: false },
};

export default async function AdminSubmissionsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  const { data: submissions, error } = await supabase
    .from("submissions")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) console.error("Failed to fetch submissions:", error);

  return <AdminSubmissionsClient submissions={submissions ?? []} userEmail={user.email ?? ""} />;
}
