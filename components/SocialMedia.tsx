export function SocialMedia() {
  const stats = [
    {
      number: "945",
      label: "Post Impressions",
      description: "Past seven days",
      growth: "+1,502% vs prior week"
    },
    {
      number: "590",
      label: "Total Followers",
      description: "Active professional community",
      growth: null
    },
    {
      number: "108",
      label: "Profile Viewers",
      description: "Past 90 days",
      growth: "+200% quarterly growth"
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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              <div className="font-serif italic mb-2" style={{ fontSize: '3rem', color: '#C4A57B' }}>
                {stat.number}
              </div>
              <div className="text-sm font-medium mb-1 text-white">{stat.label}</div>
              <div className="text-xs text-neutral-400 mb-2">{stat.description}</div>
              {stat.growth && (
                <div className="inline-flex items-center gap-1 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-0.5 rounded-full font-medium mt-1">
                  <span>▲</span>
                  <span>{stat.growth}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}