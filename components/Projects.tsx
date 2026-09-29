import { useState, useEffect } from "react";
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
      src: "/assets/milktea2.jpeg",
      alt: "Fresh baked cream cheese scone promotional poster",
      title: "Fresh Baked Scones",
    },
    {
      src: "/assets/milktea4.jpeg",
      alt: "Specialty premium coffee promotional poster",
      title: "Specialty Coffee",
    },
    {
      src: "/assets/milktea1.jpeg",
      alt: "Signature milk tea promotional poster",
      title: "Signature Milk Tea",
    },
    {
      src: "/assets/milktea5.jpeg",
      alt: "Seasonal cream cheese donut promotional poster",
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
  const mgmtReportImages = Array.from({ length: 36 }, (_, index) => {
    const slideNumber = String(index + 1).padStart(2, "0");
    return encodeAssetPath(`/assets/MGMT30019 - Final Report-${slideNumber}.jpg`);
  });
  const caseStudyImages = Array.from({ length: 44 }, (_, index) => {
    const slideNumber = String(index + 1).padStart(2, "0");
    return encodeAssetPath(`/assets/2947C81C-43C7-416F-910A-404A94BC4D4B-${slideNumber}.jpg`);
  });

  interface ResearchReportItem {
    title: string;
    subtitle: string;
    description: string;
    scope: string;
    tools: string;
    cover: string;
    alt: string;
    slides: string[];
  }

  const [activeReport, setActiveReport] = useState<ResearchReportItem | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"slides" | "scroll">("slides");

  useEffect(() => {
    if (!activeReport) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveReport(null);
      } else if (e.key === "ArrowRight") {
        setCurrentSlideIndex((prev) => Math.min(prev + 1, activeReport.slides.length - 1));
      } else if (e.key === "ArrowLeft") {
        setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeReport]);

  const researchReports: ResearchReportItem[] = [
    {
      title: "Quantitative Research Report",
      subtitle: "Adidas Campus Strategy",
      description: "Led in depth desk research and quantitative analysis to define student consumer personas, map decision journeys, and evaluate the competitive landscape for Adidas campus presence. Findings informed positioning angles, messaging pillars, and a channel strategy grounded in data driven audience insights tailored to student needs.",
      scope: "Market analysis, survey synthesis, visual storytelling",
      tools: "SPSS, Excel, Google Docs",
      cover: mktgReportImages[0],
      alt: "Quantitative research report cover slide for Adidas",
      slides: mktgReportImages,
    },
    {
      title: "Qualitative Research Report",
      subtitle: "Adidas Consumer Insights",
      description: "Conducted in depth secondary research alongside primary interviews and focus groups to analyze Adidas current market landscape, consumer mindset, and industry movements. Insights informed strategic recommendations across positioning, channel mix, and storytelling angles tailored to emerging audience needs.",
      scope: "Annotation, critical analysis, visual formatting",
      tools: "SPSS, Excel, Google Docs",
      cover: annotatedReportImages[0],
      alt: "Qualitative research report cover slide for Adidas",
      slides: annotatedReportImages,
    },
    {
      title: "Marketing Insights Report",
      subtitle: "News Corp Australia",
      description: "Comprehensive marketing analysis of News Corp Australia print newspaper segment, examining market challenges, shifting consumer behaviours, and strategic opportunities to revitalise its relevance in a digital media landscape.",
      scope: "Market performance analysis, marketing strategy evaluation, consumer insight development",
      tools: "SPSS, Excel, Google Docs",
      cover: caseStudyImages[0],
      alt: "Marketing insights report cover slide for News Corp Australia",
      slides: caseStudyImages,
    },
    {
      title: "Research and Strategic Report",
      subtitle: "Monash University Case Study",
      description: "Delivered a strategic consulting report synthesizing market trends, competitive analysis, and stakeholder feedback into actionable recommendations for an enterprise partner. Emphasized strategic frameworks, risk assessment, and implementation planning tailored to leadership objectives.",
      scope: "Strategic analysis, stakeholder interviews, implementation roadmap",
      tools: "SPSS, Excel, Google Docs",
      cover: mgmtReportImages[0],
      alt: "Strategic report cover slide for Monash University case study",
      slides: mgmtReportImages,
    },
  ];

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
                A showcase of print and digital posters designed across student living activations, hospitality brand campaigns, and private client commissions.
              </p>
            </div>

            {/* Subsection 1: Student Living Activations */}
            <div className="mb-10">
              <h4 className="font-serif italic text-xl mb-1 text-neutral-800">Student Living Activations</h4>
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

            {/* Subsection 2: Hospitality Brand Campaigns */}
            <div className="mb-10">
              <h4 className="font-serif italic text-xl mb-1 text-neutral-800">Hospitality Brand Campaigns</h4>
              <p className="text-xs text-neutral-500 mb-4">
                Promotional posters and signature campaign visuals designed for artisanal cafe and bakery menus.
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

            {/* Subsection 3: Private Client Commissions */}
            <div>
              <h4 className="font-serif italic text-xl mb-1 text-neutral-800">Private Client Commissions</h4>
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


        {/* Projects: Research Reports */}
        <div className="mb-20">
          <div className="bg-white p-8 md:p-12">
            <div className="max-w-4xl mb-10">
              <h3 className="font-serif italic text-3xl mb-4">Projects</h3>
              <p className="text-sm uppercase tracking-wider text-[#C4A57B] mb-4">
                Marketing Research Reports
              </p>
              <p className="text-sm leading-relaxed text-neutral-600">
                In depth research initiatives combining quantitative market analysis, qualitative focus groups, and strategic frameworks to inform brand decision making.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {researchReports.map((report) => (
                <div
                  key={report.title}
                  className="flex flex-col bg-[#FAF8F5] rounded-xl overflow-hidden border border-[#EADBC8]/60 p-4 sm:p-5"
                >
                  <div
                    className="w-full h-60 overflow-hidden rounded-lg mb-4 bg-white border border-[#EADBC8]/40 cursor-pointer group relative"
                    onClick={() => {
                      setActiveReport(report);
                      setCurrentSlideIndex(0);
                    }}
                  >
                    <ImageWithFallback
                      src={report.cover}
                      alt={report.alt}
                      className="w-full h-full object-cover object-top transition duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition px-3 py-1.5 rounded-full bg-white/95 text-xs font-medium text-neutral-800 shadow-sm">
                        Click to view report
                      </span>
                    </div>
                  </div>

                  <h4 className="font-serif italic text-xl text-neutral-800">{report.title}</h4>
                  <p className="text-xs uppercase tracking-wider text-[#C4A57B] mt-1">{report.subtitle}</p>
                  <p className="text-xs text-neutral-600 mt-3 leading-relaxed flex-1">{report.description}</p>

                  <div className="mt-4 pt-3 border-t border-[#EADBC8]/50 space-y-1 text-xs text-neutral-500">
                    <p><span className="font-bold text-neutral-700">Scope:</span> {report.scope}</p>
                    <p><span className="font-bold text-neutral-700">Tools:</span> {report.tools}</p>
                  </div>

                  <div className="mt-4 pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveReport(report);
                        setCurrentSlideIndex(0);
                      }}
                      className="text-xs font-semibold text-[#C4A57B] underline underline-offset-4 hover:text-[#a4855a] transition cursor-pointer"
                    >
                      View full report ({report.slides.length} pages)
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full Report Reader Modal */}
        {activeReport && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex flex-col p-4 md:p-6"
            onClick={() => setActiveReport(null)}
          >
            <div
              className="flex items-center justify-between text-white pb-4 border-b border-white/10 shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <h4 className="font-serif italic text-lg md:text-xl text-white">{activeReport.title}</h4>
                <p className="text-xs text-[#C4A57B] tracking-wider uppercase mt-0.5">{activeReport.subtitle}</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center bg-white/10 rounded-lg p-1 text-xs">
                  <button
                    type="button"
                    onClick={() => setViewMode("slides")}
                    className={`px-2.5 py-1 rounded transition cursor-pointer ${
                      viewMode === "slides" ? "bg-white text-neutral-900 font-medium" : "text-white/80 hover:text-white"
                    }`}
                  >
                    Slide View
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode("scroll")}
                    className={`px-2.5 py-1 rounded transition cursor-pointer ${
                      viewMode === "scroll" ? "bg-white text-neutral-900 font-medium" : "text-white/80 hover:text-white"
                    }`}
                  >
                    All Pages
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveReport(null)}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition flex items-center gap-1.5 cursor-pointer"
                  aria-label="Close report"
                >
                  <span>Close</span>
                  <span className="text-base leading-none">&times;</span>
                </button>
              </div>
            </div>

            {viewMode === "slides" ? (
              <div
                className="flex-1 flex flex-col items-center justify-center min-h-0 pt-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative flex-1 flex items-center justify-center w-full min-h-0 max-h-[72vh]">
                  <img
                    src={activeReport.slides[currentSlideIndex]}
                    alt={`${activeReport.title} page ${currentSlideIndex + 1}`}
                    className="max-h-full max-w-full object-contain rounded-lg shadow-2xl bg-white"
                  />

                  {currentSlideIndex > 0 && (
                    <button
                      type="button"
                      onClick={() => setCurrentSlideIndex((prev) => Math.max(prev - 1, 0))}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition backdrop-blur-xs cursor-pointer"
                      aria-label="Previous page"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                  )}
                  {currentSlideIndex < activeReport.slides.length - 1 && (
                    <button
                      type="button"
                      onClick={() => setCurrentSlideIndex((prev) => Math.min(prev + 1, activeReport.slides.length - 1))}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition backdrop-blur-xs cursor-pointer"
                      aria-label="Next page"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )}
                </div>

                <div className="w-full pt-3 shrink-0 flex flex-col items-center gap-2">
                  <p className="text-xs text-neutral-400">
                    Page {currentSlideIndex + 1} of {activeReport.slides.length}
                  </p>
                  <div className="flex gap-1.5 overflow-x-auto max-w-2xl py-1 px-2">
                    {activeReport.slides.map((slideSrc, idx) => (
                      <button
                        key={slideSrc}
                        type="button"
                        onClick={() => setCurrentSlideIndex(idx)}
                        className={`shrink-0 w-10 h-14 rounded overflow-hidden border-2 transition cursor-pointer ${
                          idx === currentSlideIndex ? "border-[#C4A57B] scale-105" : "border-white/20 opacity-50 hover:opacity-80"
                        }`}
                      >
                        <img src={slideSrc} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="flex-1 overflow-y-auto pt-6 pb-12 max-w-4xl w-full mx-auto space-y-6"
                onClick={(e) => e.stopPropagation()}
              >
                {activeReport.slides.map((slideSrc, idx) => (
                  <div key={slideSrc} className="flex flex-col items-center">
                    <span className="text-xs text-neutral-400 mb-2">Page {idx + 1} of {activeReport.slides.length}</span>
                    <img
                      src={slideSrc}
                      alt={`${activeReport.title} page ${idx + 1}`}
                      className="w-full h-auto rounded-lg shadow-xl bg-white"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
