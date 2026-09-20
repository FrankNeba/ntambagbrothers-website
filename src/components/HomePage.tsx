'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  GraduationCap, Award, HeartHandshake, Users, ArrowRight, Heart, 
  CheckCircle, Globe, BookOpen, Calendar, MessageSquare, ExternalLink, Sparkles
} from 'lucide-react';
import DonationModal from '@/components/DonationModal';

export default function HomePage({ initialData }: { initialData: any }) {
  const [data] = useState(initialData);
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  const stats = [
    { id: "1", label: "Children Supported", value: "150+", icon: GraduationCap },
    { id: "2", label: "Active Volunteers & Mentors", value: "50+", icon: Users },
    { id: "3", label: "Community Programs", value: "10+", icon: HeartHandshake },
    { id: "4", label: "Years of Service", value: "20+", icon: Award }
  ];

  const programs = data?.programs || [];

  const momentsOfImpactImages = [
    "/assets/bts-supplies-C4O45Rhf.jpg",
    "/assets/new-year-meal-2025-DtYu9c4a.png",
    "/assets/student-achievement-BF0mNjOw.png",
    "/assets/health-campaign-otfa-DhKmlUQe.png"
  ];

  const upcomingEvents = [
    {
      title: "Ntambag Brothers Revamping Workshop",
      date: "February 22, 2026",
      description: "A strategic workshop to revamp and strengthen the organization's mission, programs, and community impact.",
      highlight: true
    },
    {
      title: "Back-to-School Supply Drive",
      date: "March 15, 2026",
      description: "Help us prepare children for the new school year with essential textbooks and supplies.",
      highlight: false
    },
    {
      title: "Community Healthcare Outreach Day",
      date: "April 5, 2026",
      description: "Join our volunteers in offering free medical checkups and health education to families.",
      highlight: false
    }
  ];

  const testimonials = [
    {
      quote: "The back-to-school support from Ntambag Brothers allowed my children to return to school with new books and uniforms when we had nothing.",
      author: "Mama Comfort",
      role: "Parent & Community Beneficiary"
    },
    {
      quote: "Being a mentor with Ntambag Brothers has been the most rewarding experience of my life. Watching children grow and succeed because of our support is incredible.",
      author: "Peter Nkwenti",
      role: "Volunteer Mentor"
    },
    {
      quote: "The sponsorship I received gave me the confidence to pursue my dreams. I am forever grateful to Ntambag Brothers for believing in me.",
      author: "Blessing Fon",
      role: "Program Beneficiary"
    }
  ];

  const heroImages = [
    "/assets/bts-group-XV_NaYNH.jpg",
    "/assets/community-supplies-distribution-BIb2PUkH.png",
    "/assets/health-campaign-otfa-DhKmlUQe.png"
  ];
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-24 pb-20 bg-white">
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[680px] lg:min-h-[760px] bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center overflow-hidden py-24 sm:py-32">
        {heroImages.map((img, idx) => (
          <div 
            key={img}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out scale-105 ${
              idx === currentImageIndex ? 'opacity-70 z-0' : 'opacity-0 z-0'
            }`}
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/85 via-blue-950/40 to-blue-950/50 z-0" />

        <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <div className="max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs sm:text-sm font-semibold">
              <Globe className="w-4 h-4 text-amber-400" />
              <span>Making a Difference in Bamenda, Cameroon</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Empowering Children.<br />
              <span className="text-amber-400">Strengthening Communities.</span><br />
              Building Hope.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Ntambag Brothers CIG is dedicated to transforming the lives of underprivileged children and youth in Cameroon through education, mentorship, and community development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button
                onClick={() => setIsDonateOpen(true)}
                className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold px-8 py-3.5 rounded-xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 text-base"
              >
                <Heart className="w-5 h-5 text-gray-900 fill-gray-900" />
                Donate Now
              </button>
              
              <Link
                href="/get-involved"
                className="bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-base"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block z-10">
          <div className="w-7 h-11 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-2.5 bg-white/80 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* 2. Our Mission Statement */}
      <section className="bg-slate-50 py-12 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <span className="text-blue-700 font-bold text-xs uppercase tracking-widest bg-blue-100/70 px-3.5 py-1.5 rounded-full border border-blue-200">
            Our Mission
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Creating Lasting Change Through Love & Action
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            We believe every child deserves the opportunity to learn, grow, and thrive. Through our programs, we're not just providing resources—we're building a foundation for a brighter future for the entire community.
          </p>
        </div>
      </section>

      {/* 3. Our Impact Numbers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-blue-700 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Our Impact
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">Numbers That Tell Our Story</h2>
          <p className="text-gray-600 text-sm">Every statistic represents a life touched, a dream nurtured, and a community strengthened.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-100 p-6 sm:p-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.id} className="p-4 sm:p-6 text-center space-y-2">
                <div className="inline-flex p-3 rounded-xl bg-blue-50 text-blue-600">
                  <Icon className="w-7 h-7" />
                </div>
                <p className="text-3xl sm:text-4xl font-extrabold text-gray-900">{stat.value}</p>
                <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Programs That Transform Lives */}
      <section className="bg-slate-50 py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-blue-700 font-bold text-xs uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
              What We Do
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900">Programs That Transform Lives</h2>
            <p className="text-gray-600 text-sm">Our initiatives are designed to address the most pressing needs of children and youth in our community.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.slice(0, 4).map((program: any) => (
              <div 
                key={program.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-blue-900/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md backdrop-blur-sm">
                    {program.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
                      {program.summary}
                    </p>
                  </div>

                  <Link 
                    href="/programs" 
                    className="inline-flex items-center gap-1.5 text-blue-600 font-bold text-xs hover:text-blue-800 transition-all"
                  >
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow"
            >
              View All Programs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Voices From Our Community */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-blue-700 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Stories of Hope
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">Voices From Our Community</h2>
          <p className="text-gray-600 text-sm">Hear from the people whose lives have been touched by our work.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md space-y-4 flex flex-col justify-between">
              <p className="text-gray-600 text-sm italic leading-relaxed">"{t.quote}"</p>
              <div>
                <h4 className="font-bold text-gray-900 text-base">{t.author}</h4>
                <p className="text-xs text-blue-600 font-medium">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Publication Feature - Fr. Joseph Awoh Jum Book */}
      <section className="bg-slate-50/60 py-16 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-100/80 px-4 py-1.5 rounded-full">
              New Publication
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              A Book by Our Spiritual Father
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Rev. Fr. Joseph Awoh Jum's new book reimagines evangelization in Africa — and all royalties support orphans and disadvantaged children.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 pt-4">
            <div className="flex-shrink-0">
              <img 
                src="/assets/book-cover-CV7r9y_j.png" 
                alt="What Our Church Could Be - Book by Fr. Joseph Awoh Jum" 
                className="w-64 sm:w-72 md:w-80 rounded-2xl shadow-2xl hover:scale-102 transition-transform duration-300 border border-gray-200"
              />
            </div>

            <div className="max-w-xl space-y-4 text-left">
              <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                What Our Church Could Be
              </h3>
              <p className="text-amber-500 font-bold text-lg">
                Reimagining Evangelization in an African Church
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                With clarity, conviction, and deep pastoral insight, Fr. Jum invites the Church in Cameroon — and across Africa — to reimagine evangelization for our time. Endorsed by the Archbishop of Bamenda, the Bishop of Kumba, and the Bishop of Buea.
              </p>
              <p className="text-xs text-gray-500 italic leading-relaxed">
                "This book is both an instrument and an invitation... it should shape the formation of every future priest, religious, and lay missionary across Cameroon and the African continent." — <span className="font-medium text-gray-700">Bishop Agapitus Nfon, Diocese of Kumba</span>
              </p>
              
              <div className="flex items-start gap-2 text-xs text-blue-700 font-semibold bg-blue-50/80 p-3 rounded-xl border border-blue-100">
                <BookOpen className="w-4 h-4 shrink-0 mt-0.5 text-blue-600" />
                <span>
                  All royalties support the Mother Teresa Emmaus Centre (MOTEC) — providing hope for orphans, single mothers, and disadvantaged children in Buea.
                </span>
              </div>

              <div className="pt-2">
                <a 
                  href="https://www.amazon.com/s?k=What+Our+Church+Could+Be+Joseph+Jum" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm"
                >
                  <BookOpen className="w-4 h-4 text-gray-900" />
                  Get Your Copy on Amazon
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Moments of Impact (Image Grid) - exact match to user screenshot */}
      <section className="bg-slate-50 py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-blue-700 font-bold text-xs uppercase tracking-widest bg-blue-100 px-3.5 py-1 rounded-full">
              See Our Work
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900">Moments of Impact</h2>
            <p className="text-gray-600 text-sm">A glimpse into the lives we're changing and the communities we're building.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {momentsOfImpactImages.map((img, idx) => (
              <div key={idx} className="aspect-square rounded-2xl overflow-hidden shadow-md group cursor-pointer border border-gray-200">
                <img 
                  src={img} 
                  alt={`Community activity ${idx + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white font-bold px-7 py-3 rounded-xl transition-all shadow text-sm"
            >
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Upcoming Events */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-blue-700 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Upcoming Events
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">Join Us at Our Next Event</h2>
          <p className="text-gray-600 text-sm">Be part of our community activities and make a difference together.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((ev, idx) => (
            <div 
              key={idx}
              className={`rounded-2xl p-6 transition-all space-y-4 ${
                ev.highlight 
                  ? 'bg-blue-50 border-2 border-blue-300 shadow-md' 
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-blue-700 font-bold text-xs">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span>{ev.date}</span>
                </div>
                {ev.highlight && (
                  <span className="bg-amber-500 text-gray-900 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    NEW
                  </span>
                )}
              </div>
              <h3 className="font-bold text-gray-900 text-lg">{ev.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{ev.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Final Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-8 sm:p-12 text-center text-white space-y-6 shadow-2xl border-4 border-amber-500">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Together, We Can Change Lives</h2>
          <p className="text-blue-100 text-base max-w-2xl mx-auto">
            Your support—whether through donations, volunteering, or spreading the word—creates ripples of hope in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button
              onClick={() => setIsDonateOpen(true)}
              className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold px-8 py-3.5 rounded-xl shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5 text-gray-900 fill-gray-900" />
              Make a Donation
            </button>
            <Link
              href="/get-involved"
              className="bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>

      <DonationModal isOpen={isDonateOpen} onClose={() => setIsDonateOpen(false)} />
    </div>
  );
}
