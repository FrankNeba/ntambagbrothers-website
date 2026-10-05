'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, Star, Users, CheckCircle2, Mail } from 'lucide-react';
import { SectionHeader } from '@/components/SharedUI';

export default function RecognitionPage() {
  const values = [
    'No hierarchy based on donation size',
    'Recognition shared only with permission',
    'Equal respect for every supporter',
  ];

  const supporters = [
    {
      icon: Users,
      title: 'Members',
      description:
        'The foundation of our organization, contributing time, ideas, and financial support through yearly registration to fund our projects.',
    },
    {
      icon: Heart,
      title: 'Donors & Volunteers',
      description:
        'Those who give generously — whether through resources, time, or expertise.',
    },
    {
      icon: Star,
      title: 'Partners',
      description:
        'Organizations and individuals who collaborate with us to amplify our impact.',
    },
  ];

  return (
    <div>
      {/* Hero Header */}
      <section className="relative py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-6">
              🌟 Gratitude
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Recognition & Appreciation
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              We believe gratitude strengthens community. This page honors those
              who support our mission with humility and respect.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Message */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Heart className="w-12 h-12 text-primary mx-auto mb-6" />
          <p className="text-xl text-foreground font-medium leading-relaxed">
            We sincerely thank our members, donors, volunteers, and partners whose
            generosity makes our work possible.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                badge="Our Values"
                title="Recognition Guided by Integrity"
                description="Recognition at Ntambag Brothers CIG is guided by integrity, consent, and equality."
                centered={false}
              />
            </div>
            <div className="rounded-lg bg-card text-card-foreground border-0 shadow-xl">
              <div className="p-8 space-y-5">
                {values.map((val, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground text-lg">{val}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meaningful Role Note */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Star className="w-12 h-12 text-secondary mx-auto mb-6" />
          <p className="text-xl text-foreground font-medium leading-relaxed mb-4">
            Every contribution — time, resources, or support — plays a
            meaningful role in changing lives.
          </p>
        </div>
      </section>

      {/* Supporters Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Thank You"
            title="Our Supporters"
            description="We honor every individual and group who stands with us."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {supporters.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-lg bg-card text-card-foreground border-0 shadow-lg text-center"
                >
                  <div className="p-8">
                    <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <p className="text-xl text-primary-foreground font-medium leading-relaxed mb-4">
            Thank you for standing with us in service to children and families in
            Bamenda, Cameroon.
          </p>
          <p className="text-primary-foreground/80 mb-8">
            If you would like to be recognized or receive impact updates, please
            contact us.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-3 h-11"
          >
            <Mail className="w-4 h-4 mr-2" />
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
