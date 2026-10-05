import React from 'react';

export const metadata = {
  title: 'Terms of Service | Ntambag Brothers CIG',
  description: 'Terms of Service for Ntambag Brothers Common Initiative Group (CIG).',
};

export default function TermsPage() {
  return (
    <div>
      <section className="relative py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-6">
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of Service
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
            <h2 className="text-2xl font-bold">1. About Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ntambag Brothers Common Initiative Group (CIG), also known as
              NTAMBIDEG, is a registered community interest group based in Old
              Town Bamenda, North West Region, Cameroon. Our mission is to empower
              underprivileged children and youth through education, mentorship,
              and community development.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">2. Use of Our Website</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using this website, you agree to comply with all
              applicable laws and not to engage in any activity that impairs the
              operation, security, or availability of the website.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">3. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All materials on this website, including texts, photos, graphics,
              logos, and video materials, are the property of Ntambag Brothers
              CIG or their respective copyright holders, and are protected by
              applicable copyright laws.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">4. Donations & Transparency</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ntambag Brothers CIG is volunteer-operated. 100% of public
              donations go directly to funding education sponsorships, school
              materials, health screenings, and community outreach. No donation
              funds are used for administrative salaries.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">5. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions regarding these Terms of Service, please contact us at{' '}
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
