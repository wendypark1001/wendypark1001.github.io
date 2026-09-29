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
                Melbourne based event and student experience coordinator focused on creating welcoming spaces where students feel a genuine sense of belonging. Thoughtfully planned social mixers and creative workshops bring campus communities together with warmth and connection.
              </p>
              <p>
                A blend of creative programming and smooth operational delivery shapes every event, from ticketing and run sheets behind the scenes to guiding student leaders on the floor. Experience facilitating university orientation and guest services at major Melbourne landmarks brings confidence in lively, people centered settings.
              </p>
              <p>
                Backed by a Bachelor of Commerce in Marketing and Management from the University of Melbourne, each activation incorporates a strategic approach to community engagement. Fluent in English, Korean, and Central Khmer, intercultural connection sits at the core of every project.
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
