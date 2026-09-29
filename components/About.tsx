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
                Melbourne based event and student experience coordinator dedicated to creating spaces where students feel a genuine sense of belonging. Through social mixers and creative workshops, connects campus communities with warmth and clear purpose.
              </p>
              <p>
                Work pairs creative programming with smooth operational delivery. Manages ticketing and run sheets behind the scenes while supporting student leaders on the floor. With a background across university orientation and visitor services at major Melbourne landmarks, thrives in lively, people centered environments.
              </p>
              <p>
                Drawing on a Bachelor of Commerce in Marketing and Management from the University of Melbourne, approaches every activation with a strategic focus on community engagement. Fluent in English, Korean, and Central Khmer, places intercultural connection at the center of all community work.
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
