import { Scale, Briefcase, Users, Gavel, Home, FileText, CheckCircle, Star, ChevronDown, ChevronUp } from "lucide-react";

export const STATS = [
  { label: "Happy Clients", value: "94%", highlight: true },
  { label: "Cases Won", value: "30+", highlight: false },
  { label: "Years of Legal Excellence", value: "5+", highlight: false },
  { label: "Client Satisfaction Rate", value: "98%", highlight: false },
]

export const SERVICES = [
    { icon: Scale, title: "Criminal Defense Attorney", desc: "Aggressive representation for DUI, felony, and misdemeanor charges by top-rated litigators." },
  { icon: Briefcase, title: "Corporate & Business Law", desc: "Navigating mergers, acquisitions, and SEC compliance for startups and enterprise clients." },
  { icon: Users, title: "Immigration Law", desc: "Expert guidance on visas, green cards, and deportation defense for families and individuals." },
  { icon: Gavel, title: "Personal Injury Lawyer", desc: "Fighting for maximum compensation in car accidents, medical malpractice, and slip-and-fall cases." },
  { icon: Home, title: "Real Estate Attorney", desc: "Handling title disputes, commercial leases, and property boundary litigation." },
  { icon: FileText, title: "Family Law Specialist", desc: "Compassionate support for divorce, child custody disputes, and adoption proceedings." },
]

export const PROCESS_STEPS = [
  { step: "01", title: "Consultation", desc: "Schedule a meeting to discuss your legal needs." },
  { step: "02", title: "Case Review", desc: "Our team analyzes evidence and formulates a tailored strategy." },
  { step: "03", title: "Legal Strategy", desc: "We build a strong case backed by years of legal precedent." },
  { step: "04", title: "Representation", desc: "We get dedicated, experienced attorneys in the courtroom for you." },
]

export const WHY_US = [
  { icon: Scale, title: "Experienced Attorneys", desc: "Rated among the top 10% of litigators in Kenya." },
  { icon: CheckCircle, title: "Personalized Solutions", desc: "Tailored strategies designed around your specific situation." },
  { icon: Star, title: "Transparent Process", desc: "Honest advice, clear communication, and no hidden fees." },
  { icon: Users, title: "Client-Focused", desc: "We prioritize your peace of mind above all else." },
]

export const PRICING_PLANS = [
  { name: "Basic", price: 2500, features: ["1 Consultation", "Legal Forms", "Email Support"], cta: "Get Started", popular: false },
  { name: "Standard", price: 6350, features: ["5 Consultations", "Full Case Review", "Phone Support", "Document Drafting"], cta: "Choose Plan", popular: true },
  { name: "Premium", price: 12800, features: ["Unlimited Consults", "Lead Attorney", "Court Representation", "24/7 Priority Support"], cta: "Get Started", popular: false },
]

export const TESTIMONIALS = [
  { name: "Glory Kiki", title: "Business Owner", quote: "They navigated our complex merger flawlessly. We couldn't have asked for better representation." },
  { name: "Tengen Uzui", title: "Family Client", quote: "Their compassion during our custody case was unmatched. I truly felt heard and protected." },
  { name: "Kamau Machira", title: "Real Estate Investor", quote: "Helped us close on 3 properties with zero title issues. Absolutely efficient." },
]

export const FAQS = [
  { q: "What types of cases do you handle?", a: "We specialize in criminal defense, family law, corporate law, personal injury, and real estate litigation." },
  { q: "How much do your services cost?", a: "Our fees vary based on the complexity of the case. We offer transparent flat-rate packages and hourly billing options." },
  { q: "Do you offer a free consultation?", a: "Yes. We offer a 30-minute introductory consultation to evaluate your case and discuss your options at no cost." },
  { q: "How long does a typical case take?", a: "Timelines vary. Simple matters may take weeks, while complex litigation can extend to a year or more. We always provide realistic estimates." },
]