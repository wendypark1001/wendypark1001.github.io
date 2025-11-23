import { ImageWithFallback } from "./figma/ImageWithFallback";

export function SocialMedia() {
  const stats = [
    {
      number: "45",
      label: "Post Impressions",
      description: "Past 7 days"
    },
    {
      number: "85",
      label: "Profile Views",
      description: "Weekly engagement"
    },
    {
      number: "350+",
      label: "Professional Network",
      description: "LinkedIn connections"
    }
  ];

  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif italic text-center mb-4" style={{ fontSize: '2.5rem' }}>
          IMPACT & REACH
        </h2>
        <p className="text-center text-sm mb-12 text-neutral-400">
          Building meaningful connections through strategic content
        </p>

        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-serif italic mb-2" style={{ fontSize: '3rem', color: '#C4A57B' }}>
                {stat.number}
              </div>
              <div className="text-sm mb-1">{stat.label}</div>
              <div className="text-xs text-neutral-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}