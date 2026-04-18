export interface Submission {
  id: string;
  created_at: string;
  full_name: string;
  phone: string;
  email: string | null;
  company_name: string | null;
  business_type: string | null;
  city: string | null;
  service_needed: string;
  package_interest: string | null;
  current_links: string | null;
  goal: string | null;
  budget_range: string | null;
  preferred_contact: string;
  notes: string | null;
  status: "جديد" | "تم التواصل" | "مغلق";
  admin_notes: string | null;
}

export type SubmissionStatus = Submission["status"];

export interface SubmissionFormData {
  full_name: string;
  phone: string;
  email?: string;
  company_name?: string;
  business_type?: string;
  city?: string;
  service_needed: string;
  package_interest?: string;
  current_links?: string;
  goal?: string;
  budget_range?: string;
  preferred_contact: string;
  notes?: string;
}
