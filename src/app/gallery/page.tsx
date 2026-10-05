'use client';

import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeader, CtaSection, TestimonialCard } from '@/components/SharedUI';

export default function GalleryPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  const images = [
    {
      src: '/assets/president-transition-CmK_465o.png',
      alt: 'President Bobga Valentine takes office - January 2025',
      category: 'Leadership',
    },
    {
      src: '/assets/team-head-office-BkWXRLAZ.png',
      alt: 'Ntambag Brothers team at the head office in Old Town, Bamenda',
      category: 'Leadership',
    },
    {
      src: '/assets/micro-grant-forbi-BL8SUzsm.png',
      alt: 'President receives micro-grant from Mezam Parliamentarian Mr. Forbi for agricultural development',
      category: 'Leadership',
    },
    {
      src: '/assets/school-project-books-DOXTTuUi.png',
      alt: 'Ntambag Brothers school project 2024-2026 - Books ready for distribution',
      category: 'Education',
    },
    {
      src: '/assets/bts-group-XV_NaYNH.jpg',
      alt: 'Back-to-school community gathering',
      category: 'Education',
    },
    {
      src: '/assets/bts-supplies-C4O45Rhf.jpg',
      alt: 'School supplies distribution',
      category: 'Education',
    },
    {
      src: '/assets/student-achievement-BF0mNjOw.png',
      alt: 'Celebrating Ngwa Frank Neba - Best 2023 GCE student in NW Region',
      category: 'Education',
    },
    {
      src: '/assets/prize-award-2011-books-DE9qdQHd.png',
      alt: 'Prize award to meritorious pupils - G.P.S. Old Town Group I Bamenda - June 2011',
      category: 'Education',
    },
    {
      src: '/assets/prize-award-2011-group-jQId7Z-l.png',
      alt: 'Prize award ceremony - Meritorious pupils receive supplies at Government School Old Town - June 2011',
      category: 'Education',
    },
    {
      src: '/assets/new-year-meal-2025-DtYu9c4a.png',
      alt: 'New Year 2025 meal for underprivileged children',
      category: 'Community Outreach',
    },
    {
      src: '/assets/christmas-2023-BzZPmUSy.png',
      alt: 'Christmas 2023 celebration for less privileged kids',
      category: 'Community Outreach',
    },
    {
      src: '/assets/idp-support-DxPg1q7V.png',
      alt: 'Supporting IDP family - rent and food assistance',
      category: 'Community Outreach',
    },
    {
      src: '/assets/community-meeting-DncuecqW.png',
      alt: 'Community meeting with food supplies distribution',
      category: 'Community Outreach',
    },
    {
      src: '/assets/community-supplies-distribution-BIb2PUkH.png',
      alt: 'Group photo - community members and children receiving supplies',
      category: 'Community Outreach',
    },
    {
      src: '/assets/priest-ordination-Coeqawm_.png',
      alt: 'Celebrating a beneficiary ordained as priest - Buea Diocese 2024',
      category: 'Success Stories',
    },
    {
      src: '/assets/sports-football-kFEJi0aZ.png',
      alt: 'Ntambag Brothers football team - Sport is health',
      category: 'Sports & Youth',
    },
    {
      src: '/assets/football-team-1Eie4oQS.png',
      alt: 'Ntambag Brothers football team group photo',
      category: 'Sports & Youth',
    },
    {
      src: '/assets/health-center-flyer-D6C-KlX8.png',
      alt: 'Ntambag Integrated Health Center - Healthcare partnership flyer',
      category: 'Health Campaign',
    },
    {
      src: '/assets/health-campaign-otfa-DhKmlUQe.png',
      alt: 'Health campaign with OTFA - BP and diabetes screening',
      category: 'Health Campaign',
    },
    {
      src: '/assets/health-screening-BPWwGiKE.jpg',
      alt: 'Health screening for community members',
      category: 'Health Campaign',
    },
    {
      src: '/assets/health-blood-test-FtD6RYkL.jpg',
      alt: 'Blood glucose testing',
      category: 'Health Campaign',
    },
    {
      src: '/assets/health-room-ixC0K5cZ.jpg',
      alt: 'Community health screening center',
      category: 'Health Campaign',
    },
    {
      src: '/assets/health-outreach-DSBJgBdR.jpg',
      alt: 'Health outreach in the community',
      category: 'Health Campaign',
    },
    {
      src: '/assets/health-equipment-BSlhah-5.jpg',
      alt: 'Medical equipment and supplies',
      category: 'Health Campaign',
    },
    {
      src: '/assets/health-supplies-B6FGr3FA.jpg',
      alt: 'Medical supplies ready for distribution',
      category: 'Health Campaign',
    },
    {
      src: '/assets/health-flyer-_8NDiO1x.jpg',
      alt: 'Health campaign promotional flyer',
      category: 'Events',
    },
  ];

  const stories = [
    {
      title: 'From Beneficiary to Priest',
      content:
        'In April 2024, the Buea Diocese ordained one of Ntambag Brothers\' sponsored children as a priest. This momentous achievement reflects the long-term impact of educational support and mentorship on young lives.',
      image: '/assets/priest-ordination-Coeqawm_.png',
    },
    {
      title: 'Top Student in the Region',
      content:
        'In 2023, Ngwa Frank Neba, a Ntambag Brothers beneficiary, ranked as the best GCE Advanced Level student in the North West Region and 13th best in the republic. A testament to what\'s possible with the right support.',
      image: '/assets/student-achievement-BF0mNjOw.png',
    },
    {
      title: 'Health Campaign: Caring for Our Community',
      content:
        'In partnership with OTFA, we organized a comprehensive health campaign offering free blood pressure and diabetes screening. Over 100 community members received vital health checks, with many detecting conditions early for the first time.',
      image: '/assets/health-campaign-otfa-DhKmlUQe.png',
    },
  ];

  const testimonials = [
    {
      quote:
        'The day my children received their school uniforms and supplies, I cried tears of joy. Ntambag Brothers gave us hope when we had none. My children now go to school with pride.',
      name: 'Mama Grace',
      role: 'Mother of Three Beneficiaries',
    },
    {
      quote:
        'I was about to drop out of school because my family couldn\'t afford the fees. The scholarship from Ntambag Brothers changed my life completely. Now I\'m in my final year of secondary school.',
      name: 'Emmanuel Tabi',
      role: 'Scholarship Recipient',
    },
    {
      quote:
        'Volunteering with this organization has taught me that small acts of kindness create ripples of change. Every child\'s smile reminds me why this work matters.',
      name: 'Ngeh Patricia',
      role: 'Volunteer Mentor',
    },
    {
      quote:
        'The health screening saved my life. They discovered I had high blood pressure that I never knew about. Now I\'m on medication and feeling much better.',
      name: 'Pa Tanyi',
      role: 'Health Campaign Beneficiary',
    },
  ];

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1,
      );
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1,
      );
    }
  };

  return (
    <div>
      {/* Hero Header */}
      <section className="relative py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-6">
              Gallery & Stories
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Moments of Impact
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Every photo tells a story of hope, every testimonial echoes the
              power of community. Explore the faces and voices behind our
              mission.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Photo Gallery"
            title="See Our Work in Action"
            description="A visual journey through our programs, events, and the lives we touch every day."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className="aspect-square rounded-xl overflow-hidden group cursor-pointer relative"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-end">
                  <span className="text-primary-foreground font-medium text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    {img.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-4 right-4 text-primary-foreground hover:text-secondary transition-colors"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={handlePrev}
            className="absolute left-4 text-primary-foreground hover:text-secondary transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 text-primary-foreground hover:text-secondary transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <img
            src={images[selectedImageIndex].src}
            alt={images[selectedImageIndex].alt}
            className="max-w-full max-h-[80vh] rounded-xl object-contain"
          />
          <div className="absolute bottom-8 text-center px-4">
            <p className="text-primary-foreground text-lg">
              {images[selectedImageIndex].alt}
            </p>
            <p className="text-primary-foreground/60 text-sm">
              {selectedImageIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      )}

      {/* Success Stories */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Success Stories"
            title="Lives Transformed"
            description="Real stories of hope, resilience, and the power of community support."
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <div
                key={index}
                className="rounded-lg bg-card text-card-foreground border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {story.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Testimonials"
            title="Voices From Our Community"
            description="Hear directly from the people whose lives have been touched by our work."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, index) => (
              <TestimonialCard key={index} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact in Motion (Videos) */}
      <section className="py-20 bg-primary/15">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Watch Our Story"
            title="Impact in Motion"
            description="See our programs and community in action through video."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-background rounded-3xl p-6 shadow-xl">
              <div className="aspect-video rounded-2xl overflow-hidden bg-muted mb-6">
                <video
                  controls
                  className="w-full h-full object-cover"
                  poster="/assets/bts-group-XV_NaYNH.jpg"
                >
                  <source
                    src="/videos/fr-ben-testimonial.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Fr. Ben
                </h3>
                <p className="text-muted-foreground">
                  Community Supporter & Spiritual Advisor
                </p>
              </div>
            </div>
            <div className="bg-background rounded-3xl p-6 shadow-xl">
              <div className="aspect-video rounded-2xl overflow-hidden bg-muted mb-6">
                <video
                  controls
                  className="w-full h-full object-cover"
                  poster="/assets/bts-group-XV_NaYNH.jpg"
                >
                  <source
                    src="/videos/member-encouragement.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Words of Encouragement
                </h3>
                <p className="text-muted-foreground">
                  A message to children in need from our member
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CtaSection
        title="Be Part of Our Story"
        description="Your support writes the next chapter of hope for children and families in our community."
        primaryButtonText="Donate Now"
        secondaryButtonText="Volunteer With Us"
        secondaryButtonLink="/get-involved"
      />
    </div>
  );
}
