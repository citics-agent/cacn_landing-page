"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const personas = [
  {
    title: "Môi giới tự do",
    text: "Tìm kiếm hệ thống hỗ trợ làm việc tự do, mở rộng cơ hội nhưng vẫn giữ quyền làm chủ giao dịch",
  },
  {
    title: "Môi giới đầu khách",
    text: "Muốn có nguồn hàng phù hợp để chốt deal nhanh với nguồn khách đã có nhu cầu thật",
  },
  {
    title: "Môi giới đầu chủ",
    text: 'Muốn bán nhanh nguồn hàng sẵn có, mở rộng mạng lưới mà không bị "kẹt deal"',
  },
  {
    title: "Chuyên viên tài chính",
    text: "Tìm kiếm cơ hội giúp khách giải ngân cho hồ sơ của khách hàng",
  },
  {
    title: "CV tài chính đã nghỉ việc",
    text: "Tận dụng kinh nghiệm sẵn có để có nguồn thu nhập linh hoạt hoặc kiếm thêm thu nhập",
  },
  {
    title: 'Môi giới "Đa-zi-năng"',
    text: "Nâng cấp giá trị dịch vụ: không chỉ bán nhà, mà hỗ trợ khách toàn diện",
  },
];

/* ── Desktop layout constants ── */
const layout = [
  { idx: 0, angle: 150, r: 360, labelPos: "above" as const },
  { idx: 1, angle: 126, r: 260, labelPos: "below" as const },
  { idx: 2, angle: 102, r: 360, labelPos: "above" as const },
  { idx: 3, angle: 78,  r: 260, labelPos: "below" as const },
  { idx: 4, angle: 54,  r: 360, labelPos: "above" as const },
  { idx: 5, angle: 30,  r: 260, labelPos: "below" as const },
];

const W = 1100;
const H = 520;
const CX = W / 2;
const CY = H + 20;
const arcRings = [140, 200, 260, 300, 360, 420];

export default function Personas() {
  const [active, setActive] = useState<number>(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isUserInteracting = useRef(false);

  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    autoRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % personas.length);
    }, 5000);
  }, []);

  useEffect(() => {
    startAuto();
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
    };
  }, [startAuto]);

  function handleSelect(i: number) {
    isUserInteracting.current = true;
    if (autoRef.current) clearInterval(autoRef.current);
    setActive(i);
  }

  function handleLeave() {
    isUserInteracting.current = false;
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => {
      if (!isUserInteracting.current) startAuto();
    }, 6000);
  }

  /* Desktop nodes */
  const nodes = layout.map((l) => {
    const rad = (l.angle * Math.PI) / 180;
    return {
      ...l,
      x: CX + l.r * Math.cos(rad),
      y: CY - l.r * Math.sin(rad),
      persona: personas[l.idx],
    };
  });

  return (
    <section className="py-12 lg:py-16 bg-white overflow-hidden" id="personas">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[50px]">
        <h2 className="text-h2 font-extrabold tracking-[-0.5px] mb-4 reveal">
          Họ là....
        </h2>
        <p className="text-gray-500 max-w-2xl mb-0 leading-[1.7] reveal reveal-delay-1">
          Gia nhập C-ACN, môi giới sẽ hoạt động ở một hoặc nhiều vai trò
        </p>

        {/* ═══ MOBILE: Semicircle + card + grid ═══ */}
        <div className="md:hidden reveal reveal-delay-2">
          {/* Detail card */}
          <div className="bg-white rounded-2xl border border-blue/15 shadow-[0_8px_32px_rgba(7,65,218,0.1)] px-5 py-4 text-center max-w-sm mx-auto mb-6">
            <h3 className="text-blue font-bold text-[17px] mb-1.5 transition-all duration-300">{personas[active].title}</h3>
            <p className="text-gray-500 text-[13px] leading-relaxed transition-all duration-300">{personas[active].text}</p>
          </div>

          {/* Semicircle — full circle hidden below, only top half visible */}
          <div className="relative w-[280px] h-[145px] mx-auto mb-8 overflow-hidden">
            {/* Full circle container, rotates so active dot is at top */}
            <div
              className="absolute w-[280px] h-[280px] left-0 top-0 transition-transform duration-700 ease-in-out"
              style={{
                transform: `rotate(${-active * (360 / personas.length)}deg)`,
                transformOrigin: "140px 140px",
              }}
            >
              {/* Circle track */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 280" fill="none">
                <circle cx="140" cy="140" r="120" stroke="#0741DA" strokeWidth="1.5" opacity="0.08" />
                <circle cx="140" cy="140" r="120" stroke="#0741DA" strokeWidth="2" opacity="0.15" strokeDasharray="2 8" />
              </svg>

              {/* 6 dots fixed on circle, evenly spaced 60° apart, first at top */}
              {personas.map((_, i) => {
                const angle = -90 + i * (360 / personas.length); // start from top (-90°)
                const rad = (angle * Math.PI) / 180;
                const r = 120;
                const cx = 140 + r * Math.cos(rad);
                const cy = 140 + r * Math.sin(rad);

                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => { handleSelect(i); setTimeout(handleLeave, 100); }}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${cx}px`, top: `${cy}px` }}
                    aria-label={personas[i].title}
                  >
                    {/* Counter-rotate dots so they stay upright */}
                    <span
                      className="block transition-transform duration-700 ease-in-out"
                      style={{ transform: `rotate(${active * (360 / personas.length)}deg)` }}
                    >
                      <span
                        className={`block rounded-full transition-all duration-500 ${
                          active === i
                            ? "w-5 h-5 bg-blue shadow-[0_0_0_5px_rgba(7,65,218,0.15)]"
                            : "w-3 h-3 bg-blue/20"
                        }`}
                      />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 6 title boxes */}
          <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto">
            {personas.map((p, i) => (
              <button
                key={i}
                type="button"
                onClick={() => { handleSelect(i); setTimeout(handleLeave, 100); }}
                className={`rounded-xl px-3 py-3 text-center text-[12px] font-semibold leading-tight transition-all duration-300 ${
                  active === i
                    ? "bg-blue text-white shadow-[0_4px_16px_rgba(7,65,218,0.25)]"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {p.title}
              </button>
            ))}
          </div>
        </div>

        {/* ═══ DESKTOP: Arc diagram ═══ */}
        <div className="relative w-full max-w-[1100px] mx-auto reveal reveal-delay-2 hidden md:block">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" fill="none">
            {arcRings.map((r, i) => (
              <path
                key={`arc-${i}`}
                d={`M ${CX - r},${CY} A ${r},${r} 0 0,1 ${CX + r},${CY}`}
                stroke="#0741DA"
                strokeWidth={r === layout[active].r ? "2" : "1.5"}
                opacity={r === layout[active].r ? 0.35 : 0.1}
                className="transition-all duration-500"
                fill="none"
              />
            ))}
            <circle cx={CX} cy={CY} r="6" fill="#0741DA" opacity="0.3" />
            {nodes.map((node, i) => (
              <line
                key={`line-${i}`}
                x1={CX} y1={CY} x2={node.x} y2={node.y}
                stroke="#0741DA" strokeWidth={active === i ? "1.5" : "1"}
                opacity={active === i ? 0.3 : 0.08}
                strokeDasharray="4 6"
                className="transition-all duration-500"
              />
            ))}
            {nodes.map((node, i) => (
              <g key={`dot-${i}`}>
                <circle cx={node.x} cy={node.y} r={active === i ? 20 : 0} fill="#0741DA" opacity={active === i ? 0.08 : 0} className="transition-all duration-500" />
                <circle cx={node.x} cy={node.y} r={active === i ? 12 : 0} fill="#0741DA" opacity={active === i ? 0.12 : 0} className="transition-all duration-500" />
                <circle cx={node.x} cy={node.y} r={active === i ? 7 : 5} fill="#0741DA" opacity={active === i ? 1 : 0.5} className="transition-all duration-300" />
              </g>
            ))}
          </svg>

          {nodes.map((node, i) => {
            const xPct = (node.x / W) * 100;
            const yPct = (node.y / H) * 100;
            const isAbove = node.labelPos === "above";

            return (
              <div
                key={i}
                className={`absolute w-[220px] text-center cursor-default rounded-xl border px-3 py-2.5 transition-[background-color,border-color,box-shadow] duration-300 ${
                  active === i
                    ? "bg-white/90 backdrop-blur-sm shadow-[0_4px_20px_rgba(7,65,218,0.1)] border-blue/10"
                    : "bg-transparent border-transparent shadow-none"
                }`}
                style={{
                  left: `${xPct}%`,
                  top: `${yPct}%`,
                  transform: isAbove
                    ? "translate(-50%, calc(-100% - 16px))"
                    : "translate(-50%, 16px)",
                }}
                onMouseEnter={() => handleSelect(i)}
                onMouseLeave={handleLeave}
                onClick={() => handleSelect(i)}
              >
                <h3 className={`font-bold leading-snug transition-all duration-300 ${
                  active === i ? "text-blue text-[16px] mb-1" : "text-gray-800 text-[14px]"
                }`}>
                  {node.persona.title}
                </h3>
                {active === i && (
                  <p className="text-gray-500 text-[13px] leading-relaxed animate-[fadeIn_0.3s_ease-out]">
                    {node.persona.text}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
