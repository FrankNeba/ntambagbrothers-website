'use client';

import React, { useState } from 'react';
import {
  Shield,
  CreditCard,
  Repeat,
  Heart,
  GraduationCap,
  Stethoscope,
  Users,
  CheckCircle2,
} from 'lucide-react';
import { SectionHeader } from '@/components/SharedUI';

export default function DonatePage() {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>(
    'one-time',
  );
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const amounts = [25, 50, 100, 250];

  const handleAmountClick = (amt: number) => {
    setSelectedAmount(amt);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (val: string) => {
    setCustomAmount(val);
    setSelectedAmount(null);
  };

  const getFinalAmount = () => {
    if (customAmount) return parseFloat(customAmount) || 0;
    return selectedAmount || 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !email || getFinalAmount() === 0) {
      alert('Please fill in your name, email, and choose a donation amount.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div>
      {/* Hero Header */}
      <section className="relative py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-6">
              Support Our Cause
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Support Our Cause
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Your generosity goes directly to children and families in Bamenda,
              Cameroon.
            </p>
          </div>
        </div>
      </section>

      {/* 100% Impact Banner */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg">
            <div className="p-8 flex items-start gap-4">
              <Shield className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  100% Community Impact
                </h3>
                <p className="text-muted-foreground text-lg">
                  We operate through volunteers and member support — no donation is
                  used for salaries or administrative costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Form or Success */}
            <div>
              {submitted ? (
                <div className="rounded-lg bg-card text-card-foreground border-0 shadow-xl">
                  <div className="p-10 text-center space-y-4">
                    <CheckCircle2 className="w-16 h-16 text-primary mx-auto" />
                    <h2 className="text-2xl font-bold text-foreground">
                      Thank You for Your Generosity!
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Your willingness to give helps us provide education,
                      healthcare, and hope.
                    </p>
                    <p className="text-muted-foreground">
                      Because we are volunteer-driven, your support creates direct
                      impact.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="rounded-lg bg-card text-card-foreground border-0 shadow-xl">
                  <div className="flex flex-col space-y-1.5 p-6 pb-4">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">
                      Thank You for Choosing to Give 💙
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Please complete this form to let us know how you&apos;d like
                      to support our work. We will follow up with clear,
                      transparent donation options.
                    </p>
                  </div>
                  <div className="p-6 pt-0 space-y-6">
                    {/* One-time vs Monthly Toggle */}
                    <div className="flex rounded-lg bg-muted p-1">
                      <button
                        type="button"
                        onClick={() => setDonationType('one-time')}
                        className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all flex items-center justify-center gap-2 cursor-pointer ${
                          donationType === 'one-time'
                            ? 'bg-background shadow text-foreground'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <CreditCard className="w-4 h-4" />
                        One-Time
                      </button>
                      <button
                        type="button"
                        onClick={() => setDonationType('monthly')}
                        className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all flex items-center justify-center gap-2 cursor-pointer ${
                          donationType === 'monthly'
                            ? 'bg-background shadow text-foreground'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <Repeat className="w-4 h-4" />
                        Monthly
                      </button>
                    </div>

                    {/* Amount Selection */}
                    <div>
                      <label className="text-base font-semibold mb-1 block">
                        Select Amount
                      </label>
                      <p className="text-sm text-muted-foreground mb-3">
                        Choose a gift amount that feels right for you — every
                        contribution makes a difference.
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                        {amounts.map((amt) => (
                          <button
                            key={amt}
                            type="button"
                            onClick={() => handleAmountClick(amt)}
                            className={`py-4 px-6 rounded-xl text-lg font-semibold transition-all cursor-pointer ${
                              selectedAmount === amt
                                ? 'bg-primary text-primary-foreground shadow-lg'
                                : 'bg-muted text-foreground hover:bg-primary/10'
                            }`}
                          >
                            ${amt}
                          </button>
                        ))}
                      </div>
                      <div>
                        <label
                          htmlFor="customAmount"
                          className="text-sm text-muted-foreground"
                        >
                          Or enter a custom amount
                        </label>
                        <div className="relative mt-1">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                            $
                          </span>
                          <input
                            id="customAmount"
                            type="number"
                            placeholder="Enter amount"
                            value={customAmount}
                            onChange={(e) =>
                              handleCustomAmountChange(e.target.value)
                            }
                            className="flex h-12 w-full rounded-md border border-input bg-background pl-8 pr-3 py-2 text-lg ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Personal Information */}
                    <div className="space-y-4">
                      <label className="text-base font-semibold block">
                        Your Information
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="firstName"
                            className="text-sm font-medium leading-none"
                          >
                            First Name *
                          </label>
                          <input
                            id="firstName"
                            placeholder="John"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="lastName"
                            className="text-sm font-medium leading-none"
                          >
                            Last Name
                          </label>
                          <input
                            id="lastName"
                            placeholder="Doe"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none"
                        >
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="text-sm font-medium leading-none"
                        >
                          Message (optional)
                        </label>
                        <textarea
                          id="message"
                          placeholder="Any message you'd like to share..."
                          className="flex min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={handleSubmit}
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg h-14 cursor-pointer"
                    >
                      <Heart className="w-5 h-5 mr-2" />
                      {isSubmitting
                        ? 'Submitting...'
                        : `Submit Donation Pledge ${
                            getFinalAmount() > 0 ? `— $${getFinalAmount()}` : ''
                          } ${donationType === 'monthly' ? '/month' : ''}`}
                    </button>

                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Shield className="w-5 h-5 text-primary" />
                      <span>
                        Your information is secure. We never share your details.
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Transparency + Areas + Stats */}
            <div className="space-y-8">
              <div>
                <SectionHeader
                  badge="Transparency"
                  title="How Your Donation Is Used"
                  description="100% of donations go directly to programs supporting children and families. No salaries. No administrative deductions."
                  centered={false}
                />
              </div>

              {/* 4 Pillars */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: GraduationCap, label: 'Education & Scholarships' },
                  { icon: Stethoscope, label: 'Healthcare Outreach' },
                  { icon: Users, label: 'Community Programs' },
                  { icon: Heart, label: 'Emergency Support' },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-5 rounded-2xl bg-muted"
                    >
                      <Icon className="w-6 h-6 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium text-sm">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* 3 Impact Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { number: '100%', label: 'Volunteer-Driven' },
                  { number: '5+', label: 'Years Active' },
                  { number: '150+', label: 'Lives Changed' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="text-center p-4 rounded-xl bg-muted"
                  >
                    <div className="text-2xl font-bold text-primary">
                      {item.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Message */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <p className="text-xl text-foreground font-medium leading-relaxed">
            Together, we are building opportunity and dignity within our
            community.
          </p>
        </div>
      </section>
    </div>
  );
}
