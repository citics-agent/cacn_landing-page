interface CtaCompactProps {
  title: string;
  subtitle: string;
  cta?: string;
  className?: string;
}

export default function CtaCompact({ title, subtitle, cta = "Nhận tư vấn", className = "" }: CtaCompactProps) {
  return (
    <section className={`grain relative py-12 bg-blue text-center ${className}`}>
      <div className="max-w-[800px] mx-auto px-6 lg:px-[50px] relative z-10">
        <h2 className="text-h3 font-extrabold text-white mb-3 reveal max-w-[280px] sm:max-w-none mx-auto">{title}</h2>
        <p className="text-white/60 mb-8 reveal reveal-delay-1">{subtitle}</p>
        <div className="reveal reveal-delay-2">
          <a
            href="#form1"
            className="inline-block bg-amber text-blue font-bold text-sm px-8 py-4 rounded-[50px] hover:bg-amber-hover hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,191,1,0.4)] active:bg-amber-active active:translate-y-0 transition-all"
          >
            {cta}
          </a>
        </div>
      </div>
    </section>
  );
}
