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
                Marketing & Management bachelor graduate at the University of Melbourne with a passion for creating compelling brand stories.
              </p>
              <p>
                Various working experience in social media content creation, graphic design, and community engagement.
                Work spans from crafting elegant promotional materials for cafes to developing educational content and leading peer mentoring initiatives.
              </p>
              <p>
                Brings cultural sensitivity and creative thinking to every project with a multilingual background (English, Korean, Khmer) and international perspective.
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
