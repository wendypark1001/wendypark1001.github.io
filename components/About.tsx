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
                Melbourne-based event coordinator and Student Experience Coordinator at Scape Australia. My focus is on creating spaces where students genuinely feel a sense of belonging, transforming student living into vibrant, supportive communities through engaging social mixers, wellness initiatives, and hands-on creative workshops.
              </p>
              <p>
                I bridge the gap between creative experience design and seamless operational execution. That means taking care of everything behind the scenes, from vendor partnerships, event run sheets, and ticketing systems to mentoring student leaders and capturing live photo and video content. Having also facilitated university orientation programs and visitor experiences at iconic Melbourne landmarks, I thrive in fast-paced, high-energy settings.
              </p>
              <p>
                With a Bachelor of Commerce in Marketing and Management from the University of Melbourne, I approach every activation with a strategic lens, knowing how to build genuine excitement and community buy-in. Fluent in English, Korean, and Central Khmer, cross-cultural empathy and inclusivity sit at the heart of everything I create.
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
