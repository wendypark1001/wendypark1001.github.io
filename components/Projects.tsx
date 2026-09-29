import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const encodeAssetPath = (path: string) => encodeURI(path);
  const scapePosters = [
    {
      src: "/assets/scape-poster-1.jpg",
      alt: "Time Budgeting Workshop and Dumplings event poster",
      title: "Time Budgeting and Dumplings",
    },
    {
      src: "/assets/scape-poster-2.jpg",
      alt: "Express Sushi Station community event poster",
      title: "Express Sushi Station",
    },
    {
      src: "/assets/scape-poster-3.jpg",
      alt: "Toy Story Movie Night cinema poster",
      title: "Movie Night",
    },
    {
      src: "/assets/scape-poster-4.jpg",
      alt: "DIY Matcha workshop event poster",
      title: "DIY Matcha Station",
    },
  ];
  const cafePosters = [
    {
      src: "/assets/ceylon-poster-sweet-milk-bread.jpg",
      alt: "Sweet Milk Bread new bakery promotional poster",
      title: "Sweet Milk Bread",
    },
    {
      src: "/assets/ceylon-poster-milk-cream-donuts.jpg",
      alt: "Milk Cream Donuts new bakery promotional poster",
      title: "Milk Cream Donuts",
    },
    {
      src: "/assets/milktea1.jpeg",
      alt: "Signature Milk Teas lineup from The Ceylon",
      title: "Signature Milk Teas",
    },
    {
      src: "/assets/milktea5.jpeg",
      alt: "Promotional milk tea lineup from The Ceylon",
      title: "Seasonal Collection",
    },
  ];
  const clientPosters = [
    {
      src: "/assets/mom1.jpg",
      alt: "Custom poster commission featuring floral typography",
      title: "Floral Typography",
    },
    {
      src: "/assets/mom2.jpg",
      alt: "Bold typographic poster with custom lettering",
      title: "Typographic Layout",
    },
    {
      src: "/assets/mom3.jpg",
      alt: "Minimal pastel poster layout with custom lettering",
      title: "Custom Lettering",
    },
  ];
  const mpmpGalleryImages = [
    {
      src: "/assets/uni2.jpeg",
      alt: "University promotional panel showcase",
    },
    {
      src: "/assets/uni3.JPG",
      alt: "Academic mentoring promotional board",
      focusLeft: true,
    },
    {
      src: "/assets/uni4.jpeg",
      alt: "Student testimonials for MPMP",
    },
    {
      src: "/assets/uni5.JPG",
      alt: "Campus display for mentoring initiatives",
    },
  ];
  const annotatedReportImages = Array.from({ length: 43 }, (_, index) => {
    const slideNumber = String(index + 1).padStart(2, "0");
    return encodeAssetPath(`/assets/annotated-MKTG20004_Report%201-${slideNumber}.jpg`);
  });
  const mktgReportImages = [
    "/assets/MKTG20004 _ Research Report 2 FINAL-01.jpg",
    "/assets/MKTG20004 _ Research Report 2 FINAL-02 4.26.55 PM.jpg",
    "/assets/MKTG20004 _ Research Report 2 FINAL-03 4.26.55 PM.jpg",
    "/assets/MKTG20004 _ Research Report 2 FINAL-04 4.27.05 PM.jpg",
    "/assets/MKTG20004 _ Research Report 2 FINAL-05 4.27.05 PM.jpg",
    "/assets/MKTG20004 _ Research Report 2 FINAL-06 4.26.55 PM.jpg",
    "/assets/MKTG20004 _ Research Report 2 FINAL-07 4.26.55 PM.jpg",
    "/assets/MKTG20004 _ Research Report 2 FINAL-08 4.27.05 PM.jpg",
    "/assets/MKTG20004 _ Research Report 2 FINAL-09 4.27.17 PM.jpg",
    "/assets/MKTG20004 _ Research Report 2 FINAL-10 4.27.17 PM.jpg",
    "/assets/MKTG20004 _ Research Report 2 FINAL-11 4.27.05 PM.jpg",
    "/assets/MKTG20004 _ Research Report 2 FINAL-12 4.27.05 PM.jpg",
    "/assets/MKTG20004 _ Research Report 2 FINAL-13 4.27.17 PM.jpg",
    "/assets/MKTG20004 _ Research Report 2 FINAL-14 4.27.22 PM.jpg",
    "/assets/MKTG20004 _ Research Report 2 FINAL-15 4.27.05 PM.jpg",
    "/assets/MKTG20004 _ Research Report 2 FINAL-16 4.27.05 PM.jpg",
    "/assets/MKTG20004 _ Research Report 2 FINAL-17 4.27.22 PM.jpg",
    "/assets/MKTG20004 _ Research Report 2 FINAL-18 4.27.17 PM.jpg",
    "/assets/MKTG20004 _ Research Report 2 FINAL-19 4.27.17 PM.jpg",
    "/assets/MKTG20004 _ Research Report 2 FINAL-20 4.27.22 PM.jpg",
    "/assets/MKTG20004 _ Research Report 2 FINAL-21 4.27.34 PM.jpg",
    "/assets/MKTG20004 _ Research Report 2 FINAL-22 4.27.17 PM.jpg",
    "/assets/MKTG20004 _ Research Report 2 FINAL-23 4.27.17 PM.jpg",
    "/assets/MKTG20004 _ Research Report 2 FINAL-24 4.27.34 PM.jpg",
    "/assets/MKTG20004 _ Research Report 2 FINAL-25 4.27.34 PM.jpg",
  ].map(encodeAssetPath);
  const [showFullReport, setShowFullReport] = useState(false);
  const [showAnnotatedReport, setShowAnnotatedReport] = useState(false);
  const mgmtReportImages = Array.from({ length: 36 }, (_, index) => {
    const slideNumber = String(index + 1).padStart(2, "0");
    return encodeAssetPath(`/assets/MGMT30019 - Final Report-${slideNumber}.jpg`);
  });
  const [showMgmtReport, setShowMgmtReport] = useState(false);
  const caseStudyImages = Array.from({ length: 44 }, (_, index) => {
    const slideNumber = String(index + 1).padStart(2, "0");
    return encodeAssetPath(`/assets/2947C81C-43C7-416F-910A-404A94BC4D4B-${slideNumber}.jpg`);
  });
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  return (
    <section id="projects" className="py-20 px-4 bg-[#F5F1E8]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif italic text-center mb-4" style={{ fontSize: '2.5rem' }}>
          FEATURED WORK
        </h2>
        <p className="text-center text-sm text-neutral-600 mb-16">
          A curated selection of event activations, brand marketing campaigns, and strategic research
        </p>

        {/* Event Management & Student Experience */}
        <div className="mb-20">
          <div className="bg-white p-8 md:p-12">
            <div className="max-w-4xl mb-12">
              <h3 className="font-serif italic text-3xl mb-4">Event Management</h3>
              <p className="text-sm uppercase tracking-wider text-[#C4A57B] mb-4">
                Student Experience: Community Engagement
              </p>
              <p className="text-sm leading-relaxed mb-6">
                Designed and delivered community activations centered on connection, student wellbeing, and cultural celebration. From high energy themed welcome parties with custom photobooths to community banquet dinners and craft workshop stations, each event provides an open, inviting environment for students to build lasting friendships. The focus remains on turning residential spaces into supportive social hubs where every student feels at home.
              </p>
              <div className="space-y-2 text-sm">
                <p><span className="font-bold">Event Concepts:</span> Themed welcome celebrations, communal banquet socials, and interactive craft workshops</p>
                <p><span className="font-bold">Community Impact:</span> Supporting early peer connections, easing university transition, and building resident belonging</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              <div className="flex flex-col bg-[#FAF8F5] rounded-xl overflow-hidden border border-[#EADBC8]/60 p-4">
                <div className="w-full h-72 overflow-hidden rounded-lg mb-3">
                  <ImageWithFallback
                    src="/assets/event-welcome-social.jpg"
                    alt="Christmas in July Welcome Social community banquet and celebration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-serif italic text-lg text-neutral-800">Christmas in July Welcome Social</h4>
                <p className="text-xs uppercase tracking-wider text-[#C4A57B] mt-0.5">Communal Banquet Social</p>
                <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                  Welcoming banquet gathering and celebration bringing incoming students together to connect over shared meals.
                </p>
              </div>

              <div className="flex flex-col bg-[#FAF8F5] rounded-xl overflow-hidden border border-[#EADBC8]/60 p-4">
                <div className="w-full h-72 overflow-hidden rounded-lg mb-3">
                  <ImageWithFallback
                    src="/assets/event-matcha-station.jpg"
                    alt="DIY Matcha Station community event setup"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-serif italic text-lg text-neutral-800">DIY Matcha Station</h4>
                <p className="text-xs uppercase tracking-wider text-[#C4A57B] mt-0.5">Interactive Student Workshop</p>
                <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                  Engaging workshop station encouraging relaxed, friendly peer connections over craft drinks.
                </p>
              </div>

              <div className="flex flex-col bg-[#FAF8F5] rounded-xl overflow-hidden border border-[#EADBC8]/60 p-4">
                <div className="w-full h-72 overflow-hidden rounded-lg mb-3 bg-black flex items-center justify-center">
                  <video
                    src="/assets/event-pink-party.mp4"
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-serif italic text-lg text-neutral-800">Think Pink Welcome Party</h4>
                <p className="text-xs uppercase tracking-wider text-[#C4A57B] mt-0.5">Themed Welcome Celebration</p>
                <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                  High energy themed welcome celebration featuring custom photobooth activations and community mixer spaces.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Promotional Posters: Scape, Cafe, Client */}
        <div className="mb-20">
          <div className="bg-white p-8 md:p-12">
            <div className="max-w-4xl mb-10">
              <h3 className="font-serif italic text-3xl mb-4">Promotional Posters</h3>
              <p className="text-sm uppercase tracking-wider text-[#C4A57B] mb-4">
                Visual Design and Campaign Collateral
              </p>
              <p className="text-sm leading-relaxed text-neutral-600">
                A curated collection of print and digital posters created across student living activations, cafe promotions, and private client commissions.
              </p>
            </div>

            {/* Subsection 1: Scape Work */}
            <div className="mb-10">
              <h4 className="font-serif italic text-xl mb-1 text-neutral-800">Scape Work</h4>
              <p className="text-xs text-neutral-500 mb-4">
                Promotional posters designed for resident workshops, culinary stations, and community film nights.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {scapePosters.map((poster) => (
                  <div key={poster.src} className="flex flex-col bg-[#FAF8F5] rounded-lg overflow-hidden border border-[#EADBC8]/60 p-2">
                    <div className="w-full overflow-hidden rounded aspect-[3/4] mb-2">
                      <ImageWithFallback
                        src={poster.src}
                        alt={poster.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs font-medium text-neutral-700 text-center truncate">{poster.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Subsection 2: Cafe Work */}
            <div className="mb-10">
              <h4 className="font-serif italic text-xl mb-1 text-neutral-800">Cafe Work</h4>
              <p className="text-xs text-neutral-500 mb-4">
                Promotional posters and signature campaign visuals designed for The Ceylon.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {cafePosters.map((poster) => (
                  <div key={poster.src} className="flex flex-col bg-[#FAF8F5] rounded-lg overflow-hidden border border-[#EADBC8]/60 p-2">
                    <div className="w-full overflow-hidden rounded aspect-[3/4] mb-2">
                      <ImageWithFallback
                        src={poster.src}
                        alt={poster.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs font-medium text-neutral-700 text-center truncate">{poster.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Subsection 3: Client Promotion */}
            <div>
              <h4 className="font-serif italic text-xl mb-1 text-neutral-800">Client Promotion</h4>
              <p className="text-xs text-neutral-500 mb-4">
                Bespoke typographic and illustrative poster commissions created for private clients.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {clientPosters.map((poster) => (
                  <div key={poster.src} className="flex flex-col bg-[#FAF8F5] rounded-lg overflow-hidden border border-[#EADBC8]/60 p-2">
                    <div className="w-full overflow-hidden rounded aspect-[3/4] mb-2">
                      <ImageWithFallback
                        src={poster.src}
                        alt={poster.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs font-medium text-neutral-700 text-center truncate">{poster.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* University Promotional Content */}
        <div className="mb-20">
          <div className="bg-white p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <h3 className="font-serif italic text-3xl mb-4">University Promotional Content</h3>
                <p className="text-sm uppercase tracking-wider text-[#C4A57B] mb-4">
                  MELBOURNE PEER MENTOR PROGRAM (MPMP) & ACADEMIC MENTORING
                </p>
                <p className="text-sm leading-relaxed mb-4">
                  Featured in promotional videos and marketing materials for the University of Melbourne&apos;s MPMP and Academic Mentoring programs.
                </p>
                <div className="space-y-2 text-sm">
                  <p><span className="font-serif italic">Platforms:</span> Building Display Boards, Newsletter, LinkedIn, Instagram</p>
                  <p><span className="font-serif italic">Content:</span> Video Interviews, Vox pop Interviews, Panel Discussions, Student Stories, Reels promotion</p>
                  <p><span className="font-serif italic">Impact:</span> Supporting first-year student transition and community building</p>
                </div>
              </div>
              <div className="w-full mx-auto max-w-lg relative">
                <ImageWithFallback
                  src="/assets/uni1.JPG"
                  alt="University of Melbourne MPMP promotional display"
                  className="w-full h-auto"
                />
                <a
                  href="https://students.unimelb.edu.au/student-life/academic-mentoring"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute left-1/2 top-1/2 flex h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/0 transition hover:bg-black/10 focus-visible:bg-black/15"
                >
                  <span className="sr-only">Learn more about the Academic Mentoring program</span>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {mpmpGalleryImages.map((image) => (
                <div
                  key={image.src}
                  className="w-full overflow-hidden rounded-lg aspect-3/4"
                >
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-full object-cover ${
                      image.focusLeft ? "object-left" : ""
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Projects - Research Reports */}
        <div className="mb-20">
          <div className="bg-white p-8 md:p-12">
            <div className="text-center mb-10">
              <h3 className="font-serif italic text-3xl mb-2">Projects</h3>
              <p className="text-sm uppercase tracking-wider text-[#C4A57B]">
                Marketing Research Reports
              </p>
            </div>

            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="font-serif italic text-2xl mb-4">Quantitative Research Report - Adidas</h4>
                  <p className="text-sm leading-relaxed mb-4">
                    Led in-depth desk research and quantitative analysis to define student consumer personas, map decision journeys,
                    and evaluate the competitive landscape for Adidas&apos; campus presence.
                  </p>
                  <p className="text-sm leading-relaxed mb-4">
                    Findings informed positioning angles, messaging pillars, and a channel strategy grounded in data-backed audience insights tailored to student needs.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-serif italic">Scope:</span> Market analysis, survey synthesis, visual storytelling</p>
                    <p><span className="font-serif italic">Tools:</span> SPSS, Excel, Google Docs</p>
                  </div>
                  <div className="mt-6">
                    <button
                      type="button"
                      className="text-sm font-semibold text-[#C4A57B] underline underline-offset-4 hover:text-[#a4855a]"
                      onClick={() => setShowFullReport((prev) => !prev)}
                    >
                      {showFullReport ? "Hide full report" : "View full report"}
                    </button>
                  </div>
                </div>
                <div className="w-full mx-auto max-w-lg">
                  <ImageWithFallback
                    src={mktgReportImages[0]}
                    alt="MKTG20004 marketing report cover slide"
                    className="w-full h-auto rounded-lg shadow-xs"
                  />
                </div>
              </div>
              {showFullReport && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {mktgReportImages.map((imageSrc) => (
                    <div key={imageSrc} className="w-full overflow-hidden rounded-lg border border-[#EADBC8]">
                      <ImageWithFallback
                        src={imageSrc}
                        alt="MKTG20004 marketing research slide"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="font-serif italic text-2xl mb-4">Qualitative Research Report - Adidas</h4>
                  <p className="text-sm leading-relaxed mb-4">
                    Conducted in-depth secondary research alongside primary interviews and focus groups to analyze
                    Adidas&apos; current market landscape, consumer mindset, and industry movements.
                  </p>
                  <p className="text-sm leading-relaxed mb-4">
                    Insights informed strategic recommendations across positioning, channel mix, and storytelling angles tailored
                    to emerging audience needs and competitive pressures.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-serif italic">Scope:</span> Annotation, critical analysis, visual formatting</p>
                    <p><span className="font-serif italic">Tools:</span> SPSS, Excel, Google Docs</p>
                  </div>
                  <div className="mt-6">
                    <button
                      type="button"
                      className="text-sm font-semibold text-[#C4A57B] underline underline-offset-4 hover:text-[#a4855a]"
                      onClick={() => setShowAnnotatedReport((prev) => !prev)}
                    >
                      {showAnnotatedReport ? "Hide full report" : "View full report"}
                    </button>
                  </div>
                </div>
                <div className="w-full mx-auto max-w-lg">
                  <ImageWithFallback
                    src={annotatedReportImages[0]}
                    alt="Annotated marketing research slide"
                    className="w-full h-auto rounded-lg shadow-xs"
                  />
                </div>
              </div>
              {showAnnotatedReport && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {annotatedReportImages.map((imageSrc) => (
                    <div key={imageSrc} className="w-full overflow-hidden rounded-lg border border-[#EADBC8]">
                      <ImageWithFallback
                        src={imageSrc}
                        alt="Annotated MKTG20004 slide"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="font-serif italic text-2xl mb-4">Marketing Insights Report - News Corp Aus</h4>
                  <p className="text-sm leading-relaxed mb-4">
                    Comprehensive marketing analysis of News Corp Australia’s printed newspaper segment, examining market challenges,
                    shifting consumer behaviours, and strategic opportunities to revitalise its relevance in a digital media landscape.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-serif italic">Scope:</span> Market performance analysis, marketing strategy evaluation, consumer insight development</p>
                  </div>
                  <div className="mt-6">
                    <button
                      type="button"
                      className="text-sm font-semibold text-[#C4A57B] underline underline-offset-4 hover:text-[#a4855a]"
                      onClick={() => setShowCaseStudy((prev) => !prev)}
                    >
                      {showCaseStudy ? "Hide full report" : "View full report"}
                    </button>
                  </div>
                </div>
                <div className="w-full mx-auto max-w-lg">
                  <ImageWithFallback
                    src={caseStudyImages[0]}
                    alt="Higher education case study slide"
                    className="w-full h-auto rounded-lg shadow-xs"
                  />
                </div>
              </div>
              {showCaseStudy && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {caseStudyImages.map((imageSrc) => (
                    <div key={imageSrc} className="w-full overflow-hidden rounded-lg border border-[#EADBC8]">
                      <ImageWithFallback
                        src={imageSrc}
                        alt="Higher education case study slide"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="font-serif italic text-2xl mb-4">Research & Strategic Report - Higher Education: Case Study of Monash University</h4>
                  <p className="text-sm leading-relaxed mb-4">
                    Delivered a strategic consulting report synthesizing market trends, competitive analysis, and stakeholder feedback
                    into actionable recommendations for an enterprise partner.
                  </p>
                  <p className="text-sm leading-relaxed mb-4">
                    Emphasized strategic frameworks, risk assessment, and implementation planning tailored to leadership objectives.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-serif italic">Scope:</span> Strategic analysis, stakeholder interviews, implementation roadmap</p>
                  </div>
                  <div className="mt-6">
                    <button
                      type="button"
                      className="text-sm font-semibold text-[#C4A57B] underline underline-offset-4 hover:text-[#a4855a]"
                      onClick={() => setShowMgmtReport((prev) => !prev)}
                    >
                      {showMgmtReport ? "Hide full report" : "View full report"}
                    </button>
                  </div>
                </div>
                <div className="w-full mx-auto max-w-lg">
                  <ImageWithFallback
                    src={mgmtReportImages[0]}
                    alt="MGMT30019 strategic report cover slide"
                    className="w-full h-auto rounded-lg shadow-xs"
                  />
                </div>
              </div>
              {showMgmtReport && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {mgmtReportImages.map((imageSrc) => (
                    <div key={imageSrc} className="w-full overflow-hidden rounded-lg border border-[#EADBC8]">
                      <ImageWithFallback
                        src={imageSrc}
                        alt="MGMT30019 strategic report slide"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
