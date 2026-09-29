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
                Melbourne based event and student experience coordinator. My focus is on creating welcoming spaces where students feel a genuine sense of belonging. Through social mixers and creative workshops, I bring student communities together with warmth and purpose.
              </p>
              <p>
                I balance creative programming with smooth operational delivery. That means managing ticketing and run sheets behind the scenes while guiding student leaders on the floor. Having supported university orientation and guest services at major Melbourne landmarks, I thrive in lively, people centered settings.
              </p>
              <p>
                Backed by a Bachelor of Commerce in Marketing and Management from the University of Melbourne, I plan each activation with a strategic approach to community engagement. Fluent in English, Korean, and Central Khmer, intercultural connection sits at the center of my work.
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
