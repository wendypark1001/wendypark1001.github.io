import { ImageWithFallback } from "./figma/ImageWithFallback";

const profileImage = new URL("../assets/imageofmyself.jpeg", import.meta.url).href;

export function About() {
  return (
    <section id="about" className="py-16 px-4 bg-[#3A2B1C] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif italic mb-6" style={{ fontSize: '2.5rem', lineHeight: '1.2' }}>
              About me
            </h2>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                Melbourne-based event coordinator, currently Student Experience Coordinator at Scape Australia. The role covers
                20-30 events a month across 5 buildings, from vendors, budgets and ticketing to leading a team of 40+ Student Ambassadors.
              </p>
              <p>
                Previously helped facilitate Orientation Week for 6,000+ new students and trained 900+ peer mentors at the
                University of Melbourne, alongside hosting guests at Melbourne Skydeck, which welcomes over 700 visitors a day.
              </p>
              <p>
                A Bachelor of Commerce in Marketing & Management from the University of Melbourne adds the skills to promote each event, not just run it.
                Fluent in English, Korean and Khmer, with cultural sensitivity at the heart of every community.
              </p>
            </div>
          </div>
          <div>
            <ImageWithFallback
              src={profileImage}
              alt="Wendy Park"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
