'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I donate to Ntambag Brothers?",
      answer: "You can donate online through our secure donation page, or contact us for bank transfer details and mobile money options (+237 672 007 202)."
    },
    {
      question: "Can I volunteer remotely?",
      answer: "Yes! We have opportunities for remote volunteers including translation, social media management, website administration, and program support."
    },
    {
      question: "How do I sponsor a child?",
      answer: "Contact us through this form or email us directly at infos@ntambagbrothers.org. We'll match you with a child and provide regular updates on their academic progress."
    },
    {
      question: "Are donations tax-deductible?",
      answer: "We are a registered Common Initiative Group (CIG) in Cameroon (Reg No: NW/GP/001/18/14870). Tax deductibility depends on your country's regulations. Contact us for formal tax receipt documentation."
    }
  ];

  return (
    <div className="space-y-16 py-12">
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4 text-center">
          <span className="text-amber-300 font-bold text-xs uppercase tracking-widest bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/40">
            Reach Out
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold">Get in Touch</h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-3xl mx-auto">
            Have questions or want to collaborate? Get in touch with our secretariat in Bamenda.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold text-gray-900">Headquarters & Details</h2>
            <p className="text-gray-600 leading-relaxed">
              We welcome visits, inquiries, and partnerships. Feel free to contact us through any of the channels below.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 text-blue-700 rounded-xl border border-blue-100">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base">Office Address</h3>
                <p className="text-sm text-gray-600">Old Town Bamenda, North West Region, Cameroon</p>
                <a 
                  href="https://maps.google.com/?q=Bamenda,Cameroon" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-blue-600 hover:underline mt-1 inline-block"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 text-blue-700 rounded-xl border border-blue-100">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base">Phone & Mobile Money</h3>
                <p className="text-sm text-gray-600">+237 672 007 202</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 text-blue-700 rounded-xl border border-blue-100">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base">Email Contact</h3>
                <p className="text-sm text-gray-600">infos@ntambagbrothers.org</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-50 text-green-700 rounded-xl border border-green-100">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base">WhatsApp Support</h3>
                <p className="text-sm text-gray-600">Instant messaging & Mobile Money support</p>
                <a 
                  href="https://wa.me/237672007202" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-green-600 hover:underline mt-1 inline-block"
                >
                  Chat on WhatsApp (+237 672 007 202) →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">Send Us a Message</h3>

          {submitted ? (
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl text-center space-y-3">
              <CheckCircle className="w-12 h-12 text-blue-600 mx-auto" />
              <h4 className="font-bold text-blue-950 text-lg">Message Sent!</h4>
              <p className="text-xs text-blue-800">
                Thank you for contacting Ntambag Brothers. We will reply to <strong>{form.email}</strong> shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Your Email *</label>
                <input
                  type="email"
                  required
                  placeholder="email@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  placeholder="Subject of message"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Message *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3.5 rounded-xl shadow transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ Section Accordion */}
      <section className="bg-slate-50 py-16 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="text-center space-y-3">
            <span className="text-blue-700 font-bold text-xs uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900">Have Questions? We Have Answers</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left font-bold text-gray-900 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span>{faq.question}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
