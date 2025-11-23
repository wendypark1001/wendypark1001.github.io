export function Testimonials() {
  const testimonials = [
    {
      quote: "Wendy demonstrated really excellent public speaking skills and an easy ability to communicate with a variety of different people. She exhibited a natural inclination towards leadership with remarkable initiative.",
      author: "Maree Stathoulis",
      role: "Programs and Events Coordinator",
      organization: "University of Melbourne"
    },
    {
      quote: "I've been continually impressed by her initiative, leadership, and commitment to enriching the student experience. Wendy consistently demonstrates professionalism and insightful contributions at faculty events and student panels.",
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
            <div key={index} className="bg-[#F5F1E8] p-8">
              <p className="text-sm leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-serif">{testimonial.author}</p>
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
