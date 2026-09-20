import { getSiteData } from '@/lib/db';
import Link from 'next/link';
import { 
  GraduationCap, Users, HeartHandshake, Shield, Target, Eye, Play, Heart, ArrowRight 
} from 'lucide-react';

export const revalidate = 0;

export default function AboutPage() {
  const data = getSiteData();
  const teamMembers = data?.teamMembers || [];

  const fourImagesStory = [
    "/assets/bts-supplies-C4O45Rhf.jpg",
    "/assets/health-campaign-otfa-DhKmlUQe.png",
    "/assets/school-project-books-DOXTTuUi.png",
    "/assets/community-supplies-distribution-BIb2PUkH.png"
  ];

  const coreObjectives = [
    {
      icon: GraduationCap,
      title: "Child Sponsorship & Education",
      desc: "Providing textbooks, backpacks, uniforms, and tuition assistance to vulnerable children and orphans across Bamenda."
    },
    {
      icon: Users,
      title: "Youth Empowerment",
      desc: "Mentoring youth through holiday sports tournaments, life skills workshops, and career development initiatives."
    },
    {
      icon: HeartHandshake,
      title: "Community Engagement",
      desc: "Organizing free medical screenings, diabetes checkups, and IDP relief drives in partnership with development actors."
    },
    {
      icon: Shield,
      title: "Volunteer Mobilization",
      desc: "Mobilizing local and international volunteers to contribute their skills towards sustainable community projects."
    }
  ];

  const coreValues = [
    { name: "Compassion", desc: "Putting children and vulnerable families at the heart of everything we do." },
    { name: "Integrity", desc: "Upholding complete transparency and accountability in all financial and program operations." },
    { name: "Community", desc: "Believing in the power of collective action and local solidarity." },
    { name: "Empowerment", desc: "Equipping individuals with tools to achieve long-term self-sufficiency." },
    { name: "Excellence", desc: "Striving for high standards in education sponsorship and program delivery." },
    { name: "Service", desc: "Dedicated to selfless service to our neighborhood and region." }
  ];

  const mediaCoverage = [
    {
      title: "Ntambag Brothers, OTFA Facilitate Free Diabetes Screening",
      source: "Observer237",
      date: "August 2024",
      desc: "Free medical screening for elderly and persons living with disabilities in Old Town Bamenda.",
      link: "#"
    },
    {
      title: "COVID-19 Relief: Ntambag Brothers Donate to Vulnerable Families",
      source: "Abakwa Natal TV",
      date: "2020",
      desc: "Distribution of hygiene materials and food support during the pandemic.",
      link: "#"
    },
    {
      title: "Change of Baton at Ntambag Brothers CIG Executive",
      source: "DrayInfos",
      date: "2023",
      desc: "Executive transition and strategic roadmap expansion for youth empowerment.",
      link: "#"
    },
    {
      title: "Youth Football Tournament 2023 Finals",
      source: "Cameroon Tribune",
      date: "December 2023",
      desc: "Promoting social cohesion through grassroots holiday sports in Bamenda.",
      link: "#"
    },
    {
      title: "Back-to-School Support Initiative 2024",
      source: "Guardian Post",
      date: "September 2024",
      desc: "Equipping underprivileged children with learning materials for the academic year.",
      link: "#"
    }
  ];

  const seeUsInActionImages = [
    "/assets/priest-ordination-Coeqawm_.png",
    "/assets/school-project-books-DOXTTuUi.png",
    "/assets/bts-supplies-C4O45Rhf.jpg",
    "/assets/prize-award-2011-group-jQId7Z-l.png",
    "/assets/health-screening-BPWwGiKE.jpg",
    "/assets/community-meeting-DncuecqW.png",
    "/assets/health-center-flyer-D6C-KlX8.png",
    "/assets/health-campaign-otfa-DhKmlUQe.png"
  ];

  return (
    <div className="space-y-28 pb-0 bg-white">
      
      {/* 1. Header Banner */}
      <section className="bg-blue-600 text-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4 text-center">
          <span className="text-blue-100 font-bold text-xs sm:text-sm uppercase tracking-widest bg-blue-700/60 px-4 py-1.5 rounded-full border border-blue-400/40">
            About Us
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">Who We Are</h1>
          <p className="text-blue-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Dedicated to youth empowerment, education, health, and community development in Bamenda, Cameroon.
          </p>
        </div>
      </section>

      {/* 2. From Humble Beginnings to Community Impact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
              Our Story
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              From Humble Beginnings to Community Impact
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Ntambag Brothers Common Initiative Group (CIG) was founded by dedicated sons of Ntambag Quarter in Old Town, Bamenda. What started as a local solidarity group transformed into a formally registered organization (Reg No: NW/GP/001/18/14870) committed to youth empowerment, child education, and healthcare outreach.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Driven by the spirit of community self-help, our members pool resources annually to ensure orphans and underprivileged children stay in school, while partnering with international organizations like Old Town For America (OTFA) to deliver free healthcare screenings.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {fourImagesStory.map((img, idx) => (
              <div key={idx} className="aspect-square rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <img src={img} alt={`Story moment ${idx + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. See Ntambag Brothers In Action */}
      <section className="bg-slate-50 py-20 sm:py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest bg-blue-100 px-4 py-1.5 rounded-full">
              Watch Our Story
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">See Ntambag Brothers In Action</h2>
            <p className="text-gray-600 text-base sm:text-lg">Learn about our journey and watch our community programs in action.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Video 1 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-lg flex flex-col">
              <div className="relative aspect-video w-full bg-slate-900">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/l7zNO4MI6zA"
                  title="The History of Ntambag Brothers"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-xl sm:text-2xl text-gray-900">The History of Ntambag Brothers</h3>
                  <p className="text-sm text-gray-600 mt-1">Our journey from a social brotherhood to a community-changing organization.</p>
                </div>
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-lg flex flex-col">
              <div className="relative aspect-video w-full bg-slate-900">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/Y4ylaBZncto"
                  title="Health Campaign Coverage"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-xl sm:text-2xl text-gray-900">Health Campaign Coverage</h3>
                  <p className="text-sm text-gray-600 mt-1">Abakwa Natal TV coverage of our health campaign in partnership with Old Town For America.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-lg space-y-5">
            <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl w-fit border border-blue-100">
              <Target className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-extrabold text-gray-900">Our Mission</h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              To empower underprivileged children and youth in Bamenda, Cameroon through continuous education sponsorship, healthcare outreach, mentorship, and community-driven solidarity programs.
            </p>
          </div>

          <div className="bg-blue-600 text-white p-10 rounded-3xl shadow-2xl space-y-5">
            <div className="p-4 bg-blue-700/80 text-white rounded-2xl w-fit border border-blue-400/40">
              <Eye className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-extrabold text-white">Our Vision</h3>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
              A thriving, self-reliant community where every child has access to quality education, proper health care, and the opportunity to reach their full potential regardless of socioeconomic background.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Our Core Objectives */}
      <section className="bg-slate-50 py-20 sm:py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest bg-blue-100 px-4 py-1.5 rounded-full">
              Pillars of Action
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">Our Core Objectives</h2>
            <p className="text-gray-600 text-base sm:text-lg">Targeted initiatives aimed at creating sustainable, long-term impact in our community.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {coreObjectives.map((obj, idx) => {
              const Icon = obj.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-200 shadow-md space-y-4 flex items-start gap-5">
                  <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl shrink-0">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-extrabold text-gray-900 text-xl">{obj.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{obj.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Our Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            What Guides Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">Our Core Values</h2>
          <p className="text-gray-600 text-base sm:text-lg">The fundamental principles that shape our work, decision-making, and culture.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((val, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-200 shadow-md space-y-3 hover:border-blue-400 transition-all">
              <h3 className="font-extrabold text-blue-900 text-2xl">{val.name}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Meet Our Leadership Team */}
      <section className="bg-slate-50 py-20 sm:py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest bg-blue-100 px-4 py-1.5 rounded-full">
              Our People
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Meet Our Leadership Team
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">Dedicated individuals who lead with passion and purpose.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {teamMembers.map((member: any) => (
              <div key={member.id} className="text-center space-y-4 flex flex-col items-center group">
                <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-extrabold text-gray-900 text-xl sm:text-2xl leading-snug">{member.name}</h3>
                  <span className="text-xs sm:text-sm font-bold text-amber-500 block uppercase tracking-wider">
                    {member.role}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-xs">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Documented in Academic Research */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="bg-amber-50/70 border border-amber-200/80 rounded-3xl p-10 space-y-5 text-center shadow-md">
          <span className="text-amber-800 font-bold text-xs sm:text-sm uppercase tracking-widest bg-amber-100 px-4 py-1.5 rounded-full border border-amber-200">
            Academic Recognition
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900">Documented in Academic Research</h2>
          <p className="text-gray-600 text-sm sm:text-base italic leading-relaxed max-w-3xl mx-auto">
            "The story of Ntambag Brothers CIG offers an inspiring case study of community resilience, self-reliance, and youth-led initiative in North West Cameroon. Their sustained commitment to education and healthcare outreach over two decades demonstrates the power of grassroots solidarity."
          </p>
          <p className="text-sm font-bold text-gray-800">
            — Dr. Jude Fokwang, <span className="text-amber-700 font-normal italic">Africa Insight, Vol 37 (3), September 2007</span>
          </p>
        </div>
      </section>

      {/* 9. Media Coverage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            In The News
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">Media Coverage</h2>
          <p className="text-gray-600 text-base sm:text-lg">Featured articles and news reports about our work in the community.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaCoverage.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-200 shadow-md space-y-4 hover:shadow-lg transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block">
                  {item.source} • {item.date}
                </span>
                <h3 className="font-extrabold text-gray-900 text-lg sm:text-xl leading-snug">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
              <a href={item.link} className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-800">
                Read Article <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 10. See Us in Action (Image Grid) */}
      <section className="bg-slate-50 py-20 sm:py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest bg-blue-100 px-4 py-1.5 rounded-full">
              Photo Gallery
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">See Us in Action</h2>
            <p className="text-gray-600 text-base sm:text-lg">A visual journey through our community events, distributions, and meetings.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {seeUsInActionImages.map((img, idx) => (
              <div key={idx} className="aspect-square rounded-3xl overflow-hidden shadow-md group cursor-pointer border border-gray-200">
                <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Join Our Family of Changemakers Banner */}
      <section className="bg-blue-600 text-white py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Join Our Family of Changemakers</h2>
          <p className="text-blue-100 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Whether you donate, volunteer, or simply spread the word, you can be part of our mission to transform lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/donate"
              className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-base"
            >
              <Heart className="w-5 h-5 text-gray-900 fill-gray-900" />
              Support Our Cause
            </Link>
            <Link
              href="/get-involved"
              className="bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all text-base"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
