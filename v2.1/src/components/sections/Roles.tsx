"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { BASE_PATH } from "@/lib/config";

/* ── Filled SVG icons (matching published version) ── */
const coopIcons: Record<string, (fill: string) => React.ReactNode> = {
  listing: (f) => (
    <svg viewBox="0 0 24 24" width="16" height="16">
      <path d="M12 3L2 12h3v8h6v-5h2v5h6v-8h3L12 3z" fill={f} />
    </svg>
  ),
  buyer: (f) => (
    <svg viewBox="0 0 24 24" width="16" height="16">
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86s-.34 2.05-.9 2.86c.28.09.59.14.91.14zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill={f} />
    </svg>
  ),
  mortgage: (f) => (
    <svg viewBox="0 0 24 24" width="16" height="16">
      <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" fill={f} />
    </svg>
  ),
  value: (f) => (
    <svg viewBox="0 0 24 24" width="16" height="16">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" fill={f} />
    </svg>
  ),
  legal: (f) => (
    <svg viewBox="0 0 24 24" width="16" height="16">
      <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" fill={f} />
    </svg>
  ),
};

/* ── Role data (exact published content) ── */
const coopKeys = ["listing", "buyer", "mortgage", "value", "legal"] as const;
type CoopKey = (typeof coopKeys)[number];

const coopData: Record<CoopKey, { title: string; sub: string; items: string[] }> = {
  listing: { title: "Môi giới bất động sản đầu chủ (Listing Agent)", sub: "Đại diện chủ tài sản, chuẩn hoá và quản lý nguồn hàng", items: ["Mỗi listing xác thực thành công: 200.000đ", "35% hoa hồng khi giao dịch thành công"] },
  buyer: { title: "Môi giới bất động sản đầu khách (Buyer Agent)", sub: "Đại diện khách mua, tư vấn và hỗ trợ khách mua", items: ["Hoa hồng đến 40% đối với giao dịch BDS thứ cấp", "Hoa hồng tối thiểu 75% đối với giao dịch BDS sơ cấp"] },
  mortgage: { title: "Chuyên viên tư vấn khoản vay (Mortgages Agent)", sub: "Tìm kiếm & tư vấn giải pháp vay thế chấp bất động sản cho khách hàng", items: ["Giới thiệu khách vay: 20% phí dịch vụ", "Tư vấn và hỗ trợ giải ngân: 60% phí dịch vụ"] },
  value: { title: "Chuyên viên định giá (Value Agent)", sub: "Cung cấp định giá, phân tích và tư vấn giá trị tài sản", items: ["Giới thiệu khách thẩm định: 10% phí thẩm định", "Tư vấn và chốt giao dịch: 15% phí thẩm định"] },
  legal: { title: "Chuyên viên pháp lý (Legal Agent)", sub: "Thực thi dịch vụ pháp lý và thủ tục giao dịch", items: [] },
};

const nodePositions: Record<CoopKey, { top: string; left: string }> = {
  listing: { top: "6.6%", left: "50%" },
  buyer: { top: "36.6%", left: "91.1%" },
  mortgage: { top: "85%", left: "75.3%" },
  value: { top: "85%", left: "24.7%" },
  legal: { top: "36.6%", left: "8.9%" },
};

const arcPaths: Record<CoopKey, string> = {
  listing: "M 300,40 A 260,260 0 0,1 547,220",
  buyer: "M 547,220 A 260,260 0 0,1 452,510",
  mortgage: "M 452,510 A 260,260 0 0,1 148,510",
  value: "M 148,510 A 260,260 0 0,1 53,220",
  legal: "M 53,220 A 260,260 0 0,1 300,40",
};

/* Larger-radius arcs for text labels — pushes text further from the hub */
const textArcPaths: Record<CoopKey, string> = {
  listing: "M 300,10 A 290,290 0 0,1 575,205",
  buyer: "M 575,205 A 290,290 0 0,1 470,545",
  mortgage: "M 130,545 A 290,290 0 0,0 470,545",
  value: "M 130,545 A 290,290 0 0,1 25,205",
  legal: "M 25,205 A 290,290 0 0,1 300,10",
};

const nodeLabels: Record<CoopKey, string> = {
  listing: "Listing Agent",
  buyer: "Buyer Agent",
  mortgage: "Mortgages Agent",
  value: "Value Agent",
  legal: "Legal Agent",
};

const arcLabels: Record<CoopKey, string> = {
  listing: "Niêm yết tài sản",
  buyer: "Giới thiệu khách mua",
  mortgage: "Tư vấn vay",
  value: "Thẩm định giá tài sản",
  legal: "Hỗ trợ pháp lý",
};

/* ── Value props (user-modified) ── */
const valueProps = [
  {
    title: "Vai trò được phân rõ ràng",
    desc: "Được chuyên môn hóa trong từng mắt xích của vòng đời bất động sản, không chồng chéo vai trò",
    icon: (c: string) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="7" r="3" stroke={c} strokeWidth="2" />
        <path d="M9 13c-4 0-6 2-6 4v1h12v-1c0-2-2-4-6-4z" stroke={c} strokeWidth="2" strokeLinecap="round" />
        <path d="M16 11l2 2 4-4" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Công sức được ghi nhận minh bạch",
    desc: "Đóng góp được ghi nhận thông qua hệ thống & dữ liệu và phân bổ quyền lợi tương ứng",
    icon: (c: string) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l2.5 7.5H22l-6 4.5 2.5 7.5L12 17l-6.5 4.5 2.5-7.5-6-4.5h7.5z" stroke={c} strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Quyền lợi được bảo vệ",
    desc: "Được ghi nhận và bảo vệ thông qua hệ thống, tương ứng với vai trò đã được ghi nhận",
    icon: (c: string) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke={c} strokeWidth="2" />
        <path d="M9 12l2 2 4-4" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Công cụ miễn phí",
    desc: "Được truy cập 32 triệu dữ liệu bất động sản đã được số hoá, công cụ tính lãi vay, phí mua nhà,...",
    icon: (c: string) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke={c} strokeWidth="2" />
        <path d="M3 9h18M9 21V9" stroke={c} strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Trợ lý AI cá nhân",
    desc: "Được CiCi hỗ trợ on-boarding và tra cứu dữ liệu bất động sản chỉ trong 1 tin nhắn",
    icon: (c: string) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2a7 7 0 017 7v3a7 7 0 01-14 0V9a7 7 0 017-7z" stroke={c} strokeWidth="2" />
        <path d="M8 10h.01M16 10h.01M9 15c1 1 5 1 6 0" stroke={c} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Kết nối mạng lưới ngân hàng",
    desc: "Được tiếp cận hệ thống 32+ ngân hàng đối tác, tối ưu tỷ lệ giải ngân cho khách hàng, giúp tăng khả năng chốt deal",
    icon: (c: string) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 10v11M20 10v11M8 10v11M16 10v11M12 10v11" stroke={c} strokeWidth="2" />
      </svg>
    ),
  },
];

/* ── Component ── */
export default function Roles() {
  const [activeKey, setActiveKey] = useState<CoopKey>("listing");
  const [isFading, setIsFading] = useState(false);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const fadeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const switchCoop = useCallback(
    (key: CoopKey) => {
      if (key === activeKey) return;
      setIsFading(true);
      if (fadeTimer.current) clearTimeout(fadeTimer.current);
      fadeTimer.current = setTimeout(() => {
        setActiveKey(key);
        setIsFading(false);
      }, 200);
    },
    [activeKey]
  );

  // Auto-rotate every 4s (respect reduced-motion)
  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    autoRef.current = setInterval(() => {
      setActiveKey((prev) => coopKeys[(coopKeys.indexOf(prev) + 1) % coopKeys.length]);
    }, 4000);
  }, []);

  useEffect(() => {
    startAuto();
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
      if (fadeTimer.current) clearTimeout(fadeTimer.current);
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
    };
  }, [startAuto]);

  function handleNodeHover(key: CoopKey) {
    if (autoRef.current) clearInterval(autoRef.current);
    switchCoop(key);
  }

  function handleCircleLeave() {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => startAuto(), 8000);
  }

  const coop = coopData[activeKey];

  return (
    <section className="py-12 lg:py-16 bg-white" id="roles">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[50px]">
        {/* Header */}
        <h3 className="text-h3 font-extrabold mb-3 reveal">
          Agent có thể tham gia những vai trò nào?
        </h3>
        <p className="text-gray-500 mb-8 max-w-2xl leading-[1.7] reveal reveal-delay-1">
          Gia nhập C-ACN, môi giới sẽ hoạt động ở một hoặc nhiều vai trò
        </p>

        {/* ═══ COOPERATION CIRCLE (published layout) ═══ */}
        <div className="grid grid-cols-1 lg:grid-cols-[600px_1fr] gap-8 items-center mt-8 reveal reveal-delay-2">
          {/* Circle */}
          <div
            className="relative w-full max-w-[320px] sm:max-w-[450px] lg:max-w-[600px] aspect-square mx-auto"
            onMouseLeave={handleCircleLeave}
          >
            {/* SVG arcs */}
            <svg className="absolute inset-0 w-full h-full z-[2] pointer-events-none overflow-visible" viewBox="0 0 600 600" fill="none" role="img" aria-label="Sơ đồ vòng tròn hợp tác 5 vai trò Agent: Listing, Buyer, Mortgages, Value, Legal">
              <circle cx="300" cy="300" r="260" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="6 6" fill="none" opacity="0.6" />
              {coopKeys.map((key) => (
                <path
                  key={key}
                  d={arcPaths[key]}
                  stroke="var(--color-blue, #0741DA)"
                  strokeWidth={activeKey === key ? 3 : 2.25}
                  fill="none"
                  opacity={activeKey === key ? 1 : 0.18}
                  className="transition-all duration-300"
                />
              ))}
            </svg>

            {/* Arc text labels */}
            <svg className="absolute inset-0 w-full h-full z-[5] pointer-events-none overflow-visible" viewBox="0 0 600 600" fill="none">
              <defs>
                {coopKeys.map((key) => (
                  <path key={`def-${key}`} id={`textarc-${key}`} d={textArcPaths[key]} />
                ))}
              </defs>
              {coopKeys.map((key) => (
                <text
                  key={key}
                  fill={activeKey === key ? "var(--color-blue, #0741DA)" : "#6b7280"}
                  fontSize="14"
                  fontWeight={activeKey === key ? 700 : 600}
                  opacity={activeKey === key ? 1 : 0.6}
                  className="transition-all duration-300"
                >
                  <textPath
                    href={`#textarc-${key}`}
                    startOffset="50%"
                    textAnchor="middle"
                    dy={key === "mortgage" ? 20 : -14}
                  >
                    {arcLabels[key]}
                  </textPath>
                </text>
              ))}
            </svg>

            {/* Center hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] lg:w-[220px] lg:h-[220px] rounded-full bg-blue flex items-center justify-center z-[3] shadow-[0_0_0_16px_rgba(7,65,218,0.15),0_0_80px_rgba(7,65,218,0.2),0_16px_64px_rgba(7,65,218,0.25)]">
              <div className="absolute -inset-7 rounded-full border-2 border-blue/[0.12] animate-[centerPulse_3s_ease-in-out_infinite]" />
              <Image
                src={`${BASE_PATH}/assets/Logo_citics_main_w.png`}
                alt="Citics Agent"
                width={140}
                height={140}
                className="w-[70px] sm:w-[100px] lg:w-[140px] h-auto brightness-[10]"
              />
            </div>

            {/* Node pill cards */}
            {coopKeys.map((key) => {
              const pos = nodePositions[key];
              const isActive = activeKey === key;
              return (
                <button
                  key={key}
                  type="button"
                  onMouseEnter={() => handleNodeHover(key)}
                  onClick={() => handleNodeHover(key)}
                  className={`absolute z-[4] flex items-center gap-1.5 sm:gap-2.5 px-3 py-2 sm:px-5 sm:py-3 rounded-[26px] min-w-0 sm:min-w-[160px] justify-center whitespace-nowrap cursor-pointer transition-all duration-300 text-[11px] sm:text-[15px] ${
                    isActive
                      ? "bg-blue border-2 border-blue text-white shadow-[0_12px_40px_rgba(7,65,218,0.25)]"
                      : "bg-white border-2 border-gray-200 text-black shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:bg-blue hover:border-blue hover:text-white hover:shadow-[0_12px_40px_rgba(7,65,218,0.25)]"
                  }`}
                  style={{
                    top: pos.top,
                    left: pos.left,
                    transform: `translate(-50%, -50%)${isActive ? " scale(1.05)" : ""}`,
                  }}
                >
                  <span className={`w-5 h-5 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isActive ? "bg-white/20" : "bg-blue/[0.08]"
                  }`}>
                    {coopIcons[key](isActive ? "white" : "#0741DA")}
                  </span>
                  <span className="font-bold hidden sm:inline">{nodeLabels[key]}</span>
                </button>
              );
            })}
          </div>

          {/* Detail box */}
          <div className={`bg-white rounded-2xl px-5 py-5 sm:px-7 sm:py-6 border border-blue/15 lg:ml-10 min-h-[320px] sm:min-h-[280px] lg:min-h-[240px] transition-all duration-200 hover:border-blue hover:shadow-[0_12px_40px_rgba(7,65,218,0.08)] ${isFading ? "opacity-0 translate-y-1.5" : "opacity-100 translate-y-0"}`}>
            <div className="flex items-center gap-3.5 mb-3">
              <span className="w-12 h-12 rounded-2xl bg-blue flex items-center justify-center flex-shrink-0">
                <span className="scale-[1.375]">{coopIcons[activeKey]("white")}</span>
              </span>
              <h3 className="text-xl font-extrabold text-blue tracking-[-0.3px]">{coop.title}</h3>
            </div>
            <div className="text-sm text-gray-600 mb-4">{coop.sub}</div>
            <ul className="space-y-0">
              {coop.items.map((item, i) => (
                <li key={i} className="text-[15px] font-semibold text-black py-1.5 pl-6 relative leading-[1.7] before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-2 before:h-2 before:rounded-full before:bg-turquoise">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ═══ Giá trị khi tham gia C-ACN ═══ */}
        <div className="mt-20 grain relative bg-gradient-to-br from-blue to-blue-dark rounded-[24px] px-6 py-10 sm:px-10 sm:py-12 overflow-hidden reveal">
          <h3 className="text-h3 font-extrabold mb-8 text-white reveal reveal-delay-1">
            Giá trị môi giới nhận được
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10 reveal reveal-delay-2">
            {valueProps.map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/15 px-4 py-4 sm:px-6 sm:py-6 hover:bg-white/15 hover:-translate-y-0.5 transition-all flex gap-3 sm:block"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-turquoise/20 flex items-center justify-center shrink-0 sm:mb-4">
                  {item.icon("#11DAEF")}
                </div>
                <div>
                  <h4 className="font-bold text-[15px] text-white mb-1 sm:mb-2">{item.title}</h4>
                  <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes centerPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.08); opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}
