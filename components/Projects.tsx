import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const ceylonGalleryImages = [
    {
      src: "/assets/milktea2.jpeg",
      alt: "The Ceylon classic blend milk tea",
    },
    {
      src: "/assets/milktea3.jpeg",
      alt: "The Ceylon seasonal milk tea lineup",
    },
    {
      src: "/assets/milktea4.jpeg",
      alt: "The Ceylon pearl milk tea close-up",
    },
    {
      src: "/assets/milktea5.jpeg",
      alt: "The Ceylon promotional milk tea set",
    },
    {
      src: "/assets/milktea6.jpeg",
      alt: "The Ceylon signature layered milk tea",
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
  const clientPosterImages = [
    {
      src: "/assets/mom1.jpg",
      alt: "Custom poster commission featuring floral typography",
    },
    {
      src: "/assets/mom3.jpg",
      alt: "Minimal pastel poster layout with custom lettering",
    },
    {
      src: "/assets/mom2.jpg",
      alt: "Bold typographic poster with hand-drawn accents",
    },
  ];
  const annotatedReportImages = Array.from({ length: 43 }, (_, index) => {
    const slideNumber = String(index + 1).padStart(2, "0");
    return `/assets/annotated-MKTG20004_Report%201-${slideNumber}.jpg`;
  });
  const mktgReportImages = annotatedReportImages.slice(0, 25);
  const [showFullReport, setShowFullReport] = useState(false);
  const [showAnnotatedReport, setShowAnnotatedReport] = useState(false);

  return (
    <section id="projects" className="py-20 px-4 bg-[#F5F1E8]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif italic text-center mb-4" style={{ fontSize: '2.5rem' }}>
          FEATURED WORK
        </h2>
        <p className="text-center text-sm text-neutral-600 mb-16">
          A selection of marketing projects and creative campaigns
        </p>

        {/* Cafe Promotions - Featured Project */}
        <div className="mb-20">
          <div className="bg-white p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <h3 className="font-serif italic text-3xl mb-4">Cafe Promotions</h3>
                <p className="text-sm uppercase tracking-wider text-[#C4A57B] mb-4">
                  Brand Marketing & Social Media
                </p>
                <p className="text-sm leading-relaxed mb-4">
                  Remote marketing assistant for The Ceylon, a specialty cafe in Incheon, South Korea. 
                  Created visually engaging promotional materials and social media content to enhance 
                  brand presence and attract customers.
                </p>
                <div className="space-y-2 text-sm">
                  <p><span className="font-serif italic">Deliverables:</span> Social Media Posts, Promotional Posters, Brand Content</p>
                </div>
              </div>
              <div className="w-full mx-auto max-w-lg">
                <ImageWithFallback
                  src="/assets/milktea1.jpeg"
                  alt="Assorted Signature Milk Teas from The Ceylon"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
              {ceylonGalleryImages.map((image) => (
                <div key={image.src} className="w-full overflow-hidden rounded-lg aspect-[3/4]">
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
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
                  className="w-full overflow-hidden rounded-lg aspect-[3/4]"
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

        {/* Client Posters */}
        <div className="mb-20">
          <div className="bg-white p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <h3 className="font-serif italic text-3xl mb-4">Client Posters (Korean)</h3>
                <p className="text-sm uppercase tracking-wider text-[#C4A57B] mb-4">
                  Personalized Visual Storytelling
                </p>
                <p className="text-sm leading-relaxed mb-4">
                  A bespoke trio of posters designed for a private commission. Each composition balances typography,
                  illustration, and palette to create heartfelt keepsakes.
                </p>
                <div className="space-y-2 text-sm">
                  <p><span className="font-serif italic">Scope:</span> Concept development, layout, art direction</p>
                  <p><span className="font-serif italic">Deliverables:</span> Print-ready posters, digital files</p>
                </div>
              </div>
              <div className="w-full mx-auto max-w-lg">
                <ImageWithFallback
                  src={clientPosterImages[0].src}
                  alt={clientPosterImages[0].alt}
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {clientPosterImages.slice(1).map((image) => (
                <div key={image.src} className="w-full overflow-hidden rounded-lg aspect-[3/4]">
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
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
                  <h4 className="font-serif italic text-2xl mb-4">Quantitative Research Report</h4>
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
                    <p className="font-serif italic text-sm text-[#3A2B1C] mb-2">Full Report</p>
                    <button
                      type="button"
                      className="text-sm font-semibold text-[#C4A57B] underline underline-offset-4 hover:text-[#a4855a]"
                      onClick={() => setShowFullReport((prev) => !prev)}
                    >
                      {showFullReport ? "Hide slides" : "View all 25 slides"}
                    </button>
                  </div>
                </div>
                <div className="w-full mx-auto max-w-lg">
                  <ImageWithFallback
                    src={mktgReportImages[0]}
                    alt="MKTG20004 marketing report cover slide"
                    className="w-full h-auto rounded-lg shadow-sm"
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
                  <h4 className="font-serif italic text-2xl mb-4">Qualitative Research Report</h4>
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
                    <p className="font-serif italic text-sm text-[#3A2B1C] mb-2">Full Report</p>
                    <button
                      type="button"
                      className="text-sm font-semibold text-[#C4A57B] underline underline-offset-4 hover:text-[#a4855a]"
                      onClick={() => setShowAnnotatedReport((prev) => !prev)}
                    >
                      {showAnnotatedReport ? "Hide annotations" : "View all 43 slides"}
                    </button>
                  </div>
                </div>
                <div className="w-full mx-auto max-w-lg">
                  <ImageWithFallback
                    src={annotatedReportImages[0]}
                    alt="Annotated marketing research slide"
                    className="w-full h-auto rounded-lg shadow-sm"
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
            </div>
          </div>
        </div>

        {/* Additional Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6">
            <div className="mb-4 aspect-square bg-[#F5F1E8] flex items-center justify-center">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=400&fit=crop"
                alt="Educational content"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-serif italic text-xl mb-2">Joyful English Program</h4>
            <p className="text-xs text-neutral-600 mb-3">Educational content design</p>
            <p className="text-sm">Created comprehensive learning materials and visual resources for elementary students in Cambodia, combining pedagogy with engaging design.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
