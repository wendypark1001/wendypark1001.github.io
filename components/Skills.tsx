import { BarChart3, CalendarCheck, Camera, Handshake, Megaphone, Users } from "lucide-react";

export function Skills() {
  const skills = [
    {
      category: "Event Planning & Delivery",
      icon: CalendarCheck,
      items: [
        "20-30 events a month",
        "Large-scale events (200-300 guests)",
        "Community events & activations",
        "Orientation & welcome programs"
      ]
    },
    {
      category: "Logistics & Budgeting",
      icon: Handshake,
      items: ["Vendor onboarding", "Event budgeting", "Ticketing systems", "Multi-site coordination"]
    },
    {
      category: "Team Leadership",
      icon: Users,
      items: [
        "Recruiting & onboarding",
        "Training 40+ ambassadors",
        "Rostering",
        "Peer mentoring (900+ mentors trained)"
      ]
    },
    {
      category: "Event Promotion",
      icon: Megaphone,
      items: ["Social media campaigns", "Posters & print", "Reels & video", "Copywriting"]
    },
    {
      category: "Content Creation",
      icon: Camera,
      items: ["Event photography", "Image editing", "Layout design", "Typography"]
    },
    {
      category: "Research & Reporting",
      icon: BarChart3,
      items: ["Market research", "Consumer insight", "Data interpretation", "Strategic recommendations"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif italic text-center mb-4" style={{ fontSize: '2.5rem' }}>
          EXPERTISE
        </h2>
        <p className="text-center text-sm text-neutral-600 mb-12">
          Planning, running and promoting events, backed by a marketing and management degree
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[#F5F1E8] mx-auto mb-4 flex items-center justify-center">
                  <Icon className="w-10 h-10" strokeWidth={1} />
                </div>
                <h3 className="font-serif text-lg mb-3">{skill.category}</h3>
                <ul className="space-y-1 text-xs text-neutral-600">
                  {skill.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <h3 className="font-serif italic text-xl mb-6">Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Canva", "Social Media Platforms", "Instagram", "Facebook", "LinkedIn", "Cursor AI", "Google Workspace"].map((tool, index) => (
              <span key={index} className="px-4 py-2 bg-[#F5F1E8] text-sm">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
