import { useState } from "react";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const testimonials = [
    {
      quote: (
        <>
          Wendy demonstrated really excellent <mark className="bg-[#EBDDC8] px-1">public speaking skills</mark> and an easy ability to{" "}
          <mark className="bg-[#EBDDC8] px-1">communicate</mark> with a variety of different people. She also exhibited a natural inclination towards{" "}
          <mark className="bg-[#EBDDC8] px-1">leadership</mark> with remarkable initiative and bringing people together to collaborate on tasks.
          <br />
          <span className="block mt-3">
            She is a <mark className="bg-[#EBDDC8] px-1">reliable</mark> and <mark className="bg-[#EBDDC8] px-1">committed</mark> person and an absolute pleasure to work with.
          </span>
        </>
      ),
      author: "Maree Stathoulis",
      role: "Programs and Events Coordinator at University of Melbourne",
      organization: "Managed Wendy directly",
      linkedin: "https://www.linkedin.com/in/maree-stathoulis-62a3a475/"
    },
    {
      quote: (
        <>
          Working with Wendy was a fantastic experience. She brought incredible <mark className="bg-[#EBDDC8] px-1">dedication</mark>, strong{" "}
          <mark className="bg-[#EBDDC8] px-1">problem solving skills</mark>, and a positive energy to every project. A remarkably fast learner, Wendy picked up new concepts quickly and applied them seamlessly, whether driving{" "}
          <mark className="bg-[#EBDDC8] px-1">cross functional alignment</mark>, launching creative campaigns, or going the extra mile to support the team.
          <br />
          <span className="block mt-3">
            She consistently delivered <mark className="bg-[#EBDDC8] px-1">high quality results</mark>, and I highly recommend her to any team looking for a top tier professional.
          </span>
        </>
      ),
      author: "Ho Ting Leung",
      role: "Event Management | International Sustainable Tourism Management at Monash University",
      organization: "Worked with Wendy on the same team",
      linkedin: "https://www.linkedin.com/in/ho-ting-leung/"
    },
    {
      quote: (
        <>
          If you need someone <mark className="bg-[#EBDDC8] px-1">hardworking and detailed</mark>, Wendy is the person for you! I had the pleasure to work with Wendy for a six month period, and her{" "}
          <mark className="bg-[#EBDDC8] px-1">work ethic and creativity</mark> was always an asset.
          <br />
          <span className="block mt-3">
            Wendy brought <mark className="bg-[#EBDDC8] px-1">fresh ideas</mark> to the table for Student Experience activities and helped to{" "}
            <mark className="bg-[#EBDDC8] px-1">redesign the behind the scenes planning process</mark> to cut down administrative tasks. Wendy is confident in her knowledge and confident to know when to ask for help or further clarification. Wendy would be an asset to any team she joins!
          </span>
        </>
      ),
      author: "Brieana Jude",
      role: "Event Maestro | Stakeholder Engagement Enthusiast | Project Management Pro",
      organization: "Managed Wendy directly",
      linkedin: "https://www.linkedin.com/in/brieana-jude/"
    },
    {
      quote: (
        <>
          Wendy consistently demonstrates <mark className="bg-[#EBDDC8] px-1">professionalism</mark> and <mark className="bg-[#EBDDC8] px-1">insightful contributions</mark> at faculty events and student panels, representing her faculty admirably.
          <br />
          <span className="block mt-3">
            Her thoughtful input, excellent communication, and commitment to supporting her peers make her an exceptional student and a <mark className="bg-[#EBDDC8] px-1">valuable asset</mark> to any group.
          </span>
        </>
      ),
      author: "John Minseok Kim",
      role: "Senior Analyst Engineer at NAB | Master of Engineering at University of Melbourne",
      organization: "Mentored Wendy directly",
      linkedin: "https://www.linkedin.com/in/john-minseok-kim-2000/"
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif italic text-center mb-4" style={{ fontSize: '2.5rem' }}>
          TESTIMONIALS
        </h2>
        <p className="text-center text-sm text-neutral-600 mb-12">
          What colleagues and mentors say
        </p>

        {/* Carousel Container */}
        <div className="relative">
          {/* Sliding Cards */}
          <div
            className="overflow-hidden rounded-2xl"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full shrink-0 px-1">
                  <div className="bg-[#FAF8F5] p-8 md:p-12 border border-[#EADBC8] rounded-2xl shadow-xs flex flex-col justify-between min-h-[300px]">
                    <div className="text-base sm:text-lg leading-relaxed mb-8 text-[#3A2B1C]">
                      <span className="text-4xl font-serif text-[#C4A57B] align-top leading-none mr-2">“</span>
                      {testimonial.quote}
                      <span className="text-4xl font-serif text-[#C4A57B] align-bottom leading-none ml-2">”</span>
                    </div>

                    <div className="pt-4 border-t border-[#EADBC8]/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-serif text-lg text-[#3A2B1C]">{testimonial.author}</p>
                          {testimonial.linkedin && (
                            <a
                              href={testimonial.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#C4A57B] hover:text-[#0077B5] transition inline-flex items-center"
                              aria-label={`${testimonial.author} LinkedIn profile`}
                            >
                              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                              </svg>
                            </a>
                          )}
                        </div>
                        <p className="text-xs text-neutral-600 mt-0.5">{testimonial.role}</p>
                        <p className="text-xs text-neutral-500">{testimonial.organization}</p>
                      </div>

                      <div className="text-xs text-neutral-400 self-end sm:self-center font-medium">
                        {index + 1} of {testimonials.length}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6 px-2">
            <button
              type="button"
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-[#FAF8F5] border border-[#EADBC8] text-neutral-700 hover:bg-[#EADBC8]/40 hover:text-neutral-900 transition shadow-xs cursor-pointer flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setCurrentIndex(dotIdx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    dotIdx === currentIndex ? "w-6 bg-[#C4A57B]" : "w-2 bg-[#EADBC8] hover:bg-[#C4A57B]/60"
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="p-2.5 rounded-full bg-[#FAF8F5] border border-[#EADBC8] text-neutral-700 hover:bg-[#EADBC8]/40 hover:text-neutral-900 transition shadow-xs cursor-pointer flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
