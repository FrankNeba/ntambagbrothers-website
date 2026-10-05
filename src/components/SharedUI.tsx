'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, ArrowRight, Quote } from 'lucide-react';

export function SectionHeader({
  badge,
  title,
  description,
  centered = true,
  light = false,
}: {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}) {
  const alignClass = centered ? 'text-center' : 'text-left';
  const widthClass = centered ? 'max-w-3xl mx-auto' : '';
  const titleClass = light ? 'text-primary-foreground' : 'text-foreground';
  const descClass = light ? 'text-primary-foreground/80' : 'text-muted-foreground';
  const badgeClass = light
    ? 'bg-primary-foreground/20 text-primary-foreground'
    : 'bg-primary/10 text-primary';

  return (
    <div className={`${alignClass} ${widthClass} mb-12`}>
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${badgeClass}`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${titleClass} mb-4`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg ${descClass} leading-relaxed`}>{description}</p>
      )}
    </div>
  );
}

export function CtaSection({
  title,
  description,
  primaryButtonText = 'Donate Now',
  primaryButtonLink = '/donate',
  primaryButtonIcon: PrimaryIcon = Heart,
  secondaryButtonText,
  secondaryButtonLink = '/get-involved',
  variant = 'primary',
}: {
  title: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  primaryButtonIcon?: any;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  variant?: 'primary' | 'gradient';
}) {
  const bgClass =
    variant === 'primary'
      ? 'bg-primary'
      : 'bg-gradient-to-r from-primary to-hope-green-light';

  return (
    <section className={`${bgClass} py-20`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 max-w-2xl mx-auto">
          {title}
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryButtonLink}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 h-11 shadow-lg hover:shadow-xl"
          >
            <PrimaryIcon className="w-5 h-5 mr-2" />
            {primaryButtonText}
          </Link>
          {secondaryButtonText && (
            <Link
              href={secondaryButtonLink}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 h-11"
            >
              {secondaryButtonText}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export function StatCard({
  icon: Icon,
  number,
  label,
  description,
}: {
  icon: any;
  number: string;
  label: string;
  description?: string;
}) {
  return (
    <div className="text-center p-6 rounded-2xl bg-background shadow-lg hover:shadow-xl transition-all group">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <div className="text-4xl font-bold text-primary mb-2">{number}</div>
      <div className="text-lg font-semibold text-foreground mb-1">{label}</div>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

export function ProgramCard({
  icon: Icon,
  title,
  description,
  impact,
  image,
  link = '/programs',
}: {
  icon: any;
  title: string;
  description: string;
  impact: string;
  image?: string;
  link?: string;
}) {
  return (
    <div className="rounded-lg bg-card text-card-foreground overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6 pb-2 space-y-1.5">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold leading-none tracking-tight text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="p-6 pt-0">
        <div className="flex items-center gap-2 text-sm text-secondary font-semibold mb-4">
          <span className="w-2 h-2 rounded-full bg-secondary" />
          {impact}
        </div>
        <Link
          href={link}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

export function TestimonialCard({
  quote,
  name,
  role,
  image,
}: {
  quote: string;
  name: string;
  role: string;
  image?: string;
}) {
  return (
    <div className="rounded-lg border-0 shadow-lg hover:shadow-xl transition-all bg-background text-card-foreground">
      <div className="p-8">
        <Quote className="w-10 h-10 text-secondary mb-4" />
        <blockquote className="text-foreground text-lg leading-relaxed mb-6">
          &quot;{quote}&quot;
        </blockquote>
        <div className="flex items-center gap-4">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-14 h-14 rounded-full object-cover border-2 border-secondary"
            />
          ) : (
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xl font-bold text-primary">
                {name.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <div className="font-semibold text-foreground">{name}</div>
            <div className="text-sm text-muted-foreground">{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
