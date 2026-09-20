import { getSiteData } from '@/lib/db';
import Link from 'next/link';
import { ArrowRight, CheckCircle, GraduationCap, Heart, Activity, Users, BookOpen, Award, Shield, Calendar as CalendarIcon } from 'lucide-react';

export const revalidate = 0;

export default function ProgramsPage() {
  const data = getSiteData();

  const sixPillars = [
    {
      icon: GraduationCap,
      title: "Education Sponsorship",
      description: "Direct tuition fee payments and academic sponsorship for orphans and vulnerable children in Bamenda.",
      color: "blue"
    },
    {
      icon: BookOpen,
      title: "School Supplies Support",
      description: "Annual distribution of textbooks, writing materials, bags, and uniforms ahead of every academic year.",
      color: "amber"
    },
    {
      icon: Activity,
      title: "Health Campaigns",
      description: "Free medical checkups, diabetes screenings, and health consultations in partnership with OTFA.",
      color: "emerald"
    },
    {
      icon: Users,
      title: "Youth Mentorship",
      description: "Connecting young people with career guidance, mentorship, and leadership development workshops.",
      color: "purple"
    },
    {
      icon: Heart,
      title: "Community Outreach",
      description: "Humanitarian relief packages, food items, and support for internally displaced persons (IDPs) and elderly.",
      color: "rose"
    },
    {
      icon: CalendarIcon,
      title: "Events & Workshops",
      description: "Strategic community workshops, revamping assemblies, and holiday sports tournaments for youth.",
      color: "orange"
    }
  ];

  const programDeepDives = [
    {
      id: "edu-sponsorship",
      title: "Education Sponsorship & Support",
      category: "Education",
      description: "Every academic year, Ntambag Brothers CIG organizes back-to-school support ceremonies to ensure children affected by socio-economic challenges continue their education without disruption. We distribute exercise books, pens, school uniforms, and offer tuition fee assistance to top performing yet vulnerable students.",
      impact: "Over 150+ children provided with learning materials and tuition support across multiple academic years.",
      deliverables: ["Textbooks & writing kits", "School uniform distribution", "Tuition fee subsidies", "Academic progress monitoring"],
      image: "/assets/school-project-books-DOXTTuUi.png"
    },
    {
      id: "health-outreach",
      title: "Community Health & Screening Campaigns",
      category: "Healthcare",
      description: "In collaboration with Old Town For America (OTFA) and local health personnel, we conduct free community healthcare outreach campaigns in Bamenda, serving hundreds of residents with free diagnostic tests, medicines, and preventive health education for diabetes and hypertension.",
      impact: "More than 1,000 residents screened and provided with free health counseling and medications.",
      deliverables: ["Blood glucose testing", "Blood pressure screening", "Free medication distribution", "Health education counseling"],
      image: "/assets/health-screening-BPWwGiKE.jpg"
    },
    {
      id: "idp-relief",
      title: "IDP & Vulnerable Family Relief",
      category: "Social Relief",
      description: "Providing humanitarian relief, food packages, blankets, hygiene kits, and essential household items to internally displaced families (IDPs) residing in Ntambag quarter and surrounding Bamenda communities.",
      impact: "Direct emergency relief provided to 200+ displaced families and elderly residents.",
      deliverables: ["Emergency food baskets", "Warm clothing & blankets", "Hygiene & sanitation kits", "Micro-grant assistance"],
      image: "/assets/idp-support-DxPg1q7V.png"
    },
    {
      id: "youth-sports",
      title: "Youth Football & Holiday Sports",
      category: "Sports & Youth",
      description: "Sports serve as a powerful tool for social cohesion. Ntambag Brothers CIG hosts annual youth football tournaments, equipping teams with jerseys, footballs, and trophy awards to keep youth positively engaged during holiday periods.",
      impact: "Engaged over 300 youth players across regional holiday competitions in Bamenda.",
      deliverables: ["Holiday football tournaments", "Sports gear & jersey donations", "Trophies & awards", "Youth leadership mentoring"],
      image: "/assets/football-team-1Eie4oQS.png"
    }
  ];

  const colorMap: Record<string, string> = {
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    amber: "bg-amber-50 text-amber-600 border-amber-100",
    emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
    purple: "bg-purple-50 text-purple-600 border-purple-100",
    rose: "bg-rose-50 text-rose-600 border-rose-100",
    orange: "bg-orange-50 text-orange-600 border-orange-100"
  };

  return (
    <div className="space-y-16 py-12">
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4 text-center">
          <span className="text-amber-300 font-bold text-xs uppercase tracking-widest bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/40">
            What We Do
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold">Programs That Transform Lives</h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-3xl mx-auto">
            Empowering children, improving community health, and supporting vulnerable families across Old Town Bamenda and the North West Region.
          </p>
        </div>
      </section>

      {/* Six Pillars of Impact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-blue-700 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Six Pillars of Impact
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">Comprehensive Community Support</h2>
          <p className="text-gray-600 text-sm">Our programs cover key pillars of sustainable human and community development.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sixPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 space-y-4 hover:shadow-lg transition-all group">
                <div className={`inline-flex p-3 rounded-xl border ${colorMap[pillar.color]}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">{pillar.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Program Deep Dives */}
      <section className="bg-slate-50 py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-blue-700 font-bold text-xs uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
              In-Depth Initiatives
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900">Featured Program Initiatives</h2>
          </div>

          {programDeepDives.map((program, index) => (
            <div 
              key={program.id} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 rounded-3xl border border-gray-200 shadow-md ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`space-y-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {program.category}
                </span>
                <h2 className="text-3xl font-extrabold text-gray-900">{program.title}</h2>
                <p className="text-gray-600 leading-relaxed text-sm">{program.description}</p>
                
                {/* Deliverables checklist */}
                <div className="space-y-2 pt-1">
                  <span className="text-xs font-bold uppercase text-gray-700 tracking-wider block">Key Deliverables:</span>
                  <div className="grid grid-cols-2 gap-2">
                    {program.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl space-y-1 mt-3">
                  <span className="text-xs font-bold uppercase text-amber-800 tracking-wider">Proven Impact</span>
                  <p className="text-sm font-semibold text-gray-900">{program.impact}</p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/get-involved"
                    className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl shadow transition-all text-sm"
                  >
                    Support This Program <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className={`rounded-2xl overflow-hidden shadow-xl border border-gray-200 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img src={program.image} alt={program.title} className="w-full h-[380px] object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Expand Programs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-10 text-white space-y-6 shadow-2xl border-4 border-amber-500">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Help Us Expand Our Programs</h2>
          <p className="text-blue-100 text-base max-w-2xl mx-auto">
            Every donation, sponsorship, or volunteer hour helps us reach one more child in Old Town Bamenda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              href="/donate"
              className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold px-8 py-3.5 rounded-xl shadow-xl transition-all inline-flex items-center justify-center gap-2"
            >
              Donate Now
            </Link>
            <Link
              href="/get-involved"
              className="bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all inline-flex items-center justify-center gap-2"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
