import { getSiteData } from '@/lib/db';
import { Award, Users, HeartHandshake, Building2, ShieldCheck } from 'lucide-react';

export const revalidate = 0;

export default function RecognitionPage() {
  const data = getSiteData();
  const recognitions = data?.recognitions || [];

  const principles = [
    {
      icon: ShieldCheck,
      title: "No Hierarchy Based on Donation Size",
      desc: "Every supporter — regardless of the amount contributed — receives equal respect and appreciation from our community."
    },
    {
      icon: HeartHandshake,
      title: "Recognition Shared Only with Permission",
      desc: "We obtain explicit consent before sharing donor names, images, or personal details in any public communication."
    },
    {
      icon: Users,
      title: "Equal Respect for Every Supporter",
      desc: "Whether you contribute time, money, or expertise, your impact is valued equally and celebrated with sincerity."
    }
  ];

  const categories = [
    {
      icon: Users,
      title: "Members",
      description: "Core members form the foundation of Ntambag Brothers CIG, contributing time, ideas, and financial support through annual registration. They attend general assemblies and guide organizational decisions.",
      color: "blue"
    },
    {
      icon: HeartHandshake,
      title: "Donors & Volunteers",
      description: "Generous individuals who provide financial resources, donate supplies, or contribute their time and expertise to support our community programs and initiatives.",
      color: "amber"
    },
    {
      icon: Building2,
      title: "Partners",
      description: "Organizations and institutions that collaborate with us to amplify local impact — from healthcare providers like OTFA to international development actors and academic researchers.",
      color: "emerald"
    }
  ];

  return (
    <div className="space-y-16 py-12">
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4 text-center">
          <span className="text-amber-300 font-bold text-xs uppercase tracking-widest bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/40">
            Recognition & Appreciation
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold">Recognition & Appreciation</h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-3xl mx-auto">
            We believe gratitude strengthens community. This page honors those who support our mission with humility and respect.
          </p>
        </div>
      </section>

      {/* Principles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-blue-700 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Our Approach
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">Recognition Guided by Integrity</h2>
          <p className="text-gray-600 text-sm">
            Our recognition practices are built on principles that reflect our values of transparency and community respect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle, idx) => {
            const Icon = principle.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 space-y-4 text-center hover:shadow-lg transition-all">
                <div className="inline-flex p-4 rounded-2xl bg-blue-50 text-blue-600 mx-auto">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{principle.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{principle.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Supporter Categories */}
      <section className="bg-slate-50 py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-blue-700 font-bold text-xs uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
              Our Supporters
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900">Supporter Categories</h2>
            <p className="text-gray-600 text-sm">Every form of support — large or small — helps us build a stronger community.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              const colorMap: Record<string, string> = {
                blue: "bg-blue-50 text-blue-600 border-blue-100",
                amber: "bg-amber-50 text-amber-600 border-amber-100",
                emerald: "bg-emerald-50 text-emerald-600 border-emerald-100"
              };
              const badgeMap: Record<string, string> = {
                blue: "bg-blue-100 text-blue-800",
                amber: "bg-amber-100 text-amber-800",
                emerald: "bg-emerald-100 text-emerald-800"
              };
              return (
                <div key={idx} className="bg-white rounded-2xl border border-gray-200 shadow-md p-7 space-y-4 hover:shadow-lg transition-all">
                  <div className={`inline-flex p-3 rounded-xl border ${colorMap[cat.color]}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <span className={`inline-block text-xs font-bold px-2.5 py-0.5 rounded-full ${badgeMap[cat.color]}`}>
                      {cat.title}
                    </span>
                    <h3 className="font-bold text-gray-900 text-xl">{cat.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{cat.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academic & Media Recognition */}
      {recognitions.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-blue-700 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              External Recognition
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900">Academic & Media Recognition</h2>
            <p className="text-gray-600 text-sm">
              Our community development initiatives have been recognized in peer-reviewed publications and broadcast media.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {recognitions.map((rec: any) => (
              <div key={rec.id} className="bg-white rounded-2xl border border-gray-200 shadow-md p-8 flex flex-col md:flex-row gap-6 items-center hover:shadow-lg transition-all">
                <div className="w-full md:w-48 h-56 shrink-0 rounded-xl overflow-hidden shadow">
                  <img src={rec.image} alt={rec.title} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-800 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                    <Award className="w-3.5 h-3.5" /> {rec.source}
                  </span>
                  <h2 className="text-xl font-bold text-gray-900 leading-snug">{rec.title}</h2>
                  <p className="text-sm text-gray-600 leading-relaxed">{rec.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
