'use client';

import React, { useState } from 'react';
import DonationModal from '@/components/DonationModal';
import { Heart, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';

export default function DonatePage() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="space-y-16 py-12">
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4 text-center">
          <span className="text-amber-300 font-bold text-xs uppercase tracking-widest bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/40">
            Support Our Cause
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold">Support Our Work</h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-3xl mx-auto">
            Your generous contribution directly empowers underprivileged children, supports families, and strengthens community health in Bamenda, Cameroon.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 space-y-10 text-center">
        {/* Transparency Statement */}
        <div className="bg-amber-50 border-2 border-amber-200 p-8 rounded-3xl space-y-4 shadow-sm text-left">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-amber-600 shrink-0" />
            <div>
              <h3 className="font-extrabold text-gray-900 text-xl">100% Community Impact Commitment</h3>
              <p className="text-xs text-amber-800 font-semibold">Transparency & Integrity Guarantee</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            Ntambag Brothers Common Initiative Group (CIG) is a volunteer-led nonprofit organization. 100% of public donations go directly to funding educational materials, child tuition assistance, medical screening supplies, and relief packages for displaced families.
          </p>
        </div>

        {/* Call to action */}
        <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-xl space-y-6">
          <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
            <Heart className="w-8 h-8 text-white fill-white" />
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-extrabold text-gray-900">Make a Direct Contribution</h2>
            <p className="text-gray-600 text-sm max-w-lg mx-auto">
              Select your preferred donation amount and payment method (MTN Mobile Money, Orange Money, or Bank Transfer).
            </p>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-extrabold px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-3 text-lg scale-105"
          >
            <Heart className="w-6 h-6 fill-gray-900" /> Open Secure Donation Portal
          </button>

          <div className="pt-4 flex items-center justify-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5" /> Secure Transaction</span>
            <span>•</span>
            <span>Reg No: NW/GP/001/18/14870</span>
          </div>
        </div>
      </section>

      <DonationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
