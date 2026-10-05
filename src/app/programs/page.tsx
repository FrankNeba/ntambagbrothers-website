'use client';

import React from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  BookOpen,
  Stethoscope,
  Lightbulb,
  Heart,
  Calendar,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { SectionHeader, CtaSection } from '@/components/SharedUI';

export default function ProgramsPage() {
  const programs = [
    {
      icon: GraduationCap,
      title: 'Education Sponsorship',
      shortDescription:
        'Providing scholarships and school fees for underprivileged children.',
      fullDescription:
        'Our flagship program provides full or partial scholarships to children from families who cannot afford school fees. We cover tuition, examination fees, and registration costs to ensure continuous education.',
      impact: [
        '85 children currently enrolled in sponsored schools',
        '95% school completion rate among sponsored students',
        '35 students graduated to secondary school in 2025',
      ],
      features: [
        'Full tuition coverage for qualifying students',
        'Examination fees and registration support',
        'Regular progress monitoring and reporting',
        'Parent/guardian counseling and engagement',
      ],
      image: '/assets/bts-group-XV_NaYNH.jpg',
    },
    {
      icon: BookOpen,
      title: 'School Supplies Support',
      shortDescription:
        'Equipping students with essential learning materials.',
      fullDescription:
        'We distribute school supplies, uniforms, and learning materials to ensure every child has the tools they need to succeed in school. Our supply kits are customized based on each student\'s grade level and specific needs.',
      impact: [
        '500+ supply kits distributed annually',
        '150 uniforms provided to students in need',
        '200 backpacks filled with books and stationery',
      ],
      features: [
        'Grade-appropriate textbooks and workbooks',
        'School uniforms and shoes',
        'Backpacks, stationery, and geometry sets',
        'Annual back-to-school supply drives',
      ],
      image: '/assets/bts-supplies-C4O45Rhf.jpg',
    },
    {
      icon: Stethoscope,
      title: 'Health Campaigns',
      shortDescription:
        'Free health screenings and community health education.',
      fullDescription:
        'In partnership with local health professionals and OTFA, we organize community health campaigns offering free screenings for conditions like hypertension and diabetes, along with health education and awareness programs.',
      impact: [
        '100+ community members screened per campaign',
        'Free blood pressure and glucose testing',
        'Early detection of health conditions for many',
      ],
      features: [
        'Free blood pressure screening',
        'Blood glucose (diabetes) testing',
        'Health education and awareness',
        'Referrals to healthcare facilities',
      ],
      image: '/assets/health-screening-BPWwGiKE.jpg',
    },
    {
      icon: Lightbulb,
      title: 'Youth Mentorship',
      shortDescription: 'Connecting young people with experienced mentors.',
      fullDescription:
        'Our mentorship program pairs young people with volunteer mentors who provide guidance on education, career choices, life skills, and personal development. Mentors meet regularly with their mentees and support them through challenges.',
      impact: [
        '40 active mentor-mentee pairs',
        'Monthly group mentorship sessions',
        '15 mentees secured internships or jobs in 2025',
      ],
      features: [
        'One-on-one mentorship matching',
        'Career guidance and goal setting',
        'Life skills and personal development',
        'Access to networking opportunities',
      ],
      image: '/assets/health-outreach-DSBJgBdR.jpg',
    },
    {
      icon: Heart,
      title: 'Community Outreach',
      shortDescription: 'Supporting families and neighborhoods in need.',
      fullDescription:
        'We organize community outreach events that address various needs including health awareness, family support, food distribution, and social welfare. Our outreach programs reach vulnerable families across multiple neighborhoods in Bamenda.',
      impact: [
        '12 community outreach events per year',
        '300+ families reached through outreach programs',
        '2 health awareness campaigns conducted',
      ],
      features: [
        'Home visits to vulnerable families',
        'Health and hygiene awareness programs',
        'Food and essential item distribution',
        'Community mobilization and engagement',
      ],
      image: '/assets/health-room-ixC0K5cZ.jpg',
    },
    {
      icon: Calendar,
      title: 'Events & Workshops',
      shortDescription: 'Educational events and skills-building workshops.',
      fullDescription:
        'We organize regular workshops, seminars, and special events that bring the community together for learning, celebration, and growth. These events cover topics ranging from academic support to vocational skills.',
      impact: [
        '8 major events hosted annually',
        'Average attendance of 100+ per event',
        '5 skills workshops for youth in 2025',
      ],
      features: [
        'Back-to-school celebrations',
        'Holiday gift drives and parties',
        'Skills training workshops (computer literacy, crafts)',
        'Academic support and tutoring sessions',
      ],
      image: '/assets/health-blood-test-FtD6RYkL.jpg',
    },
  ];

  return (
    <div>
      {/* Hero Header */}
      <section className="relative py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-6">
              Our Programs
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Programs That Transform Lives
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Discover the initiatives that are making a real difference in the
              lives of children and communities across Bamenda, Cameroon.
            </p>
          </div>
        </div>
      </section>

      {/* Six Pillars of Impact */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="What We Offer"
            title="Six Pillars of Impact"
            description="Our programs work together to address the holistic needs of children, youth, and families in our community."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={index}
                  className="bg-muted rounded-2xl p-6 hover:shadow-lg transition-all group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {program.shortDescription}
                  </p>
                  <a
                    href={`#${program.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-primary font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Deep Dives */}
      {programs.map((program, index) => {
        const Icon = program.icon;
        const isOdd = index % 2 === 1;
        const sectionId = program.title.toLowerCase().replace(/\s+/g, '-');

        return (
          <section
            key={index}
            id={sectionId}
            className={`py-20 ${index % 2 === 0 ? 'bg-muted' : 'bg-background'}`}
          >
            <div className="container mx-auto px-4">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  isOdd ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={isOdd ? 'lg:col-start-2' : ''}>
                  <div className="rounded-3xl overflow-hidden shadow-xl">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
                <div className={isOdd ? 'lg:col-start-1' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">
                      {program.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {program.fullDescription}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      Our Impact
                    </h4>
                    <ul className="space-y-2">
                      {program.impact.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="flex items-center gap-3 text-muted-foreground"
                        >
                          <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      What We Provide
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {program.features.map((feature, featIdx) => (
                        <li
                          key={featIdx}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href="/donate"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-2.5 shadow-md hover:shadow-lg"
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Support This Program
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Call to Action */}
      <CtaSection
        title="Help Us Expand Our Programs"
        description="Your support enables us to reach more children, train more volunteers, and create lasting change in our community."
        primaryButtonText="Donate Now"
        secondaryButtonText="Volunteer With Us"
        secondaryButtonLink="/get-involved"
      />
    </div>
  );
}
