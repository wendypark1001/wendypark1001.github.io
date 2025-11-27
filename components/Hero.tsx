export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-[#F5F1E8] px-4 pt-20">
      <div className="text-center max-w-4xl">
        <p className="uppercase tracking-[0.3em] text-sm mb-8">Marketing Portfolio</p>
        <h1 className="font-serif italic mb-6" style={{ fontSize: '4rem', lineHeight: '1.1', color: '#000' }}>
          WENDY PARK
        </h1>
        <div className="w-32 h-px bg-black mx-auto mb-6"></div>
        <p className="font-serif text-xl mb-4">
          Marketing Research & Content Strategy
        </p>
        <p className="text-sm text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          Turning data-driven insights into clear reports, strategic recommendations, and creative campaigns that strengthen brand connections
        </p>
      </div>
    </section>
  );
}
