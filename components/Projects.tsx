import { ImageWithFallback } from "./figma/ImageWithFallback";
import ceylonImage1 from "figma:asset/d76f4fce3d8e9190bdfe72b501bd266f2050c3fa.png";
import ceylonImage2 from "figma:asset/c55eec31d3d2cac6d09cc20aea65b5f8e076dec2.png";

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-[#F5F1E8]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif italic text-center mb-4" style={{ fontSize: '2.5rem' }}>
          FEATURED WORK
        </h2>
        <p className="text-center text-sm text-neutral-600 mb-16">
          A selection of marketing projects and creative campaigns
        </p>

        {/* The Ceylon - Featured Project */}
        <div className="mb-20">
          <div className="bg-white p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <h3 className="font-serif italic text-3xl mb-4">The Ceylon</h3>
                <p className="text-sm uppercase tracking-wider text-[#C4A57B] mb-4">
                  Brand Marketing & Social Media
                </p>
                <p className="text-sm leading-relaxed mb-4">
                  Remote marketing assistant for The Ceylon, a specialty cafe in Incheon, South Korea. 
                  Created visually engaging promotional materials and social media content to enhance 
                  brand presence and attract customers.
                </p>
                <div className="space-y-2 text-sm">
                  <p><span className="font-serif italic">Role:</span> Marketing Assistant (Remote)</p>
                  <p><span className="font-serif italic">Duration:</span> Jun 2024 - Apr 2025</p>
                  <p><span className="font-serif italic">Deliverables:</span> Social Media Posts, Promotional Posters, Brand Content</p>
                </div>
              </div>
              <div>
                <ImageWithFallback
                  src={ceylonImage1}
                  alt="The Ceylon - Fresh Oven-Baked Scones Promotion"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <ImageWithFallback
                  src={ceylonImage2}
                  alt="The Ceylon - Milk Tea and Bakery"
                  className="w-full h-auto"
                />
              </div>
              <div className="md:col-span-2 grid grid-cols-2 gap-6">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1559305616-3369e6f1f6e2?w=400&h=500&fit=crop"
                  alt="Ceylon cafe interior"
                  className="w-full h-full object-cover"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=500&fit=crop"
                  alt="Ceylon menu design"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* University Promotional Content */}
        <div className="mb-20">
          <div className="bg-black text-white p-8 md:p-12">
            <h3 className="font-serif italic text-3xl mb-4 text-center">University Promotional Content</h3>
            <p className="text-sm uppercase tracking-wider text-[#C4A57B] mb-8 text-center">
              Melbourne Peer Mentor Program
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-sm leading-relaxed mb-4">
                  Featured in promotional videos and marketing materials for the University of Melbourne's 
                  Melbourne Peer Mentor Program (MPMP). Participated in vox pop interviews and student 
                  panel discussions showcased across university newsletters, LinkedIn, and Instagram.
                </p>
                <div className="space-y-2 text-sm">
                  <p><span className="font-serif italic">Platforms:</span> Bachelor of Commerce Newsletter, LinkedIn, Instagram</p>
                  <p><span className="font-serif italic">Content:</span> Video Interviews, Panel Discussions, Student Stories</p>
                  <p><span className="font-serif italic">Impact:</span> Supporting first-year student transition and community building</p>
                </div>
              </div>
              <div className="space-y-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                  alt="MPMP promotional filming"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop"
                alt="Student panel"
                className="w-full h-48 object-cover"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&h=300&fit=crop"
                alt="Peer mentoring"
                className="w-full h-48 object-cover"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=300&fit=crop"
                alt="University event"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Additional Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6">
            <div className="mb-4 aspect-square bg-[#F5F1E8] flex items-center justify-center">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=400&fit=crop"
                alt="Social media campaign"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-serif italic text-xl mb-2">Social Media Campaigns</h4>
            <p className="text-xs text-neutral-600 mb-3">Content strategy & engagement</p>
            <p className="text-sm">Developing cohesive visual narratives across Instagram, creating on-brand content calendars, and driving audience engagement through storytelling.</p>
          </div>

          <div className="bg-white p-6">
            <div className="mb-4 aspect-square bg-[#F5F1E8] flex items-center justify-center">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=400&fit=crop"
                alt="Educational content"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-serif italic text-xl mb-2">Joyful English Program</h4>
            <p className="text-xs text-neutral-600 mb-3">Educational content design</p>
            <p className="text-sm">Created comprehensive learning materials and visual resources for elementary students in Cambodia, combining pedagogy with engaging design.</p>
          </div>

          <div className="bg-white p-6">
            <div className="mb-4 aspect-square bg-[#F5F1E8] flex items-center justify-center">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop"
                alt="Event materials"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-serif italic text-xl mb-2">Event Marketing</h4>
            <p className="text-xs text-neutral-600 mb-3">University engagement initiatives</p>
            <p className="text-sm">Promotional materials and communication strategies for student orientation, mentoring programs, and community engagement events.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
