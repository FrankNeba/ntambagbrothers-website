'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Heart,
  Users,
  HandHeart,
  GraduationCap,
  BookOpen,
  Lightbulb,
  ArrowRight,
  Calendar,
} from 'lucide-react';
import {
  SectionHeader,
  CtaSection,
  StatCard,
  ProgramCard,
  TestimonialCard,
} from '@/components/SharedUI';

const heroImages = [
  '/assets/bts-group-XV_NaYNH.jpg',
  '/assets/health-screening-BPWwGiKE.jpg',
  '/assets/health-outreach-DSBJgBdR.jpg',
  '/assets/bts-supplies-C4O45Rhf.jpg',
];

export default function HomePage({ initialData }: { initialData?: any }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: Users,
      number: '150+',
      label: 'Children Supported',
      description: 'Receiving education and care',
    },
    {
      icon: HandHeart,
      number: '50+',
      label: 'Dedicated Volunteers',
      description: 'Serving our community',
    },
    {
      icon: GraduationCap,
      number: '10+',
      label: 'Active Programs',
      description: 'Transforming lives daily',
    },
    {
      icon: Heart,
      number: '20+',
      label: 'Years of Brotherhood',
      description: 'Since 2004 in Ntambag Quarter',
    },
  ];

  const programs = [
    {
      icon: GraduationCap,
      title: 'Education Sponsorship',
      description:
        'Providing scholarships and educational support to underprivileged children, ensuring they have access to quality education.',
      impact: '85 children currently sponsored',
      image: '/assets/bts-group-XV_NaYNH.jpg',
    },
    {
      icon: BookOpen,
      title: 'School Supplies Support',
      description:
        'Equipping students with essential learning materials including books, uniforms, and stationery.',
      impact: '500+ supply kits distributed',
      image: '/assets/bts-supplies-C4O45Rhf.jpg',
    },
    {
      icon: Lightbulb,
      title: 'Health & Community Outreach',
      description:
        'Organizing health screenings and community support programs for families in need.',
      impact: '300+ families reached',
      image: '/assets/health-screening-BPWwGiKE.jpg',
    },
  ];

  const testimonials = [
    {
      quote:
        'Thanks to Ntambag Brothers, my daughter is now in school and dreaming of becoming a doctor. They gave our family hope when we had none.',
      name: 'Mama Comfort',
      role: 'Parent & Community Member',
    },
    {
      quote:
        'Volunteering with this organization has been the most rewarding experience of my life. Seeing the smiles on these children\'s faces is priceless.',
      name: 'Peter Nkwenti',
      role: 'Volunteer Mentor',
    },
    {
      quote:
        'The mentorship program helped me discover my potential. Now I\'m pursuing my dream of becoming an engineer.',
      name: 'Blessing Fon',
      role: 'Program Beneficiary',
    },
  ];

  const upcomingEvents = [
    {
      title: 'Ntambag Brothers Revamping Workshop',
      date: 'February 22, 2026',
      description:
        'A strategic workshop to revamp and strengthen the organization\'s mission, programs, and community impact.',
      highlight: true,
    },
    {
      title: 'Back-to-School Supply Drive',
      date: 'March 15, 2026',
      description:
        'Help us prepare children for the new school year with essential supplies.',
    },
    {
      title: 'Community Outreach Day',
      date: 'April 5, 2026',
      description:
        'Join our volunteers in reaching families across Bamenda neighborhoods.',
    },
  ];

  const galleryPreviewImages = [
    '/assets/bts-supplies-C4O45Rhf.jpg',
    '/assets/christmas-2023-BzZPmUSy.png',
    '/assets/student-achievement-BF0mNjOw.png',
    '/assets/health-campaign-otfa-DhKmlUQe.png',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {heroImages.map((src, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${src})`,
              opacity: currentImageIndex === index ? 1 : 0,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-primary/60" />
        <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-6 animate-fade-in">
              🌍 Making a Difference in Bamenda, Cameroon
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            >
              Empowering Children.
              <br />
              <span className="text-secondary">Strengthening Communities.</span>
              <br />
              Building Hope.
            </h1>
            <p
              className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              Ntambag Brothers CIG is dedicated to transforming the lives of
              underprivileged children and youth in Cameroon through education,
              mentorship, and community development.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 h-11 text-base shadow-xl hover:shadow-2xl"
              >
                <Heart className="w-5 h-5 mr-2" />
                Donate Now
              </Link>
              <Link
                href="/get-involved"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 h-11 text-base"
              >
                <Users className="w-5 h-5 mr-2" />
                Volunteer
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-white hover:bg-white/10 px-8 py-3 h-11 text-base"
              >
                Join Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/80 rounded-full animate-pulse-gentle" />
          </div>
        </div>
      </section>

      {/* Mission Intro */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeader
              badge="Our Mission"
              title="Creating Lasting Change Through Love & Action"
              description="We believe every child deserves the opportunity to learn, grow, and thrive. Through our programs, we're not just providing resources—we're building a foundation for a brighter future for the entire community."
            />
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Our Impact"
            title="Numbers That Tell Our Story"
            description="Every statistic represents a life touched, a dream nurtured, and a community strengthened."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <StatCard {...stat} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="What We Do"
            title="Programs That Transform Lives"
            description="Our initiatives are designed to address the most pressing needs of children and youth in our community."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProgramCard {...program} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground px-8 py-3 h-11 text-base"
            >
              View All Programs
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stories of Hope */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Stories of Hope"
            title="Voices From Our Community"
            description="Hear from the people whose lives have been touched by our work."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Publication Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="New Publication"
            title="A Book by Our Spiritual Father"
            description="Rev. Fr. Joseph Awoh Jum's new book reimagines evangelization in Africa — and all royalties support orphans and disadvantaged children."
          />
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="flex-shrink-0">
              <img
                src="/assets/book-cover-front-Bb5LspoH.png"
                alt="What Our Church Could Be - Book by Fr. Joseph Awoh Jum"
                className="w-64 md:w-72 rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                What Our Church Could Be
              </h3>
              <p className="text-lg text-secondary font-semibold">
                Reimagining Evangelization in an African Church
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With clarity, conviction, and deep pastoral insight, Fr. Jum
                invites the Church in Cameroon — and across Africa — to
                reimagine evangelization for our time. Endorsed by the Archbishop
                of Bamenda, the Bishop of Kumba, and the Bishop of Buea.
              </p>
              <p className="text-sm text-muted-foreground italic">
                &quot;This book is both an instrument and an invitation... it
                should shape the formation of every future priest, religious,
                and lay missionary across Cameroon and the African continent.&quot;
                — Bishop Agapitus Nfon, Diocese of Kumba
              </p>
              <p className="text-sm font-medium text-primary">
                📖 All royalties support the Mother Teresa Emmaus Centre
                (MOTEC) — providing hope for orphans, single mothers, and
                disadvantaged children in Buea.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2">
                <a
                  href="https://www.amazon.com/s?k=What+Our+Church+Could+Be+Joseph+Jum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 h-11 text-base"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Get Your Copy on Amazon
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moments of Impact (Gallery Preview) */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="See Our Work"
            title="Moments of Impact"
            description="A glimpse into the lives we're changing and the communities we're building."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryPreviewImages.map((src, index) => (
              <div
                key={index}
                className="aspect-square rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Community activity ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground px-8 py-3 h-11 text-base"
            >
              View Full Gallery
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Upcoming Events"
            title="Join Us at Our Next Event"
            description="Be part of our community activities and make a difference together."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 hover:shadow-lg transition-shadow ${
                  event.highlight
                    ? 'bg-primary/5 border-2 border-primary/20'
                    : 'bg-muted'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-secondary">
                    {event.date}
                  </span>
                  {event.highlight && (
                    <span className="text-xs font-bold bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">
                      NEW
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CtaSection
        title="Together, We Can Change Lives"
        description="Your support—whether through donations, volunteering, or spreading the word—creates ripples of hope in our community."
        primaryButtonText="Make a Donation"
        secondaryButtonText="Become a Volunteer"
        secondaryButtonLink="/get-involved"
      />
    </div>
  );
}
