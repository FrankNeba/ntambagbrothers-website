'use client';

import React, { useState } from 'react';
import { UserPlus, Heart, CheckCircle, Send, BookOpen, Star, Calendar, Megaphone, Settings, GraduationCap, MapPin, Clock } from 'lucide-react';
import DonationModal from '@/components/DonationModal';

export default function GetInvolvedPage() {
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    role: 'Classroom Tutor', 
    availability: '',
    message: '' 
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const volunteerRoles = [
    {
      icon: BookOpen,
      title: "Classroom Tutor",
      description: "Provide after-school homework help and reading support to children in our education program.",
      color: "blue"
    },
    {
      icon: Star,
      title: "Mentor",
      description: "Offer personal and professional guidance to young people navigating education and career decisions.",
      color: "amber"
    },
    {
      icon: Calendar,
      title: "Event Volunteer",
      description: "Help organize and run community drives, back-to-school events, and outreach activities.",
      color: "emerald"
    },
    {
      icon: Settings,
      title: "Administrative Support",
      description: "Assist with office tasks, data entry, communications, and organizational management.",
      color: "purple"
    },
    {
      icon: GraduationCap,
      title: "Skills Trainer",
      description: "Conduct workshops in areas like computer literacy, crafts, entrepreneurship, or life skills.",
      color: "rose"
    },
    {
      icon: MapPin,
      title: "Outreach Volunteer",
      description: "Visit families and conduct community outreach in Bamenda neighborhoods to identify those in need.",
      color: "orange"
    }
  ];

  const upcomingEvents = [
    {
      title: "Back-to-School Supply Drive",
      time: "9:00 AM - 4:00 PM",
      description: "Help us distribute school supplies, textbooks, and backpacks to children in need.",
      highlight: true
    },
    {
      title: "Community Outreach Day",
      time: "8:00 AM - 2:00 PM",
      description: "Join our volunteers in visiting families and identifying community needs in Old Town Bamenda.",
      highlight: false
    },
    {
      title: "Youth Mentorship Workshop",
      time: "10:00 AM - 1:00 PM",
      description: "A dedicated session connecting mentors with youth for career and educational guidance.",
      highlight: false
    },
    {
      title: "Annual Fundraising Gala",
      time: "6:00 PM - 10:00 PM",
      description: "Our flagship annual event to celebrate community achievements and raise funds for our programs.",
      highlight: false
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
            Join Our Cause
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold">Join Our Community of Changemakers</h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-3xl mx-auto">
            Whether as an active member, donor, or volunteer, your partnership helps us reach more children and families in need.
          </p>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-blue-700 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            How You Can Help
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">Volunteer Roles</h2>
          <p className="text-gray-600 text-sm">Choose a role that matches your skills and passion to make a direct impact in our community.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {volunteerRoles.map((role, idx) => {
            const Icon = role.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 space-y-4 hover:shadow-lg transition-all group">
                <div className={`inline-flex p-3 rounded-xl border ${colorMap[role.color]}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">{role.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{role.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Application Form + Ways to Help */}
      <section className="bg-slate-50 py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Ways to Contribute */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold text-gray-900">Ways You Can Help</h2>
              <p className="text-gray-600 leading-relaxed">
                Ntambag Brothers CIG thrives on collective efforts. Here is how you can directly support our mission:
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-amber-100 text-amber-800 rounded-xl">
                  <Heart className="w-6 h-6 fill-amber-500" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-gray-900 text-lg">Financial Support / Donation</h3>
                  <p className="text-xs text-gray-600">Fund back-to-school kits, medical screening supplies, and relief packages for vulnerable families.</p>
                  <button
                    onClick={() => setIsDonateOpen(true)}
                    className="inline-block mt-2 text-xs font-bold text-amber-600 hover:underline"
                  >
                    Make a Donation →
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-blue-100 text-blue-800 rounded-xl">
                  <UserPlus className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-gray-900 text-lg">Become an Active Member</h3>
                  <p className="text-xs text-gray-600">Join our assembly, attend general meetings, and participate in executive decisions that shape our community programs.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-emerald-100 text-emerald-800 rounded-xl">
                  <Megaphone className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-gray-900 text-lg">Partner With Us</h3>
                  <p className="text-xs text-gray-600">Organizations and institutions can collaborate with us to amplify our community impact across Bamenda and beyond.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Volunteer Form */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-gray-900">Volunteer Application</h3>
              <p className="text-xs text-gray-500">Fill out your details below and our team will contact you with next steps.</p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-emerald-950 text-lg">Application Submitted!</h4>
                <p className="text-xs text-emerald-800">
                  Thank you, <strong>{form.name}</strong>. Our team will review your application and contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+237 6XXXXXXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Preferred Role</label>
                  <select
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-600 outline-none bg-white"
                  >
                    <option value="Classroom Tutor">Classroom Tutor</option>
                    <option value="Mentor">Mentor</option>
                    <option value="Event Volunteer">Event Volunteer</option>
                    <option value="Administrative Support">Administrative Support</option>
                    <option value="Skills Trainer">Skills Trainer</option>
                    <option value="Outreach Volunteer">Outreach Volunteer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Availability</label>
                  <input
                    type="text"
                    placeholder="e.g. Weekends, Evenings, Full-time..."
                    value={form.availability}
                    onChange={(e) => setForm({ ...form, availability: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Bio / Message</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us briefly about yourself and why you want to volunteer..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3.5 rounded-xl shadow transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-blue-700 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Upcoming Events
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">Join Us at Our Next Event</h2>
          <p className="text-gray-600 text-sm">Be part of our community activities and make a difference together.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {upcomingEvents.map((ev, idx) => (
            <div 
              key={idx}
              className={`rounded-2xl p-6 transition-all space-y-4 ${
                ev.highlight 
                  ? 'bg-blue-50 border-2 border-blue-300 shadow-md' 
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-2 text-blue-700 font-bold text-xs">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>{ev.time}</span>
              </div>
              <h3 className="font-bold text-gray-900 text-base">{ev.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{ev.description}</p>
            </div>
          ))}
        </div>
      </section>

      <DonationModal isOpen={isDonateOpen} onClose={() => setIsDonateOpen(false)} />
    </div>
  );
}
