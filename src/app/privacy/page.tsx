import React from 'react';
import { Shield } from 'lucide-react';
import { SectionHeader } from '@/components/SharedUI';

export const metadata = {
  title: 'Privacy Policy | Ntambag Brothers CIG',
  description: 'Privacy Policy for Ntambag Brothers Common Initiative Group (CIG).',
};

export default function PrivacyPage() {
  return (
    <div>
      <section className="relative py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-6">
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl space-y-8 text-foreground">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">1. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ntambag Brothers Common Initiative Group (CIG) collects personal
              information when you voluntarily submit contact forms, volunteer
              applications, membership requests, or donation pledges. This may
              include your name, email address, phone number, and any details
              provided in message fields.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">2. How We Use Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use the collected information solely to communicate with you,
              process your requests, provide updates on our community programs,
              and coordinate volunteer or donor activities. We do not sell, rent,
              or share your personal data with third parties for marketing
              purposes.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">3. Recognition & Consent</h2>
            <p className="text-muted-foreground leading-relaxed">
              We respect the privacy and dignity of all donors and beneficiaries.
              Public recognition of donations or support is shared strictly with
              prior explicit consent. Donors may choose to remain anonymous at
              any time.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">4. Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement reasonable security measures to protect your personal
              information from unauthorized access, alteration, or disclosure.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">5. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions or requests regarding your personal
              information, please reach out to us at{' '}
              <a
                href="mailto:infos@ntambagbrothers.org"
                className="text-primary hover:underline"
              >
                infos@ntambagbrothers.org
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
