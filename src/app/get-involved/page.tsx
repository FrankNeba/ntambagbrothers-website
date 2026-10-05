'use client';

import React, { useState } from 'react';
import {
  HandHeart,
  Users,
  Building,
  Heart,
  Calendar,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { SectionHeader, CtaSection } from '@/components/SharedUI';

export default function GetInvolvedPage() {
  const [activeTab, setActiveTab] = useState<'volunteer' | 'member' | 'partner'>(
    'volunteer',
  );

  const volunteerRoles = [
    {
      title: 'Classroom Tutor',
      commitment: '2-4 hours/week',
      description:
        'Help students with homework, reading, and academic subjects after school.',
    },
    {
      title: 'Mentor',
      commitment: '4-6 hours/month',
      description:
        'Guide a young person through personal and professional development.',
    },
    {
      title: 'Event Volunteer',
      commitment: 'Flexible',
      description:
        'Help organize and run community events, drives, and celebrations.',
    },
    {
      title: 'Administrative Support',
      commitment: '4-8 hours/week',
      description:
        'Assist with office tasks, data entry, communications, and coordination.',
    },
    {
      title: 'Skills Trainer',
      commitment: 'Flexible',
      description:
        'Share your professional skills through workshops (computer literacy, crafts, etc.).',
    },
    {
      title: 'Outreach Volunteer',
      commitment: '2-4 hours/month',
      description:
        'Participate in community visits and family outreach activities.',
    },
  ];

  const upcomingEvents = [
    {
      title: 'Back-to-School Supply Drive',
      date: 'March 15, 2026',
      time: '9:00 AM - 4:00 PM',
      location: 'Ntambag Community Center',
      description:
        'Help us collect and distribute school supplies to 100+ students.',
    },
    {
      title: 'Community Outreach Day',
      date: 'April 5, 2026',
      time: '8:00 AM - 2:00 PM',
      location: 'Multiple Neighborhoods',
      description:
        'Join our volunteers in reaching families across Bamenda.',
    },
    {
      title: 'Youth Mentorship Workshop',
      date: 'April 20, 2026',
      time: '10:00 AM - 1:00 PM',
      location: 'Ntambag Youth Hall',
      description: 'Interactive workshop for mentors and mentees.',
    },
    {
      title: 'Annual Fundraising Gala',
      date: 'May 10, 2026',
      time: '6:00 PM - 10:00 PM',
      location: 'Bamenda City Hotel',
      description:
        'Our flagship fundraising event celebrating community impact.',
    },
  ];

  const partnershipOptions = [
    {
      icon: Building,
      title: 'Corporate Sponsorship',
      description:
        'Partner with us as a corporate sponsor to fund specific programs or events.',
    },
    {
      icon: Heart,
      title: 'CSR Programs',
      description:
        'Engage your employees in meaningful volunteer activities and giving campaigns.',
    },
    {
      icon: Users,
      title: 'Institutional Partnership',
      description:
        'Collaborate as an NGO, school, or government agency to expand our reach.',
    },
  ];

  const memberBenefits = [
    'Participate in decision-making at annual general meetings',
    'Receive regular updates on our programs and impact',
    'Access to exclusive member events and networking opportunities',
    'Be recognized as an official supporter of our mission',
    'Contribute your ideas and expertise to our programs',
    'Vote on organizational matters and leadership',
  ];

  return (
    <div>
      {/* Hero Header */}
      <section className="relative py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-6">
              Get Involved
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Join Our Community of Changemakers
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              There are many ways to make a difference. Whether you volunteer,
              become a member, or partner with us, your involvement creates
              lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Tab Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'volunteer' as const, label: 'Volunteer', icon: HandHeart },
              { id: 'member' as const, label: 'Become a Member', icon: Users },
              { id: 'partner' as const, label: 'Partner With Us', icon: Building },
            ].map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Volunteer Tab Content */}
          {activeTab === 'volunteer' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="rounded-lg bg-card text-card-foreground border-0 shadow-xl">
                  <div className="flex flex-col space-y-1.5 p-6 pb-4">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">
                      Volunteer Application
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Fill out this form to express your interest in volunteering
                      with us
                    </p>
                  </div>
                  <div className="p-6 pt-0 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="volFirstName"
                          className="text-sm font-medium leading-none"
                        >
                          First Name *
                        </label>
                        <input
                          id="volFirstName"
                          placeholder="Your first name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="volLastName"
                          className="text-sm font-medium leading-none"
                        >
                          Last Name *
                        </label>
                        <input
                          id="volLastName"
                          placeholder="Your last name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="volEmail"
                        className="text-sm font-medium leading-none"
                      >
                        Email Address *
                      </label>
                      <input
                        id="volEmail"
                        type="email"
                        placeholder="your@email.com"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="volPhone"
                        className="text-sm font-medium leading-none"
                      >
                        Phone Number
                      </label>
                      <input
                        id="volPhone"
                        type="tel"
                        placeholder="+237 6XX XXX XXX"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="volInterest"
                        className="text-sm font-medium leading-none"
                      >
                        Areas of Interest
                      </label>
                      <textarea
                        id="volInterest"
                        placeholder="Tell us what volunteer activities interest you most..."
                        className="flex min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="volExperience"
                        className="text-sm font-medium leading-none"
                      >
                        Relevant Experience
                      </label>
                      <textarea
                        id="volExperience"
                        placeholder="Share any relevant skills or experience..."
                        className="flex min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
                      />
                    </div>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11 px-8 cursor-pointer"
                    >
                      Submit Application
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <SectionHeader
                  badge="Opportunities"
                  title="Volunteer Roles"
                  description="Choose how you'd like to contribute your time and talents."
                  centered={false}
                />
                <div className="grid grid-cols-1 gap-4">
                  {volunteerRoles.map((role, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-muted hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-lg font-semibold text-foreground">
                          {role.title}
                        </h4>
                        <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-1 rounded-full">
                          {role.commitment}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {role.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Member Tab Content */}
          {activeTab === 'member' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="rounded-lg bg-card text-card-foreground border-0 shadow-xl">
                  <div className="flex flex-col space-y-1.5 p-6 pb-4">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">
                      Membership Registration
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Join our community as an official member and help guide our
                      mission
                    </p>
                  </div>
                  <div className="p-6 pt-0 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="memFirstName"
                          className="text-sm font-medium leading-none"
                        >
                          First Name *
                        </label>
                        <input
                          id="memFirstName"
                          placeholder="Your first name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="memLastName"
                          className="text-sm font-medium leading-none"
                        >
                          Last Name *
                        </label>
                        <input
                          id="memLastName"
                          placeholder="Your last name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="memEmail"
                        className="text-sm font-medium leading-none"
                      >
                        Email Address *
                      </label>
                      <input
                        id="memEmail"
                        type="email"
                        placeholder="your@email.com"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="memPhone"
                        className="text-sm font-medium leading-none"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="memPhone"
                        type="tel"
                        placeholder="+237 6XX XXX XXX"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="memOccupation"
                        className="text-sm font-medium leading-none"
                      >
                        Occupation
                      </label>
                      <input
                        id="memOccupation"
                        placeholder="Your profession"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="memMotivation"
                        className="text-sm font-medium leading-none"
                      >
                        Why do you want to join?
                      </label>
                      <textarea
                        id="memMotivation"
                        placeholder="Tell us what motivates you to become a member..."
                        className="flex min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
                      />
                    </div>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11 px-8 cursor-pointer"
                    >
                      Apply for Membership
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <SectionHeader
                  badge="Member Benefits"
                  title="Why Become a Member?"
                  description="As a member, you'll play an active role in shaping our organization's future."
                  centered={false}
                />
                <div className="space-y-4">
                  {memberBenefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-muted"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Partner Tab Content */}
          {activeTab === 'partner' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="rounded-lg bg-card text-card-foreground border-0 shadow-xl">
                  <div className="flex flex-col space-y-1.5 p-6 pb-4">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">
                      Partnership Inquiry
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Let&apos;s discuss how we can work together to create lasting
                      impact
                    </p>
                  </div>
                  <div className="p-6 pt-0 space-y-4">
                    <div>
                      <label
                        htmlFor="orgName"
                        className="text-sm font-medium leading-none"
                      >
                        Organization Name *
                      </label>
                      <input
                        id="orgName"
                        placeholder="Your organization"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contactName"
                          className="text-sm font-medium leading-none"
                        >
                          Contact Person *
                        </label>
                        <input
                          id="contactName"
                          placeholder="Full name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contactTitle"
                          className="text-sm font-medium leading-none"
                        >
                          Title/Position
                        </label>
                        <input
                          id="contactTitle"
                          placeholder="Your role"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="partnerEmail"
                        className="text-sm font-medium leading-none"
                      >
                        Email Address *
                      </label>
                      <input
                        id="partnerEmail"
                        type="email"
                        placeholder="contact@organization.com"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="partnerPhone"
                        className="text-sm font-medium leading-none"
                      >
                        Phone Number
                      </label>
                      <input
                        id="partnerPhone"
                        type="tel"
                        placeholder="+237 XXX XXX XXX"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="partnerType"
                        className="text-sm font-medium leading-none"
                      >
                        Type of Partnership Interested In
                      </label>
                      <textarea
                        id="partnerType"
                        placeholder="Describe the type of partnership you're interested in..."
                        className="flex min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
                      />
                    </div>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11 px-8 cursor-pointer"
                    >
                      Submit Inquiry
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <SectionHeader
                  badge="Partnership Options"
                  title="Ways to Partner"
                  description="We welcome partnerships with businesses, NGOs, and institutions."
                  centered={false}
                />
                <div className="space-y-6">
                  {partnershipOptions.map((opt, idx) => {
                    const Icon = opt.icon;
                    return (
                      <div
                        key={idx}
                        className="flex gap-5 p-6 rounded-2xl bg-muted hover:shadow-md transition-shadow"
                      >
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-2">
                            {opt.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {opt.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Upcoming Events"
            title="Join Us at Our Next Event"
            description="Mark your calendar and be part of our community activities."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((evt, idx) => (
              <div
                key={idx}
                className="rounded-lg bg-card text-card-foreground border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl bg-secondary/20 flex flex-col items-center justify-center">
                      <Calendar className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-secondary">
                        {evt.date}
                      </span>
                      <p className="text-xs text-muted-foreground">
                        {evt.time}
                      </p>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {evt.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {evt.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {evt.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CtaSection
        title="Ready to Make a Difference?"
        description="Whether you give time, talent, or treasure, your contribution matters."
        primaryButtonText="Donate Now"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </div>
  );
}
