import { ImageWithFallback } from "./figma/ImageWithFallback";

const profileImage = new URL("../assets/imageofmyself.jpeg", import.meta.url).href;

export function About() {
  return (
    <section id="about" className="py-16 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif italic mb-6" style={{ fontSize: '2.5rem', lineHeight: '1.2' }}>
              About
            </h2>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                Marketing & Management student at the University of Melbourne with a passion for 
                creating compelling brand stories through visual design and strategic content.
              </p>
              <p>
                I specialize in social media content creation, graphic design, and community engagement. 
                My work spans from crafting elegant promotional materials for cafes to developing 
                educational content and leading peer mentoring initiatives.
              </p>
              <p>
                With a multilingual background (English, Korean, Khmer) and international perspective, 
                I bring cultural sensitivity and creative thinking to every project.
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
