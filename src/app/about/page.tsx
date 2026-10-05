'use client';

import React from 'react';
import {
  Heart,
  Shield,
  Users,
  Lightbulb,
  Star,
  HandHeart,
  BookOpen,
  Target,
  Eye,
  Newspaper,
  ExternalLink,
} from 'lucide-react';
import { SectionHeader, CtaSection } from '@/components/SharedUI';

export default function AboutPage() {
  const coreValues = [
    {
      icon: Heart,
      title: 'Compassion',
      description:
        'We lead with love and empathy in everything we do, treating every child and community member with dignity and respect.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description:
        'We maintain the highest ethical standards, ensuring transparency in our operations and accountability to our donors and community.',
    },
    {
      icon: Users,
      title: 'Community',
      description:
        'We believe in the power of collective action and work alongside community members to create sustainable change.',
    },
    {
      icon: Lightbulb,
      title: 'Empowerment',
      description:
        'We equip individuals with the tools and knowledge they need to transform their own lives and communities.',
    },
    {
      icon: Star,
      title: 'Excellence',
      description:
        'We strive for excellence in our programs, continuously improving to maximize our impact on the lives we touch.',
    },
    {
      icon: HandHeart,
      title: 'Service',
      description:
        'We are dedicated to selfless service, putting the needs of the most vulnerable at the center of our work.',
    },
  ];

  const leadershipTeam = [
    {
      name: 'Bobga Valentine Tita',
      role: 'President',
      bio: 'Elected December 2024, bringing 17 years of experience as Minutes Secretary. Committed to continuing humanitarian activities and serving the Ntambag community.',
      image: '/assets/president-bobga-tita-enhanced-C3b4ZPnr.jpg',
    },
    {
      name: 'Prof. Mbanga Laurence Akei',
      role: 'Vice President',
      bio: 'Distinguished academic and community leader elected alongside President Tita to help guide the organization into its new era.',
      image: '/assets/vp-mbanga-CnnOcwXG.jpg',
    },
    {
      name: 'Dr. Ernest Dzelamonyuy',
      role: 'Secretary General',
      bio: 'Coordinates the overall administration of the organization, ensuring strategic alignment and effective execution of programs.',
      image: '/assets/secgen-dzelamonyuy-C7Ht5_Fc.jpg',
    },
    {
      name: 'Ndimbu Polycarp',
      role: 'Immediate Past President',
      bio: 'Led Ntambag Brothers CIG through years of growth and impact, now serving as advisor and mentor to the new leadership.',
      image: '/assets/health-screening-BPWwGiKE.jpg',
    },
    {
      name: 'Bar. Aloysius Fokou',
      role: 'Adviser & Legal Officer',
      bio: 'Provides legal counsel and strategic advisory support to the organization, ensuring sound governance and compliance.',
      image: '/assets/adviser-fouko-WyEAozAc.jpg',
    },
    {
      name: 'Vitalis Wiyfofe',
      role: 'Secretary',
      bio: 'Handles organizational records, correspondence, and administrative duties to keep Ntambag Brothers running smoothly.',
      image: '/assets/secretary-wiyfife-XjkuBiaa.jpg',
    },
    {
      name: 'Nchotu Harrison',
      role: 'Treasurer',
      bio: "Manages the organization's finances with transparency and accountability, ensuring funds are directed to maximum community impact.",
      image: '/assets/treasurer-nchatu-sP0_3u2A.jpg',
    },
    {
      name: 'Mawo Pascal',
      role: 'Publicity Secretary',
      bio: "Leads communications and public relations efforts, raising awareness of the organization's mission and impact across the community.",
      image: '/assets/publicity-mawo-CyPsP6Fn.jpg',
    },
    {
      name: 'Beng Linus (Bobo Leennox)',
      role: 'Financial Secretary',
      bio: 'Oversees financial record-keeping and reporting, ensuring accurate documentation of all organizational transactions.',
      image: '/assets/financial-sec-beng-Xnig_nOJ.jpg',
    },
    {
      name: 'Elise Nagwa Bamedig',
      role: 'Matron',
      bio: "Serves as the organization's matron, providing guidance and maternal support to beneficiaries and community programs.",
      image: '/assets/matron-elise-nagwa-Du2b6FpH.jpg',
    },
    {
      name: 'Marie Clair Komtangi',
      role: 'Matron',
      bio: "Serves as the organization's matron, providing guidance and maternal support to beneficiaries and community programs.",
      image: '/assets/metron-komtangi-C8FJ9lsr.jpg',
    },
    {
      name: 'Don Roger',
      role: 'Education / School Committee Chair',
      bio: 'Leads the education and school committee, driving scholarship programs and academic initiatives that empower youth in the community.',
      image: '/assets/education-don-roger-DIjkdTPQ.jpg',
    },
    {
      name: 'Christian Emeka',
      role: 'Chief Whip',
      bio: "Ensures discipline and orderly conduct within the organization, fostering unity and adherence to the group's principles.",
      image: '/assets/chief-whip-emeka-Dc5hJVx4.jpg',
    },
    {
      name: 'Mobit Victor',
      role: 'Socials',
      bio: 'Coordinates social events and activities, strengthening bonds among members and fostering community engagement.',
      image: '/assets/socials-mobit-victor-BG9CFzRt.jpg',
    },
  ];

  const coreObjectives = [
    {
      icon: BookOpen,
      title: 'Child Sponsorship & Education',
      description:
        'Providing scholarships, school fees, and educational support to underprivileged children, ensuring they can complete their education.',
    },
    {
      icon: Users,
      title: 'Youth Empowerment',
      description:
        'Offering mentorship, skills training, and leadership development programs that prepare young people for successful futures.',
    },
    {
      icon: Heart,
      title: 'Community Engagement',
      description:
        'Organizing outreach events, health campaigns, and awareness programs that strengthen the fabric of our community.',
    },
    {
      icon: HandHeart,
      title: 'Volunteer Mobilization',
      description:
        'Building a network of dedicated volunteers who contribute their time, skills, and resources to serve those in need.',
    },
  ];

  const activityImages = [
    '/assets/president-transition-CmK_465o.png',
    '/assets/bts-supplies-C4O45Rhf.jpg',
    '/assets/new-year-meal-2025-DtYu9c4a.png',
    '/assets/christmas-2023-BzZPmUSy.png',
    '/assets/idp-support-DxPg1q7V.png',
    '/assets/priest-ordination-Coeqawm_.png',
    '/assets/student-achievement-BF0mNjOw.png',
    '/assets/health-campaign-otfa-DhKmlUQe.png',
  ];

  return (
    <div>
      {/* Hero Header */}
      <section className="relative py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Who We Are
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Ntambag Brothers CIG is a community-based organization dedicated to
              uplifting underprivileged children and empowering youth in Bamenda,
              Cameroon.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                badge="Our Story"
                title="From Humble Beginnings to Community Impact"
                description=""
                centered={false}
              />
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Ntambag Brothers CIG traces its roots back to{' '}
                  <strong className="text-foreground font-semibold">2004</strong>{' '}
                  when a group of young men who had come of age in Ntambag
                  Quarter (Old Town Bamenda) came together to form a social
                  brotherhood. United by their shared neighborhood and a desire
                  to support one another, they created a bond that would
                  eventually transform into something much greater.
                </p>
                <p>
                  For years, the group functioned as a social support
                  network—celebrating together in good times and standing by
                  each other during challenges. But as the brothers matured and
                  witnessed the struggles of children and families in their
                  community, they felt called to do more.
                </p>
                <p>
                  This calling led to the formal registration of{' '}
                  <strong className="text-foreground font-semibold">
                    Ntambag Brothers Integrated Development CIG (NTAMBIDEG)
                  </strong>
                  , transforming from a social group into a Community Interest
                  Group dedicated to uplifting the underprivileged. What began as
                  informal gatherings of brothers has grown into comprehensive
                  programs serving hundreds of children and families.
                </p>
                <p>
                  Today, with over{' '}
                  <strong className="text-foreground font-semibold">
                    20 years of brotherhood
                  </strong>{' '}
                  and community service, we continue to expand our reach through
                  education sponsorship, health campaigns, and youth empowerment
                  initiatives—always staying true to our roots in Ntambag
                  Quarter.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/assets/bts-group-XV_NaYNH.jpg"
                alt="Back-to-school community gathering"
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
              <img
                src="/assets/health-screening-BPWwGiKE.jpg"
                alt="Health screening campaign"
                className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8"
              />
              <img
                src="/assets/bts-supplies-C4O45Rhf.jpg"
                alt="School supplies distribution"
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
              <img
                src="/assets/health-outreach-DSBJgBdR.jpg"
                alt="Community health outreach"
                className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Watch Our Story"
            title="See Ntambag Brothers In Action"
            description="Learn about our journey and watch our community programs in action."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.youtube.com/embed/l7zNO4MI6zA"
                  title="The History of Ntambag Brothers"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mt-4">
                The History of Ntambag Brothers
              </h3>
              <p className="text-sm text-muted-foreground">
                Our journey from a social brotherhood to a community-changing
                organization.
              </p>
            </div>
            <div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.youtube.com/embed/Y4ylaBZncto"
                  title="Health Campaign in Old Town Bamenda"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mt-4">
                Health Campaign Coverage
              </h3>
              <p className="text-sm text-muted-foreground">
                Abakwa Natal TV coverage of our health campaign in partnership
                with Old Town For America.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background rounded-3xl p-8 md:p-12 shadow-lg border border-border/50">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower underprivileged children and youth in Cameroon by
                providing access to quality education, mentorship, and life
                skills development, while fostering a spirit of community service
                and sustainable development.
              </p>
            </div>
            <div className="bg-primary rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                A Cameroon where every child has equal access to education and
                opportunities, where communities are self-sustaining, and where
                young people are empowered to become leaders and change-makers in
                their society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Objectives */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="What We Do"
            title="Our Core Objectives"
            description="These are the pillars that guide our work and define our impact in the community."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreObjectives.map((obj, index) => {
              const Icon = obj.icon;
              return (
                <div
                  key={index}
                  className="flex gap-6 p-6 rounded-2xl bg-muted hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {obj.title}
                    </h3>
                    <p className="text-muted-foreground">{obj.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="What We Stand For"
            title="Our Core Values"
            description="The principles that guide every decision we make and every action we take."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Our People"
            title="Meet Our Leadership Team"
            description="Dedicated individuals who lead with passion and purpose."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className="text-center group">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                      [
                        'Christian Emeka',
                        'Nchotu Harrison',
                        'Prof. Mbanga Laurence Akei',
                      ].includes(leader.name)
                        ? 'object-top'
                        : ''
                    } ${
                      [
                        'Elise Nagwa Bamedig',
                        'Marie Clair Komtangi',
                      ].includes(leader.name)
                        ? 'object-[center_20%]'
                        : ''
                    }`}
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {leader.name}
                </h3>
                <p className="text-sm text-secondary font-medium mb-3">
                  {leader.role}
                </p>
                <p className="text-sm text-muted-foreground">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Recognition */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Academic Recognition"
            title="Documented in Academic Research"
            description="Our work has been recognized and documented in scholarly publications."
          />
          <div className="max-w-4xl mx-auto">
            <div className="bg-muted rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-8xl text-primary/10 font-serif">
                &ldquo;
              </div>
              <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 relative z-10">
                &ldquo;The Ntambag Brothers Association (NBA) initially emerged
                as an informal social group of young men in July 2004, with the
                specific focus of assisting its members in moments of crisis...
                In its bid for distinction, the NBA positioned itself as a
                development-orientated youth association... Its difference in
                orientation, at least in principle, has become a key marker of
                identity for the association and its membership.&rdquo;
              </blockquote>
              <blockquote className="text-lg text-muted-foreground leading-relaxed mb-8 relative z-10 border-l-4 border-secondary pl-6">
                &ldquo;The NBA&apos;s articulation of its shared interests in
                developing its community by initiating hygiene campaigns
                illustrates the understanding of civil society as a space of
                uncoerced human association and relational networks formed for
                the sake of family, faith, interests and ideology.&rdquo;
              </blockquote>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div>
                  <p className="font-semibold text-foreground">
                    Dr. Jude Fokwang, PhD
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Social Anthropology, University of Toronto
                  </p>
                </div>
                <div className="sm:ml-auto">
                  <p className="text-sm text-muted-foreground italic">
                    &ldquo;Youth Involvement in Civil Society in Cameroon since
                    1990&rdquo;
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Africa Insight, Vol. 37 (3), September 2007
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="In The News"
            title="Media Coverage"
            description="Our work has been featured in local and international media outlets."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {/* 1 */}
            <a
              href="https://www.observer237.com/2025/01/change-of-baton-at-ntambag-brothers-cig_11.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Newspaper className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">
                    The Observer237
                  </p>
                  <p className="text-xs text-muted-foreground">January 2025</p>
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                Change of Baton at Ntambag Brothers CIG
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Coverage of our leadership transition as Bobga Valentine Tita
                takes the helm as new President.
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                Read Article <ExternalLink className="w-4 h-4" />
              </span>
            </a>

            {/* 2 */}
            <a
              href="https://www.observer237.com/2020/04/covid-19-ntambag-brothers-donate.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Newspaper className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">
                    The Observer237
                  </p>
                  <p className="text-xs text-muted-foreground">April 2020</p>
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                COVID-19: Ntambag Brothers Donate to Vulnerable Communities
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Coverage of our relief efforts during the COVID-19 pandemic.
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                Read Article <ExternalLink className="w-4 h-4" />
              </span>
            </a>

            {/* 3 */}
            <a
              href="https://www.youtube.com/watch?v=Y4ylaBZncto"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Newspaper className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">
                    Abakwa Natal TV
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Health Campaign
                  </p>
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                Health Campaign in Old Town Bamenda
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Television coverage of our health outreach campaign in
                partnership with Old Town For America.
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                Watch Video <ExternalLink className="w-4 h-4" />
              </span>
            </a>

            {/* 4 */}
            <a
              href="https://www.drayinfos.com/2023/03/ntambag-brothers-otfa-facilitate-free.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Newspaper className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">DrayInfos</p>
                  <p className="text-xs text-muted-foreground">March 2023</p>
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                Ntambag Brothers, OTFA Facilitate Free Diabetes Screening For
                Elderly, PWDs
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Persons with disabilities, the elderly and others benefited from
                free blood screening for Non-Communicable Diseases like High
                Blood Pressure and Diabetes in Old Town Bamenda. By Raymond
                Dingana.
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                Read Article <ExternalLink className="w-4 h-4" />
              </span>
            </a>

            {/* 5 */}
            <a
              href="https://www.ajol.info/index.php/ad/article/view/57314"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">
                    Africa Development Journal
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Vol. XXXIII, No. 3, 2008
                  </p>
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                Youth Subjectivities and Associational Life in Bamenda
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Academic study by Dr. Jude Fokwang featuring Ntambag Brothers
                Association in peer-reviewed research.
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                Read on AJOL <ExternalLink className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Our Activities"
            title="See Us In Action"
            description="Snapshots from our programs, events, and community activities."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {activityImages.map((src, index) => (
              <div
                key={index}
                className="aspect-square rounded-xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Activity ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CtaSection
        title="Join Our Family of Changemakers"
        description="Whether you donate, volunteer, or simply spread the word, you can be part of our mission to transform lives."
        primaryButtonText="Support Our Cause"
        secondaryButtonText="Become a Volunteer"
        secondaryButtonLink="/get-involved"
      />
    </div>
  );
}
