'use client';

import React, { useState } from 'react';
import { Heart, X, CheckCircle, CreditCard, Send } from 'lucide-react';

export default function DonationModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState<'select' | 'details' | 'confirm'>('select');
  const [amount, setAmount] = useState('10000');
  const [customAmount, setCustomAmount] = useState('');
  const [donor, setDonor] = useState({ name: '', email: '', phone: '', note: '' });

  if (!isOpen) return null;

  const finalAmount = amount === 'custom' ? customAmount : amount;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden relative animate-in fade-in zoom-in duration-200">
        
        {/* Modal Header */}
        <div className="bg-emerald-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-emerald-200 hover:text-white p-1 rounded-full bg-emerald-800/50"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-white">Support Ntambag Brothers</h3>
              <p className="text-emerald-200 text-xs">Empowering children & families in Bamenda</p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {step === 'select' && (
            <div className="space-y-4">
              <label className="block text-sm font-semibold text-gray-700">Select Donation Amount (XAF / FCFA):</label>
              <div className="grid grid-cols-3 gap-3">
                {['5000', '10000', '25000', '50000', '100000'].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => { setAmount(amt); setCustomAmount(''); }}
                    className={`py-3 px-2 rounded-xl text-sm font-bold border transition-all ${
                      amount === amt
                        ? 'border-emerald-700 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-600'
                        : 'border-gray-200 text-gray-700 hover:border-emerald-400'
                    }`}
                  >
                    {parseInt(amt).toLocaleString()} FCFA
                  </button>
                ))}
                <button
                  onClick={() => setAmount('custom')}
                  className={`py-3 px-2 rounded-xl text-sm font-bold border transition-all ${
                    amount === 'custom'
                      ? 'border-emerald-700 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-600'
                      : 'border-gray-200 text-gray-700 hover:border-emerald-400'
                  }`}
                >
                  Custom
                </button>
              </div>

              {amount === 'custom' && (
                <div>
                  <input
                    type="number"
                    placeholder="Enter amount in FCFA..."
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-600 outline-none"
                  />
                </div>
              )}

              <button
                onClick={() => setStep('details')}
                disabled={!finalAmount || parseInt(finalAmount) <= 0}
                className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white font-bold py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 mt-4"
              >
                Continue to Details
              </button>
            </div>
          )}

          {step === 'details' && (
            <div className="space-y-4">
              <div className="bg-emerald-50 p-3 rounded-xl flex justify-between items-center text-sm border border-emerald-100">
                <span className="text-emerald-800 font-medium">Selected Amount:</span>
                <span className="font-extrabold text-emerald-900 text-base">{parseInt(finalAmount || '0').toLocaleString()} FCFA</span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  value={donor.name}
                  onChange={(e) => setDonor({ ...donor, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={donor.email}
                  onChange={(e) => setDonor({ ...donor, email: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number (MTN / Orange Money)</label>
                <input
                  type="tel"
                  placeholder="+237 6XXXXXXXX"
                  value={donor.phone}
                  onChange={(e) => setDonor({ ...donor, phone: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-600 outline-none"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setStep('select')}
                  className="w-1/3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2.5 rounded-xl text-sm transition-all"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep('confirm')}
                  disabled={!donor.name || !donor.phone}
                  className="w-2/3 bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white font-bold py-2.5 rounded-xl text-sm transition-all shadow"
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          )}

          {step === 'confirm' && (
            <div className="text-center space-y-4 py-4">
              <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto animate-bounce" />
              <h4 className="text-xl font-bold text-gray-900">Thank You for Your Support!</h4>
              <p className="text-sm text-gray-600">
                Please complete your Mobile Money transfer of <strong className="text-emerald-800">{parseInt(finalAmount || '0').toLocaleString()} FCFA</strong> to:
              </p>
              
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-left space-y-2 text-sm">
                <p><strong>Account Name:</strong> Ntambag Brothers CIG</p>
                <p><strong>MTN MoMo / Orange Money:</strong> +237 672 007 202</p>
                <p><strong>Reference:</strong> Donation - {donor.name}</p>
              </div>

              <p className="text-xs text-gray-500">
                Our financial secretary will send a payment acknowledgement receipt to <strong>{donor.email || donor.phone}</strong>.
              </p>

              <button
                onClick={onClose}
                className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3 rounded-xl transition-all shadow"
              >
                Close & Finish
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
