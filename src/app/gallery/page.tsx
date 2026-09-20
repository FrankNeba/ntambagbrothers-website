import { getSiteData } from '@/lib/db';
import Link from 'next/link';
import { Heart } from 'lucide-react';

export const revalidate = 0;

export default function GalleryPage() {
  const data = getSiteData();

  // Photo gallery items: each item is a single image file (some image files are pre-made photo collages)
  const mosaicItems = [
    // Row 1
    {
      image: "/assets/bts-group-XV_NaYNH.jpg",
      title: "Community Outreach & Members",
      badge: "Community"
    },
    {
      image: "/assets/team-head-office-BkWXRLAZ.png",
      title: "Executive Team at Head Office",
      badge: "Leadership"
    },
    {
      image: "/assets/president-transition-CmK_465o.png",
      title: "Presidential Handover Ceremony",
      badge: "Ceremony"
    },
    {
      image: "/assets/bts-supplies-C4O45Rhf.jpg",
      title: "Back to School Materials Distribution",
      badge: "Education"
    },

    // Row 2
    {
      image: "/assets/community-supplies-distribution-BIb2PUkH.png",
      title: "Community Children Distribution",
      badge: "Community Support"
    },
    {
      image: "/assets/prize-award-2011-books-DE9qdQHd.png",
      title: "Educational Books Handover",
      badge: "Education"
    },
    {
      image: "/assets/student-achievement-BF0mNjOw.png",
      title: "Student Academic Achievement",
      badge: "Academic Excellence"
    },
    {
      image: "/assets/prize-award-2011-group-jQId7Z-l.png",
      title: "Students Group Prize Award",
      badge: "Prize Award"
    },

    // Row 3
    {
      image: "/assets/school-project-books-DOXTTuUi.png",
      title: "School Project Gathering",
      badge: "Education"
    },
    {
      image: "/assets/new-year-meal-2025-DtYu9c4a.png",
      title: "New Year Community Fellowship",
      badge: "Community Fellowship"
    },
    {
      image: "/assets/christmas-2023-BzZPmUSy.png",
      title: "Christmas Community Support",
      badge: "Community Gathering"
    },
    {
      image: "/assets/idp-support-DxPg1q7V.png",
      title: "Household & IDP Relief Support",
      badge: "Household Support"
    },

    // Row 4
    {
      image: "/assets/community-meeting-DncuecqW.png",
      title: "Community Meeting & Deliberations",
      badge: "Community Gathering"
    },
    {
      image: "/assets/micro-grant-forbi-BL8SUzsm.png",
      title: "Empowerment & Community Grant",
      badge: "Empowerment"
    },
    {
      image: "/assets/priest-ordination-Coeqawm_.png",
      title: "Priestly Ordination Ceremony",
      badge: "Ordination"
    },
    {
      image: "/assets/football-team-1Eie4oQS.png",
      title: "Youth Football Team",
      badge: "Sports & Youth"
    },

    // Row 5
    {
      image: "/assets/sports-football-kFEJi0aZ.png",
      title: "Youth Football Match",
      badge: "Sports & Youth"
    },
    {
      image: "/assets/health-center-flyer-D6C-KlX8.png",
      title: "Health Care Services & Flyer",
      badge: "Healthcare"
    },
    {
      image: "/assets/health-screening-BPWwGiKE.jpg",
      title: "Free Healthcare Screening Campaign",
      badge: "Healthcare"
    },
    {
      image: "/assets/health-outreach-DSBJgBdR.jpg",
      title: "Community Health Outreach Camp",
      badge: "Health Outreach"
    },

    // Row 6
    {
      image: "/assets/health-blood-test-FtD6RYkL.jpg",
      title: "Blood Glucose & Pressure Test",
      badge: "Medical Testing"
    },
    {
      image: "/assets/health-room-ixC0K5cZ.jpg",
      title: "Medical Checkup Clinic",
      badge: "Clinical Checkup"
    },
    {
      image: "/assets/health-supplies-B6FGr3FA.jpg",
      title: "Free Medical Supplies",
      badge: "Medical Supplies"
    },
    {
      image: "/assets/health-equipment-BSlhah-5.jpg",
      title: "Medical Diagnostic Equipment",
      badge: "Equipment"
    },

    // Row 7
    {
      image: "/assets/health-flyer-_8NDiO1x.jpg",
      title: "Health Diagnostic Kits & Materials",
      badge: "Health Campaign"
    },
    {
      image: "/assets/health-campaign-otfa-DhKmlUQe.png",
      title: "Health Campaign OTFA Partnership",
      badge: "Health Campaign"
    }
  ];

  // Success stories: single image per card (the image file itself contains the composite)
  const successStories = [
    {
      id: "story-1",
      title: "From Beneficiary to Priest",
      summary: "In April 2024, the Buea Diocese ordained one of Ntambag Brothers' sponsored children as a priest. This momentous achievement reflects the long-term impact of educational support and mentorship on young lives.",
      image: "/assets/priest-ordination-Coeqawm_.png"
    },
    {
      id: "story-2",
      title: "Top Student in the Region",
      summary: "In 2023, Ngwa Frank Neba, a Ntambag Brothers beneficiary, ranked as the best GCE Advanced Level student in the North West Region and 13th best in the republic. A testament to what's possible with the right support.",
      image: "/assets/student-achievement-BF0mNjOw.png"
    },
    {
      id: "story-3",
      title: "Health Campaign: Caring for Our Community",
      summary: "In partnership with OTFA, we organized a comprehensive health campaign offering free blood pressure and diabetes screening. Over 100 community members received vital health checks, with many detecting conditions early for the first time.",
      image: "/assets/health-screening-BPWwGiKE.jpg"
    }
  ];

  const testimonials = [
    {
      initial: "M",
      author: "Mama Grace",
      role: "Mother of Three Beneficiaries",
      quote: "The day my children received their school uniforms and supplies, I cried tears of joy. Ntambag Brothers gave us hope when we had none. My children now go to school with pride."
    },
    {
      initial: "E",
      author: "Emmanuel Tabi",
      role: "Scholarship Recipient",
      quote: "I was about to drop out of school because my family couldn't afford the fees. The scholarship from Ntambag Brothers changed my life completely. Now I'm in my final year of secondary school."
    },
    {
      initial: "N",
      author: "Ngeh Patricia",
      role: "Volunteer Mentor",
      quote: "Volunteering with this organization has taught me that small acts of kindness create ripples of change. Every child's smile reminds me why this work matters."
    },
    {
      initial: "P",
      author: "Pa Tanyi",
      role: "Health Campaign Beneficiary",
      quote: "The health screening saved my life. They discovered I had high blood pressure that I never knew about. Now I'm on medication and feeling much better."
    }
  ];

  return (
    <div className="space-y-24 pb-20 bg-white">
      {/* 1. Hero Banner */}
      <section className="bg-blue-600 text-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4 text-center">
          <span className="text-blue-100 font-bold text-xs sm:text-sm uppercase tracking-widest bg-blue-700/60 px-4 py-1.5 rounded-full border border-blue-400/40">
            Gallery & Stories
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
            Moments of Impact
          </h1>
          <p className="text-blue-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Every photo tells a story of hope, every testimonial echoes the power of community. Explore the faces and voices behind our mission.
          </p>
        </div>
      </section>

      {/* 2. Photo Gallery: See Our Work in Action */}
      <section className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            Photo Gallery
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            See Our Work in Action
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            A visual journey through our programs, events, and the lives we touch every day.
          </p>
        </div>

        {/* 4-column Responsive Grid with larger image sizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {mosaicItems.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 bg-white group aspect-[4/3] sm:aspect-[16/11]"
            >
              <img
                src={item.image}
                alt={item.title || "Ntambag Brothers Impact"}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {item.badge && (
                <span className="absolute bottom-3 left-3 bg-black/65 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-md">
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 3. Success Stories: Lives Transformed */}
      <section className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            Success Stories
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Lives Transformed
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Real stories of hope, resilience, and the power of community support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Single image header */}
                <div className="h-64 sm:h-72 overflow-hidden relative bg-gray-100">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-extrabold text-gray-900 leading-snug">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {story.summary}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Testimonials: Voices From Our Community */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Voices From Our Community
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Hear directly from the people whose lives have been touched by our work.
          </p>
        </div>

        {/* 2x2 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 relative"
            >
              <div className="space-y-4">
                {/* Amber Quote Icon */}
                <div className="text-amber-500">
                  <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 text-base leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              {/* Author with circular initial badge */}
              <div className="flex items-center gap-3.5 pt-2">
                <div className="w-11 h-11 rounded-full bg-blue-50 text-blue-600 font-bold flex items-center justify-center text-sm border border-blue-100 flex-shrink-0">
                  {t.initial}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">{t.author}</h4>
                  <p className="text-xs text-gray-500 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Watch Our Story: Impact in Motion */}
      <section className="bg-slate-100/70 py-20 sm:py-24 border-t border-slate-200/60">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-blue-700 font-bold text-xs uppercase tracking-widest bg-blue-100/80 px-4 py-1.5 rounded-full border border-blue-200">
              Watch Our Story
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Impact in Motion
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              See our programs and community in action through video.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video 1: Fr. Ben */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl">
              <div className="p-4 bg-gray-50">
                <div className="rounded-2xl overflow-hidden bg-black aspect-video relative">
                  <video
                    controls
                    preload="metadata"
                    poster="/assets/bts-group-XV_NaYNH.jpg"
                    className="w-full h-full object-cover"
                  >
                    <source src="/assets/bts-group-XV_NaYNH.jpg" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="p-6 text-center space-y-1">
                <h3 className="text-xl font-bold text-gray-900">Fr. Ben</h3>
                <p className="text-sm text-gray-500 font-medium">Community Supporter & Spiritual Advisor</p>
              </div>
            </div>

            {/* Video 2: Words of Encouragement */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl">
              <div className="p-4 bg-gray-50">
                <div className="rounded-2xl overflow-hidden bg-black aspect-video relative">
                  <video
                    controls
                    preload="metadata"
                    poster="/assets/bts-group-XV_NaYNH.jpg"
                    className="w-full h-full object-cover"
                  >
                    <source src="/assets/bts-group-XV_NaYNH.jpg" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="p-6 text-center space-y-1">
                <h3 className="text-xl font-bold text-gray-900">Words of Encouragement</h3>
                <p className="text-sm text-gray-500 font-medium">A message to children in need from our member</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Be Part of Our Story (CTA Banner) */}
      <section className="bg-blue-600 text-white py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Be Part of Our Story
          </h2>
          <p className="text-blue-100 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Your support writes the next chapter of hope for children and families in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/donate"
              className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-base"
            >
              <Heart className="w-5 h-5 text-gray-900 fill-gray-900" />
              Donate Now
            </Link>
            <Link
              href="/get-involved"
              className="bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all text-base flex items-center justify-center"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
