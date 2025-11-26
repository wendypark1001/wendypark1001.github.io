export function Testimonials() {
  const testimonials = [
    {
      quote: (
        <>
          Wendy she demonstrated really excellent <mark className="bg-[#EBDDC8] px-1">public speaking skills</mark> and an easy ability to{" "}
          <mark className="bg-[#EBDDC8] px-1">communicate</mark> with a variety of different people. She also exhibited a natural inclination towards{" "}
          <mark className="bg-[#EBDDC8] px-1">leadership</mark> with remarkable initiative and bringing people together to collaborate on tasks.
          <br />
          She is a <mark className="bg-[#EBDDC8] px-1">reliable</mark> and <mark className="bg-[#EBDDC8] px-1">committed</mark> person and an absolute pleasure to work with.
        </>
      ),
      author: "Maree Stathoulis",
      role: "Programs and Events Coordinator",
      organization: "University of Melbourne"
    },
    {
      quote: (
        <>
          Wendy consistently demonstrates <mark className="bg-[#EBDDC8] px-1">professionalism</mark> and <mark className="bg-[#EBDDC8] px-1">insightful contributions</mark> at faculty events and student panels, representing her faculty admirably.
          Her thoughtful input, excellent communication, and commitment to supporting her peers make her an exceptional student and a <mark className="bg-[#EBDDC8] px-1">valuable asset</mark> to any group.
        </>
      ),
      author: "John Minseok Kim",
      role: "Senior Analyst Engineer",
      organization: "NAB | Master of Engineering (Software with AI)"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif italic text-center mb-4" style={{ fontSize: '2.5rem' }}>
          TESTIMONIALS
        </h2>
        <p className="text-center text-sm text-neutral-600 mb-12">
          What colleagues and mentors say
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 border border-[#EADBC8] rounded-2xl shadow-sm">
              <p className="text-base leading-relaxed mb-6 text-[#3A2B1C]">
                <span className="text-4xl font-serif text-[#C4A57B] align-top leading-none mr-2">“</span>
                {testimonial.quote}
                <span className="text-4xl font-serif text-[#C4A57B] align-bottom leading-none ml-2">”</span>
              </p>
              <div>
                <p className="font-serif text-lg text-[#3A2B1C]">{testimonial.author}</p>
                <p className="text-xs text-neutral-600">{testimonial.role}</p>
                <p className="text-xs text-neutral-600">{testimonial.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
