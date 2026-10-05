'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Send,
  Loader2,
} from 'lucide-react';
import { Facebook, Twitter, Instagram, Youtube } from '@/components/SocialIcons';
import { SectionHeader } from '@/components/SharedUI';

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const contactCards = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Old Town Bamenda', 'North West Region', 'Cameroon'],
      isLink: false,
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['infos@ntambagbrothers.org'],
      isLink: true,
      linkType: 'email',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+237 672 007 202'],
      isLink: true,
      linkType: 'phone',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: ['+237 672 007 202'],
      isLink: true,
      linkType: 'whatsapp',
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: 'Facebook',
      url: 'https://www.facebook.com/share/g/1HBUhknZVq/',
      color: 'hover:text-blue-600',
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: 'https://twitter.com/ntambagbrothers',
      color: 'hover:text-sky-500',
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://instagram.com/ntambagbrothers',
      color: 'hover:text-pink-600',
    },
    {
      icon: Youtube,
      name: 'YouTube',
      url: 'https://youtube.com/ntambagbrothers',
      color: 'hover:text-red-600',
    },
  ];

  const faqs = [
    {
      question: 'How can I donate to Ntambag Brothers?',
      answer:
        'You can donate online through our secure donation page, or contact us for bank transfer details and mobile money options.',
    },
    {
      question: 'Can I volunteer remotely?',
      answer:
        'Yes! We have opportunities for remote volunteers including translation, social media management, and administrative support.',
    },
    {
      question: 'How do I sponsor a child?',
      answer:
        "Contact us through this form or email us directly. We'll match you with a child and provide regular updates on their progress.",
    },
    {
      question: 'Are donations tax-deductible?',
      answer:
        "We are a registered CIG in Cameroon. Tax deductibility depends on your country's laws. Contact us for documentation.",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert('Please fill in all required fields.');
      return;
    }
    setSubmitting(true);
    // Simulating message submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      alert('Thank you for reaching out. We will get back to you soon.');
    }, 1000);
  };

  return (
    <div>
      {/* Hero Header */}
      <section className="relative py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Have questions, want to get involved, or just want to say hello?
              We&apos;d love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <div className="rounded-lg bg-card text-card-foreground border-0 shadow-xl">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Fill out the form below and we&apos;ll get back to you as soon as
                    possible.
                  </p>
                  <form className="space-y-4" onSubmit={handleSubmit}>
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
                          placeholder="Your first name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
                          value={formData.firstName}
                          onChange={handleChange}
                          disabled={submitting}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="text-sm font-medium leading-none"
                        >
                          Last Name *
                        </label>
                        <input
                          id="lastName"
                          placeholder="Your last name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
                          value={formData.lastName}
                          onChange={handleChange}
                          disabled={submitting}
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
                        placeholder="your@email.com"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={submitting}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium leading-none"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+237 6XX XXX XXX"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={submitting}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium leading-none"
                      >
                        Subject *
                      </label>
                      <input
                        id="subject"
                        placeholder="What is your message about?"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
                        value={formData.subject}
                        onChange={handleChange}
                        disabled={submitting}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        placeholder="Write your message here..."
                        className="flex min-h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
                        value={formData.message}
                        onChange={handleChange}
                        disabled={submitting}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11 px-8 cursor-pointer"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Information & Socials */}
            <div className="space-y-8">
              <div>
                <SectionHeader
                  badge="Contact Information"
                  title="Other Ways to Reach Us"
                  description="Choose the method that works best for you."
                  centered={false}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactCards.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-muted hover:shadow-lg transition-shadow"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {card.title}
                      </h3>
                      <div className="space-y-1">
                        {card.details.map((detail, dIdx) => (
                          <p key={dIdx} className="text-sm text-muted-foreground">
                            {card.isLink ? (
                              <a
                                href={
                                  card.linkType === 'email'
                                    ? `mailto:${detail}`
                                    : card.linkType === 'phone'
                                      ? `tel:${detail.replace(/\s/g, '')}`
                                      : card.linkType === 'whatsapp'
                                        ? `https://wa.me/${detail.replace(/\s/g, '').replace('+', '')}`
                                        : '#'
                                }
                                className="hover:text-primary transition-colors"
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Media */}
              <div className="p-6 rounded-2xl bg-muted">
                <h3 className="font-semibold text-foreground mb-4">
                  Follow Us on Social Media
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((s, idx) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={idx}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 rounded-xl bg-background flex items-center justify-center text-muted-foreground ${s.color} transition-colors shadow-sm`}
                        aria-label={s.name}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Join our Facebook community group for updates, stories, and
                  discussions.
                </p>
              </div>

              {/* Office Hours */}
              <div className="p-6 rounded-2xl bg-primary text-primary-foreground">
                <h3 className="font-semibold mb-4">Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Our Location"
            title="Find Us in Bamenda"
            description="Located in the heart of Ntambag neighborhood, easily accessible from the city center."
          />
          <div className="rounded-3xl overflow-hidden shadow-xl bg-background h-96">
            <div className="w-full h-full flex items-center justify-center bg-muted">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Interactive map placeholder
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Old Town Bamenda, North West Region, Cameroon
                </p>
                <a
                  href="https://maps.google.com/?q=Bamenda,Cameroon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-md border border-input bg-background hover:bg-accent text-sm font-medium"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="FAQs"
            title="Frequently Asked Questions"
            description="Quick answers to common questions about our organization."
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-muted hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
