import { BarChart3, CalendarCheck, Camera, Handshake, Megaphone, Users } from "lucide-react";

export function Skills() {
  const skills = [
    {
      category: "Event Planning & Delivery",
      icon: CalendarCheck,
      items: [
        "Precinct calendar scheduling & space curation",
        "Day-of run sheet, briefing & live flow control"
      ]
    },
    {
      category: "Operations & Governance",
      icon: Handshake,
      items: [
        "Procurement, GL code tracking & finance approvals",
        "Attendance policy enforcement & U18 compliance"
      ]
    },
    {
      category: "Stakeholder & Team Leadership",
      icon: Users,
      items: [
        "Multi-stage recruitment, group interviews & onboarding",
        "Shift allocations, incident resolution & feedback loops"
      ]
    },
    {
      category: "Promotion & Lifecycle Marketing",
      icon: Megaphone,
      items: [
        "Segmented email campaigns & reminder workflows",
        "Omnichannel announcements & QR code tracking"
      ]
    },
    {
      category: "Creative Direction & Assets",
      icon: Camera,
      items: [
        "Brand-aligned print collateral & digital displays",
        "Live event documentation & recap media creation"
      ]
    },
    {
      category: "Data & Community Insights",
      icon: BarChart3,
      items: [
        "Post-event attendance analysis & attrition tracking",
        "Welfare follow-ups & resident experience feedback"
      ]
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
          <h3 className="font-serif italic text-xl mb-6">Systems &amp; Tools</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Humanitix",
              "Dayforce",
              "Trello",
              "StarRez",
              "Monday.com",
              "Webexpenses",
              "Google Workspace",
              "Canva",
              "Instagram & Meta Suite",
              "LinkedIn"
            ].map((tool, index) => (
              <span key={index} className="px-4 py-2 bg-[#F5F1E8] text-xs uppercase tracking-wider font-medium text-neutral-700">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
